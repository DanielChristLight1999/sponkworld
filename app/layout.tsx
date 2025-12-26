import type { Metadata } from "next";
import { Balthazar, Comic_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const comic_neue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700" ],
});

export const balthazar = Balthazar({
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Sponk the galago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comic_neue.className} h-screen h-full `}
      >
        {children}
      </body>
    </html>
  );
}
