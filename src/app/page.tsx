import "../../styles/global.scss";

import Header from "@/features/Header";
import Hero from "@/features/Hero";
import Intro from "@/features/Intro";

import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
    </main>
  );
}
