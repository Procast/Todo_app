const db=require('../config/mongoose');

const TaskCollection=require('../models/task');


module.exports.home=function(req,res){
    TaskCollection.find({},function(err,docu){
        if(err){
            console.log("Error in fetching the document from collection");
        }
        return res.render('home',{
            title:'Home',
            taskDetail:docu
        });
        
    });

   
};