import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3º Congresso CEV - Psicologia Baseada em Evidências | Maceió 2025",
  description:
    "Três dias de imersão intensiva em psicologia baseada em evidências. Conexão, conhecimento e experiência transformadora em Maceió, Alagoas.",
  keywords:
    "congresso psicologia, CEV, Maceió, psicologia baseada em evidências, evento psicologia 2025",
  openGraph: {
    title: "3º Congresso CEV - Maceió 2025",
    description:
      "Imersão em psicologia baseada em evidências com os maiores especialistas do Brasil",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
