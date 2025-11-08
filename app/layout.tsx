import type { Metadata } from "next";
import { League_Spartan, Sanchez } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const leagueSpartan = League_Spartan({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const sanchez = Sanchez({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Team ETA - Engineering Tomorrow. Driving Innovation. | K. J. Somaiya School of Engineering",
  description: "Team ETA is a student engineering team from K. J. Somaiya School of Engineering participating in Shell Eco-marathon, building sustainable and efficient vehicles.",
  keywords: ["Team ETA", "K. J. Somaiya", "Shell Eco-marathon", "sustainable vehicles", "engineering team", "eco-friendly cars"],
  authors: [{ name: "Team ETA" }],
  openGraph: {
    title: "Team ETA - Engineering Tomorrow. Driving Innovation.",
    description: "Student engineering team from K. J. Somaiya School of Engineering building sustainable vehicles for Shell Eco-marathon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team ETA - Engineering Tomorrow. Driving Innovation.",
    description: "Student engineering team from K. J. Somaiya School of Engineering building sustainable vehicles for Shell Eco-marathon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${leagueSpartan.variable} ${sanchez.variable} font-sans`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

