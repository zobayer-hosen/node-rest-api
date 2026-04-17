//the basics pattern of middleWare
//app.use((req,res,next)=>{
    // console.log(`time:`,Data.now());
    //next()})

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("MiddleWare 1: this always runs")
    next(); //next is important ,, cause next is not here the request is stop and the will no response from the API
})

app.use((req,res,next)=>{
    console.log("middleWare 2: This also always runs")
    next();
})
//router handler
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(8080,()=>{
    console.log("server running on port 8080")
})