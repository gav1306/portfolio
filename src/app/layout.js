import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import MouseGradient from "@/components/ui/mouse-gradient";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gayatri Patil",
  description:
    "Frontend developer building complex and high-performance web applications.",
  metadataBase: new URL("https://gayatripatil.vercel.app"),
  openGraph: {
    siteName: "Gayatri Patil",
    url: new URL("https://gayatripatil.vercel.app"),
    locale: "en_US",
    type: "website",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4`}
      >
        <MouseGradient />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
