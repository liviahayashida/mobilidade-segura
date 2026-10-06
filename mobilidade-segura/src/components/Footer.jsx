function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <strong>Mobilidade Segura</strong>

          <p>
            Informação e tecnologia para uma
            mobilidade mais segura em Indaiatuba.
          </p>
        </div>

        <div className="footer-links">
          <h3>Acesso rápido</h3>

          <a href="/">Início</a>
          <a href="/mapa">Mapa de segurança</a>
          <a href="/solicitacao">Fazer solicitação</a>
        </div>

        <div className="footer-info">
          <h3>Sobre o projeto</h3>

          <p>
            Projeto desenvolvido para o hackathon
            de mobilidade urbana.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Mobilidade Segura — Projeto demonstrativo
        </p>
      </div>
    </footer>
  )
}

export default Footer