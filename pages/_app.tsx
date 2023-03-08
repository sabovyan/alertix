import { AppProps } from 'next/app';
import RootLayout from '../layouts/RootLayout';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
