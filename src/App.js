// Importe os módulos necessários
import { BrowserRouter, Route, Link, Outlet, Routes, useRoutes } from 'react-router-dom';
import { CadastroPage } from './Pages/Cadastro';
import { Home } from './Pages/Home/Home';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/Login';
import { Card } from './Components/Card';
import { MenuLogin } from './Pages/PreMenu';
import { RedefinirSenhaPage } from './Pages/RedefinirSenha';
import { ChatSection } from './Pages/Chat';
import { FavoritosSection } from './Pages/Favoritos';
import { ContratosSection } from './Pages/Contratos';
import { ConfiguracoesSection } from './Pages/Configuracoes';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/favoritos" element={<FavoritosSection />} />
        <Route path="/contratos" element={<ContratosSection />} />
        <Route path="/configuracoes" element={<ConfiguracoesSection />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/menu" element={<MenuLogin />} />
        <Route path="/redefinirSenha" element={<RedefinirSenhaPage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;