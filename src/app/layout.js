import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "FurniStyle",
  description: "E-commerce platform for furniture and home decor",
  icons: {
    icon: '/logo.svg',
    sizes: ['16x16', '32x32', '48x48'],
  },
};

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
