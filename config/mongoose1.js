const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Maitreya:KillerMan@cluster0.sk6ugig.mongodb.net/OperationRake",{useUnifiedTopology:true},{useNewUrlParser:true})
const connectDB=mongoose.connection
connectDB.once("open",function(req,res){
    console.log("Database is Opening")
})

 
module.exports=connectDB;
