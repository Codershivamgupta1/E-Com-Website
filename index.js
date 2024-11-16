import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import { CartProvider } from './CustomCart';
import Cart from './Cart';
import Men from './Men';
import Women from './Women';
import Kid from './Kid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/Men" element={<Men/>}/>
    <Route path="/Women" element={<Women/>}/>
    <Route path="/Kid" element={<Kid/>}/>
</Routes>
</BrowserRouter>
</CartProvider>
);

