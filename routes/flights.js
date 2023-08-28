const express = require('express');
const router = express.Router();
const FlightModel = require('../models/flightModel');


//route display list 
router.get('flights', async(req,res)=>{
    try{
        const flights= await FlightModel.find({});
        res.render('flights/index', { flights });
    }catch (err){
        console.error(err);
        res.status(500).send('Server Error'); 
    }
})

//Route to display flights
router.get('New',(req,res) => {
    res.render('New'); 
});

//Route handle flight
router.post('/flights', async (req,res)=>{
    try{
        const{ airline, flightNo, departs, airport, destinations }=req.body;
        const flight = new FlightModel({airline, flightNo, departs, airport });

        destinations.forEach(dest => {
            flight.destinations.push({
                airport: dest.destinationAirport, 
                arrival: new Date(dest.arrivalDateTime), 
            });
        });
        await flight.save();
        res.redirect('/flights'); 
    }catch (err){
        console.error(err);
        res.status(500).send('server Error'); 
    }
}); 


module.exports = router; 
