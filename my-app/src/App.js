import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Crewneck from './pages/Apparel/Tops/crewneck';

function App() {
    return (
        <>
            <Header />
            <Crewneck />
        </>
    );
    }

export default App;