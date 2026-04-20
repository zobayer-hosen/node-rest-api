const express = require('express')

const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const JWT_SECRET = "give the jwt key";

//sample user database
const users =[
    {
        id:1,username :"zobayer",password:"password1",role:"user"
    }
]

//Login route- generate token
app.post('/login',(req,res)=>{
    const{username,password} =req.body

    const user = users.find(u=>u.username === username && u.password === password);
    if(!user){
        return res.status(401).json({message:"invalid credentials"})
    }

    //create payload for JWT
    const payload ={
        id:user.id,
        username :user.username,
        role:user.role
    }


    //sign token
    const token = jwt.sign(playload,JWT_SECRET,{expiresIn:'1h'})

    res.json({message:"Login successful", token});
})

//MiddleWare for JWT verification

const authenticateJWT = (req,res,next)=>{
    //auth header is commenly used for authentication tokens
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: 'Authorization header missing'
        })
    }
    const token = authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"token missing"});
    }
    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;
        next()
    }catch(error){
        return res.status(403).json({message:"Invalid or expired token"})
    }

}
//Protected route
app.get('/profile',authenticateJWT,(req,res)=>{
    res.json({message :"Profile accessed",user :req.user});
})

//Role based route

app.get('/admin',authenticateJWT,(req,res)=>{
    //Check if user has admin role
    if(req.user.role !== "admin"){
        return res.status(403).json({message:"Access denied :admin role requied"});
    }

    res.json({message :"Admin panel accessed"})
})

//start server 
app.listen(8080,()=>{
    console.log('Server running on port 8080')
})

