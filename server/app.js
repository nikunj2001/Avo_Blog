const express = require('express')
const app= express();
const mongoose = require('mongoose')
const dotenv= require('dotenv');
const User = require('./model/userSchema')
const connect = require('./db/conn')
dotenv.config({path:'./config.env'});



// require('./db/conn')
connect();
app.use(express.json());
const PORT =   process.env.PORT ;



// 


app.get('/contact',(req,res)=>{
    res.cookie("Test","Nikunj")
    res.send("Hello from Contact");
})
// app.get('/about',(req,res)=>{
//     res.send("Hello about world from the server")
// })
app.get('/signin',(req,res)=>{
    res.send("Hello from Login");
})
app.get('/signup',(req,res)=>{
    res.send("Hello from Register");
})
app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})