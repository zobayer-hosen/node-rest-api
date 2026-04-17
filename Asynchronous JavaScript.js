//all kind of structure

const { json } = require('stream/consumers');


// collecting data from the API
async function getWeather() {
    const response = await fetch("existing API link")
    const data = await response.json(); //this is going to be jason format
    console.log(data.temperature); //collecting just temperature
}

// collecting data from the dataBase
async function loginUser(email, password){
    const user = await Database.find({email})// find email from the database
    const isMatch = await checkPassword(password,user.password);

    if(isMatch){
        console.log("login is successful");
    }
}

//File
const fs = require('fs').promises;
async function readFile() {

    async function  readFile() {
        const data = await fs.readFile('student.txt','uft8')
        console.log(data);
        
    }
    
}

//payment getway
async function bkashPayment(amount){
    const response = await fetch('loaction of the bikash api',{
        method :'POST',
        body :json.toString({amount})
    });

    const result = await response.json();

    if(result.status === 'success'){
        console.log("pyment is successful")
    }
}