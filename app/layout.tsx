import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew's World",
  description: "Personal portfolio of Andrew Chang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          backgroundColor: "#252b3b",
          color: "#1eff00",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {children}
      </body>
    </html>
  );
}
