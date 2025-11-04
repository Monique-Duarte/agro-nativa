import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface SubBrand {
  id: string;
  name: string;
  logoUrl: string;
  petType?: 'Cão' | 'Gato' | 'Não Convencionais' | 'Ambos';
  description?: string;
  link?: string;
}

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  petType?: 'Cão' | 'Gato' | 'Não Convencionais' |'Ambos';
  subBrands?: SubBrand[];
  description?: string;
  link?: string;
}

interface Category {
  name: string;
  description: string;
  brands: Brand[];
}

const categoriesData: Category[] = [
    {
    name: 'Rações',
    description: 'Trabalhamos com as melhores marcas de rações secas, úmidas, suplementos e medicamentosas para garantir a nutrição ideal para o seu pet de todas as idades.',
    brands: [
      { id: 'racao-formulanatural', name: 'Fórmula Natural', logoUrl: '/images/logos/formulanatural.webp', petType: 'Ambos', link: 'https://adimax.com.br/formula-natural/' },
      { id: 'racao-guabi', name: 'Guabi Natural', logoUrl: '/images/logos/guabi.webp', petType: 'Ambos', 
        link: 'https://guabinatural.com.br/pt' },
      { id: 'racao-royal', name: 'Royal Canin', logoUrl: '/images/logos/royal.webp', petType: 'Ambos', link: 'https://www.royalcanin.com/br/' },
      { id: 'racao-premier', name: 'PremieR', logoUrl: '/images/logos/premierPet.webp', petType: 'Ambos', 
        link: 'https://premierpet.com.br/premier/' },
      { id: 'racao-golden', name: 'GoldeN', logoUrl: '/images/logos/golden.webp', petType: 'Ambos', link: 'https://premierpet.com.br/golden/' },
      { id: 'racao-granplus', name: 'Gran Plus', logoUrl: '/images/logos/granplus.webp', petType: 'Ambos', link: 'https://granplus.com.br/pt' },
      { id: 'racao-palatto', name: 'Pet Palatto', logoUrl: '/images/logos/pet-palatto.webp', petType: 'Ambos', link: 'https://andrealan.com.br/petpalatto/' },
      { id: 'racao-premiatta', name: 'Whey HD Premiatta', logoUrl: '/images/logos/premiatta.webp', petType: 'Cão', link: 'https://premiatta.com/wheyhd-caes' },
      { id: 'racao-nao-convencionaism', name: 'MegaZoo', logoUrl: '/images/logos/megazoo.webp', petType: 'Não Convencionais', link: 'https://megazoo.com.br/' },
      { id: 'racao-nao-convencionaiss', name: 'Sellecta', logoUrl: '/images/logos/sellecta.webp', petType: 'Não Convencionais', link: 'https://www.sellectarovani.com.br/' },
      { id: 'racao-nao-convencionais', name: 'Mix de sementes', logoUrl: '/images/logos/sementes.webp', petType: 'Não Convencionais', link: '' },
      { id: 'racao-nao-convencionaisp', name: 'Alimentação para Peixes', logoUrl: '/images/logos/peixes.webp', petType: 'Não Convencionais', link: '' },
    ],
  },
  {
    name: 'Saúde Pet: Anti-pulgas e Carrapatos',
    description: 'Proteja seu pet contra parasitas com soluções eficazes e seguras, desde comprimidos mensais até coleiras de longa duração.',
    brands: [
      { id: 'ap-bravecto', name: 'Bravecto', logoUrl: '/images/logos/bravecto.webp', petType: 'Ambos', subBrands: [
        { id: 'ap-bravecto-c1', name: 'Bravecto Cães (2 a 4,5kg)', logoUrl: '/images/logos/Bravecto-cao1.webp', petType: 'Cão', description: 'Proteção por até 12 semenas contra pulgas e carrapatos. Comprimido mastigável.' },
        { id: 'ap-bravecto-c2', name: 'Bravecto Cães (4,5 a 10kg)', logoUrl: '/images/logos/Bravecto-cao2.webp', petType: 'Cão', description: 'Proteção por até 12 semenas contra pulgas e carrapatos. Comprimido mastigável.' },
        { id: 'ap-bravecto-c3', name: 'Bravecto Cães (10 a 20kg)', logoUrl: '/images/logos/Bravecto-cao3.webp', petType: 'Cão', description: 'Proteção por até 12 semenas contra pulgas e carrapatos. Comprimido mastigável.' },
        { id: 'ap-bravecto-c4', name: 'Bravecto Cães (20 a 40kg)', logoUrl: '/images/logos/Bravecto-cao4.webp', petType: 'Cão', description: 'Proteção por até 12 semenas contra pulgas e carrapatos. Comprimido mastigável.' },
        { id: 'ap-bravecto-c5', name: 'Bravecto Cães (40 a 56kg)', logoUrl: '/images/logos/Bravecto-cao5.webp', petType: 'Cão', description: 'Proteção por até 12 semenas contra pulgas e carrapatos. Comprimido mastigável.' },
        { id: 'ap-bravecto-g1', name: 'Bravecto Gatos (1,2 a 2,8kg)', logoUrl: '/images/logos/Bravecto-gato1.webp', petType: 'Gato', description: 'Proteção por até 12 semenas contra pulgas. Aplicação tópica.' },
        { id: 'ap-bravecto-g2', name: 'Bravecto Gatos (2,8 a 6,25kg)', logoUrl: '/images/logos/Bravecto-gato2.webp', petType: 'Gato', description: 'Proteção por até 12 semenas contra pulgas. Aplicação tópica.' },
        { id: 'ap-bravecto-g3', name: 'Bravecto Gatos (6,25 a 12,5kg)', logoUrl: '/images/logos/Bravecto-gato3.webp', petType: 'Gato', description: 'Proteção por até 12 semenas contra pulgas. Aplicação tópica.' },
        { id: 'ap-bravecto-gplus', name: 'Bravecto Plus Gatos', logoUrl: '/images/logos/Bravecto-gato-plus.webp', petType: 'Gato', description: 'Proteção por até 12 semenas contra pulgas, sarna otodécica e vermes. Aplicação tópica.' },
      ]},
      { id: 'ap-nexgard', name: 'NexGard', logoUrl: '/images/logos/logo-nexgard.webp', petType: 'Ambos', subBrands: [
        { id: 'ap-nexgard-caes', name: 'Nexgard Cães', logoUrl: '/images/logos/nexgard_caes.webp', petType: 'Cão', description: 'Proteção mensal contra pulgas e carrapatos. Comprimido mastigável mensal.' },
        { id: 'ap-nexgard-gatos', name: 'Nexgard Combo Gatos', logoUrl: '/images/logos/nexgard-gatos2.webp', petType: 'Gato', description: 'Proteção mensal contra pulgas, sarna e vermes. Aplicação tópica mensal.' },
      ]},
      { id: 'ap-nexgardSpectra', name: 'NexGard Spectra', logoUrl: '/images/logos/NexGardSpectra.webp', petType: 'Cão', subBrands: [
        { id: 'ap-nexgard-spectra', name: 'Nexgard Spectra Cães', logoUrl: '/images/logos/nexgard_spectra.webp', petType: 'Cão', description: 'Proteção mensal contra pulgas, carrapatos, sarna e vermes. Comprimido mastigável, protege por 30 dias.' },
      ]},
      { id: 'ap-defenza', name: 'Defenza (cães)', logoUrl: '/images/logos/defenza.webp', petType: 'Cão', description: 'Comprimido para cães (35 dias).' },
      { id: 'ap-seresto', name: 'Coleira Seresto', logoUrl: '/images/logos/Seresto.webp', petType: 'Ambos', description: 'Coleira protetora para cães e gatos, protege contra pulga e carrapato por até 8 meses.' },
    ],
  },
   {
    name: 'Saúde Pet: Vermífugos',
    description: 'Mantenha a saúde intestinal do seu cão ou gato em dia com vermífugos de amplo espectro recomendados por veterinários.',
    brands: [
      { id: 'verm-endogard', name: 'Endogard', logoUrl: '/images/logos/Endogard.webp', petType: 'Cão', description: 'Vermífugo de amplo espectro para cães.' },
      { id: 'verm-vetmax', name: 'Vetmax', logoUrl: '/images/logos/vetmax.webp', petType: 'Ambos', description: 'Vermífugo oral para cães e gatos.' },
      { id: 'verm-drontal', name: 'Drontal', logoUrl: '/images/logos/drontal.webp', petType: 'Ambos', subBrands: [
         { id: 'verm-drontal-caes', name: 'Drontal Plus Cães', logoUrl: '/images/logos/drontal.webp', petType: 'Cão', description: 'Vermífugo completo para cães.' },
         { id: 'verm-drontal-gatos', name: 'Drontal Gatos', logoUrl: '/images/logos/drontal-gatos.webp', petType: 'Gato', description: 'Vermífugo eficaz para gatos.' }
      ]},
    ],
  },
  {
    name: 'Conforto',
    description: 'Tudo para o dia a dia: coleiras estilosas, guias seguras, comedouros, bebedouros, caixas de transporte, caminhas e colchonetes, tudo para garantir o descanso e o conforto que seu melhor amigo merece.',
    brands: [
        { id: 'conforto-bichocomluxo', name: 'Bicho com Luxo', logoUrl: '/images/logos/bichoComLuxo.webp', petType: 'Ambos', description: 'Caminhas confortáveis e estilosas.' },
        { id: 'conforto-coleiras', name: 'Zeedog', logoUrl: '/images/logos/zeedog.webp', petType: 'Ambos', description: 'Acessórios para cachorros e gatos com design exclusivo Zee.Dog.' },
        { id: 'conforto-coleiras', name: 'Zeecat', logoUrl: '/images/logos/zeecat.webp', petType: 'Gato', description: 'Acessórios para gatos com design exclusivo ZeeDog.' },
        { id: 'conforto-areiav', name: 'Areia Viva Verde', logoUrl: '/images/logos/vivaverde.webp', petType: 'Ambos', description: 'Feita apenas com milho e mandioca e é 100% biodegradável.' },
        { id: 'conforto-tapetea', name: 'Great Pets Areia', logoUrl: '/images/logos/greatpetsAreia.webp', petType: 'Ambos', description: 'Areia Higiênica Biodegradável Para Gatos Great Pets Fina 2kg' },
        { id: 'conforto-tapeteh', name: 'Great Pets', logoUrl: '/images/logos/greatpets.webp', petType: 'Ambos', description: 'Tapete Higiênico com carvão ativado e bambu: melhora o controle de odores e ajuda a camuflar as marcas de xix.' },
        { id: 'sanitario-gato', name: 'Sanitário Maracanã Great Pets', logoUrl: '/images/logos/sanitario.webp', petType: 'Gato', description: 'Sanitário Maracanã Great Pets com pá e tapete coletor de areia' },
        { id: 'casinhas-clickNew', name: 'Casa ClickNew', logoUrl: '/images/logos/casinha_para_pet.webp', petType: 'Cão', description: 'Casa ClickNew, feitas com materiais de alta qualidade para garantir segurança, resistência e o aconchego que seu pet merece.' },
        { id: 'viveiro-aves', name: 'Viveiro para Aves', logoUrl: '/images/logos/viveiro.webp', petType: 'Não Convencionais', description: 'Viveiro para aves.' },
        { id: 'gaiola-roedores', name: 'Gaiola para Roedores', logoUrl: '/images/logos/gaiola-roedores.webp', petType: 'Não Convencionais', description: 'gaiola para roedores.' },
        { id: 'terrario', name: 'Terrário para Répteis', logoUrl: '/images/logos/terrario.webp', petType: 'Não Convencionais', description: 'terrário para répteis.' },
    ],
  },
   {
    name: 'Brinquedos',
    description: 'Diversão garantida! Brinquedos interativos, mordedores resistentes e pelúcias para todos os portes e idades.',
    brands: [
      { id: 'brinquedo-kong', name: 'Kong', logoUrl: '/images/logos/kong.webp', petType: 'Ambos', description: 'Brinquedos duráveis e recheáveis.' },
      { id: 'brinquedo-jambo', name: 'Jambo Pet', logoUrl: '/images/logos/jambo.webp', petType: 'Cão', description: 'Brinquedos mordedor, corda, bola e pelúcia.' },
      { id: 'brinquedo-fofos', name: 'Fofos Pet', logoUrl: '/images/logos/fofos.webp', petType: 'Cão', description: 'Brinquedos mordedor, corda, bola e pelúcia.' },
      { id: 'brinquedo-aves', name: 'Brinquedos para Aves', logoUrl: '/images/logos/brinquedo-aves.webp', petType: 'Não Convencionais', description: 'Brinquedos, corda, bola e espelhos.' },
      { id: 'brinquedo-roedores', name: 'Brinquedos para Roedores', logoUrl: '/images/logos/brinquedo-roedores.webp', petType: 'Não Convencionais', description: 'Brinquedos, corda, pinus.' },
    ],
  },
  // {
  //   name: 'Acessórios',
  //   description: 'Tudo para o dia a dia: coleiras estilosas, guias seguras, comedouros, bebedouros, caixas de transporte e mais.',
  //    brands: [
  //      { id: 'acessorios-zeedog', name: 'Zee.Dog', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=ZeeDog', petType: 'Ambos', description: 'Design e qualidade em coleiras, guias e peitorais.' },
  //      { id: 'acessorios-chalesco', name: 'Chalesco', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Chalesco', petType: 'Ambos', description: 'Grande variedade de acessórios práticos.' },
  //      { id: 'acessorios-furacao', name: 'Furacão Pet', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Furacão', petType: 'Ambos', description: 'Caixas de transporte, comedouros e mais.' },
  //   ],
  // },
];

