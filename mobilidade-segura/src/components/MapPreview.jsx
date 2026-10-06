function MapPreview() {
  return (
    <section className="map-preview">
      <div className="section-container">

        <div className="map-preview-content">

          <div className="map-preview-info">

            <span>
              MAPA DE SEGURANÇA VIÁRIA
            </span>

            <h2>
              Entenda onde estão os pontos críticos
            </h2>

            <p>
              Visualize regiões com maior concentração de
              acidentes, infrações e solicitações relacionadas
              à segurança viária.
            </p>

            <a href="/mapa" className="button button-primary">
              <i className="bi bi-map"></i>
              Explorar mapa
            </a>

          </div>

          <div className="map-preview-map">

            <div className="map-demo">

              <div className="map-point point-one">
                <i className="bi bi-exclamation-triangle"></i>
              </div>

              <div className="map-point point-two">
                <i className="bi bi-exclamation-triangle"></i>
              </div>

              <div className="map-point point-three">
                <i className="bi bi-exclamation-triangle"></i>
              </div>

              <div className="map-demo-text">

                <span>
                  <i className="bi bi-map"></i>
                </span>

                <strong>
                  Mapa de segurança
                </strong>

                <small>
                  Pontos críticos da cidade
                </small>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default MapPreview
