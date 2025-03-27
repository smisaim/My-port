import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sa'ims Portfolio",
  description: "Modern and minimalistic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-black-100 text-white font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
