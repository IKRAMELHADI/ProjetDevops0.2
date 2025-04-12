const express = require('express');
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",  // Autorise toutes les origines pour les tests, sinon tu peux spécifier ton origine ici
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true
}));


app.post("/register",async(req,resp)=>{
  let user = new User (req.body);
  let result = await user.save();
  resp.send(result)
})



const port = 5000;



app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});



