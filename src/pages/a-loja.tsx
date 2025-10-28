import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface SubBrand {
  id: string;
  name: string;
  logoUrl: string;
  petType?: 'Cão' | 'Gato' | 'Ambos';
  description?: string;
}

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  petType?: 'Cão' | 'Gato' | 'Ambos';
  subBrands?: SubBrand[];
  description?: string;
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
      { id: 'racao-formulanatural', name: 'Fórmula Natural', logoUrl: '/images/logos/formulanatural.webp', petType: 'Ambos' },
      { id: 'racao-premier', name: 'Premier Pet', logoUrl: '/images/logos/premier.webp', petType: 'Ambos', subBrands: [
        { id: 'racao-premier-premier', name: 'Premier Raças/Ambientes', logoUrl: '/images/logos/premierpet.webp', petType: 'Ambos', description: 'Linhas Super Premium específicas para raças, portes e ambientes internos.' },
        { id: 'racao-premier-golden', name: 'Golden Seleção Natural/Fórmula', logoUrl: '/images/logos/golden.webp', petType: 'Ambos', description: 'Linhas Premium Especial com ingredientes selecionados e ótimo custo-benefício.' }
      ]},
      { id: 'racao-guabi', name: 'Guabi Natural', logoUrl: '/images/logos/guabi.webp', petType: 'Ambos' },
      { id: 'racao-royal', name: 'Royal Canin', logoUrl: '/images/logos/royal.webp', petType: 'Ambos', description: 'Nutrição sob medida para raças, portes, idades e condições específicas.'},
      { id: 'racao-granplus', name: 'Gran Plus', logoUrl: '/images/logos/granplus.png', petType: 'Ambos' },
      { id: 'racao-palatto', name: 'Pet Palatto', logoUrl: '/images/logos/pet-palatto.webp', petType: 'Ambos' },
      { id: 'racao-premiatta', name: 'Whey HD Premiatta', logoUrl: '/images/logos/premiatta.webp', petType: 'Cão' },
    ],
  },
  {
    name: 'Saúde Pet: Anti-pulgas e Carrapatos',
    description: 'Proteja seu pet contra parasitas com soluções eficazes e seguras, desde comprimidos mensais até coleiras de longa duração.',
    brands: [
      { id: 'ap-bravecto', name: 'Bravecto', logoUrl: '/images/logos/bravecto.webp', petType: 'Ambos', subBrands: [
        { id: 'ap-bravecto-caes-1', name: 'Bravecto Cães - De 2 a 4,5kg', logoUrl: '/images/logos/Bravecto-cao1.webp', petType: 'Cão', description: '1 comprimido mastigável = 12 semanas de proteção (Pulgas/Carrapatos).' },
        { id: 'aap-bravecto-caes-2', name: 'Bravecto Cães - De 4,5 a 10kg', logoUrl: '/images/logos/Bravecto-cao2.webp', petType: 'Cão', description: '1 comprimido mastigável = 12 semanas de proteção (Pulgas/Carrapatos).' },
        { id: 'ap-bravecto-caes-3', name: 'Bravecto Cães - De 10 a 20kg', logoUrl: '/images/logos/Bravecto-cao3.webp', petType: 'Cão', description: '1 comprimido mastigável = 12 semanas de proteção (Pulgas/Carrapatos).' },
        { id: 'ap-bravecto-caes-4', name: 'Bravecto Cães - De 20 a 40kg', logoUrl: '/images/logos/Bravecto-cao4.webp', petType: 'Cão', description: '1 comprimido mastigável = 12 semanas de proteção (Pulgas/Carrapatos).' },
        { id: 'ap-bravecto-caes-5', name: 'Bravecto Cães - De 40 a 56kg', logoUrl: '/images/logos/Bravecto-cao5.webp', petType: 'Cão', description: '1 comprimido mastigável = 12 semanas de proteção (Pulgas/Carrapatos).' }, 

        { id: 'ap-bravecto-gatos-1', name: 'Bravecto Gatos - De 1,2 a 2,8kg', logoUrl: '/images/logos/bravecto-gato1.webp', petType: 'Gato', description: 'Aplicação tópica para gatos, 12 semanas de proteção.' },
        { id: 'ap-bravecto-gatos-2', name: 'Bravecto Gatos - De 2,8 a 6,25kg', logoUrl: '/images/logos/bravecto-gato2.webp', petType: 'Gato', description: 'Aplicação tópica, dura 12 semanas.' },
        { id: 'ap-bravecto-gatos-3', name: 'Bravecto Gatos - De 6,25k a 12,5g', logoUrl: '/images/logos/bravecto-gato3.webp', petType: 'Gato', description: 'Aplicação tópica, dura 12 semanas.' },
        { id: 'ap-bravecto-gatos-plus', name: 'Bravecto Gatos Plus - De 2,8k a 6,25g', logoUrl: '/images/logos/bravecto-gato-plus.webp', petType: 'Gato', description: 'Aplicação tópica, dura 12 semanas. Combate pulgas, sarna de ouvido e vermes' },
      ]},
      { id: 'ap-nexgard', name: 'NexGard', logoUrl: '/images/logos/logo-nexgard.webp', petType: 'Ambos', subBrands: [
        { id: 'ap-nexgard-caes', name: 'Nexgard Cães', logoUrl: '/images/logos/nexgard_caes.webp', petType: 'Cão', description: 'Comprimido mastigável mensal contra pulgas e carrapatos.' },
        { id: 'ap-nexgard-gatos1', name: 'Nexgard Combo Gatos. De 0,8 a 2,5kg', logoUrl: '/images/logos/nexgard-gatos1.webp', petType: 'Gato', description: 'Aplicação tópica mensal contra pulgas, carrapatos e vermes.' },
        { id: 'ap-nexgard-gatos2', name: 'Nexgard Combo Gatos. De 2,5kg a 7,5kg', logoUrl: '/images/logos/nexgard-gatos2.webp', petType: 'Gato', description: 'Aplicação tópica mensal, combate pulgas, sarna de ouvido e vermes.' },
        { id: 'ap-nexgard-spectra', name: 'Nexgard Spectra Cães', logoUrl: '/images/logos/nexgard_spectra.webp', petType: 'Cão', description: 'Comprimido mastigável mensal completo (pulgas, carrapatos, vermes).' }
      ]},
      { id: 'ap-defenza', name: 'Defenza (cães)', logoUrl: '/images/logos/defenza.webp', petType: 'Cão', description: 'Comprimido para cães, proteção contra pulgas e carrapatos por até 35 dias.' },
      { id: 'ap-seresto', name: 'Coleira Seresto', logoUrl: '/images/logos/seresto.webp', petType: 'Ambos', description: 'Coleira que protege cães e gatos contra pulgas e carrapatos por até 8 meses.' },
    ],
  },
  {
    name: 'Saúde Pet: Vermífugos',
    description: 'Mantenha a saúde intestinal do seu cão ou gato em dia com vermífugos de amplo espectro recomendados por veterinários.',
    brands: [
      { id: 'verm-endogard', name: 'Endogard', logoUrl: '/images/logos/endogard.webp', petType: 'Cão', description: 'Vermífugo de amplo espectro para cães.' },
      { id: 'verm-vetmax', name: 'Vetmax', logoUrl: '/images/logos/vetmax.webp', petType: 'Ambos', description: 'Vermífugo oral para cães e gatos.' },
      { id: 'verm-drontal', name: 'Drontal', logoUrl: '/images/logos/drontal.webp', petType: 'Ambos', subBrands: [
         { id: 'verm-drontal-caes', name: 'Drontal Plus Cães', logoUrl: '/images/logos/drontal.webp', petType: 'Cão', description: 'Vermífugo completo para cães.' }, // Ajuste logo se tiver específico
         { id: 'verm-drontal-gatos', name: 'Drontal Gatos', logoUrl: '/images/logos/drontal-gatos.webp', petType: 'Gato', description: 'Vermífugo eficaz para gatos.' }
      ]},
    ],
  },
  {
    name: 'Conforto',
    description: 'Caminhas, colchonetes e mantas para garantir o descanso e o conforto que seu melhor amigo merece.',
    brands: [
        { id: 'conforto-cama1', name: 'Bicho com Luxo', logoUrl: '/images/logos/bichoComLuxo.webp', petType: 'Ambos', description: 'Caminhas confortáveis e estilosas.' },
        { id: 'conforto-tapete1', name: 'Tapete Higiênico B', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Tapete+B', petType: 'Ambos', description: 'Alta absorção para manter a casa limpa.' },
        // Adicione mais marcas reais aqui
    ],
  },
   {
    name: 'Brinquedos',
    description: 'Diversão garantida! Brinquedos interativos, mordedores resistentes e pelúcias para todos os portes e idades.',
    brands: [
       { id: 'brinquedo-kong', name: 'Kong', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Kong', petType: 'Ambos', description: 'Brinquedos duráveis e recheáveis.' },
       { id: 'brinquedo-petstages', name: 'Petstages', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Petstages', petType: 'Ambos', description: 'Brinquedos inovadores para cães e gatos.' },
       { id: 'brinquedo-buddytoys', name: 'Buddy Toys', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Buddy+Toys', petType: 'Ambos', description: 'Mordedores resistentes e divertidos.' },
        // Adicione mais marcas reais aqui
    ],
  },
  {
    name: 'Acessórios',
    description: 'Tudo para o dia a dia: coleiras estilosas, guias seguras, comedouros, bebedouros, caixas de transporte e mais.',
     brands: [
       { id: 'acessorios-zeedog', name: 'Zee.Dog', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=ZeeDog', petType: 'Ambos', description: 'Design e qualidade em coleiras, guias e peitorais.' },
       { id: 'acessorios-chalesco', name: 'Chalesco', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Chalesco', petType: 'Ambos', description: 'Grande variedade de acessórios práticos.' },
       { id: 'acessorios-furacao', name: 'Furacão Pet', logoUrl: 'https://placehold.co/120x60/cccccc/ffffff?text=Furacão', petType: 'Ambos', description: 'Caixas de transporte, comedouros e mais.' },
        // Adicione mais marcas reais aqui
    ],
  },
];
// --- Fim dos Dados ---

export default function ALoja() {
  const [activePetFilter, setActivePetFilter] = useState<'Todos' | 'Cão' | 'Gato'>('Todos');
  const [expandedBrandId, setExpandedBrandId] = useState<string | null>(null);

  const toggleExpand = (brandId: string) => {
    setExpandedBrandId(expandedBrandId === brandId ? null : brandId);
  };

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
                onClick={() => setActivePetFilter(filterType)}
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
                     Nenhum produto encontrado para o filtro "{activePetFilter}".
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
                    <h3 className="text-lg font-semibold text-[#224724]">Algumas das Marcas que Trabalhamos:</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {category.brands.map((brand) => (
                        <div key={brand.id} className="relative">
                          <button
                            onClick={() => brand.subBrands && brand.subBrands.length > 0 && toggleExpand(brand.id)}
                            className={`group flex h-28 w-full flex-col items-center justify-center rounded-md border-2 bg-white p-2 text-center transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#9dd03a] focus:ring-offset-1
                                        ${expandedBrandId === brand.id ? 'border-[#9dd03a] shadow-lg' : 'border-transparent hover:border-[#9dd03a] hover:shadow-lg'} // Borda transparente por padrão, verde no hover/ativo
                                        ${(!brand.subBrands || brand.subBrands.length === 0) ? 'cursor-default' : 'cursor-pointer'}`}
                            disabled={!brand.subBrands || brand.subBrands.length === 0}
                            aria-expanded={expandedBrandId === brand.id}
                            aria-controls={`sub-brands-${brand.id}`}
                          >
                            <div className="flex h-[80%] w-full items-center justify-center">
                              <Image
                                src={brand.logoUrl}
                                alt={`Logo ${brand.name}`}
                                width={150} height={90}
                                className="object-contain max-h-full max-w-full"
                              />
                            </div>
                            <span className="mt-1 block w-full truncate px-1 text-xs font-medium text-gray-600 group-hover:text-[#224724]">
                               {brand.name.includes('(') ? brand.name.split(' (')[0] : brand.name}
                            </span>
                             {brand.subBrands && brand.subBrands.length > 0 && (
                               <span className="absolute bottom-1 right-1 text-gray-400 group-hover:text-[#224724]">
                                   {expandedBrandId === brand.id ? ( <ChevronUpIcon className="h-4 w-4" /> ) : ( <ChevronDownIcon className="h-4 w-4" /> )}
                               </span>
                             )}
                          </button>

                          {expandedBrandId === brand.id && brand.subBrands && brand.subBrands.length > 0 && (
                            <div
                              id={`sub-brands-${brand.id}`}
                              className="absolute left-0 z-20 mt-1 w-full max-w-sm transform rounded-lg border border-[#9dd03a] bg-white p-4 shadow-xl sm:w-[250%] md:w-[300%] lg:max-w-md xl:max-w-lg"
                            >
                              <h4 className="mb-3 border-b pb-2 text-base font-bold text-[#224724]">Linhas / Produtos {brand.name}:</h4>
                              <div className="max-h-60 space-y-6 overflow-y-auto"> 
                                {brand.subBrands 
                                  .map((subBrand) => (
                                    <div key={subBrand.id} className="flex items-start space-x-3 border-b pb-2 last:border-b-0">
                                      <div className="flex h-22 w-16 shrink-0 items-center justify-center rounded border p-1">
                                        <Image
                                          src={subBrand.logoUrl}
                                          alt={`Logo ${subBrand.name}`}
                                          width={50} height={90}
                                          className="object-contain"
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
                                   <p className="text-sm text-gray-500 italic">Nenhuma linha encontrada para "{activePetFilter}".</p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
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

// Não se esqueça de adicionar a animação 'fadeIn' no seu tailwind.config.ts se quiser usar