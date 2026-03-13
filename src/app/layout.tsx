import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Using @ alias or use "../components/Navbar"
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranjal | Dual-Degree Engineer",
  description: "Portfolio of a Computer Science & Data Science student.",
  icons: {
    icon: '/logo.png?v=2', // The ?v=2 forces a cache clear
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {/* The Navbar stays at the top of every page */}
        <Navbar />
        
        {/* pt-20 (padding-top) prevents your content from being 
          hidden behind the fixed navigation bar.
        */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* The Footer stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}