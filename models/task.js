const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    des:{
        required:true,
        type:String
    },

    choosenCategory:{
        required:true,
        type:String
    },

    date:{
        required:true,
        type: Date
    }

});

const TaskCollection=mongoose.model('TaskCollection',taskSchema);

module.exports=TaskCollection;