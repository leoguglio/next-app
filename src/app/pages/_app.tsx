import { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href="/"><a>Inicio</a></Link>
        <Link href="/nosotros"><a>Nosotros</a></Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;