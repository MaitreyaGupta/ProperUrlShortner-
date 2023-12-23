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
let ItemMode
try {
  ItemMode = mongoose.model('users')
} catch (error) {
  ItemMode = mongoose.model('users',Item)
}


module.exports=ItemMode;
