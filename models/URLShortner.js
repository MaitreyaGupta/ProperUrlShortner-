const { url } = require("inspector")
const mongoose=require("mongoose")
const shortId=require("short-id")
shortId.generate()


const shortUrl=new mongoose.Schema({
    full:{
        type:String,
        require:true,
    },
    short:{
        type:String,
        require:true,
        default:shortId.generate,
    },
    clicks:{
        type:Number,
        require:true,
        default:0,
    }
},{strict:false})
mongoose.models = {}

shortUrlModel=mongoose.model("shortUrlModel",shortUrl)

module.exports=shortUrlModel
