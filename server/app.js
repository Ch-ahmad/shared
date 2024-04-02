const express = require('express');
const cookieParser = require('cookie-parser')

const app = express()

// connect to db
require('./db/connection')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

const port = process.env.PORT || 8000;

app.get('/', (req,res)=> {
    res.send('Hello World');
})

app.listen(8000, ()=> {
    console.log('Server is running');
})