import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { LayoutProvider } from '@/contextStore/layout-context';

import About from './_components/about';
import Copyright from './_components/copyright';
import Menu from './_components/menu';
import SlidingLayout from './_components/sliding-layout';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Documentation: Amorphous Body 🪩 ekezia',
  description:
    'Amorphous Body is an avant-garde experimentation and live performances in conjunction of Asian Avant-Garde Film Festival in M+ Museum (Hong Kong) on 31 May 2024, starting with Baby Diwata, a Manila-born DJ known for genre-fluid selections, and Loveless, a Hong Kong-born artist who brings a non-conforming mix to the dance floor. Experimental visuals will be created in live-time by Elizabeth Kezia Widjaja, an Indonesia-born and raised artist and photographer.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  // pathname: string;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>
          <SlidingLayout>            
            <Menu />
            {children}
            <About />
            <Copyright />
          </SlidingLayout>
        </LayoutProvider>
      </body>
    </html>
  );
}
