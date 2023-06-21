import "styles/components/_buttons.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function SubscribeButton() {
  return (
    <button className="downloadbuttonmain subscribebutton">
      <FontAwesomeIcon icon={faUser} className="icon"/>
      Subscribe
    </button>
  );
}
