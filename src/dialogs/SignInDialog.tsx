import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type SignInDialogProps = {
  open: boolean;
  close: () => void;
  signUpDialogOpen: () => void;
};

export default function SignInDialog(props: SignInDialogProps) {
  const { open, close, signUpDialogOpen } = props;

  return (
    <dialog open={open} className="signupdialog qrdownloaddialog" style={{height:"fit-content"}}>
    <div className="qrdownloaddialog__top">
      <div
        className="qrdownloaddialog__top__title"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontWeight:700
        }}
      >
        <img alt="" src="/images/logo.png" style={{ width: 56, marginTop:40,marginBottom:24 }} />
        <p style={{ textAlign: "center" }}>
          Sign In
        </p>
      </div>
      <button onClick={close} className="qrdownloaddialog__top__action">
        <FontAwesomeIcon id="icon" icon={faClose} />
      </button>
    </div>

    <div className="qrdownloaddialog__content">
      <form className="flexcolumn form">
        <div className="flexcolumn">
          <label>Email</label>
          <input type="email" placeholder="jamie@example.com" />
        </div>
        <input type="submit" value="Sign In" />
      </form>

      <p>
        Don&apos;t have an account? <span className="link" onClick={signUpDialogOpen}>Sign Up</span>
      </p>
    </div>
  </dialog>
  );
}
