import Header from "./_components/Header";
import home from "@/public/home.jpg";
import homeM from "@/public/home-m.jpg";
import Image from "next/image";
import "@/app/globals.css";

import { Nunito } from "next/font/google";
import Footer from "./_components/Footer";

const font = Nunito({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} h-screen relative`}>
        <Header />
        <div className="fixed inset-0 -z-50">
          <div className="hidden sm:block">
            <Image
              className="object-cover w-full h-full"
              src={home}
              fill
              alt="home"
              priority
            />
          </div>
          <div className="block sm:hidden">
            <Image
              className="object-cover w-full h-full"
              src={homeM}
              fill
              alt="homeM"
              priority
            />
          </div>
        </div>
        <main className="overflow-scroll sm:h-[80vh] h-[85vh] no-scrollbar">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
