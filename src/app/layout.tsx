import type { Metadata } from "next";
import { Orbitron, Michroma, Inter, Roboto } from "next/font/google";
import "./globals.scss";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-orbitron",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

const inter = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const roboto = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title:
    "Armur API Hub - Code Scanning Tools, Smart Contract Auditing Tools and more",
  description:
    "Discover Code Security scanning APIs, Smart Contract Auditing APIs, Pentesting APIs and more at our API Hub.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${michroma.variable} ${inter.variable} ${roboto.variable}`}
    >
      <body className={`relative`}>
        <Header />
        <div className=" min-h-screen overflow-hidden container mx-auto">
          <div className="main relative z-[1000]">{children}</div>
          <div className="footer-container h-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
