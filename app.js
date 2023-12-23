const dotenv=require("dotenv").config
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const express=require("express");
const session=require("express-session")
const MongoDB=require("./config/mongoose1")
const mongoose=require("mongoose");
const passport=require("passport")
const User=require("./models/UserConfig")
const LocalAuth=require("passport-google").Strategy
const GooglePassport=require("passport-google-oauth20")
const keys=require("./config/keys")
const passportSetup=require("./config/passportRoute")
const shortUrl=require("./models/URLShortner")
app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(passport.initialize());
app.use(urlencoded({extended:false}))
app.use(session({secret:"secret"},{resave:false},{saveUninitialized:true}));


 



app.listen(8080,function(req,res){
    console.log("Url Shortner is listening")
})
app.get("/",function(req,res){
 res.render("Home");
})
app.get(8080,function(req,res){
    res.render("Home");
})
app.post("/",async function(req,res){
    try
    {
     const check=await User.findOne({username:req.body.Name})
     if(check.password===req.body.Password)
     {
        res.render("URLShortnerFirstTime")
     }
     else
     {
        res.send("Wrong information")
     }
    }
    catch{
        res.send("Wrong details")
    }
})
 
app.post("/SignUpForm",function(req,res){
    const User1={
        username:req.body.Name,
        password:req.body.Password,
        recoveryPhoneNo:req.body.Phone
    }
    User.insertMany([User1])
    res.redirect("SignUpForm");
})

app.get("/SignUpForm",function(req,res){
    res.render("SignUpForm");
})

app.get("/google",passport.authenticate('google',{
    scope:['profile'],
}))

passport.get("/auth/google/redirect",async function(req,res){
 res.render("UrlShortnerFirstTime")
})

app.get("/UrlShortner",async function(req,res){
    const shortUrls=await shortUrl.find()
    res.render("UrlShortner",{shortUrls:shortUrls});
})

app.post("/UrlShortner",async function(req,res){
    await shortUrl.create({full:req.body.fullUrl})
    res.redirect("UrlShortner")
})

app.get('/:shortUrls',async function(req,res){
    const  short2=req.params.shortUrls
   const short1=await shortUrl.findOne({short: short2})
   if(short1==null){
    return res.send("Not a valid Url please press back")
  }
  else
  {
    short1.clicks++,
    short1.save(),

    res.redirect(short1.full)
  }
})
