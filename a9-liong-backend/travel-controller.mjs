// Controllers for the Travel Journal Collection

import 'dotenv/config';
import express from 'express';
import * as travels from './travel-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/travels', (req,res) => { 
    travels.createTravel(
        req.body.placeName, 
        req.body.dateWent, 
        req.body.daysSpent
        )
        .then(travel => {
            res.status(201).json(travel);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The creation request sent was not valid, please try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/travels', (req, res) => {
    travels.retrieveTravels()
        .then(travel => { 
            if (travel !== null) {
                res.json(travel);
            } else {
                res.status(404).json({ Error: 'The requested travel log was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The retrieve request sent was not valid, please try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/travels/:_id', (req, res) => {
    travels.retrieveTravelByID(req.params._id)
    .then(travel => { 
        if (travel !== null) {
            res.json(travel);
        } else {
            res.status(404).json({ Error: 'The requested travel log by id was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The retrieve request by ID sent was not valid, please try again.' });
    });

});


// UPDATE controller ************************************
app.put('/travels/:_id', (req, res) => {
    travels.updateTravel(
        req.params._id, 
        req.body.placeName, 
        req.body.dateWent, 
        req.body.daysSpent
    )
    .then(travel => {
        res.json(travel);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The update request sent was not valid, please try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/travels/:_id', (req, res) => {
    travels.deleteTravelById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'The delete request sent was successful!.' });
            } else {
                res.status(404).json({ Error: 'The travel log to be deleted was not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'The delete request sent was not valid, please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});