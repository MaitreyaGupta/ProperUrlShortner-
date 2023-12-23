const mongoose=require("mongoose")
const MongoDb=require("../config/mongoose1")

const Item=new mongoose.Schema({
    username:
    [
        type=String,
        require=true,
        unique=true 
    ],
    password:
    [
        type=String,
        require=true,
        unique=true
    ],
    recoveryPhoneNo:[
        type=String,
        require=true,
    ]
})

const ItemMode=mongoose.model("Item",Item)

module.exports=ItemMode;
