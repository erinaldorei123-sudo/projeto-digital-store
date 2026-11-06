import { Link } from 'react-router-dom';

// Lista de produtos para a listagem ajustada com as marcas corretas das fotos
const allProducts = [
  {
    id: 1,
    name: 'Tênis Nike Air Max - Masculino',
    category: 'Tênis',
    brand: 'Nike',
    price: 299.90,
    oldPrice: 499.90,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
  },
  {
    id: 2,
    name: 'Tênis Nike Air Force Pastel',
    category: 'Tênis',
    brand: 'Nike',
    price: 199.90,
    oldPrice: 299.90,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400'
  },
  {
    id: 3,
    name: 'Camisa Nike Dri-FIT',
    category: 'Camisetas',
    brand: 'Nike',
    price: 89.90,
    oldPrice: 129.90,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400'
  },
  {
    id: 4,
    name: 'Fone de Ouvido JBL Tune',
    category: 'Acessórios',
    brand: 'JBL',
    price: 149.90,
    oldPrice: 229.90,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
  },
  {
    id: 5,
    name: 'Tênis New Balance Sport',
    category: 'Tênis',
    brand: 'New Balance',
    price: 399.90,
    oldPrice: 599.90,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400'
  },
  {
    id: 6,
    name: 'Mochila Esportiva Nike',
    category: 'Acessórios',
    brand: 'Nike',
    price: 129.90,
    oldPrice: 179.90,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'
  }
];

export default function ProductListing() {
  return (
    <div style={{ padding: '30px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Cabeçalho da Listagem (Resultados e Ordenação) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h3 style={{ fontSize: '20px', color: '#474747', margin: 0 }}>
          Resultados para "Produtos" - <span style={{ fontWeight: 'normal', color: '#8f8f8f' }}>{allProducts.length} produtos</span>
        </h3>

        {/* Ordenar Por (Visual) */}
        <div>
          <label style={{ marginRight: '10px', fontSize: '14px', color: '#474747' }}>Ordenar por:</label>
          <select style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none' }}>
            <option>mais relevantes</option>
            <option>menor preço</option>
            <option>maior preço</option>
          </select>
        </div>
      </div>

      {/* Layout de 2 Colunas: Filtros + Lista de Produtos */}
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '30px' }}>
        
        {/* Painel Lateral de Filtros */}
        <aside style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', height: 'fit-content', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h4 style={{ fontSize: '16px', color: '#474747', marginTop: 0, marginBottom: '15px' }}>Filtrar por</h4>
          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '15px' }} />

          {/* Filtro Marca */}
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '14px', color: '#474747', marginBottom: '10px' }}>Marca</strong>
            {['Adidas', 'JBL', 'New Balance', 'Nike', 'Puma'].map((mark) => (
              <label key={mark} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#666', marginBottom: '8px', cursor: 'pointer' }}>
                <input type="checkbox" /> {mark}
              </label>
            ))}
          </div>

          {/* Filtro Categoria */}
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '14px', color: '#474747', marginBottom: '10px' }}>Categoria</strong>
            {['Esporte e Lazer', 'Casual', 'Utilitários', 'Corrida'].map((cat) => (
              <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#666', marginBottom: '8px', cursor: 'pointer' }}>
                <input type="checkbox" /> {cat}
              </label>
            ))}
          </div>

          {/* Filtro Gênero */}
          <div>
            <strong style={{ display: 'block', fontSize: '14px', color: '#474747', marginBottom: '10px' }}>Gênero</strong>
            {['Masculino', 'Feminino', 'Unissex'].map((gen) => (
              <label key={gen} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#666', marginBottom: '8px', cursor: 'pointer' }}>
                <input type="checkbox" /> {gen}
              </label>
            ))}
          </div>
        </aside>

        {/* Grelha de Produtos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {allProducts.map((product) => (
            <div key={product.id} style={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              padding: '15px', 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '170px', objectFit: 'cover', borderRadius: '6px' }} 
                />
                <span style={{ fontSize: '12px', color: '#8f8f8f', fontWeight: 'bold', display: 'block', marginTop: '10px' }}>
                  {product.category}
                </span>
                <h4 style={{ fontSize: '15px', color: '#474747', margin: '5px 0 10px 0' }}>
                  {product.name}
                </h4>
              </div>

              <div>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ textDecoration: 'line-through', color: '#8f8f8f', fontSize: '13px', marginRight: '6px' }}>
                    R$ {product.oldPrice.toFixed(2)}
                  </span>
                  <span style={{ fontWeight: 'bold', fontSize: '17px', color: '#1e1e1e' }}>
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>

                <Link to={`/product/${product.id}`} style={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  backgroundColor: '#C92071', 
                  color: '#fff', 
                  padding: '8px', 
                  borderRadius: '6px', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '13px'
                }}>
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}