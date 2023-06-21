"use client"

import "styles/global.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Download from "@/features/home/Download";
import Blog from "@/features/blog/Blog";
import SubscribeButton from "@/components/SubscribeButton";
import { useState } from "react";
import SignUpDialog, { SignUpDialogProps } from "@/dialogs/SignUpDialog";

type DialogId = "SignUpDialog" 

export default function Home() {
  const [dialogId, setDialogId] = useState<DialogId>()
  const [SignUpDialogProps, setSignUpDialogProps] = useState<SignUpDialogProps>()

  const closeDialog = ()=>{
    setDialogId(undefined)
    setSignUpDialogProps(undefined)
  }

  const openDialog=()=>{
    setDialogId("SignUpDialog")
    setSignUpDialogProps({
      open: true,
      close: closeDialog,
    });
  }

  const handleClickSubscribe=()=>{
    openDialog();
  }
  
  return (
    <div className="relative">
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
      <SubscribeButton onClick={handleClickSubscribe}/>

      {dialogId === "SignUpDialog" && SignUpDialogProps && (
        <SignUpDialog  {...SignUpDialogProps}/>
      )}
    </div>
  );
}
