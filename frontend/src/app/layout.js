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
  title: "PRUMO Soalheiro, Lda. — Construção Civil & Obras Públicas",
  description:
    "PRUMO Soalheiro, Lda. — Empresa portuguesa de construção civil, obras públicas e serviços de engenharia. Peça o seu orçamento.",
  icons: {
    icon: "/favicon.svg",
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
