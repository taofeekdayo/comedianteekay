import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teekay | Stand-Up Comedian",
  description:
    "Official website of Teekay - Award-winning stand-up comedian bringing laughter beyond limits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
