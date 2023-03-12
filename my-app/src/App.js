import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import Lifestyle from './pages/Accessories/Lifestyle';
import All from './pages/All';
import Cart from './pages/Cart/Cart';
import { ShopContextProvider } from './pages/Cart/shop-context';

function App() {
    return (
    <BrowserRouter>
        <ShopContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Lifestyle />} />
                <Route path='/All' element={<All />} />
                <Route path='/Cart' element={<Cart />} />
            </Routes>
        </ShopContextProvider>
    </BrowserRouter>
    );
    }

export default App;