// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './components/UserList'; // Caminho para UserList
import Contact from './pages/Contact'; // Caminho para Contact
import MyForm from './pages/MyForm'; // Caminho para MyForm
import './index.css'; // Caminho para os estilos globais

function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao seu dashboard</p> {/* Texto em português */}
      </div>
      <div className="card">
        <h2>Cartão 1</h2> {/* Texto em português */}
        <p>Este é um cartão com algum conteúdo.</p> {/* Texto em português */}
      </div>
      <div className="card">
        <h2>Cartão 2</h2> {/* Texto em português */}
        <p>Este é outro cartão com algum conteúdo.</p>{' '}
        {/* Texto em português */}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          <h1>Meu Dashboard</h1> {/* Texto em português */}
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link> {/* Texto em português */}
              </li>
              <li>
                <Link to="/form">Formulário</Link> {/* Texto em português */}
              </li>
              <li>
                <Link to="/users">Usuários</Link> {/* Texto em português */}
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<MyForm />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
