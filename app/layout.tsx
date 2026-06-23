import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Hub | Build Websites That Sell",
  description: "We create high-performance websites, online stores and digital systems that help businesses grow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
