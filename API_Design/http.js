const express = require('express');
const app = express();

//Middleware for parsing JSON
app.use(express.json());

let users = [
    {id:1,name:"Zobayer Hosen",email:"zobayer@gmail.com"},
    {id:2,name:"ibrahim",email:"ibrahim@gmail.com"}
];

//Get -Retrieve a specfic user--
app.get('/api/users',(req,res)=>{
    res.json(users);
});

//get-Retrives a specific user
app.get('/api/users/:id',(req,res)=>{
  const user = users.find(u =>u.id === parseInt(req.params.id))
  if(!user) return res.status(404).json({message:"user not found"})

  res.json(user)  
})

//creating a new user
app.post('/api/users',(req,res)=>{
    const newUser = {
        id:users.length +1,
        name : req.body.name,
        email:req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

//PUT -Update a user completely
app.put('/api/users/:id',(req,res)=>{
    const user = users.find(u=>u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message:'User not found'});

    user.name = req.body.name;
    user.email = req.body.email;

    res.json(user);
})

//Delete -remove a user
app.delete('/api/users/:id',(req,res)=>{
    const userIndex = user.findIndex(u=>u.id === parseInt(req.params.id));
    if(userIndex === -1) return res.status(404).json({message:"user not found"});

    const deletedUser = users.splice(userIndex,1);
    res.json(deletedUser[0]);
})
app.listen(8081,()=>{
    console.log('Rest API server runnig on port 8080');
})