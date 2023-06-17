import "../../styles/pages/_footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
    faPhone, faEnvelope, fa0
  } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__main__logo">
            <img alt="" src="/images/header/logo.png"/>
        </div>
        <div className="footer__main__title">
          You hate returns. We love them! We pick up right from your doorstep.
        </div>
        <div className="footer__main__social">
                <FontAwesomeIcon id="icon" icon={faFacebookF} />
                <FontAwesomeIcon id="icon" icon={faTwitter} />
                <FontAwesomeIcon id="icon" icon={faInstagram} />
                <FontAwesomeIcon id="icon" icon={faLinkedin} />
        </div>
      </div>
      <div className="footer__map">
        <div className="footer__map__title">Company</div>
        <ul className="footer__map__list">
          <li>About</li>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Service Areas</li>
          <li>In the News</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer__support">
        <div className="footer__support__title">Support</div>
        <ul className="footer__support__list">
          <li>FAQ</li>
          <li><span><FontAwesomeIcon id="icon" icon={faPhone} /></span>(888) 787 - 3027</li>
          <li><span><FontAwesomeIcon id="icon" icon={faEnvelope} /></span>support@returnqueen.com</li>
        </ul>
      </div>
      
    </footer>
  );
}
