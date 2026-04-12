import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instagram広告運用サポート – クライアント向けガイド",
  description: "Instagram広告運用を「はじめての方でもわかる」ように、大事な考え方・ルール・よくある質問・テンプレートをまとめたガイドです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
