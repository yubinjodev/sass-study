import "../../styles/global.scss";

import Header from "@/features/Header";
import Hero from "@/features/Hero";
import Intro from "@/features/Intro";
import AnimatedAd from "@/features/AnimatedAd";
import Instruction from "@/features/Instruction";
import Ad from "@/features/Ad";
import Testimonials from "@/features/Testimonials";
import Download from "@/features/Download";
import Footer from "@/features/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <AnimatedAd />
        <Instruction />
        <Ad />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  );
}
