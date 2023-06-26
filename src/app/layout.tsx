import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "ReturnQueen - return your online purchases with ease",
  description: "Created by Yubin Jo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
