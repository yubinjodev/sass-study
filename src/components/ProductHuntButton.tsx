import '../../styles/components/_buttons.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

export default function ProductHuntButton() {
  return (
    <div className="producthuntbutton">
      <div id="icon">
        <FontAwesomeIcon id="icon" icon={faMedal} />
      </div>
      <div className="producthuntbutton__text">
        <div>PRODUCT HUNT</div>
        <div>#3 Product of the Day</div>
      </div>
    </div>
  );
}
