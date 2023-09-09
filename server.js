const express=require('express')
const questionsRoutes=require('./routes/questions')

const mongoose=require('mongoose')
const cors = require("cors"); 

require('dotenv').config()


const app= express()

const corsOptions = {
    origin: 'https://fodse-backend.onrender.com/', // Replace with your Render app URL
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
app.use(cors(corsOptions));

app.use(express.json());


const port=process.env.PORT || 3000

mongoose.connect(process.env.QUIZAPP_DB_URI, { useNewUrlParser: true })
    .then(()=>{
        app.listen(port,()=>{
            console.log(`connected to db and listening on port ${port}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/questions',questionsRoutes)











