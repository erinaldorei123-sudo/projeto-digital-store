import { useParams, Link } from 'react-router-dom';

// Dados simulados do produto detalhado
const productDetail = {
  id: 1,
  name: 'Tênis K-Swiss Nike Air Max - Masculino',
  reference: 'Casual | Nike | REF:382416',
  stars: 4.7,
  reviewsCount: 90,
  price: 299.90,
  oldPrice: 499.90,
  description: 'O tênis ideal para o seu dia a dia, combinando conforto extremo, durabilidade e o design clássico da linha esportiva.',
  mainImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
  gallery: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400'
  ],
  sizes: [39, 40, 41, 42, 43]
};

export default function ProductView() {
  const { id } = useParams();

  return (
    <div style={{ padding: '30px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Migalhas de pão (Breadcrumb) */}
      <p style={{ fontSize: '14px', color: '#8f8f8f', marginBottom: '20px' }}>
        <Link to="/" style={{ color: '#8f8f8f', textDecoration: 'none' }}>Home</Link> / 
        <Link to="/products" style={{ color: '#8f8f8f', textDecoration: 'none' }}> Produtos</Link> / 
        <span style={{ color: '#474747', fontWeight: 'bold' }}> {productDetail.name}</span>
      </p>

      {/* Grid Principal do Produto */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        
        {/* Coluna Esquerda: Imagem e Galeria */}
        <div>
          <img 
            src={productDetail.mainImage} 
            alt={productDetail.name} 
            style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} 
          />
          
          <div style={{ display: 'flex', gap: '15px' }}>
            {productDetail.gallery.map((imgUrl, index) => (
              <img 
                key={index} 
                src={imgUrl} 
                alt="Miniatura" 
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px', border: '2px solid #C92071', cursor: 'pointer' }} 
              />
            ))}
          </div>
        </div>

        {/* Coluna Direita: Informações e Compra */}
        <div>
          <h2 style={{ fontSize: '28px', color: '#1e1e1e', margin: '0 0 10px 0' }}>{productDetail.name}</h2>
          <span style={{ fontSize: '12px', color: '#8f8f8f', display: 'block', marginBottom: '15px' }}>{productDetail.reference}</span>

          {/* Avaliação */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <span style={{ backgroundColor: '#F6B70A', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
              ★ {productDetail.stars}
            </span>
            <span style={{ fontSize: '13px', color: '#8f8f8f' }}>({productDetail.reviewsCount} avaliações)</span>
          </div>

          {/* Preço */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ textDecoration: 'line-through', color: '#8f8f8f', fontSize: '16px', marginRight: '10px' }}>
              R$ {productDetail.oldPrice.toFixed(2)}
            </span>
            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e1e1e' }}>
              R$ {productDetail.price.toFixed(2)}
            </span>
          </div>

          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', marginBottom: '25px' }}>
            {productDetail.description}
          </p>

          {/* Seleção de Tamanho */}
          <div style={{ marginBottom: '30px' }}>
            <strong style={{ display: 'block', fontSize: '14px', color: '#474747', marginBottom: '10px' }}>Tamanho</strong>
            <div style={{ display: 'flex', gap: '10px' }}>
              {productDetail.sizes.map((size) => (
                <button key={size} style={{ 
                  padding: '8px 16px', 
                  border: '1px solid #ccc', 
                  borderRadius: '6px', 
                  backgroundColor: size === 41 ? '#C92071' : '#fff', 
                  color: size === 41 ? '#fff' : '#474747', 
                  fontWeight: 'bold', 
                  cursor: 'pointer' 
                }}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botão de Compra */}
          <button style={{ 
            width: '100%', 
            backgroundColor: '#FFB800', 
            color: '#fff', 
            border: 'none', 
            padding: '15px', 
            borderRadius: '8px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}>
            COMPRAR
          </button>
        </div>

      </div>

    </div>
  );
}