const user=require("../models/User.model");
const generateToken=require("../utils/generateToken");

exports.register=async(req,res)=>{
  try{
    const { name,email,password}=req.body;
    const UserExists=await User.findone({email});
    if(UserExists) return res.status(400).json({
      message:"User already exits"
    });
    const user=new User.create({
      name,email,password,role
    });
    res.status(201).json({
      message:"user registered sucessfully",
      token:generateToken(user._id)
    })
  }catch(error){
    res.status(500).json({error:error.message});
  }
};