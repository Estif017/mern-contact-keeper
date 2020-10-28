const mongoose=require('mongoose')
const ContactsSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type:String,
        required: true      
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type:String
    },
    type:{
        type: String,
        default:'Personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model('contact',ContactsSchema)