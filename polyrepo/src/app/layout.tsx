import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { fontSans } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Next.js - Proof of Concept',
  description: 'Next.js - Proof of Concept',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='px-8'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
