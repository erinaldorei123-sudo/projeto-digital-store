import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: '#ffffff', 
      padding: '20px 40px', 
      borderBottom: '1px solid #e5e5e5',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      {/* Linha superior: Logo, Busca e Links de Acesso */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#C92071', margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
          Digital Store
        </h1>
        
        <input 
          type="text" 
          placeholder="Buscar produto..." 
          style={{ 
            padding: '10px 15px', 
            borderRadius: '8px', 
            border: '1px solid #ccc', 
            width: '400px',
            outline: 'none'
          }} 
        />

        <div>
          <button style={{ 
            backgroundColor: '#C92071', 
            color: '#fff', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Entrar
          </button>
        </div>
      </div>

      {/* Linha inferior: Links de navegação do site */}
      <nav style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
        <Link to="/" style={{ color: '#C92071', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/products" style={{ color: '#474747', textDecoration: 'none' }}>Produtos</Link>
        <Link to="/products" style={{ color: '#474747', textDecoration: 'none' }}>Categorias</Link>
        <Link to="/products" style={{ color: '#474747', textDecoration: 'none' }}>Meus Pedidos</Link>
      </nav>
    </header>
  );
}