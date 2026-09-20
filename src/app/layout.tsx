import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

const siteUrl = "https://kapiljadhav.dev";
const title = "Kapil Jadhav | React Native & React Developer";
const description =
  "React Native & React Developer with 3+ years of experience building production mobile and web applications, real-time systems and cross-platform experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Kapil Jadhav",
    "React Native Developer",
    "React Developer",
    "Mobile Software Engineer",
    "React Native Engineer",
    "SDE Mobile",
    "Frontend Engineer",
  ],
  authors: [{ name: "Kapil Jadhav" }],
  creator: "Kapil Jadhav",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Kapil Jadhav",
    images: [{ url: "/Profile.webp", width: 1086, height: 1448, alt: "Kapil Jadhav" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/Profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jbmono.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
