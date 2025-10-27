import Head from 'next/head';
import Link from 'next/link';
import { WrenchScrewdriverIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function ALoja() {
  return (
    <>
      <Head>
        <title>A Loja | Ferramentas e Utensílios | AgroNativa Laguna</title>
        <meta
          name="description"
          content="Além do Petshop, encontre na AgroNativa ferramentas manuais, elétricas, utensílios domésticos e muito mais em Laguna/SC."
        />
      </Head>

      <main>
        <section className="bg-[#224724] py-16 text-white sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Nossa Loja: Além do Pet
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A AgroNativa oferece uma variedade de produtos para facilitar o seu dia a dia.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#224724] flex gap-x-3">
                <WrenchScrewdriverIcon className="h-8 w-8 text-[#9dd03a]" />
                  Ferramentas
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Encontre as ferramentas certas para os seus projetos e manutenções. Oferecemos uma seleção de itens manuais e básicos para diversas necessidades.
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-600">
                  <li>Ferramentas manuais (chaves de fenda, martelos, alicates, etc.)</li>
                  <li>Itens para pequenos reparos domésticos</li>
                  <li>Acessórios básicos para manutenção</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#224724] flex gap-x-3">
                 <SparklesIcon className="h-8 w-8 text-[#9dd03a]" />
                  Utensílios para o Lar
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Produtos práticos para facilitar as tarefas diárias em casa, desde a organização até pequenos acessórios e chuveiros.
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-600">
                  <li>Acessórios para casa</li>
                  <li>Chuveiros e acessórios relacionados</li>
                  <li>Itens para organização</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

         <section className="py-8 text-center sm:py-24 bg-gray-50">
            <div className="container mx-auto max-w-7xl px-4">
                 <h2 className="text-2xl font-semibold tracking-tight text-[#224724] sm:text-3xl">
                   Venha Conferir Nossa Variedade!
                 </h2>
                 <p className="mt-4 text-lg text-gray-600">
                   Visite nossa loja física para explorar todos os produtos disponíveis em ferramentas, utensílios e muito mais.
                 </p>
                 <Link
                    href="/contato"
                    className="mt-8 inline-block rounded-full bg-[#9dd03a] px-8 py-3 text-lg font-semibold text-[#224724] shadow-sm transition-transform hover:scale-105"
                  >
                   Ver Endereço e Horário
                 </Link>
            </div>
        </section>

      </main>
    </>
  );
}