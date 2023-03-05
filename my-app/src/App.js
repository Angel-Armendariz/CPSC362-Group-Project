import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Lifestyle from './pages/Accessories/Lifestyle';

function App() {
    return (
        <>
            <Header />
            <Lifestyle />
        </>
    );
    }

export default App;