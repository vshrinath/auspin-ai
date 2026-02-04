import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Configure JetBrains Mono font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "AUSPIN Ventures — Independent AI Strategy for Boards and CXOs",
  description:
    "Board directors and practitioners who've built AI at scale—providing honest guidance without vendor lock-in. Independent AI strategy, governance, and execution for boards and CXOs.",
  openGraph: {
    title: "AUSPIN Ventures — Independent AI Strategy for Boards and CXOs",
    description:
      "Board directors and practitioners who've built AI at scale—providing honest guidance without vendor lock-in. Independent AI strategy, governance, and execution for boards and CXOs.",
    type: "website",
    url: "https://www.auspinventures.com",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "AUSPIN Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AUSPIN Ventures — Independent AI Strategy for Boards and CXOs",
    description:
      "Board directors and practitioners who've built AI at scale—providing honest guidance without vendor lock-in. Independent AI strategy, governance, and execution for boards and CXOs.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
