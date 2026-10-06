function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="logo">
          <span className="logo-icon">
            <i className="bi bi-shield-check"></i>
            </span>

          <div>
            <strong>Mobilidade Segura</strong>
            <span>Indaiatuba</span>
          </div>
        </a>

        <nav className="nav">
          <a href="/">Início</a>
          <a href="/mapa">Mapa</a>
          <a href="/solicitacao">Solicitar</a>
        </nav>

        <button className="menu-button">
            <i className="bi bi-list"></i>
            </button>

      </div>
    </header>
  )
}

export default Header