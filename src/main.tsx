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
import CadastroServico from './pages/CadastroServico/index.tsx';
import ListaDevs from './pages/ListaDevs/index.tsx';
import Login from './pages/Login/index.tsx';
import './index.css';
import PerfilUsuario from './pages/PerfilUsuario/index.tsx';
import VisualizarServico from './pages/VisualizarServico/index.tsx';
import CadastroUsuario from './pages/CadastroUsuario/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/lista/devs' element={<ListaDevs />} />
        <Route path='/perfil/:idUsuario' element={<PerfilUsuario />} />
        <Route path='/cadastro/usuario' element={<CadastroUsuario />} />
        <Route path='/lista/servicos' element={<ListaServicos />} />
        <Route path='/servico/:idServico' element={<VisualizarServico />} />
        <Route path='/cadastro/servicos' element={<CadastroServico />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
