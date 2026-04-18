function validateUserCreation(req,res,next){
    const {uesrname, email, password} = req.body;
}

if(!username || username.length<3){
    return res.status(400).json({
        error:"Username must be at least 3 character"
    })
if(!email || !email.includes('@')){
    return res.status(400).json({ error: 'Valid email is required'});
}  
if(!password || password.length<6){
    return res.status(400).json({error:'Password must be at least 6 characters'});
}  

next();
}

app.post('/api/users', validateUserCreation,(req,res)=>{
    res.status(201).json({message: 'User created successfully'})
})