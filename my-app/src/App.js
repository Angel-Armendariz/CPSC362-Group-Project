import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Lifestyle from './pages/Accessories/Lifestyle';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Footer />
            <Lifestyle />
        </>
    );
    }

export default App;