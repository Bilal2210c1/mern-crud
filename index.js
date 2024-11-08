const express = require('express')

const app = express();
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const {DBConnection} = require('./ConfigDB/Db')

app.listen(process.env.PORT,function(){
    console.log(`Server is running on port ${process.env.PORT}`)
    DBConnection(); 
})