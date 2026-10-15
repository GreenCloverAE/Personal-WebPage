import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anthony Portfolio",
  description:
    "Explore my computer engineering portfolio where you can find my project, experiences, and more. ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex gap-6 p-4 bg-green-900 text-white border-b-4 border-green-700">
          <Link href="/" className="hover:text-green-300 transition-colors duration-300">
          Home
          </Link>
          <Link href="/about" className="hover:text-pink-300 transition-colors duration-300">
          About Me
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
