import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxleighandfoxleigh.co.uk"),
  title: {
    default: "Foxleigh & Foxleigh — IT Project Delivery Consultancy",
    template: "%s · Foxleigh & Foxleigh",
  },
  description:
    "A Surrey-based consultancy specialising in IT project delivery. We lead, rescue and assure complex technology programmes — and we finish what we start.",
  keywords: [
    "IT project delivery",
    "Surrey consultancy",
    "programme management",
    "delivery assurance",
    "project rescue",
    "vendor delivery",
  ],
  openGraph: {
    title: "Foxleigh & Foxleigh — IT Project Delivery Consultancy",
    description:
      "Surrey-based consultancy specialising in IT project delivery. Clear-eyed delivery leadership for complex technology programmes.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/foxleigh-and-co-logo-large.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
