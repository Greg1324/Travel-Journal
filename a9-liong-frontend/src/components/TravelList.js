import React from 'react';
import Travel from './Travel';
import { Link } from 'react-router-dom';

// Change the function names and parameters 
// to fit your portfolio topic and schema.
import { MdAddCircle } from 'react-icons/md';


function TravelList({ travels, onDelete, onEdit }) {
    return (
        <table id="travels">
            <caption>Add and edit your travels here</caption>
            <thead>
                <tr>
                    <th>The place you went</th>
                    <th>The date you went</th>
                    <th>How many days you spent there</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="../addTravel"> <MdAddCircle/> </Link></th>
                </tr>
            </thead>
            <tbody>
                {travels.map((travel, i) => 
                    <Travel 
                        travel={travel} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TravelList;
