import type { Metadata } from "next";
import {Roboto_Serif, IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";
import Image from "next/image";

const robotoSerif = Roboto_Serif({
  variable:'--font-roboto-serif',
  weight:['100','200','300','400','500','600','700','800'],
  subsets:['latin'],
})
const ibmPlex = IBM_Plex_Sans({
  variable:'--font-IBM-Plex',
  weight:['100','200','300','400','500','600','700'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.variable} ${robotoSerif.variable} antialiased relative flex `}
      >
        <Image
        src={'/main.jpg'}
        alt="notebook"
        fill
        sizes="100vw,100vh"
        className="fixed size-full top-0 left-0 -z-10 opacity-10 blur-sm"
        />
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
