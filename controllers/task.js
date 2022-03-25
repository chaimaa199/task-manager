const mongoose=require('mongoose')
const  Task=require('../models/task')
const asyncWrapper =require('../midlleware/async')
const {createCostumError}=require('../errors/costum-error')
const getAllTasks=asyncWrapper( async(req,res)=>{
   
    const tasks=await Task.find({})
    res.status(200).json({tasks})
    //res.status(200).json({tasks,amount:tasks.length})
    //res.status(200).json({status:'succes',data:{tasks,nbrhits:tasks.length}})
     
})
const createTask=asyncWrapper(
            async (req,res)=>{ 
            const task= await Task.create(req.body)
            res.status(201).json({task})

    
}) 
const getTask=asyncWrapper(
    async(req,res,next)=>{
    const {id:taskID}=req.params
    const task=await Task.findOne({_id:taskID})
    if (!task) {
        return next(createCostumError(`no task with id :${taskID}`,404))
    }
    res.status(200).json({task}) 
})
const updateTask=asyncWrapper(
    async (req,res,next)=>{
   const {id:taskID}=req.params     
    const task=await Task.findByIdAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
    if (!task) {
        return next(createCostumError(`no task with id :${taskID}`,404))
        
    }
    res.status(200).json({task})
}) 
//deference between put and putch =patch ubdate item who passin pram,put replace all th documen
// const editTask=async (req,res)=>{
//     try {
//     const {id:taskID}=req.params     
//     const task=await Task.findByIdAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,overWrite:true})
//     if (!task) {
//         return res.status(404).json({msg:`no task with id :${taskID}`})
//     }
//     res.status(200).json({task})

//     } catch (error) {
//        res.status(500).json({msg:error}) 
//     }

// }
const deleteTask=asyncWrapper(
    async(req,res,next)=>{
    const {id:taskID}=req.params
    const task=await  Task.findOneAndDelete({_id:taskID})
    if (!task) {
        return next(createCostumError(`no task with id :${taskID}`,404))
    }
    res.status(200).json({task})
}) 
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
   // editTask
}