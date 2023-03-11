import type { Metadata } from 'next';
import Script from 'next/script';

import { Nav } from '@/components/Nav/Nav';
// import { ApplicationStatusNotifier } from '@/components/ApplicationStatusNotifier';

import './global.css';

const title = 'Next.js';

export const metadata: Metadata = {
  title,
  colorScheme: 'light dark',
  authors: [{ name: 'Sargis Abovyan', url: 'https://github.com/sabovyan' }],
  description: `${title} connects to notion database and create daily notifications based on them`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ApplicationStatusNotifier /> */}
        <main>
          <aside>
            <Nav />
          </aside>
          {children}
        </main>
        <Script src={'./registerWorker.js'} />
      </body>
    </html>
  );
}
