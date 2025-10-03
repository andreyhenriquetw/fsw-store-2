import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAPE Brasil",
  description:
    "Compre Vapes, Pods e Juices de alta qualidade. Envio rápido para todo o Brasil. Experimente a melhor loja de Vape online!",
  keywords: [
    "vape",
    "pod system",
    "juice",
    "cigarro eletrônico",
    "comprar vape",
    "vape Brasil",
    "Vape site",
    "loja de vape",
    "vape online",
    "vape shop",
    "vape delivery",
    "vape barato",
    "comprar pod",
    "juice vape",
    "vape accessories",
  ],
  openGraph: {
    title: "Vape Brasil - Loja Online",
    description:
      "Loja especializada em Vapes, Pods e Juices importados e nacionais. Entrega rápida em todo o Brasil!",
    url: "https://seudominio.com",
    siteName: "VAPE Brasil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://vapbrasil.s3.sa-east-1.amazonaws.com/ice-cream-cake-hallu-5ml-kit-limpeza-2.png", // coloque uma imagem real do seu site
        width: 800,
        height: 600,
        alt: "vapebrasil",
      },
    ],
  },
  alternates: {
    canonical: "https://seudominio.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
