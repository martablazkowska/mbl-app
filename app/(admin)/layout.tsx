'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import Header from '@/components/common/Header/Header';

import '../globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />

          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
