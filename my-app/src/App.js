import React from 'react';
import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
            </Routes>
        </>
    );
    }

export default App;