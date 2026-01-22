import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/layout/Footer/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrew's World",
  description: "Personal portfolio of Andrew Chang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body
        style={{
          backgroundColor: "#252b3b",
          color: "#1eff00",
          fontFamily: "var(--font-jetbrains)",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
