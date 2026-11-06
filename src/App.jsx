import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductView from './pages/ProductView';

export default function App() {
  return (
    <BrowserRouter>
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <main style={{ minHeight: '80vh', backgroundColor: '#f5f5f5' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductView />} />
        </Routes>
      </main>

      {/* Rodapé fixo na parte inferior */}
      <Footer />
    </BrowserRouter>
  );
}