import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arbaz's Portfolio",
  description: "One of the best portfolio sites!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <TransitionProvider>
          <Toaster position="top-right" />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
