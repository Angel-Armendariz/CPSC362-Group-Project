import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Misc/About';
import Terms from './pages/Terms';
import Navbar from './Components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Terms" element={<Terms />} />
            </Routes>
        </>
    );
    }

export default App;