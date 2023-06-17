import "../../../styles/pages/_animatedad.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";

export default function AnimatedAd() {
  return (
    <section className="animatedad">
      <div className="animatedad__icon">
        <FontAwesomeIcon id="icon" icon={faLinesLeaning} />
      </div>

      <div className="animatedad__text">
        <h1>Are you still</h1>
        <h3>Printing shipping labels?</h3>
      </div>
    </section>
  );
}
