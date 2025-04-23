const express = require('express');
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Products = require("./db/Products");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",  // Autorise toutes les origines pour les tests, sinon tu peux spécifier ton origine ici
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true
}));


app.post('/register',async(req,resp)=>{
  let user = new User (req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result)
})

app.post('/login',async(req,resp)=>{
  if(req.body.password && req.body.email){
  let user = await User.findOne(req.body).select("-password");
  if(user)
  {
    resp.send(user);
  }else{
    resp.send({result:" No User found"});
  }
  
}else{
  resp.send({result:" No User found"});
}
})
app.post('/add',async(req,resp)=>{
    let products=new Products(req.body);
    let result = await products.save();
    resp.send(result);
})
const port =8000;



app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});



