const express = require('express');
const app = express();
//routing
app.get("/user/:id",(req,res,next)=>{
    const user = findUser(req.params.id);

    if(!user){
        //send user after making error
        const err = new Error("user is not found");
        err.status = 404;
        return next(err)
    }
})
//after the routing ,keep the error handler must have
app.use((err,req,res,next)=>{
    console.error(err.stack);
    if(err.status === 404){
        res.status(404).send('page is not found')
    }else{
        res.status(500).send("server have a problem")
    }

})