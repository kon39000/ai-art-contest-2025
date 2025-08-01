import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIアートコンテスト2025 | 暑さを忘れる魔法みたいなテクノロジー",
  description: "2025年8月開催のAIアートコンテスト。テーマは「暑さを忘れる魔法みたいなテクノロジー」。どなたでも参加可能、豪華賞品をご用意しています。",
  keywords: "AIアート,コンテスト,生成AI,イラスト,アート,2025年,夏",
  authors: [{ name: "AIアートコンテスト運営事務局" }],
  openGraph: {
    title: "AIアートコンテスト2025 | 暑さを忘れる魔法みたいなテクノロジー",
    description: "2025年8月開催のAIアートコンテスト。テーマは「暑さを忘れる魔法みたいなテクノロジー」。どなたでも参加可能、豪華賞品をご用意しています。",
    url: "https://aiart2025.vercel.app",
    siteName: "AIアートコンテスト2025",
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "AIアートコンテスト2025 - 暑さを忘れる魔法みたいなテクノロジー",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIアートコンテスト2025 | 暑さを忘れる魔法みたいなテクノロジー",
    description: "2025年8月開催のAIアートコンテスト。テーマは「暑さを忘れる魔法みたいなテクノロジー」。どなたでも参加可能、豪華賞品をご用意しています。",
    images: ["/ogp-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
