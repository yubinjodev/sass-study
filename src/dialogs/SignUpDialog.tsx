import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SignUpDialogProps = {
  open: boolean;
  close: () => void;
  signInDialogOpen: () => void;
};

export default function SignUpDialog(props: SignUpDialogProps) {
  const { open, close, signInDialogOpen } = props;

  return (
    <dialog open={open} className="signupdialog qrdownloaddialog">
      <div className="qrdownloaddialog__top">
        <div
          className="qrdownloaddialog__top__title"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            fontWeight: 700,
          }}
        >
          <img
            alt="logo"
            src="/images/logo.png"
            style={{ width: 56, marginTop: 40, marginBottom: 24 }}
          />
          <p style={{ textAlign: "center" }}>
            ReturnQueen - return your online purchases with ease
          </p>
        </div>
        <button onClick={close} className="qrdownloaddialog__top__action">
          <FontAwesomeIcon id="icon" icon={faClose} />
        </button>
      </div>

      <div className="qrdownloaddialog__content">
        <form className="flexcolumn form">
          <div className="flexcolumn">
            <label>Name</label>
            <input type="text" placeholder="Jamie Larson" />
          </div>

          <div className="flexcolumn">
            <label>Email</label>
            <input type="email" placeholder="jamie@example.com" />
          </div>

          <input type="submit" value="Sign Up" />
        </form>

        <p>
          Already a member?{" "}
          <span className="link" onClick={signInDialogOpen}>
            Sign In
          </span>
        </p>
      </div>
    </dialog>
  );
}
