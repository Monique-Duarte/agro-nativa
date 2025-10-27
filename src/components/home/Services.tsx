import Link from "next/link";
import Image from "next/image";

const WHATSAPP_LINK_LEVA_E_TRAZ =
  "https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20serviço%20de%20leva%20e%20traz.";

const serviceList = [
  {
    title: "Planos de Banho",
    description:
      "Entre em contato para encontrar o que melhor se adapta a necessidade do seu pet!",
    href: "/petshop",
    icon: (
      <Image
        src="/images/petshoppb.png"
        alt="Ícone de Petshop"
        width={50}
        height={50}
        className="object-contain"
      />
    ),
  },
  {
    title: "Leva e Traz",
    description:
      "Para sua comodidade, buscamos e levamos seu pet para o banho com total segurança. Consulte nossos serviços.",
    href: WHATSAPP_LINK_LEVA_E_TRAZ,
    icon: (
      <Image
        src="/images/transporte.png"
        alt="Ícone de Petshop"
        width={50}
        height={50}
        className="object-contain"
      />
    ),
  },
  {
    title: "Banhos Terapêuticos",
    description:
      "Cuidados especiais para pets com pele sensível. Tudo para garantir a saúde e bem-estar do seu parceiro.",
    href: "/petshop",
    icon: (
      <Image
        src="/images/terapeutico.png"
        alt="Ícone de Petshop"
        width={50}
        height={50}
        className="object-contain"
      />
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-8 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
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
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9dd03a] text-[#224724]">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#224724]">
                {service.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {service.description}
              </p>
              <Link
                href={service.href}
                {...(service.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-4 inline-block font-medium text-[#224724] hover:text-[#9dd03a]"
              >
                {service.href.startsWith("http")
                  ? "Fale Conosco"
                  : "Saiba Mais"}{" "}
                &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
