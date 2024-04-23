import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ingeniosos",
  description: "Centro de apoyo escolar y consultas de servicios de clases particulares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" crossorigin="anonymous" />
        <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" crossorigin="anonymous" /> */}
        <Footer />
      </body>
    </html>
  );
}
