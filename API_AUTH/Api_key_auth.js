const express = require('express')

const app = express();

// memory storage for API key (use database in production level)
const apikeys = new Map([
    ['abc123',{name:'Mobile App',Permissions:['red:data']}],
    ['def456',{name :"web Client",Permissions:['read:data','write:data']}]
]);

//API key auth middleware
const authenticateApikey = (req,res,next)=>{
    const apikeys = req.headers['x-api-key'] || req.query.apikeys;

    if(!apikeys){
        return res.status(401).json({
            error: "API key i required",
            docs : "link of api keys auth"
        })
    }

    const keyData = apikeys.get(apikeys)
    if(!keyData){
        return res.status(403).json({error: "Invalid API key"});
    }

    //Attach key data to request for use in route handlers

    req.apikeys = keyData
    next()
};

//protected route using API key
app.get('/api/data', authenticateApikey,(req,res)=>{
    res.json({
        message: 'Access granted',
        client :req.apikeys.name,
        timestamp:new Date().toISOString()
    })
})

//Route to generate a new API key (protected by admin auth in real apps)

app.post('/api/keys',(req,res)=>{
    const{name, Permissions} = req.body;
    const apikey = generateApiKey();//implement your key generation logic

    apikeys.set(apikeys,{name,Permissions});
    res.status(201).json({apikeys});
})

function generateApiKey(){
    return [...Array(32)]
    .map(()=> Math.floor(Math.random()* 16).toString(16))
    .join('');
}

//start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
module.exports = {app, apikeys};