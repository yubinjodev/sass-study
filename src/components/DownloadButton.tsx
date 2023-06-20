"use client";

import "styles/components/_buttons.scss";

type Props = {
  icon: React.ReactNode;
  text: string;
  apple?:boolean;
};

export default function DownloadButton(props: Props) {
  const { icon, text, apple } = props;

  const handleClickDownload = () => {
    if (apple) {
      window.open(
        "https://apps.apple.com/us/app/returnqueen/id1537845231",
        "_blank"
      );
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=com.returnqueen&pli=1",
        "_blank"
      );
    }
  };


  return (
    <div className="downloadbutton" onClick={handleClickDownload}>
      <div id="icon">{icon}</div>
      <div className="downloadbutton__text">{text}</div>
    </div>
  );
}
