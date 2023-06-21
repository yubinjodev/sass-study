import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SignInDialogProps = {
  open: boolean;
  close: () => void;
};

export default function SignInDialog(props: SignInDialogProps) {
  const { open, close } = props;

  return (
    <dialog open={open} className="qrdownloaddialog">
      <div className="qrdownloaddialog__top">
        <p className="qrdownloaddialog__top__title">
          Sign In
        </p>
        <button onClick={close} className="qrdownloaddialog__top__action">
          <FontAwesomeIcon id="icon" icon={faClose} />
        </button>
      </div>

      <div className="qrdownloaddialog__content">
        <form>
            <label>Email<input/></label>
            <input type="submit"/>
        </form>
      </div>
    </dialog>
  );
}
