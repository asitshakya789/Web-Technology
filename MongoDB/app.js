const express = require('express');
const mongoose = require('mongoose');
const url ='mongodb://localhost/firstdb';
const app = express();


mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open',()=>{
    console.log('connected...');
});

const infoRouter = require('./Routers/info');
app.use('/info',infoRouter);

app.listen(9000,()=>{
    console.log('server started');
});
