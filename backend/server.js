const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

const uri= process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true ,useFindAndModify:false,useCreateIndex:true,useUnifiedTopology: true},()=>{
    console.log("MongoDB database Connection established successfully")
})

// routes
const exercisesRouter= require('./routes/exercise')
const usersRouter= require('./routes/user')

app.use('/exercises',exercisesRouter)
app.use('/users',usersRouter)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})