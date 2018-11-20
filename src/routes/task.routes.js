 const express = require('express');
 const router = express.Router();
 const Task = require('../models/task');

/*router.get('/', (req,res)=>{
    //res.send('Hello ');
    res.json({
        status: 'Api works'
    });
});*/

// get all tasks
router.get('/', async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
});
// get just one task

router.get('/:id', async(req,res)=>{
    const task =await Task.findById(req.params.id);
    res.json(task);
});

// Create Tasks
router.post('/', async(req,res)=>{
    const {title, description}=req.body;
    const task= new Task({title, description});
    await task.save();
    res.json({status:'Task saved'});
});
// Update Tasks
router.put('/:id', async (req,res)=>{
    const {title, description}=req.body;
    const newTask= {title, description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    res.json({status:'Task Updated'});
    
});
// delete tasks

router.delete('/:id', async (req, res)=>{
    console.log('delete router');
    await Task.findByIdAndDelete(req.params.id);
    res.json({status:'Task Deleted'});
    
});



 module.exports=router;