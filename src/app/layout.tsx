import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans",
});
export const metadata: Metadata = {
  title: "Becoffee",
  description: "cafeteria mais acolhedora de Caravelas!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
