import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTravelPageTable = ({ travel }) => {
 
    const [placeName, setPlace] = useState(travel.placeName);
    const [dateWent, setDate] = useState(travel.dateWent.slice(0,10));
    const [daysSpent, setDays] = useState(travel.daysSpent);
    
    const redirect = useNavigate();

    const editTravel = async () => {
        const response = await fetch(`/travels/${travel._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                placeName: placeName, 
                dateWent: dateWent, 
                daysSpent: daysSpent
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You have successfully edited a travel to your journal!`);
        } else {
            const errMessage = await response.json();
            alert(`Unfortunately, your travel cannot be edited since it your request is invalid ${response.status}. ${errMessage.Error}`);
        }
        redirect("/travels");
    }

    return (
        <>
        <article>
        <h2>Edit a travel</h2>
            <p>Edit one of the rows of your travel journal.</p>
            
            <table id="travels">
                <caption>Which travel are you editing?</caption>
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
                            onClick={editTravel}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTravelPageTable;