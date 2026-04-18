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


//application level middleWare

const express = require

const app = express();

app.use((req,res,next)=>{
    console.log("time",Date.now());
    next();
});



//Router level MiddleWare

const express = require('express')
const router = express.Router();//making individual routing

router.use((req,res,next)=>{
    console.log("this is the midddleaWare for router yourself");
    next()
})

router.get('/user/:ID',(req,res)=>{

    res.send("user Profile")

})
app.use('/api',router) //start the all of this requiest going through this API