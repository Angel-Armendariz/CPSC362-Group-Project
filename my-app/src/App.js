import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import Lifestyle from './pages/Accessories/Lifestyle';
import All from './pages/All';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Lifestyle />} />
                <Route path='/All' element={<All />} />
            </Routes>
        </BrowserRouter>
    );
    }

export default App;