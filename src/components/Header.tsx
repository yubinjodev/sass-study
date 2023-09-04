"use client";

import "styles/pages/_header.scss";

import { useState } from "react";

import QrDownloadDialog, {
  QrDownloadDialogProps,
} from "@/dialogs/QrDownloadDialog";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

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
          <a href="/">
            <img alt="header logo" src="images/header/logo.png" />
          </a>
        </div>

        <nav className="header__controls">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/how-it-works">How it works</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>

        <div className="header__download">
          <button onClick={handleClickDownload}>Download App</button>
        </div>

        <div className="header__menu">
          <HamburgerMenu />
        </div>
      </header>

      {dialogId === "QrDownloadDialog" && qrDownloadDialogProps && (
        <QrDownloadDialog {...qrDownloadDialogProps} />
      )}
    </>
  );
}
