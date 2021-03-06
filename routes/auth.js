const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth=require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User')

const router = express.Router()

//@ route       GET api/auth
//@ desc        get a logged in user
//@ acces       private
router.get('/',auth,async (req, res)=>{
    try {
        const user=await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:'Server Error'})
    }
})

//@ route       POST api/auth
//@ desc        Auth user & get tokken
//@ acces       public
router.post('/',[
    check('email','please incluede a valid email').isEmail(),
    check('password','password is required').exists()
],
 async(req, res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email,password}=req.body
    try {
        let user=await User.findOne({email})
        
        if(!user){
            return res.status(400).json({msg:"Invalid credentials"})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({msg:'Invalid credentials'})
        }

        
        const payload={
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,
            config.get('jwtSecret'),{expiresIn:36000},(err,token)=>{
                if(err)throw err
                res.json({token})
            })

    } catch (error) {
        console.log(error.message);
        res.status(500).send('server error')
    }
})

module.exports = router