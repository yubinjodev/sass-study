import "../../styles/pages/_ad.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";

export default function Ad() {
  return (
    <section className="ad">
      <hr />
      <div className="ad__block">
        <div className="ad__block__title">
          ReturnQueen makes online returns a breeze
        </div>
        <div className="ad__block__text">
          Say goodbye to sorting, taping, boxing, label printing, and endless
          post office trips.
        </div>
      </div>
      <hr />
    </section>
  );
}
