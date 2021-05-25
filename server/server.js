const express=require("express")
const db=require("./db")
var cors = require('cors')
const app=express()
const MongoClient=require("mongodb").MongoClient
const dotenv=require('dotenv')
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zqek5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


app.use(express.json())

const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(cors())
const Food=require("./models/foodModel");
const mongoose=require('mongoose')
const {MONGOURI}=require("./keys")

mongoose.connect(MONGOURI, {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo!!!");
  });
  mongoose.connection.on("error", (err) => {
    console.log("err connecting!!", err);
  });
const pizzaRoute=require("./routes/pizzaRoute")
const userRoute=require("./routes/userRoute")
const orderRoute=require("./routes/orderRoute")
app.get("/",(req,res)=>{
    res.send("<h1>Server is very runing</h1>")
})
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/pizzas',pizzaRoute)
app.use('/users',userRoute)
app.use('/orders',orderRoute)

app.post('/getpizzas',(req,res)=>{
    const { 
        name,
        varients,
        prices,
        category,
        image,
        description,
      } = req.body;

      if (!name || !varients || !prices || !category || !image || !description) {
        return res.status(422).json({ error: "Plaease add all the fields" });
      }
    
    const food=new Food({
        name,
        varients,
        prices,
        category,
        image,
        description,
    });
    food.save()
    .then((food)=>{
        res.json({food})
    })
    .catch((err)=>{
        console.log(err)
    })
})

const port=process.env.PORT || 5000;

app.listen(port,()=>`Server is running on port ${port}`)