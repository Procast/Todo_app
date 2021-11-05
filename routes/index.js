const express=require('express');

const router=express.Router();

const homeController=require('../controller/home_controller');

const addTaskController=require('../controller/add_task_controller')

const deleteTaskController=require('../controller/delete_task_controller');

router.get('/',homeController.home);

router.post('/add-task',addTaskController.add_task);

router.get('/delete-task',deleteTaskController.delete_task);



module.exports=router;