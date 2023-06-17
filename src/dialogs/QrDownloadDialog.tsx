import "../../styles/components/_dialog.scss";

export type QrDownloadDialogProps = {
  open: boolean;
  close: () => void;
};

export default function QrDownloadDialog(props:QrDownloadDialogProps) {
    const {open,  close} = props;

    const handleClickCloseDialog=()=>{
        close();
    }

  return (
    <dialog className="qrdownloaddialog">
      <>hello</>
      <button onClick={handleClickCloseDialog}>close</button>
    </dialog>
  );
}
