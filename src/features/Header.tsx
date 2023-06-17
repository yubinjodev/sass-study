"use client";

import "../../styles/pages/_header.scss";

import { useState } from "react";

import QrDownloadDialog, {
  QrDownloadDialogProps,
} from "@/dialogs/QrDownloadDialog";

type DialogId = "QrDownloadDialog";

export default function Header() {
  const [dialogId, setDialogId] = useState<DialogId>();
  const [qrDownloadDialogProps, setQrDownloagDialogProps] =
    useState<QrDownloadDialogProps>();

  const closeDialog = () => {
    setDialogId(undefined);
    setQrDownloagDialogProps(undefined);
  };

  const openDownloadDialog = () => {
    setDialogId("QrDownloadDialog");
    setQrDownloagDialogProps({
      open: true,
      close: closeDialog,
    });
  };

  const handleClickDownload = () => {
    openDownloadDialog();
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img alt="" src="images/header/logo.png" />
        </div>
        <nav className="header__controls">
          <ul>
            <li>About</li>
            <li>How it works</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          {/* <button>About</button>
          <button>How it works</button>
          <button>Pricing</button>
          <button>Blog</button> */}
        </nav>

        <div className="header__download">
          <button onClick={handleClickDownload}>Download App</button>
        </div>
      </header>

      {dialogId === "QrDownloadDialog" && qrDownloadDialogProps && (
        <QrDownloadDialog {...qrDownloadDialogProps} />
      )}
    </>
  );
}
