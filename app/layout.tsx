import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider} from "@clerk/nextjs";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clauso AI",
  description: "Clauso is an AI-powered document auditing platform that helps you analyze contracts and important documents. Highlight risks, spot missing clauses, and get actionable insights instantly — all with a sleek, minimalistic interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        antialiased
        flex flex-col
        min-h-screen
      `}
    >
      <ClerkProvider appearance={{ variables: { colorPrimary: '#000000' } }}>
        
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </ClerkProvider>
    </body>
  </html>
);


}
