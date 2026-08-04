import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://epcperform.com"),
  icons: { icon: "/logo-circle.png" },
  title: "Evolution Production Company | Where Ice Meets Dance",
  description:
    "Evolution Production Company (EPC) is an immersive performance company blending skating, dance, and movement into continuous live experiences in the DMV. Ascend — the inaugural EPC production — is coming in 2027, and we are casting the founding company now.",
  keywords: [
    "ice skating",
    "dance performance",
    "DMV",
    "Washington DC",
    "Washington DC area",
    "auditions",
    "touring company",
    "figure skating",
    "contemporary dance",
    "performing arts",
  ],
  openGraph: {
    title: "Evolution Production Company",
    description: "Where Ice Meets Dance. Where Art Becomes Legend.",
    type: "website",
    images: [
      {
        url: "/ascend-flyer.png",
        width: 1536,
        height: 1024,
        alt: "Ascend — The Inaugural EPC Production, Coming 2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolution Production Company",
    description: "Where Ice Meets Dance. Where Art Becomes Legend.",
    images: ["/ascend-flyer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
