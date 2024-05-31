import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./ThemeProvider";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Sphere",
  description: "Let's transform digitally together with Digital Sphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Providers>
        <body
          className={`${inter.className} font-sans bg-bgColor relative pt-[100px] dark:bg-darkBgColor`}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
