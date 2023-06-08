import "../../styles/global.scss";

import Header from "@/features/Header";
import Hero from "@/features/Hero";
import Intro from "@/features/Intro";
import AnimatedAd from "@/features/AnimatedAd";
import Instruction from "@/features/Instruction";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <AnimatedAd />
      <Instruction />
    </main>
  );
}
