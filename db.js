const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hotels');
const db = mongoose.connection;
db.on('connected',()=>{
    console.log('Mongodb is connected');
})
db.on('error',(err)=>{
    console.log("MongoDB connection error:",err);

})
db.on('disconnected',()=>{
    console.log('Mongodb is disonnected');       
})
module.exports = db;
