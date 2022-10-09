import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Menu from './pages/Menu/Menu';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
