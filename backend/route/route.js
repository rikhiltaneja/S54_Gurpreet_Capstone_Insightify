const express = require("express");

const Router = express.Router();

const userRouter = express.Router()
const User = require('../models/user.js')


Router.use(express.json());

Router.get("/", (req, res) => {
  res.send("Route is working");
});

userRouter.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
userRouter.post('/login',async (req,res)=>{
  const newUser = await new User(req.body)
  try{
    await newUser.save()
    res.send("User created successfully")
  }catch(error){
    console.log(error)
    res.status(500).send("Internal Server Error")
  }
})
userRouter.delete('/',(req,res)=>{
  res.send("User delete is working")
})

module.exports = { Router , userRouter };
