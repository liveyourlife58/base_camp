import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/contexts/cart-context";
import { CartSidebar } from "@/components/ui/cart-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Base Camp - Premium Outdoor & Survival Gear",
  description: "Your trusted source for camping, survival, combat gear, self-defense items, and trauma medical kits. Premium quality equipment for outdoor enthusiasts and professionals.",
  keywords: "camping gear, survival equipment, combat gear, self defense, medical kits, outdoor gear, tactical equipment",
  authors: [{ name: "Base Camp" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  openGraph: {
    title: "Base Camp - Premium Outdoor & Survival Gear",
    description: "Your trusted source for camping, survival, combat gear, self-defense items, and trauma medical kits.",
    type: "website",
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
      style={{ background: 'linear-gradient(to bottom, #161716, #232c23, #161716)' }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ background: 'linear-gradient(to bottom, #161716, #232c23, #161716)' }}
      >
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
