const db=require('../config/mongoose');

const TaskCollection=require('../models/task');

module.exports.delete_task=function(req,res){

    console.log(req.query);
    let id=req.query.id;
    
    TaskCollection.findByIdAndDelete(id,function(err){
        if (err){
            console.log("error in deleting the doc");
            return;
        }

        return res.redirect('back');
    });
}