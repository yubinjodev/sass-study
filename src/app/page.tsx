import "styles/global.scss";

import Hero from "@/features/home/Hero";
import Intro from "@/features/home/Intro";
import Instruction from "@/features/home/Instruction";
import Ad from "@/features/home/Ad";
import Testimonials from "@/features/home/Testimonials";
import Download from "@/features/home/Download";
import Footer from "@/components/Footer";
import AnimatedAd from "@/features/home/AnimatedAd";
import Header from "@/components/Header";



export default function Home() {
  return (
      <main>
        <Hero />
        <Intro />
        <AnimatedAd />
        <Instruction />
        <Ad />
        <Testimonials />
        <Download />
      </main>
  );
}
