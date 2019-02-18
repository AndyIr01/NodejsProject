//import modules
const express = require('express');
const app = express();

//method get
app.get('/test', (req, res)=>{
    res.end('get');
});

//method post
app.post('/oke', (req, res)=>{
    res.end('post');
});

//initalisasi port 
app.listen('8080', (e)=>{
    console.log('good one');
});