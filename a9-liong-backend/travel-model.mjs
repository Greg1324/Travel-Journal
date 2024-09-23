// Models for the Travel Journal Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Unfortunately, you have failed to connnect to the MongoDB database.' });
    } else  {
        console.log('Congratulations! You have successfully connected to the MongoDB database!.');
    }
});

// SCHEMA: Define the collection's schema.
const travelSchema = mongoose.Schema({
	placeName:    { type: String, 
                    required: true },
    
    dateWent:     { type: Date, 
                    required: true,
                    default: Date.now,
                    min: '1900-01-01'},

    daysSpent:    { type: Number, 
                    required: true,
                    default: 1,
                    min: [1, 'Must have at least spent 1 day'] }
});

// Compile the model from the schema 
// by defining the collection name "travels".
const travels = mongoose.model('Travel', travelSchema);


// CREATE model *****************************************
const createTravel = async (placeName, dateWent, daysSpent) => {
    const travel = new travels({ 
        placeName: placeName, 
        dateWent: dateWent, 
        daysSpent: daysSpent 
    });
    return travel.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveTravels = async () => {
    const query = travels.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTravelByID = async (_id) => {
    const query = travels.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTravelById = async (_id) => {
    const result = await travels.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTravel = async (_id, placeName, dateWent, daysSpent) => {
    const result = await travels.replaceOne({_id: _id }, {
        placeName: placeName, 
        dateWent: dateWent, 
        daysSpent: daysSpent 
    });
    return { 
        _id: _id, 
        placeName: placeName, 
        dateWent: dateWent, 
        daysSpent: daysSpent 
    }
}

// EXPORT the variables for use in the controller file.
export { createTravel, retrieveTravels, retrieveTravelByID, updateTravel, deleteTravelById }