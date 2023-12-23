
const passport=require("passport")
const keys=require("./keys")
const GooglePassport=require("passport-google-oauth20")
passport.use(new GooglePassport({
    callbackURL:"https://proper-url-shortner.onrender.com/auth/google/redirect",
    clientID:keys.google.clientId,
    clientSecret:keys.google.clientSecret

},(accesToken,refreshToken,profile,done)=>{
    console.log("Callback function has been fired")
    console.log(profile)
}))
  
