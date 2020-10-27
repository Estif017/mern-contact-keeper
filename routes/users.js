const express = require('express')

const router = express.Router()

//@ route    post api/users
//@ desc     register auser
//@ acess    public

router.post('/',(req, res)=>{res.send('Register a user')})

module.exports = router