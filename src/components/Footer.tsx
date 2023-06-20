import "styles/pages/_footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__main__logo">
          <img alt="" src="/images/header/logo.png" />
        </div>
        <div className="footer__main__title">
          You hate returns. We love them! We pick up right from your doorstep.
        </div>
        <ul className="footer__main__social">
          <li><a href="https://www.facebook.com/return.queenRQ/" target="_blank"><FontAwesomeIcon id="facebook_icon" icon={faFacebookF} /></a></li>
          <li><a href="https://twitter.com/returnqueen_" target="_blank"><FontAwesomeIcon id="twitter_icon" icon={faTwitter} /></a></li>
          <li><a href="https://www.instagram.com/return.queen/" target="_blank"><FontAwesomeIcon id="ig_icon" icon={faInstagram} /></a></li>
          <li><a href="https://www.linkedin.com/company/returnqueen/" target="_blank"><FontAwesomeIcon id="linkedin_icon" icon={faLinkedin} /></a></li>
        </ul>
      </div>
      <div className="footer__map">
        <div className="footer__map__title">Company</div>
        <ul className="footer__map__list">
          <li><a href="/about">About</a></li>
          <li><a href="/how-it-works">How it works</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/service-areas">Service Areas</a></li>
          <li><a href="/in-the-news">In the News</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div className="footer__support">
        <div className="footer__support__title">Support</div>
        <ul className="footer__support__list">
          <li>FAQ</li>
          <li>
            <span>
              <FontAwesomeIcon id="phone_icon" icon={faPhone} />
            </span>
            (888) 787 - 3027
          </li>
          <li>
            <span>
              <FontAwesomeIcon id="email_icon" icon={faEnvelope} />
            </span>
            support@returnqueen.com
          </li>
        </ul>
      </div>
    </footer>
  );
}
