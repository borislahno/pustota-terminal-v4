import type { Metadata } from "next";
import '../styles/global.css';

//TODO: Add title,description and keywords
export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=VT323&display=swap" rel="stylesheet"/>
    </head>
    <body>{children}</body>
    </html>
  );
}
