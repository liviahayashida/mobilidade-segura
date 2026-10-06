function Indicators() {
  return (
    <section className="indicators">
      <div className="section-container">

        <div className="section-title">
          <span>SEGURANÇA VIÁRIA</span>
          <h2>Indaiatuba em números</h2>
          <p>
            Acompanhe alguns dos principais indicadores
            de segurança viária da cidade.
          </p>
        </div>

        <div className="indicator-grid">

          <div className="indicator-card">
            <div className="indicator-card">
            <span className="indicator-icon">
                <i className="bi bi-car-front"></i>
            </span>

            <strong>128</strong>
            <p>Acidentes registrados</p>
            </div>
          </div>

          <div className="indicator-card">
            <div className="indicator-card">
        <span className="indicator-icon">
            <i className="bi bi-exclamation-triangle"></i>
        </span>

        <strong>24</strong>
        <p>Pontos críticos</p>
        </div>
          </div>

          <div className="indicator-card">
            <div className="indicator-card">
            <span className="indicator-icon">
                <i className="bi bi-geo-alt"></i>
            </span>

            <strong>43</strong>
            <p>Solicitações cidadãs</p>
            </div>
          </div>

          <div className="indicator-card">
            <div className="indicator-card">
        <span className="indicator-icon">
            <i className="bi bi-stoplights"></i>
        </span>

        <strong>18</strong>
        <p>Locais prioritários</p>
        </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Indicators