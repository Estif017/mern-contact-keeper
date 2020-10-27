const express = require('express')
const { route } = require('./users')
const router = express.Router()

//@ route       GET api/auth
//@ desc        get a logged in user
//@ acces       private
router.get('/',(req, res)=>{res.send('Get Logged in user')})

//@ route       POST api/auth
//@ desc        Auth user & get tokken
//@ acces       public
router.post('/',(req, res)=>{res.send("Log in user")})

module.exports = router