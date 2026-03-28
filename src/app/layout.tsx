import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Moiz Khan — Paintings Collection",
  description:
    "Explore the paintings collection of Moiz Khan. Original works spanning abstract, landscape, portrait, and contemporary fine art. Available for commissions and exhibitions.",
  keywords: [
    "paintings",
    "art",
    "gallery",
    "oil painting",
    "abstract art",
    "contemporary art",
    "fine art",
    "Moiz Khan",
  ],
  openGraph: {
    title: "Moiz Khan — Paintings Collection",
    description:
      "Original works spanning abstract, landscape, portrait, and contemporary fine art.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
