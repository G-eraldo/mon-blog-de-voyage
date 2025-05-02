import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./globals.css";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "700"],
// });

// const playfair = Playfair_Display({
//   variable: "--font-playfair-display",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "700"],
// });

export const metadata = {
  title: "Nos carnets de voyage",
  description: "Nos voyages",
  name: "viewport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <head></head>
      <body className="flex min-h-full flex-col">
        <Header />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
