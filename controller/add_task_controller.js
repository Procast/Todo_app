const db=require('../config/mongoose');

const TaskCollection=require('../models/task');


module.exports.add_task=function(req,res){
    console.log(req.body);
    let dateNeeded=req.body.date;

    TaskCollection.create({
        des:req.body.des,
        choosenCategory:req.body.choosenCategory,
        date:dateNeeded
    },function(err,newTask){
        if(err){
            console.log("error in adding fields in collection");
            return;
        }
        console.log(newTask);
        return res.redirect('back');
    });
    
    
};