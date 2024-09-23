import React from 'react';
import { Link } from 'react-router-dom';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { RiEditFill } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';


function Travel({ travel, onEdit, onDelete }) {
    return (
        <tr>
            <td>{travel.placeName}</td>
            <td>{travel.dateWent.slice(0,10)}</td>
            <td>{travel.daysSpent}</td>
            <td><TiDelete onClick={() => onDelete(travel._id)} /> </td>
            <td><Link to="../editTravel"> <RiEditFill onClick={() => onEdit(travel)} /> </Link></td>
            <td></td>
        </tr>
    );
}

export default Travel;