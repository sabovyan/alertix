// import type { Metadata } from 'next';
// import Script from 'next/script';

import { PropsWithChildren } from 'react';

// import { Nav } from '@/components/Nav/Nav';
// // import { ApplicationStatusNotifier } from '@/components/ApplicationStatusNotifier';

// import './global.css';

// const title = 'Next.js';

// export const metadata: Metadata = {
//   title,
//   colorScheme: 'light dark',
//   authors: [{ name: 'Sargis Abovyan', url: 'https://github.com/sabovyan' }],
//   description: `${title} connects to notion database and create daily notifications based on them`,
// };

export default function RootLayout({ children }: PropsWithChildren) {
  return <main>{children}</main>;
  // <html lang="en">
  //    <body>
  //      <ApplicationStatusNotifier />
  //      <main>
  //        <aside>
  //          <Nav />
  //        </aside>
  //      </main>
  //      <Script src={'./registerWorker.js'} />
  //    </body>
  //  </html>
}
