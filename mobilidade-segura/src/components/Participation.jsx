function Participation() {
  return (
    <section className="participation">
      <div className="section-container">

        <div className="participation-content">

          <div className="participation-icon">
        <i className="bi bi-exclamation-triangle"></i>
        </div>

        <div className="participation-info">
        <span>PARTICIPE DA SEGURANÇA DA CIDADE</span>

            <h2>
              Viu um problema na via?
            </h2>

            <p>
              Informe problemas como falta de sinalização,
              iluminação, condições da via, velocidade
              excessiva ou outros riscos para a segurança.
            </p>

            <a
              href="/solicitacao"
              className="button button-primary"
            >
              Fazer uma solicitação
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Participation