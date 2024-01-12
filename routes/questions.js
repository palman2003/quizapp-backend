const express= require('express')

const router=express.Router()

const fetchQuestion=require("../models/question")
const User=require("../models/user")


router.get("/",async (req,res)=>{
  fetchQuestion()
  .then(questionArray => {
    console.log("Fetched questions:", questionArray);
    res.json(questionArray);
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

router.post('/user',async(req,res)=>{
  const {name, email, department, score}=req.body;

  try{
    const user= await User.create({name,email,department,score});
    res.status(200).json(user);
  }
  catch(error)
  {
    console.log(error);
    res.status(400).json({error:error.message});
  }
})


module.exports=router