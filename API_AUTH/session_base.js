const express = require('express') //import express library .this is the web framework for making web server
const session = require('express-session')//import library name express session 
const bodyParser =require('body-parser')//this is for reading userhand data from the sumiting form
const app = express(); //making object app for making route and middleWare


//parse request bodies//middleWare
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))//this is the form data which is provid by html and extend true means this data happen for every cases


//cofigure sessions
app.use(session({
    secret: "your secret key",//for session encrypt using key
    resave:false,// nothing is save when nothing is change
    saveUninitialized: false, //session save 
    cookie:{secure:process.env.NODE_ENV === "production",
        maxAge: 24*60*60*1000
    }//24 hours
}));
//sample user database 
const users = [{
    id:1,username:"zobayer",password:345678
}]

app.post('/login',(req,res)=>{
    const{username, password} = req,body;
    //find user

    const user = users.find(u=>u.username === username && u.password === password)

    if(!user){
        return res.status(401).json({message:"Invalid credentials"})
    }

    //store user information in session (excludding password)
    req.session.user={
        id :user.id,
        username:user.username
    }

    res.json({message:'Login successful', user:req.session.user})

    
})

//logput route
app.post('/login',(req,res)=>{
    res.session.destroy((err)=>{
        if(err){
            return res.status(500).json({message:"Logout failed"})
        }
        else{
            res.json({message:"logout successful"})
        }
    })
})

app.listen(8080,()=>{
    console.log('Server running on port 8080')
})

