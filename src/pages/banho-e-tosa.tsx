import Head from "next/head";
import Link from "next/link";

export default function BanhoETosa() {
  const WHATSAPP_LINK =
    "https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20banho%20e%20tosa.";

  return (
    <>
      <Head>
        <title>
          Planos de Banho e Tosa com Leva e Traz | AgroNativa Laguna
        </title>
        <meta
          name="description"
          content="Planos semanais e quinzenais de banho e tosa para cães e gatos em Laguna/SC. Inclui benefícios exclusivos e serviço de leva e traz."
        />
      </Head>

      <main>
        <section className="bg-[#224724] py-16 text-white sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Banho e Tosa com Carinho e Comodidade
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Mantenha seu pet sempre limpo e cheiroso com nossos planos e
              serviço de leva e traz no Mar Grosso.
            </p>
          </div>
        </section>

        {/* Seção Sobre os Planos */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
                Nossos Planos de Cuidado
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Escolha a frequência ideal para seu pet e aproveite benefícios
                exclusivos. Valores definidos conforme porte e raça.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 mx-auto justify-items-center">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm w-[80%]">
                <img
                  src="/images/banho-pet.jpg"
                  alt="Cachorro salsicha tomando banho com espuma"
                  className="h-56 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#224724]">
                    Plano Quinzenal
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-[#224724]">
                    A partir de R$ 121,00
                    <span className="text-base font-normal text-gray-500">
                      /mês
                    </span>
                  </p>
                  <p className="mt-3 text-gray-600">
                    Ideal para manter a higiene do seu pet em dia, com 2 banhos
                    por mês.
                  </p>
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="mt-5 block w-full rounded-full bg-[#9dd03a] px-6 py-3 text-center font-semibold text-[#224724] shadow-sm hover:bg-[#224724] hover:text-white"
                  >
                    Consultar Valor
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm w-[80%]">
                <img
                  src="/images/banho-pet2.jpg"
                  alt="Cachorro sorrindo na banheira com pato de borracha na cabeça"
                  className="h-56 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#224724]">
                    Plano Semanal
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-[#224724]">
                    A partir de R$ 214,00
                    <span className="text-base font-normal text-gray-500">
                      /mês
                    </span>
                  </p>
                  <p className="mt-3 text-gray-600">
                    Perfeito para pets que precisam de cuidados mais frequentes,
                    com 4 banhos por mês.
                  </p>
                  <Link
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="mt-5 block w-full rounded-full bg-[#9dd03a] px-6 py-3 text-center font-semibold text-[#224724] shadow-sm hover:bg-[#224724] hover:text-white"
                  >
                    Consultar Valor
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              * Serviço de Leva e Traz não incluso nos planos (consultar valor e
              área).
            </p>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            {/* Grid para Título/Descrição + Imagem */}
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Coluna 1: Título e Descrição */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
                  Vantagens Exclusivas dos Planos
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Mais do que banhos, um cuidado completo com a saúde do seu pet
                  em parceria com o{" "}
                  <strong className="text-[#224724]">
                    Hospital Veterinário Vital (unidade Laguna)
                  </strong>
                  .
                </p>
              </div>

              {/* Coluna 2: Imagem da Parceria */}
              <div className="flex justify-center">
                <img
                  src="/images/parceria-vital.png"
                  alt="Parceria AgroNativa e Hospital Veterinário Vital"
                  className="max-h-60 w-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Lista de Benefícios (agora abaixo da imagem/título) */}
            <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start gap-x-3">
                <CheckIcon className="mt-1 h-6 w-6 flex-none text-[#9dd03a]" />
                <span>
                  <strong className="text-[#224724]">
                    Consultas Ilimitadas:
                  </strong>{" "}
                  Após o 1º mês pago (clínico geral, horário comercial).
                </span>
              </li>
              <li className="flex items-start gap-x-3">
                <CheckIcon className="mt-1 h-6 w-6 flex-none text-[#9dd03a]" />
                <span>
                  <strong className="text-[#224724]">
                    Atestados Gratuitos:
                  </strong>{" "}
                  Para viagens nacionais.
                </span>
              </li>
              <li className="flex items-start gap-x-3">
                <CheckIcon className="mt-1 h-6 w-6 flex-none text-[#9dd03a]" />
                <span>
                  <strong className="text-[#224724]">
                    Controle de Vacinação:
                  </strong>{" "}
                  Acompanhamento da carteira.
                </span>
              </li>
              <li className="flex items-start gap-x-3">
                <CheckIcon className="mt-1 h-6 w-6 flex-none text-[#9dd03a]" />
                <span>
                  <strong className="text-[#224724]">
                    Descontos em Serviços Vital:
                  </strong>{" "}
                  10% em Raio-X, ECG, exames, procedimentos e internações.
                </span>
              </li>
              <li className="flex items-start gap-x-3">
                <CheckIcon className="mt-1 h-6 w-6 flex-none text-[#9dd03a]" />
                <span>
                  <strong className="text-[#224724]">
                    Desconto em Vacinas (AgroNativa):
                  </strong>{" "}
                  10% à vista após 1 ano de fidelização.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Seção Banho Terapêutico */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

              <div className="space-y-6 md:col-start-1 md:row-start-1">
                <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
                  Banho Terapêutico Personalizado
                </h2>
                <p className="text-lg text-gray-600">
                  Cuidado direcionado para pets com dermatites ou pele sensível,
                  seguindo a indicação veterinária.
                </p>
                <p className="text-gray-600">
                  Você traz o shampoo específico prescrito pelo veterinário
                  responsável pelo tratamento do seu pet. Nós realizamos o banho
                  com todo o cuidado necessário, e você paga apenas pelo serviço
                  de banho, levando o shampoo de volta para casa.
                </p>
                <p className="font-semibold text-[#224724]">
                  Essa abordagem garante um tratamento mais eficaz, específico
                  para a necessidade do seu animal, e com um custo mais
                  acessível para você.
                </p>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="inline-block rounded-full bg-[#224724] px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#9dd03a] hover:text-[#224724]"
                >
                  Saiba Mais sobre Banho Terapêutico
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Componente simples para o ícone de Check (pode criar um arquivo separado se preferir)
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
