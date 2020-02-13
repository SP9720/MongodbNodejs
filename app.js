const express =require('express');
const app=express();
const mongoose =require('mongoose'); 
const bodyParser=require('body-parser');
const cors=require('cors');
const postRoute=require('./routes/posts.js');
const postRou=require('./routes/tab.js');
require('dotenv/config');

 app.use(cors()); 
app.use(bodyParser.json());
//import the router going to its router
app.use('/posts',postRoute);
//cors pakage is used to connect one domain to another
//connecting to database

mongoose.connect(process.env.DB_LOCAL_CONNECTION,{ useUnifiedTopology: true , useNewUrlParser: true },()=>{
    // mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true , useNewUrlParser: true },()=>{
    console.log('Connected')
});
//how to start listening server
app.listen(3000);
