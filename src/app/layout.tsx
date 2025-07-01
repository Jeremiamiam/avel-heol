import React from 'react';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
// Removed duplicate imports below
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Providers from './providers';
// import DesignSystemPanel from '@/components/ui/DesignSystemPanel';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Avel Heol - Expert Solaire en Bretagne',
  description: 'Kits solaires haute performance pour l\'autoconsommation. Expertise bretonne, installation simple, économies garanties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="synthwave">
      <body className={`${inter.className} ${montserrat.variable} tracking-[0.11em] font-sans`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
        {/* Panel removed from layout */}
      </body>
    </html>
  );
}
