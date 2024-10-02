const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
//post route to add a person
router.post('/', async (req, res) => {
    try {
    const data = req.body;
    const newPerson = new Person(data);
    // Save the new person to the database using await
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
    }
    })


    //get method to get person
router.get('/', async (req, res) => {
    try {
    // Use the Mongoose model to fetch all persons from the database
    const persons = await Person.find();
    // Send the list of persons as a JSON response
    res.json(persons);
    } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });     

        //work parameter
router.get('/:workType', async (req, res) => {
    try {
    const workType = req.params.workType; 
    if(workType=='chef'|| workType=='manager'||workType=='waiter')
    {
        const response = await Person.find({ work: workType });
        console.log('response fetched');
        res.status(200).json(response);
    }
    else{
        res.status(404).json({error:'Invalid work type'});
    }
    } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
    }
    })

module.exports = router;

              