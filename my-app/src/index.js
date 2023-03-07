import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import Header from './Components/Header/Header';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Lifestyle from './pages/Accessories/Lifestyle';
import All from './pages/All';

createRoot(document.getElementById('root')).render(
  <>      
  <App />
  </>
  );
