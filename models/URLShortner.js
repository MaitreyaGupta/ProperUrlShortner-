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

ItemMode=mongoose.model("ItemMode",Item)


module.exports=User;
