import Link from "next/link";

const serviceList = [
  {
    title: 'Planos de Banho',
    description:
      'Planos semanais (a partir de R$ 214,00) e quinzenais (a partir de R$ 121,00). Os valores são definidos conforme o porte e a raça.',
    href: '/banho-e-tosa',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: 'Leva e Traz',
    description:
      'Para sua comodidade, buscamos e levamos seu pet para o banho com total segurança. Consulte a área de cobertura do nosso serviço.',
    href: '/contato', // Pode ser o WhatsApp também
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h1.5a1.125 1.125 0 011.125 1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v7.5c0 .621.504 1.125 1.125 1.125H5.25m13.5-9H18v.75c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125v-.75H21m-12-3h3.375c.621 0 1.125.504 1.125 1.125V12m-1.125 0c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V9.75M9 12h3.375c.621 0 1.125.504 1.125 1.125V12m0 0c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V9.75M9 12H6.375c-.621 0-1.125.504-1.125 1.125V12m0 0c0 .621.504 1.125 1.125 1.125h.75c.621 0 1.125-.504 1.125-1.125V9.75M9 12v3M3 9v3m15-3v3"
        />
      </svg>
    ),
  },
  {
    title: 'Banhos Terapêuticos',
    description:
      'Cuidados especiais para pets com dermatite ou pele sensível. Utilizamos shampoos de tratamento para garantir a saúde e bem-estar.',
    href: '/banho-e-tosa',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    // Usamos 'bg-gray-50' para dar um leve contraste com o resto da página
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Título da Seção */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-green-dark sm:text-4xl">
            Tudo para o seu Pet
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Foco no bem-estar, da saúde ao conforto.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviceList.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-brand-green-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-block font-medium text-brand-green-dark hover:text-brand-green-light"
              >
                Saiba Mais &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}