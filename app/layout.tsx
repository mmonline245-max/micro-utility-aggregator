import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Micro Utility Tools",
  description: "Free online utility tools: converters, generators, counters, and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Micro Utility Tools</h1>
          <p className="text-gray-600">Simple tools you can use instantly.</p>
        </header>
        <main>{children}</main>
        <footer className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Micro Utility Tools
        </footer>
      </body>
    </html>
  );
}
