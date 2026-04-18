const express = require('express')
const morgan = require('morgan');//request login

const helmet = require('helmat');//security parpas
const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

app.use(coookieParser());

app.get('/',(req,res)=>{
    res.json({message:'all middleWare are connected'})
})

app.listener(3000,(res,req)=>{
    console.log("sever started in this port")
})