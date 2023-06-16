import '../../styles/pages/_header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img alt="" src="images/header/logo.png" />
      </div>
      <nav className="header__controls">
        <button>About</button>
        <button>How it works</button>
        <button>Pricing</button>
      </nav>

      <div className="header__download">
        <button>Download App</button>
      </div>
    </header>
  );
}
