import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import { NativeRouter} from 'react-router-native';

createRoot(document.getElementById('root')).render(
    <NativeRouter>
      <App />
    </NativeRouter>
  );
