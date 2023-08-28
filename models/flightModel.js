const mongoose = require('mongoose');

const reviewSchema= new mongoose.Schema({
    username:String, 
    rating: Number, 
    content: String, 

});


const destinationSchema = new mongoose.Schema({
    airport:{
        type: String, 
        enum:['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], 
        require:true, 
    },
    arrival:{
        type: Date, 
        required:true, 
    }, 
})

const flightSchema = new mongoose.Schema({
    airline:{
        type: String, 
        enum:['American', 'Southwest', 'United'],
        required: true, 
    },
    flightNo:{
        type:Number, 
        required:true, 
        min: 10, 
        max: 9999,
    },
    departs: { 
        type:Date, 
        required:true, 
        default:() => new Date().setFullYear(new Date().getFullYear()+1),
    },
    airport: {
        type: String, 
        enum: ['AUS', 'DAL', 'LAX','SAN','SEA'],
        default:'SAN',
    },
    destinations: [destinationSchema],
    reviews:[reviewSchema], //ending reviews as subdocuments
});

const FlightModel = mongoose.model('Flight', flightSchema); 


module.exports = FlightModel; 
