const mongoose=require('mongoose')

const taskModel=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true,
        maxlength:[20,'name canot be more than 20 charactere'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})
module.exports=mongoose.model('Task',taskModel)