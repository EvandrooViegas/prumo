import { Anton, Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const helvetica = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata = {
  title: "PRUMO SOALHEIRO — Visão para Projetar. Coragem para Construir.",
  description:
    "PRUMO SOALHEIRO — Soluções integradas de engenharia, construção e gestão de projetos. Projeto, Construção, Gestão, Investigação e Formação. Peça o seu orçamento.",
  keywords: "engenharia, construção, BIM, reabilitação, fachadas, gestão de projetos, Portugal",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PRUMO SOALHEIRO — Visão para Projetar. Coragem para Construir.",
    description: "Soluções integradas de engenharia, construção e gestão de projetos.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${anton.variable} ${helvetica.variable}`}>
      <body className="antialiased font-body">
        <LanguageProvider>
          <Header />
          <main data-testid="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
