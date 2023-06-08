import "../../styles/global.scss";

import Header from "@/features/Header";
import Hero from "@/features/Hero";
import Intro from "@/features/Intro";
import AnimatedAd from "@/features/AnimatedAd";
import Instruction from "@/features/Instruction";
import Ad from "@/features/Ad";
import Testimonials from "@/features/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <AnimatedAd />
      <Instruction />
      <Ad/>
      <Testimonials/>
    </main>
  );
}
