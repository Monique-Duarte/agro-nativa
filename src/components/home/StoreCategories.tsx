// src/components/home/StoreCategories.tsx
import Link from 'next/link';

// Lista das categorias da loja
const categories = [
  {
    name: 'Petshop',
    href: '/petshop',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    name: 'Jardinagem',
    href: '/a-loja', // Todos podem apontar para a mesma página "A Loja"
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
        />
      </svg>
    ),
  },
  {
    name: 'Piscina',
    href: '/a-loja',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12H.75m.386-6.364l1.591 1.591M12 6.75A5.25 5.25 0 006.75 12a5.25 5.25 0 005.25 5.25a5.25 5.25 0 005.25-5.25A5.25 5.25 0 0012 6.75z"
        />
      </svg>
    ),
  },
  {
    name: 'Ferramentas',
    href: '/a-loja',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 10.5l-3.75 3.75a.75.75 0 000 1.061l.5.5a.75.75 0 001.06 0l3.75-3.75M7.5 10.5L14.25 3.75l5.107 5.107L10.5 17.75M7.5 10.5l6 6M10.5 17.75l-3.75 3.75a.75.75 0 01-1.06 0l-.5-.5a.75.75 0 010-1.061L9.25 14.25"
        />
      </svg>
    ),
  },
];

export default function StoreCategories() {
  return (
    // Seção com fundo branco
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Título da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
            Uma Loja Completa para seu Lar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Além do Petshop, temos tudo o que você precisa para seu jardim,
            piscina e casa.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#9dd03a] hover:shadow-lg"
            >
              <div className="rounded-full bg-[#224724] p-4 text-white transition-colors group-hover:bg-[#9dd03a]">
                {category.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#224724]">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}