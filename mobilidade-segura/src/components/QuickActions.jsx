function QuickActions() {
  return (
    <section className="quick-actions">
      <div className="section-container">

        <div className="section-title">
          <span>O QUE VOCÊ PROCURA?</span>

          <h2>
            Acesse os principais recursos
          </h2>

          <p>
            Encontre informações sobre segurança viária
            ou participe indicando problemas nas vias.
          </p>
        </div>

        <div className="quick-actions-grid">

          <a href="/mapa" className="quick-action-card">
            <span>
        <i className="bi bi-map"></i>
        </span>

            <div>
              <h3>Explorar o mapa</h3>
              <p>
                Consulte acidentes, pontos críticos,
                radares e outros indicadores.
              </p>
            </div>
          </a>

          <a href="/solicitacao" className="quick-action-card">
           <span>
            <i className="bi bi-exclamation-triangle"></i>
            </span>

            <div>
              <h3>Fazer uma solicitação</h3>
              <p>
                Informe problemas de sinalização,
                iluminação, vias e segurança.
              </p>
            </div>
          </a>

          <a href="/solicitacoes" className="quick-action-card">
            <span>
            <i className="bi bi-clipboard-check"></i>
            </span>

            <div>
              <h3>Acompanhar solicitação</h3>
              <p>
                Consulte o andamento de uma solicitação
                utilizando seu protocolo.
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  )
}

export default QuickActions