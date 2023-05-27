import "./header.scss";

export default function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <img alt="" src="images/header/logo.png" />
      </div>
      <div className="header__controls">
        <button>About</button>
        <button>How it works</button>
        <button>Pricing</button>
      </div>

      <div className="header__download">
        <button>Download App</button>
      </div>
    </nav>
  );
}
