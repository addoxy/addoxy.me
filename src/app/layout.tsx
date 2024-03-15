import '../styles/globals.css';
import PageWrapper from '@/components/PageWrapper';
import { cn } from '@/utils/utils';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Addoxy',
  description: 'Portfolio website',
};

export const viewport: Viewport = {
  themeColor: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-zinc-950 text-sm text-zinc-50 antialiased',
          inter.className,
          process.env.NODE_ENV === 'development' && 'debug-screens'
        )}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
