import "../../../styles/global.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/features/home/Download";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Download/>
      </main>
      <Footer />
    </>
  );
}
