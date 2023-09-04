import "styles/pages/_animatedad.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";

export default function AnimatedAd() {
  return (
    <section className="animatedad">
      <div className="animatedad__icon">
        <FontAwesomeIcon className="icon" icon={faLinesLeaning} />
      </div>

      <div className="animatedad__text">
        <div>Are you still</div>
        <div>Printing shipping labels?</div>
      </div>
    </section>
  );
}
