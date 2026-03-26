import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THE DHRUVA",
  description: "Curating high-performance digital environments for the avant-garde.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary/20">
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}