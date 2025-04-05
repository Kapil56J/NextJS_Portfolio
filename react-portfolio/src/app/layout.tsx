import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ 
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Kapil Jadhav - Portfolio",
  description: "Personal portfolio website of Kapil Jadhav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleway.variable}`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
