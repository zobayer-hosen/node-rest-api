const express = require('express')
const app = express();

//sample user database
const users = [
    {username: 'user1', password: 'password1'}
]

//Basic authentication middleware
const basicAuth = (req,res,next)=>{
    //get authorization header
    const authHeader= req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Basic ')){
        //if no credentials provieded request authentication
        res.setHeader('WWW-Authenticate','Baic realm ="API Authenticaiton');

        return res.status(401).json({message: "Auth is require"})
    }

    const decodedCredentials = Buffer.from(encodedCredentials,'base64').toString('uft-8')

    const [username, password] = decodedCredentials.split(':');

    //Validate credentials
    const user = user.find(u=>u.username === username && u.password === password);

    if(!user){
        res.setHeader('WWW-Authenticate','Basic realm = "API Authentication')

        return res.status(401).json({message:"Invalid credentials"})
    }
    req.user = {username:user.username}
    next()
};

//protected route

app.get('/api/data',basicAuth,(req,res)=>{
    res.json({
        message:"Data Accessed",
        user: req.user.username,
        data:{example : "Sensitive data"}
    })
})

app.listen(8080,()=>{
    console.log("Server running on port 8080")
})