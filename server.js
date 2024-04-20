const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());// store in body parser
const Person  =require('./models/person');
const MenuItem = require('./models/MenuItem');
app.get('/',function(req,res){
    res.send('Welcome to my hotel...How I can help you?');
})


const personRoutes = require('./Routes/personRoutes');
app.use('/person',personRoutes);
const menuItemRoutes = require('./Routes/menuRoutes');
app.use('/menu',menuItemRoutes);

app.listen(8000,()=>{
    console.log("Listening on port number 8000");
})

