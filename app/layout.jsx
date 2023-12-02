import { Inter } from "next/font/google";
import "./globals.css";
// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clinic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* <Hero/> */}

        {children}
      </body>
    </html>
  );
}
