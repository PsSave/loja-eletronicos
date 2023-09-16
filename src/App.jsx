import React from 'react';
import Ranek from './Ranek';
import Contato from './Contato';
import Produto from './Produto';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ranek />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/produto' element={<Produto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
