import Head from 'next/head';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import StoreCategories from '@/components/home/StoreCategories';
import About from '@/components/home/About';
import Location from '@/components/home/Location';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agro Nativa: Petshop e Banho e Tosa em Laguna - SC</title>
        <meta
          name="description"
          content="Tudo para seu pet, casa e jardim no bairro Mar Grosso. Planos de banho e tosa com leva e traz."
        />
      </Head>
      
      <Hero />
      <Services />
      <StoreCategories />
      <About />
      <Location />
    </>
  );
}