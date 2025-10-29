import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });
const BASE_URL = 'https://agronativa.vercel.app/';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageTitle = "AgroNativa Laguna | Petshop, Ferramentas e Utensílios";
  const pageDescription = "Tudo para seu pet, casa e jardim no bairro Mar Grosso. Planos de banho e tosa com leva e traz.";
  const ogImage = `${BASE_URL}/logoO.png`;
  const pageUrl = `${BASE_URL}${router.pathname}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AgroNativa Laguna" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <main className={inter.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
}