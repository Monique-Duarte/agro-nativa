import Head from 'next/head';
import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contato() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20Agro%20Nativa.';

  // Endereço e link para o Google Maps do Hospital Veterinário Vital em Laguna
  const ADDRESS_LINK = 'https://maps.app.goo.gl/vEST4gyNeVpPiH9C9';
  const ADDRESS_TEXT = 'Av. João Pinho, 483 - Mar Grosso, Laguna - SC, 88790-000';

  return (
    <>
      <Head>
        <title>Contato | Agro Nativa Laguna</title>
        <meta name="description" content="Entre em contato com a Agro Nativa em Laguna/SC. Telefone, WhatsApp, e-mail e endereço. Agende seu banho ou tire suas dúvidas." />
      </Head>

      <main>
        {/* Seção Hero de Contato */}
        <section className="bg-[#224724] py-8 text-white sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Entre em Contato Conosco
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Estamos aqui para ajudar você e seu pet. Escolha a melhor forma de falar conosco.
            </p>
          </div>
        </section>

        {/* Informações de Contato e Horário */}
        <section className="py-8 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <PhoneIcon className="h-10 w-10 text-[#9dd03a]" />
                <h3 className="mt-6 text-xl font-semibold text-[#224724]">Telefone e WhatsApp</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  <Link href={WHATSAPP_LINK} target="_blank" className="hover:text-[#9dd03a] hover:underline">
                    (48) 99955-7752
                  </Link>
                </p>
                <p className="text-sm leading-6 text-gray-500">Agende seu horário ou tire dúvidas.</p>
              </div>

              {/* Email (exemplo, pode adaptar) */}
              <div className="flex flex-col items-center text-center">
                <EnvelopeIcon className="h-10 w-10 text-[#9dd03a]" />
                <h3 className="mt-6 text-xl font-semibold text-[#224724]">E-mail</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  <a href="mailto:contato@agronativa.com.br" className="hover:text-[#9dd03a] hover:underline">
                    contato@agronativa.com.br
                  </a>
                </p>
                <p className="text-sm leading-6 text-gray-500">Para outras questões e parcerias.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <MapPinIcon className="h-10 w-10 text-[#9dd03a]" />
                <h3 className="mt-6 text-xl font-semibold text-[#224724]">Endereço</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  <Link href={ADDRESS_LINK} target="_blank" className="hover:text-[#9dd03a] hover:underline">
                    {ADDRESS_TEXT}
                  </Link>
                </p>
                <p className="text-sm leading-6 text-gray-500">Visite nossa loja.</p>
              </div>
              <div className="mflex flex-col items-center text-center">
                <ClockIcon className="mx-auto h-10 w-10 text-[#9dd03a]" />
                <h3 className="mt-6 text-xl font-semibold text-[#224724]">Horário de Atendimento</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                <p className="text-base leading-7 text-gray-600">Sábado: 08:00 - 12:00</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}