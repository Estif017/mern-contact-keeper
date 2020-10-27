const express=require('express')
const router = express.Router()

//@ route       GET api/contacts
//@ desc        get all users contacts
//@ acces       private
router.get('/',(req, res)=>{res.send('getting contacts')})

//@ route       POST api/contacts
//@ desc        create a new contact
//@ acces       public
router.post('/',(req, res)=>{res.send('create contacts')})

//@ route       PUT api/contacts/:id
//@ desc        update  contact
//@ acces       private
router.put('/:id',(req, res)=>res.send('update contact'))

//@ route       DELETE api/contacts/:id
//@ desc        delete contact
//@ acces       private
router.delete('/:id',(req,res)=>res.send('delete contact'))

module.exports = router