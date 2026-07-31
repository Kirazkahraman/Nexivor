import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veridora',
  description: 'AI destekli akıllı personel giriş ve güvenlik sistemi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
