import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200`}
      >
        <nav className="bg-slate-800 fixed top-0 left-0 w-full h-16 flex items-center justify-center px-4 gap-4 text-white">
          <Link href={"/"} className="font-bold rounded-xl bg-slate-700 p-3 hover:bg-slate-500">Inicio</Link>
          <Link href={"/quiz-logo"} className="font-bold rounded-xl bg-slate-700 p-3 hover:bg-slate-500">Adivinar Logo</Link>
          <Link href={"/quiz-write"} className="font-bold rounded-xl bg-slate-700 p-3 hover:bg-slate-500">Escribe la marca</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
