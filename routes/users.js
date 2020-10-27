const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = express.Router()

const User = require('../models/User')

const { check, validationResult } = require('express-validator/check');

//@ route    post api/users
//@ desc     register auser
//@ acess    public

router.post('/',[
    check('name','please add name').not().isEmpty(),
    check('email','please include a valid email').isEmail(),
    check('password','Please enter a valid password with 6 or more characters').isLength({min:6})
],
async (req, res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name,email, password}=req.body
    try {
        let user= await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"User already exist"})
        }
        user = new User({name,email, password})
        const salt = await bcrypt.genSalt(10)
        user.password=await bcrypt.hash(password, salt)
        await user.save()
        
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