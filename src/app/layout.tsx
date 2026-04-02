import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THE DHRUVA — Portfolio",
  description: "Curating high-performance digital environments for the avant-garde.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[var(--color-surface)] text-[var(--color-on-surface)] antialiased overflow-x-hidden">
        {/* Global grain texture */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}