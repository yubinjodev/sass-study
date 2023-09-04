import "styles/components/_hamburgermenu.scss";

import { slide as Menu } from "react-burger-menu";

export default function HamburgerMenu() {
  return (
    <Menu className="hamburgermenu" right noOverlay>
      <a id="home" className="menu-item" href="/about">
        About
      </a>
      <a id="about" className="menu-item" href="/how-it-works">
        How it works
      </a>
      <a id="pricing" className="menu-item" href="/pricing">
        Pricing
      </a>
      <a id="contact" className="menu-item" href="/blog">
        Blog
      </a>
    </Menu>
  );
}
