'use client';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

import Header from '@/components/common/Header/Header';

// These styles apply to every route in the application
import '../globals.css';
import LoginBtn from '@/components/rest/LoginBtn/LoginBtn';

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
