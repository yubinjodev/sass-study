import "styles/global.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Download from "@/features/home/Download";
import Blog from "@/features/blog/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Blog />
        <Download />
      </main>
      <Footer />
    </>
  );
}
