const express = require('express');
const router =  express.Router();
const Person = require('./../models/person');
router.post('/',async(req,res)=>{
    try{
    const data = req.body; // Assuming the request body contains the person data
    // Create a new Person to the database
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved successfully');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})
router.get('/',async(req,res)=>{
    try{
       const data = await Person.find();
       console.log("data is fetched");
       res.status(200).json(data);
    }catch(err){
     console.log(err);
     res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType =='chef'||workType=='manager'||workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);

        }
        else{
            res.status(404).json({error:'Invalid work Type'});
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
router.put('/:id',async(req,res)=>{ // id is just variable
    try{
        const personId = req.params.id;//Extract the id from the URL parameter
        const updatedPersonData = req.body;// Updated data for the person
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,// Return the updated document
            runValidators: true, // Run Mongoose validation
        });
        console.log('data updated');
        res.status(200).json(response);
        if(!response){
            res.status(500).json({error:'Internal Server Error'});

        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data delete');
        res.status(200).json({message:'person Deleted Successfully'});
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
//coment Addedg
module.exports = router;