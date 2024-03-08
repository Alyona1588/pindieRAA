import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import "./globals.css";

export const metadata = {
  title: "PindieRAA",
  description: "Портал инди-игр от студентов Яндекс Практикума. Made by Shuremanochka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
