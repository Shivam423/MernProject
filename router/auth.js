const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
const Authenticate = require('../middleware/authenticate');



// router.post('/register',(req,res)=>{
//    const {name,email,phone,work,password,cpassword} = req.body;

//    if(!name || !email || !phone || !work || !password || !cpassword){
//        return res.status(422).json({error:"Plz filled the field properly"});
//    }

//    User.findOne({email:email})
//    .then((userExist)=>{
//        if(userExist){
//            return res.status(422).json({error:"email has already exist"})
//        }
//        const user = new User({name,email,phone,work,password,cpassword});

//        user.save().then(()=>{
//            res.status(201).json({message:"user registered successfully"})
//        }).catch((err)=> res.status(500).json({err:"Failed to registration"}));
//    }).catch(err => {console.log(err);});

// })

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "email has already exist" })
        }
        else if (password != cpassword) {
            return res.status(400).json({ error: "password is not matching" })
        }
        const user = new User({ name, email, phone, work, password, cpassword });

        const userRegister = await user.save();
        console.log(userRegister);
        res.status(201).json({ message: "user registered successfully" });

    }

    catch (error) {
        console.log(error);
    }

})

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body
        console.log(req.body);

        if (!email || !password) {
            res.status(400).json({ error: "plz filled the data" })
        }

        const userdata = await User.findOne({ email: email });
        if (userdata) {
            const isMatch = await bcrypt.compare(password, userdata.password)
            token = await userdata.generateAuthToken();
            console.log(token);

            res.cookie('jwtoken',token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials" })
            }
            else {
                res.status(200).json({ message: "user login successfully" })
            }
        }
        else {
            res.status(400).json({ error: "invalid credentials" })
        }


    } catch (err) {
        console.log(err);
    }
})

router.get("/about",Authenticate,(req,res)=>{
    console.log("Hello my about");
    res.send(req.rootUser);
})

router.post("/contact",Authenticate,async(req,res)=>{
    try {
        const {name,email,phone,message} = req.body;

        if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"plz filled the field"})
        }

        const userContact = await User.findOne({_id:req.userID});
        console.log(`The userconact ${userContact}`)

        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message);
            console.log(`userMessage ${userMessage}`)
            const data = await userContact.save();
            res.send(data);
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/getdata",Authenticate,(req,res)=>{
    res.send(req.rootUser);
})

router.get("/logout",(req,res)=>{
    console.log("logout");
    res.clearCookie("jwtoken",{path:"/"});
    res.status(200).send('User logout')
})
module.exports = router;