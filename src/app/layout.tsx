import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SINC',
  description: "Partners",
  icons: {icon:'/SINC.png'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="flex flex-col min-h-screen">
            <NavBar/>
            <section className="bg-gray-100 flex-grow">    
          {children}
            </section>
          </main>
        </body>
    </html>
  );
}
