const db=require('../config/mongoose');

const TaskCollection=require('../models/task');


module.exports.home=function(req,res){
    TaskCollection.find({},function(err,docu){
        if(err){
            console.log("Error in fetching the document from collection");
        }
        var color={
            work:'#2a9d8f',
            school:'#cb997e',
            cleaning:'#e63946',
            personal:'#001219',
            other:'#f77f00'
        }
        
        return res.render('home',{
            title:'Home',
            taskDetail:docu,
            color: color
        });
        
    });

   
};