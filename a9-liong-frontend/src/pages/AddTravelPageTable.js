import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTravelPageTable = () => {

    const [placeName, setPlace] = useState('');
    const [dateWent, setDate] = useState('');
    const [daysSpent, setDays] = useState('');
    
    const redirect = useNavigate();

    const addTravel = async () => {
        const newTravel = { placeName, dateWent, daysSpent };
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTravel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You have successfully added a travel to your journal!`);
        } else {
            alert(`Unfortunately, your travel cannot be added since it is invalid = ${response.status}`);
        }
        redirect("/travels");
    };


    return (
        <>
        <article>
            <h2>Add a travel</h2>
            <p>Add one of your travels to the journal.</p>
            
            <table id="travels">
                <caption>Which travel are you adding?</caption>
                <thead>
                    <tr>
                        <th>Place name</th>
                        <th>Date</th>
                        <th>Days Spent</th>
                        <th>Commit</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="place"></label>
                        <input
                            type="text"
                            placeholder="Name of the place traveled"
                            value={placeName}
                            onChange={e => setPlace(e.target.value)} 
                            id="place" />
                    </td>

                    <td><label for="time"></label>
                        <input
                            type="date"
                            value={dateWent}
                            placeholder="The date you traveled"
                            onChange={e => setDate(e.target.value)} 
                            id="time" />
                    </td>

                    <td><label for="days"></label>
                        <input
                            type="number"
                            placeholder="Days spent"
                            value={daysSpent}
                            onChange={e => setDays(e.target.value)} 
                            id="days" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addTravel}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTravelPageTable;