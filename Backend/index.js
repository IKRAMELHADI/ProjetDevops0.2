const express = require('express');
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());


app.post("/register",async(req,resp)=>{
  let user = new Use (req.body);
  let result = await user.save();
  resp.send(result)
})


const port = 5000;



app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});