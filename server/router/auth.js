const express = require('express')
const router = express.Router();
require('../db/conn')
const User = require('../model/userSchema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
router.get('/',(req,res)=>{
    res.send("Hello from  router ");
})
const Authenticate = require('../middleware/authenticate')
// Using promises
// router.post('/register',async(req,res)=>{
//         const {name,email,phone,work,password,cpassword}=req.body

//         if(!name||!email||!phone||!work||!password||!cpassword){
//             return  res.status(422).json({error:"Fill the fileds properly"}) ;
//         } 
//         User.findOne({email}).then((userExist)=>{
//             if(userExist){
//             return  res.status(422).json({error:"Email already exist"}) ;
//             }
//         })
//         const user = new User({name,email,phone,work,password,cpassword})
//         user.save().then(()=>{
//            return res.status(201).json({message:"user registered successfully"})
//         }).catch((err)=>res.status(500).json({error:"Failed registered"})).catch((err)=>{
//     console.log(err)
// })
// })

// Using async await
  
router.post('/register',async(req,res)=>{
        const {name,email,phone,work,password,cpassword}=req.body

        if(!name||!email||!phone||!work||!password||!cpassword){
            return  res.status(422).json({error:"Fill the fileds properly"}) ;
        } 
        try {
           const userExist= await User.findOne({email});
           if(userExist){
            return  res.status(422).json({error:"Email already exist"}) ;
            }else if(password !== cpassword){
                return res.status(422).json({error:"Password mismatched"})
            }else{
 const user = new User({name,email,phone,work,password,cpassword})

        const userRegister  = await user.save();
        if(userRegister){
           return res.status(201).json({message:"user registered successfully"})
        }
            }
       
        } catch (err) {
            console.log(err)
        }
 
})

// Sign In


router.post('/signin',async(req,res)=>{
    
    try {
        let token;
        const {email,password}=req.body;
        if( !email|| !password){
            return  res.status(400).json({error:"No field should be empty"}) ;
        }
       const userLogin= await User.findOne({email});
      
      if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password);
                 token = await userLogin.generateAuthToken();
                 console.log(token);
                 res.cookie('jwtoken',token,{
                     espires:new Date(Date.now()+25892000000),
                     httpOnly:true
                 })
       if(!isMatch){
       res.status(400).json({error:"Invalid credentials"})
       }else{
       res.json({message:"User Signin successfully"})

       }
      }else{
       res.status(400).json({error:"Invalid credentials"})

      }
    } catch (error) {
         
    }
    
    res.json({message:"Awesome"})
})


router.get('/about',Authenticate,(req,res)=>{
    console.log("HEllo my About");
    res.send(req.rootUser);
})


module.exports = router