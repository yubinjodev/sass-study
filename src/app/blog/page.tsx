"use client";

import "styles/global.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Download from "@/features/home/Download";
import Blog from "@/features/blog/Blog";
import SubscribeButton from "@/components/SubscribeButton";
import { useState } from "react";
import SignUpDialog, { SignUpDialogProps } from "@/dialogs/SignUpDialog";
import SignInDialog, { SignInDialogProps } from "@/dialogs/SignInDialog";

type DialogId = "SignUpDialog" | "SignInDialog";

export default function Home() {
  const [dialogId, setDialogId] = useState<DialogId>();
  const [SignUpDialogProps, setSignUpDialogProps] =
    useState<SignUpDialogProps>();
  const [SignInDialogProps, setSignInDialogProps] =
    useState<SignInDialogProps>();

  const openSignInDialog = () => {
    setDialogId("SignInDialog");
    setSignInDialogProps({
      open: true,
      close: closeDialog,
      signUpDialogOpen: handleClickSubscribe
    });
  };

  const handleClickSignInDialog = () => {
    openSignInDialog();
  };

  const closeDialog = () => {
    setDialogId(undefined);
    setSignUpDialogProps(undefined);
  };

  const openSignUpDialog = () => {
    setDialogId("SignUpDialog");
    setSignUpDialogProps({
      open: true,
      close: closeDialog,
      signInDialogOpen: handleClickSignInDialog
    });
  };

  const handleClickSubscribe = () => {
    openSignUpDialog();
  };

  return (
    <div className="relative">
      <main>
        <Blog />
      </main>
      <SubscribeButton onClick={handleClickSubscribe} />

      {dialogId === "SignUpDialog" && SignUpDialogProps && (
        <SignUpDialog {...SignUpDialogProps} />
      )}

      {dialogId === "SignInDialog" && SignInDialogProps && (
        <SignInDialog {...SignInDialogProps} />
      )}
    </div>
  );
}
