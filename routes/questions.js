const express= require('express')

const router=express.Router()

const Question=require("../models/question")
const User=require("../models/user")


router.get("/",async (req,res)=>{
    try {
        const questions = await Question.find();
        res.json(questions);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
      }
});

router.post('/',async(req,res)=>{
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