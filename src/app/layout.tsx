import type { Metadata } from "next";
import "./globals.css";

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: "お客様ガイド｜Instagram広告 運用代行（株式会社しっとる）",
  description: "広告を始める前の準備、始まってからのお願い、料金、よくある質問、連絡テンプレートをまとめたお客様向けガイドです。",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
