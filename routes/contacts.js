const express=require('express')
const auth=require('../middleware/auth')
const Contacts = require('../models/Contacts')
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User')


const router = express.Router()

//@ route       GET api/contacts
//@ desc        get all users contacts
//@ acces       private
router.get('/',auth,async(req, res)=>{
    try {      
        const contacts=await Contacts.find({user: req.user.id}).sort({date:-1})
        res.send(contacts)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:'Server Error'})
    }
})

//@ route       POST api/contacts
//@ desc        create a new contact
//@ acces       private
router.post('/',[auth,[
    check('name','Name is required').not().isEmpty()
]],async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name,phone,email,type} = req.body
    try {
        const newContact=new Contacts({
            name,phone,email,type,user:req.user.id
        })
        const contact=await newContact.save()
        res.send(contact)
    } catch (er) {
        console.error(er.message);
      res.status(500).send('Server Error');
    }
})

//@ route       PUT api/contacts/:id
//@ desc        update  contact
//@ acces       private
router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;
  
    // Build contact object
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
  
    try {
      let contact = await Contacts.findById(req.params.id);
  
      if (!contact) return res.status(404).json({ msg: 'Contact not found' });
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      contact = await Contacts.findByIdAndUpdate(
        req.params.id,
        { $set: contactFields },
        { new: true }
      );
  
      res.json(contact);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });
  

//@ route       DELETE api/contacts/:id
//@ desc        delete contact
//@ acces       private
router.delete('/:id', auth, async (req, res) => {
    try {
      let contact = await Contacts.findById(req.params.id);
  
      if (!contact) return res.status(404).json({ msg: 'Contact not found' });
  
      // Make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      await Contacts.findByIdAndRemove(req.params.id);
  
      res.json({ msg: 'Contact removed' });
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router