import { Link } from 'react-router-dom';

// Dados simulados dos produtos em destaque
const featuredProducts = [
  {
    id: 1,
    name: 'K-Swiss Nike Air Max - Masculino',
    category: 'Tênis',
    price: 299.90,
    oldPrice: 499.90,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
  },
  {
    id: 2,
    name: 'Tênis Puma Future Rider',
    category: 'Casual',
    price: 199.90,
    oldPrice: 299.90,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400'
  },
  {
    id: 3,
    name: 'Camisa Nike Dri-FIT',
    category: 'Roupas',
    price: 89.90,
    oldPrice: 129.90,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400'
  },
  {
    id: 4,
    name: 'Fone de Ouvido JBL Tune',
    category: 'Acessórios',
    price: 149.90,
    oldPrice: 229.90,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
  }
];

export default function Home() {
  return (
    <div style={{ padding: '30px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* 1. Banner Principal */}
      <section style={{ 
        backgroundColor: '#f5e6ec', 
        padding: '50px 40px', 
        borderRadius: '12px', 
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <span style={{ color: '#C92071', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Melhores ofertas personalizadas
          </span>
          <h2 style={{ fontSize: '40px', color: '#1e1e1e', margin: '15px 0' }}>
            Queima de estoque <br /> Nike 🔥
          </h2>
          <p style={{ color: '#666', marginBottom: '25px', maxWidth: '400px' }}>
            Aproveite os melhores descontos do ano em tênis e artigos esportivos selecionados.
          </p>
          <Link to="/products" style={{ 
            backgroundColor: '#C92071', 
            color: '#fff', 
            padding: '12px 28px', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            Ver Ofertas
          </Link>
        </div>
      </section>

      {/* 2. Seção de Produtos em Destaque */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '24px', color: '#474747', margin: 0 }}>Produtos em destaque</h3>
          <Link to="/products" style={{ color: '#C92071', textDecoration: 'none', fontWeight: 'bold' }}>
            Ver todos ➔
          </Link>
        </div>

        {/* Grelha de Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
          gap: '20px' 
        }}>
          {featuredProducts.map((product) => (
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
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} 
                />
                <span style={{ fontSize: '12px', color: '#8f8f8f', fontWeight: 'bold', display: 'block', marginTop: '10px' }}>
                  {product.category}
                </span>
                <h4 style={{ fontSize: '16px', color: '#474747', margin: '5px 0 10px 0' }}>
                  {product.name}
                </h4>
              </div>

              <div>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ textDecoration: 'line-through', color: '#8f8f8f', fontSize: '14px', marginRight: '8px' }}>
                    R$ {product.oldPrice.toFixed(2)}
                  </span>
                  <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#1e1e1e' }}>
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>

                <Link to={`/product/${product.id}`} style={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  backgroundColor: '#C92071', 
                  color: '#fff', 
                  padding: '10px', 
                  borderRadius: '6px', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}