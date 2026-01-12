import Navbar from "../components/Navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "KundKund Group",
  description:
    "At KundKund Group, we are committed to delivering excellence through innovation, reliability, and a client-first approach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logofev.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
