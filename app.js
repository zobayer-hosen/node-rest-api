const experss = require('express')//calling express package from the api
const  app = experss();//running the express and store the app variable
const port = 8080//this is the door number of server 

app.get('/',(req,res)=>{  //app.get means request comes from browser
    //res = requesting from the user
    res.send('GET request to the homepage'); // response form the server 
});

//respond to post request on the root route
app.post('/',(req,res)=>{
    res.send('Post request to the homepage');
})

//Respond to POST request on the root route
app.get('/about',(req, res)=>{
    res.send("about page");
});


//app.all('*',(req,res)=>{
   // res.status(404).send("404 -Page not found");
//});


app.listen(port,()=>{ // start the server in the existing post and give the message when it will start the server
    console.log(`Express server running at http://${port}`)
})