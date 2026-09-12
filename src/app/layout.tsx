import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { cn } from "@/lib/utils";
import { Footer } from "./components/Footer";
import ExtraordinaryFooter from "./components/ExtraordinaryFooter";
import EntrySystem from "./components/EntrySystem";
import FloatingTelemetryHub from "./components/FloatingTelemetryHub";
 
const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// UPDATED METADATA
export const metadata: Metadata = {
  title: {
    default: "Precast Engineering Group | PEG",
    template: "%s | PEG"
  },
  description: "PEG is a group of all prcast products",
  icons: {
    icon: "/favicon.png",  
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <EntrySystem />
        <FloatingTelemetryHub />
        <div className="flex-grow">{children}</div>
        <ExtraordinaryFooter />
      </body>
    </html>
  );
}
