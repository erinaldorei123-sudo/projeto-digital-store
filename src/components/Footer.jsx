export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E1E1E', color: '#fff', padding: '40px 40px 20px 40px', marginTop: '50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        
        {/* Coluna 1: Sobre a Loja */}
        <div>
          <h2 style={{ color: '#C92071', margin: '0 0 15px 0', fontSize: '24px' }}>Digital Store</h2>
          <p style={{ color: '#8F8F8F', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' }}>
            A sua loja definitiva de artigos esportivos, calçados e acessórios com as melhores ofertas e entrega rápida.
          </p>
        </div>

        {/* Coluna 2: Informações */}
        <div>
          <h4 style={{ fontSize: '16px', marginBottom: '15px' }}>Informação</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: '#8F8F8F', fontSize: '14px', lineHeight: '2' }}>
            <li>Sobre a Digital Store</li>
            <li>Novidades</li>
            <li>Trabalhe conosco</li>
          </ul>
        </div>

        {/* Coluna 3: Categorias */}
        <div>
          <h4 style={{ fontSize: '16px', marginBottom: '15px' }}>Categorias</h4>
          <ul style={{ listStyle: 'none', padding: 0, color: '#8F8F8F', fontSize: '14px', lineHeight: '2' }}>
            <li>Camisetas</li>
            <li>Calça</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4 style={{ fontSize: '16px', marginBottom: '15px' }}>Contato</h4>
          <p style={{ color: '#8F8F8F', fontSize: '14px', lineHeight: '1.6' }}>
            Av. Paulista, 1000 - São Paulo, SP<br />
            (11) 99999-9999
          </p>
        </div>

      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #333', marginBottom: '20px' }} />

      <p style={{ textAlign: 'center', color: '#8F8F8F', fontSize: '12px', margin: 0 }}>
        © 2026 Digital Store - Todos os direitos reservados.
      </p>
    </footer>
  );
}