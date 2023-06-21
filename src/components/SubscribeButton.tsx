import "styles/components/_buttons.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

type SubscribeButtonProps = {
  onClick: () => void;
};

export default function SubscribeButton(props: SubscribeButtonProps) {
  const {onClick} = props;
  
  return (
    <button className="downloadbuttonmain subscribebutton" onClick={onClick}>
      <FontAwesomeIcon icon={faUser} className="icon" />
      Subscribe
    </button>
  );
}
