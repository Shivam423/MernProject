const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(require('./router/auth'));



// app.get("/contact",(req,res)=>{
//     res.send("Hello from the contact page");
// });

// app.get("/signin",(req,res)=>{
//     res.send("Hello login from the server");
// });

// app.get("/signup",(req,res)=>{
//     res.send("Hello Registration from the server");
// });

// step heroku
if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT,()=>{
    console.log(`Server is running at the port no ${PORT}`);
})