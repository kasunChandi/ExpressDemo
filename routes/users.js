const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

const JWTSECROT ="123645a";

const User = require('../models/user');

router.post("/", async (req , res)  =>{
  
    try{
        let salt  = await bcrypt.genSalt(10);
        let hashPw = await bcrypt.hash(req.body.password , salt);

        let user = new User({
            username : req.body.username,           
            email : req.body.email,
            password : hashPw,
            isAdmin : req.body.isAdmin,

        });

        user = await user.save();

        return res.send({
            username : user.username,
            email : user.email,
        })
    }
    catch(e){
    return res.status(500).send(e.message);
    }

});

router.post('/auth', async(req, res) =>{

    try{
        let user  =await User.findOne({email: req.body.email});
        
        if(!user){
            return res.status(400).send("Error in login");
        }

        let valPw  = await bcrypt.compare(req.body.password , user.password);
        
        if(!valPw){
            return res.status(400).send("Error in login");
        }
       let token = jwt.sign({id: user._id , email: user.email , isAdmin :user.isAdmin}, JWTSECROT);
       res.send({token: token});
    }
    catch(e)
    {
        return res.status(500).send(e.message);
    }
});

module.exports = router;