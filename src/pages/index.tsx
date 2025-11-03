import Head from 'next/head';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import StoreCategories from '@/components/home/StoreCategories';
import About from '@/components/home/About';
import Location from '@/components/home/Location';
import InstagramCTA from '@/components/home/InstagramCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>AgroNativa Laguna | Petshop, Ferramentas e Utensílios</title>
        <meta
          name="description"
          content="Tudo para seu pet, casa e jardim no bairro Mar Grosso. Planos de banho e tosa com leva e traz."
        />
      </Head>
      
      <Hero />
      <Services />
      <StoreCategories />
      <About />
      <InstagramCTA />
      <Location />
    </>
  );
}