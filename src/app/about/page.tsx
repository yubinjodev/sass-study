import "styles/global.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/features/home/Download";
import About from "@/features/about/About";
import OurTeam from "@/features/about/OurTeam";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About/>
        <OurTeam/>
        <Download/>
      </main>
      <Footer />
    </>
  );
}
