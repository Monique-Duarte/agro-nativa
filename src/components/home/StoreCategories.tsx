import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Petshop',
    href: '/petshop',
    icon: (
      <Image
        src="/images/petshop.png"
        alt="Ícone de Petshop"
        width={40}
        height={40}
        className="object-contain"
      />
    ),
  },
  {
    name: 'Jardinagem',
    href: '/a-loja', // Todos podem apontar para a mesma página "A Loja"
    icon: (
      <Image
        src="/images/jardinagem.png"
        alt="Ícone de Jardinagem"
        width={40}
        height={40}
        className="object-contain"
      />
    ),
  },
  {
    name: 'Ferramentas',
    href: '/a-loja',
    icon: (
      <Image
        src="/images/ferramentas.png"
        alt="Ícone de Ferramentas"
        width={40}
        height={40}
        className="object-contain"
      />
    ),
  },
];

export default function StoreCategories() {
  return (
    <section className="py-8 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
            Uma Loja Completa para seu Lar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Petshop, ferramentas e utensílios, temos tudo o que você precisa para sua casa.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-[80vw]">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#9dd03a] hover:shadow-lg"
            >
              <div className="rounded-full bg-[#ececec] p-4 text-white transition-colors group-hover:bg-[#9dd03a]">
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