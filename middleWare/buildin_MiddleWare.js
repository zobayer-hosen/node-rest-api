const express = require('express')

const app = express();

app.use(express.json());//passing JSON data
app.use(express.urlencoded({extended:true}))//Form data pass
app.use(express.static('public'));


//then writing router

app.get('/login',(res,req)=>{
    res.json({message:"successfull login"})
})
app.listen(3000);