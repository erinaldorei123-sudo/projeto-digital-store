import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductView from './pages/ProductView';

export default function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fixo no topo de todas as páginas */}
      <Header />

      {/* Conteúdo das páginas */}
      <main style={{ minHeight: '80vh', backgroundColor: '#f5f5f5' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}