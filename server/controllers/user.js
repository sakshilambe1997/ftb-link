 import User from "./../models/User.js"

 const postsignup = async(req,res)=>{
  const {name,email,password,address}=req.body;

  const user = new User({
    name,
    email,
    password,
    address
  })

  try{
    const savedUser =await user.save();
    res.json({
        sucess:true,
        message:"User Created Successfully!!",
        data: user
    })
  }
  catch(e){
    res.json({
        sucess:false,
        message:message.e,
        data:null
    })
      
  }

 }