export default function ALoja() {
  const [activePetFilter, setActivePetFilter] = useState<'Todos' | 'Cão' | 'Gato' | 'Não Convencionais'>('Todos');
  const [expandedBrandId, setExpandedBrandId] = useState<string | null>(null);
  const brandRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const handleFilterChange = (filter: 'Todos' | 'Cão' | 'Gato' | 'Não Convencionais') => {
    setActivePetFilter(filter);
    setExpandedBrandId(null);
  };

  const toggleExpand = (brandId: string) => {
    if (window.innerWidth >= 768) {
       setExpandedBrandId(expandedBrandId === brandId ? null : brandId);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (expandedBrandId === null) return;
      const expandedBrandRef = brandRefs.current[expandedBrandId];
      if (expandedBrandRef && !expandedBrandRef.contains(event.target as Node)) {
        setExpandedBrandId(null);
      }
    }

    if (expandedBrandId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedBrandId]);

  const filteredCategories = categoriesData.map(category => ({
    ...category,
    brands: category.brands
      .filter(brand =>
        activePetFilter === 'Todos' ||
        brand.petType === activePetFilter ||
        brand.petType === 'Ambos' ||
        (brand.subBrands && brand.subBrands.some(sub => sub.petType === activePetFilter || sub.petType === 'Ambos'))
      )
      .map(brand => ({
        ...brand,
        subBrands: brand.subBrands?.filter(sub =>
          activePetFilter === 'Todos' || sub.petType === activePetFilter || sub.petType === 'Ambos'
        )
      }))
  })).filter(category => category.brands.length > 0);

  return (
    <>
      <Head>
        <title>Nossa Loja Pet | Rações, Saúde e Acessórios | AgroNativa Laguna</title>
        <meta name="description" content="Explore a variedade de produtos pet na AgroNativa: rações (Royal Canin, Premier, Golden...), anti-pulgas (Bravecto, Nexgard...), vermífugos, camas, brinquedos e acessórios em Laguna/SC."/>
      </Head>

      <main>
        <section className="bg-[#224724] py-16 text-white sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Nossa Loja Pet Completa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Tudo o que seu cão ou gato precisa, das melhores marcas e com a qualidade AgroNativa.
            </p>
          </div>
        </section>

        <section className="sticky top-16 z-20 border-b border-gray-200 bg-gray-100 py-4 sm:top-[72px]">
          <div className="container mx-auto flex max-w-7xl justify-center space-x-2 px-4 sm:space-x-4">
            {(['Todos', 'Cão', 'Gato'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => handleFilterChange(filterType)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-2 ${
                  activePetFilter === filterType
                    ? 'bg-[#9dd03a] text-[#224724] shadow-md ring-2 ring-[#224724] ring-offset-1'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {filterType === 'Cão' ? 'Cães' : filterType === 'Gato' ? 'Gatos' : 'Todos'}
              </button>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl space-y-16 px-4">
            {filteredCategories.length === 0 && (
                 <div className="text-center p-8 text-gray-600 text-xl italic">
                     Nenhum produto encontrado para o filtro &quot;{activePetFilter}&quot;.
                 </div>
            )}
            {filteredCategories.map((category, index) => (
              <div key={category.name} className={`rounded-lg border border-gray-200 p-6 sm:p-8 shadow-sm ${index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <h2 className="text-3xl font-bold tracking-tight text-[#224724]">
                  {category.name}
                </h2>
                <p className="mt-4 text-lg leading-7 text-gray-600">
                  {category.description}
                </p>

                {category.brands && category.brands.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-[#224724]">Produtos em destaque:</h3>
                    {category.name === 'Rações' && (
                       <p className="my-4 text-base text-center text-gray-500 font-semibold">
                          Clique para saber mais sobre as empresas
                       </p>
                    )}
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {category.brands.map((brand) => {
                        const brandLink = brand.link || '#';
                        const isExternalLink = brandLink.startsWith('http') || brandLink.startsWith('https');

                        return (
                          <div key={brand.id} className="relative flex flex-col" ref={(el) => { brandRefs.current[brand.id] = el; }}>
                            <div
                              {...(brand.subBrands && brand.subBrands.length > 0 ? {
                                   className: `group flex h-36 w-full flex-col items-center justify-center rounded-md border-2 bg-white p-2 text-center transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#9dd03a] focus:ring-offset-1 relative
                                              ${expandedBrandId === brand.id ? 'border-[#9dd03a] shadow-lg' : 'border-transparent hover:border-[#9dd03a] hover:shadow-lg'}
                                              md:cursor-pointer`,
                                   onClick: () => toggleExpand(brand.id),
                                   role: "button",
                                   tabIndex: 0,
                                   'aria-expanded': expandedBrandId === brand.id,
                                   'aria-controls': `sub-brands-${brand.id}`
                              } : {
                                  className: `group flex h-36 w-full flex-col items-center justify-center rounded-md border-2 bg-white p-2 text-center transition duration-300 ease-in-out border-transparent hover:border-[#9dd03a] hover:shadow-lg relative cursor-default`
                              })}
                            >
                              {category.name === 'Rações' && (
                                isExternalLink ? (
                                    <a href={brandLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Saiba mais sobre ${brand.name}`}></a>
                                ) : (
                                    <Link href={brandLink} className="absolute inset-0 z-10" aria-label={`Saiba mais sobre ${brand.name}`}></Link>
                                )
                              )}
                              <div className="flex h-[80%] w-full items-center justify-center">
                                <Image
                                  src={brand.logoUrl}
                                  alt={`Logo ${brand.name}`}
                                  width={150}
                                  height={90}
                                  className="object-contain max-h-full max-w-full"
                                  loading="lazy"
                                />
                              </div>
                              <span className="mt-1 block w-full truncate px-1 text-xs font-medium text-gray-600 group-hover:text-[#224724]">
                                 {brand.name.includes('(') ? brand.name.split(' (')[0] : brand.name}
                              </span>

                              {brand.subBrands && brand.subBrands.length > 0 && (
                                 <span className="absolute bottom-1 right-1 hidden text-gray-400 group-hover:text-[#224724] md:block">
                                     {expandedBrandId === brand.id ? ( <ChevronUpIcon className="h-4 w-4" /> ) : ( <ChevronDownIcon className="h-4 w-4" /> )}
                                 </span>
                               )}
                            </div>

                            {expandedBrandId === brand.id && brand.subBrands && brand.subBrands.length > 0 && (
                              <div
                                id={`sub-brands-${brand.id}`}
                                className="absolute top-full left-0 z-20 mt-1 hidden w-auto min-w-full rounded-lg border border-[#9dd03a] bg-white p-4 shadow-xl md:block md:w-[200%] md:max-w-md animate-fade-in"
                              >
                                <h4 className="mb-3 border-b pb-2 text-base font-bold text-[#224724]">Linhas / Produtos {brand.name}:</h4>
                                <div className="max-h-60 space-y-3 overflow-y-auto pr-2">
                                  {brand.subBrands.map((subBrand) => (
                                      <div key={subBrand.id} className="flex items-start space-x-3 border-b pb-2 last:border-b-0">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded border p-1">
                                          <Image
                                            src={subBrand.logoUrl}
                                            alt={`Logo ${subBrand.name}`}
                                            width={90}
                                            height={60}
                                            className="object-contain"
                                            loading="lazy"
                                          />
                                        </div>
                                        <div>
                                          <p className="text-sm font-semibold text-gray-800">{subBrand.name}</p>
                                          {subBrand.description && (
                                            <p className="mt-0.5 text-xs text-gray-600">{subBrand.description}</p>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  {brand.subBrands.length === 0 && (
                                    <p className="text-sm text-gray-500 italic">Nenhuma linha encontrada para o filtro &quot;{activePetFilter}&quot;.</p>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-sm text-gray-500 text-right italic">... e muitas outras disponíveis na loja!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 text-center sm:py-24 bg-gray-50">
           <div className="container mx-auto max-w-7xl px-4">
               <h2 className="text-2xl font-semibold tracking-tight text-[#224724] sm:text-3xl">
                   Visite a AgroNativa!
               </h2>
               <p className="mt-4 text-lg text-gray-600">
                   Venha conhecer nossa loja física e confira a variedade completa de produtos para seu pet e para o seu lar.
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