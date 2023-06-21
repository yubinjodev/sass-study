import "styles/global.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Download from "@/features/home/Download";
import Blog from "@/features/blog/Blog";
import SubscribeButton from "@/components/SubscribeButton";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
      <SubscribeButton />
    </div>
  );
}
