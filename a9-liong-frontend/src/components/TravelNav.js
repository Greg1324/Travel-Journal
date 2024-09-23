import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function TravelNav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../homepage">Web Dev Topics</Link>
        <Link to="../travels">Travel Journal</Link>
    </nav>
  );
}

export default TravelNav;
