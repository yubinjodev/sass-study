import "styles/components/_dialog.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export type QrDownloadDialogProps = {
  open: boolean;
  close: () => void;
};

export default function QrDownloadDialog(props: QrDownloadDialogProps) {
  const { open, close } = props;

  const handleClickCloseDialog = () => {
    close();
  };

  return (
    <dialog open={open} className="qrdownloaddialog" id="qrdownloaddialog">
      <div className="qrdownloaddialog__top">
        <p className="qrdownloaddialog__top__title">Scan this QR code</p>
        <button
          onClick={handleClickCloseDialog}
          className="qrdownloaddialog__top__action"
        >
          <FontAwesomeIcon id="icon" icon={faClose} />
        </button>
      </div>

      <div className="qrdownloaddialog__content">
        <div className="qrdownloaddialog__content__qrcode">
          <img alt="qr code" src="/images/dialog/qrcode/qrcode.png" />
        </div>

        <p className="qrdownloaddialog__content__title">
          Download the ReturnQueen App
        </p>
      </div>
    </dialog>
  );
}
