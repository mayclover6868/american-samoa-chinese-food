import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '美属萨摩亚中餐馆地图',
  description: '中餐馆与中式快餐馆发现与搜索平台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
