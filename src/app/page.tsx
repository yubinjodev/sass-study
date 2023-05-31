import "../../styles/global.scss";

import Header from "@/features/Header/";
import Hero from "@/features/Hero/";
import Intro from "@/features/Intro";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
    </main>
  );
}
