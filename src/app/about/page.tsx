import "styles/global.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/features/home/Download";
import About from "@/features/about/About";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About/>
        <Download/>
      </main>
      <Footer />
    </>
  );
}
