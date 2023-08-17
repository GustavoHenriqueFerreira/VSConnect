import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/index.tsx';
import Home from './pages/Home/index.tsx';
import ListaServicos from './pages/ListaServicos/index.tsx';
import Cadastro from './pages/Cadastro/index.tsx';
import CadastroServico from './pages/CadastroServico/index.tsx';
import ListaDevs from './pages/ListaDevs/index.tsx';
import Login from './pages/Login/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/VSConnect' element={<Home />} />
        <Route path='/VSConnect/lista/servicos' element={<ListaServicos />} />
        <Route path='/VSConnect/cadastro/usuario' element={<Cadastro />} />
        <Route path='/VSConnect/cadastro/servicos' element={<CadastroServico />} />
        <Route path='/VSConnect/lista/devs' element={<ListaDevs />} />
        <Route path='/VSConnect/login' element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
