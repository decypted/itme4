import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "InternMe: Search for Internships & Entry Level Jobs.",
  description: "Rise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-DJ32NQ25G5`}
        
        />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DJ32NQ25G5');
        `}
      </Script>
       
      </head>
      <body
        className={` antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        {/* <LanguageChange/> */}
        
      </body>
    </html>
  );
}
