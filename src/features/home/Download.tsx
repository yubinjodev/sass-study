import "styles/pages/_download.scss";

import DownloadButton from "@/components/DownloadButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function Download() {
  return (
    <article className="download">
      <div className="download__background">
        <div className="download__block">
          <figure className="download__block__image">
            <img alt="iphone" src="/images/download/phone.png" />
          </figure>
          <section className="download__block__text">
            <h1>Download the ReturnQueen App</h1>
            <p>Returns just got a whole lot easier.</p>
            <p>Experience our game-changing service today.</p>

            <div className="download__block__divider">
              <div className="image">
                <img alt="people avatars" src="/images/download/people.png" />
              </div>
              <p>
                Join our growing family of members who have found a better way
                to return.
              </p>
            </div>

            <div className="download__block__buttons">
              <DownloadButton
                apple
                icon={<FontAwesomeIcon className="icon" icon={faApple} />}
                text="Download on the App Store"
              />
              <DownloadButton
                icon={<FontAwesomeIcon className="icon" icon={faGooglePlay} />}
                text="Get it on Google Play"
              />
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
