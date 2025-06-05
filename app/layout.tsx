import type { Metadata } from "next";
import { Poppins, Montserrat, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default:
      "3º Congresso CEV - Psicologia Baseada em Evidências | Maceió 2025",
    template: "%s | Congresso CEV 2025",
  },
  description:
    "Três dias de imersão intensiva em psicologia baseada em evidências com os maiores especialistas do Brasil. 14-16 de Agosto, Centro Cultural Cesmac, Maceió.",
  keywords:
    "congresso psicologia, CEV, Maceió, psicologia baseada em evidências, evento psicologia 2025, terapia cognitiva comportamental, formação psicólogos",
  authors: [{ name: "Leonardo Pedrosa Leite" }],
  creator: "Leonardo Pedrosa Leite",
  openGraph: {
    title: "3º Congresso CEV - Transforme sua Prática em Psicologia",
    description:
      "Imersão com os maiores especialistas em psicologia baseada em evidências do Brasil",
    type: "website",
    locale: "pt_BR",
    // url: "https://congressocev.com.br",
    siteName: "Congresso CEV",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "3º Congresso CEV - Maceió 2025",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
