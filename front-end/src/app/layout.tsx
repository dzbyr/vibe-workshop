import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ui/Providers";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildlife Compatible Conservation Project",
  description:
    "Support river ecosystem–friendly conservation: protect endangered species, fund research, empower youth art, and sustain biodiversity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          background: "linear-gradient(135deg, #81D4FA 0%, #2E7D32 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Providers>
          <>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <footer
              style={{
                background: "rgba(46, 125, 50, 0.95)",
                color: "#fff",
                textAlign: "center",
                padding: "1.5rem 0 1rem 0",
                fontSize: "1.1rem",
                letterSpacing: "0.01em",
              }}
            >
              <div><strong>River Wildlife Trust</strong> &mdash; Protecting rivers, wildlife, and our shared future 🦦🌊</div>
              <div style={{ fontSize: "0.95em", marginTop: "0.5em" }}>
                © {new Date().getFullYear()} Wildlife Compatible Conservation Project
              </div>
            </footer>
          </>
        </Providers>
      </body>
    </html>
  );
}
