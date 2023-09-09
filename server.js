const express=require('express')
const questionsRoutes=require('./routes/questions')

const mongoose=require('mongoose')
const cors = require("cors"); 

require('dotenv').config()


const app= express()


app.use(express.json());
app.use(cors());

const port=process.env.PORT || 3000

mongoose.connect(process.env.QUIZAPP_DB_URI)
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











