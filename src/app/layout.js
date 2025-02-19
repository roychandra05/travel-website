import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Bali Travel Destination",
  description: "Find your destination over Bali",
  icons: {
    icon: [
      { url: "/favicon-travel/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-travel/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon-travel/apple-touch-icon.png",
  },
  manifest: "/favicon-travel/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-main-primary text-main-text relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
