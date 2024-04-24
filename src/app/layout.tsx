import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ConfigContextProvider } from "@/context/ConfigContext";
import { Analytics } from "@vercel/analytics/next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Anotador Truco",
  description: "Creada por valentinlibonati33@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={lato.className}>
        <Analytics mode="production" />
        <ConfigContextProvider>{children}</ConfigContextProvider>
      </body>
    </html>
  );
}
