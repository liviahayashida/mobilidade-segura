function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            SEGURANÇA VIÁRIA
          </span>

          <h1>
            Uma cidade mais segura
            começa com informação.
          </h1>

          <p>
            Consulte dados de segurança viária,
            encontre pontos críticos e participe
            da melhoria da mobilidade de Indaiatuba.
          </p>

          <div className="hero-actions">

            <a href="/mapa" className="button button-primary">
              <i className="bi bi-map"></i>
              Explorar mapa
            </a>

            <a href="/solicitacao" className="button button-secondary">
              <i className="bi bi-exclamation-triangle"></i>
              Fazer solicitação
            </a>

          </div>

        </div>

        <div className="hero-map">
          <div className="map-placeholder">

            <i className="bi bi-map"></i>

            <strong>
              Mapa de segurança
            </strong>

            <small>
              Consulte os pontos críticos da cidade
            </small>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero