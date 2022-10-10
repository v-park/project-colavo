import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../src/pages/Cart/Cart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
