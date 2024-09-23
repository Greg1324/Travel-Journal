// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/TravelNav';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import TravelsPage from './pages/TravelsPage';
import AddTravelPageTable from './pages/AddTravelPageTable';
import EditTravelPageTable from './pages/EditTravelPageTable';
import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';


// Define the function that renders the content in Routes, using State.
function App() {

  const [travel, setTravel] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <img src="android-chrome-192x192.png" alt="Favicon symbol" width = "100" height = "100"/>
            <h1>Travel Journal</h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/homepage" element={<TopicsPage/>} /> 
                    <Route path="/travels" element={<TravelsPage setTravel={setTravel}/>} /> 
                    <Route path="/addTravel" element={<AddTravelPageTable/>} /> 
                    <Route path="/editTravel" element={<EditTravelPageTable travel={travel}/>} /> 
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Gregory Lion</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;