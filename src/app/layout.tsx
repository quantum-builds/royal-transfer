import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Poppins, Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

const beVietnamePro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Royal Transfer | Premium UK Ride Booking Service",
  description:
    "Book luxury and reliable rides across the UK with Royal Transfer. From airport pickups to intercity travel, we offer professional drivers, comfortable cars, and 24/7 service tailored to your needs.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${beVietnamePro.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
