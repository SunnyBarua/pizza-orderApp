const mongoose=require("mongoose")
const mongoURL="mongodb+srv://sunny:holacomoestas@cluster0.wu7cv.mongodb.net/mern-pizza?retryWrites=true&w=majority"

mongoose.connect(mongoURL,{
    useUnifiedTopoloy:true,
    useNewUrlParser:true
})
var db=mongoose.connection

db.on("connected",()=>{
    console.log("MongoDB  connection successful")
})

db.on('error',()=>{
    console.log("Mongo DB Connection failed")
})

module.exports=mongoose