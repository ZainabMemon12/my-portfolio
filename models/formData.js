const mongoose = require('mongoose')

const formSchema = mongoose.Schema ({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
})
const Form = mongoose.model('FormData', formSchema)
module.exports = Form;