// Importe os módulos necessários
import { BrowserRouter, Route, Link, Outlet, Routes, useRoutes } from 'react-router-dom';
import { CadastroPage } from './Pages/Cadastro';
import { Home } from './Pages/Home/Home';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/Login';
import { Card } from './Components/Card';
import { MenuLogin } from './Pages/PreMenu';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/menu" element={<MenuLogin />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;