"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "react-modal-video/css/modal-video.css";
import Prism from "prismjs";
import { useEffect, useRef } from "react";
import "../../styles/index.css";
import "../../styles/prism-vsc-dark-plus.css";
import ToasterContext from "../contex/ToasetContex";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

function applyCodeHighlighting() {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((codeBlock) => {
    Prism.highlightElement(codeBlock);
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    applyCodeHighlighting();
    Prism.highlightAll();
  }, []);

  const contentRef = useRef(null);

  return (
    <html suppressHydrationWarning lang="en">
      <body
        ref={contentRef}
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
      >
        <NextTopLoader
          color="#4A6CF7"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <Providers>
          <ToasterContext />
          <Header />

          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
