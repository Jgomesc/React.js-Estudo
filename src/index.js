import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/pages/App';



import VariavelEstado from '../src/componentes/VariavelEstado'
import Efeito from '../src/componentes/Efeito'
import Renderizacao from './pages/Renderizacao';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/efeito' element={<Efeito />} />
        <Route path='/variavelestado' element={<VariavelEstado/>} />
        <Route path='/renderizacao' element={<Renderizacao />} />
       
      

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);











