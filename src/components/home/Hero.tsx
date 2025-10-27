import Link from 'next/link';

export default function Hero() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20mais%20informações.';

  return (
    // A seção usa 'relative' para posicionar a imagem e o texto
    <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center text-center text-white">
      <img
        src="/images/hero-van.png"
        alt="Van da AgroNativa leva e traz"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 2. Overlay (Camada escura para legibilidade) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 3. Conteúdo (Texto e Botões) */}
      {/* Este 'div' fica 'relative' para aparecer SOBRE a imagem e o overlay */}
      <div className="relative z-10 max-w-2xl space-y-6 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          O cuidado completo para seu pet
        </h1>
        <p className="text-lg text-gray-200">
          Conheça nossos planos de banho e tosa com serviço de leva e traz.
          Cuidado e qualidade para seu lar e seus animais.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            // Botão principal, usando a cor de destaque
            className="rounded-full bg-[#9dd03a] px-8 py-3 text-lg font-semibold text-[#224724] shadow-sm transition-transform hover:scale-105 hover:bg-[#224724] hover:text-white"
          >
            Entrar em contato
          </Link>
          <Link
            href="/petshop"
            className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-[#224724]"
          >
            Conhecer Planos
          </Link>
        </div>
      </div>
    </section>
  );
}