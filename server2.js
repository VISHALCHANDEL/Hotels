const express = require('express');
const app = express();
app.get('/',(req,res)=>{
res.send("Hii my name is Vishal Chandel");
})
app.listen(8000,()=>{
    console.log("Welcome");
})