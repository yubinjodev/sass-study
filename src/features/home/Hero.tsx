import "styles/pages/_hero.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import DownloadButton from "@/components/DownloadButton";
import ProductHuntButton from "@/components/ProductHuntButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Returns picked up from your doorstep</h1>

        <div className="hero__subtitle">
          <h3>No more packaging</h3>
          <h3>No more printing</h3>
          <h3>No more driving</h3>
        </div>

        {/* <div className="hero__zipcode">
          <FontAwesomeIcon id="icon" icon={faLocationDot} />
          <input placeholder="Enter your zip code" />
          <button>GO!</button>
        </div> */}

        <div className="hero__download">
          <DownloadButton
            apple
            icon={<FontAwesomeIcon id="icon" icon={faApple} />}
            text="Download on the App Store"
          />
          <DownloadButton
            icon={<FontAwesomeIcon id="icon" icon={faGooglePlay} />}
            text="Get it on Google Play"
          />
        </div>

        <div className="hero__producthunt">
          <ProductHuntButton />
        </div>
      </div>

      <div className="hero__image">
        <img alt="" src="/images/hero/van.png" />
      </div>
    </section>
  );
}
