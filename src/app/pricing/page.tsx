import "styles/global.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/features/home/Download";
import Pricing from "@/features/pricing/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Pricing/>
        <Download/>
      </main>
      <Footer />
    </>
  );
}
