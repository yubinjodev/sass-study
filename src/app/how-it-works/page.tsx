import "styles/global.scss";
import "styles/components/_howitworks.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/features/home/Download";
import HowItWorks, { HowItWorkksProps } from "@/components/HowItWorks";

let seq = 1;
function nextStep(){
  return seq++;
}

const HowItWorksData: HowItWorkksProps[] = [
  {
    stepNumber: nextStep(),
    title: "Create",
    styledTitle:"your account",
    description:
      "Download the ReturnQueen app from the App Store or Google Play. Sign up and choose from our pay-per-pickup or unlimited pickup plans.",
    imgPath: "/images/how-it-works/step1.png",
    layout: "type1",
  },
  {
    stepNumber: nextStep(),
    title: "Add",
    styledTitle:"your purchases",
    description:
      "Link your Gmail account to view all your recent purchases automatically. You can also add your purchases manually by entering your order details.",
    imgPath: "/images/how-it-works/step2.png",
    layout: "type2",
  },
  {
    stepNumber: nextStep(),
    title: "Select",
    styledTitle:"your items",
    description:
      "Once you've chosen which items to return, our app will help you retrieve your shipping labels.",
    imgPath: "/images/how-it-works/step2.png",
    layout: "type1",
  },
  {
    stepNumber: nextStep(),
    title: "Schedule",
    styledTitle:"your pickup",
    description:
      "Let us know where you'll be leaving your items and when you want us to pick them up.",
    imgPath: "/images/how-it-works/step4.png",
    layout: "type2",
  },
  {
    stepNumber: nextStep(),
    title: "Leave the rest",
    styledTitle:"to us",
    description:
      "Our purple trucks will collect your items at your scheduled pickup time. Just sit back and watch your refunds roll in!",
    imgPath: "/images/how-it-works/step4.png",
    layout: "type1",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="howitworks">
          <h1 className="howitworks__title">How it works</h1>
          <h2 className="howitworks__subtitle">
            Returning the new way is as easy as it sounds.
          </h2>
          {HowItWorksData.map(
            ({ stepNumber, title, styledTitle, description, imgPath, layout }, idx) => (
              <HowItWorks
                key={idx}
                stepNumber={stepNumber}
                title={title}
                styledTitle={styledTitle}
                description={description}
                imgPath={imgPath}
                layout={layout}
              />
            )
          )}
        </section>
        <Download />
      </main>
      <Footer />
    </>
  );
}
