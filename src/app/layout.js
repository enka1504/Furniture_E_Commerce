import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "FurniStyle",
  description: "E-commerce platform for furniture and home decor",
  icons: {
    icon: '/logo.svg',
    sizes: ["64x64", "32x32", "24x24", "16x16"],
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
        className={`${nunito.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
