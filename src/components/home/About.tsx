export default function About() {
  return (
    // Seção com fundo branco
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          {/* Coluna do Texto */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
              Conheça a Agro Nativa
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Agropecuária localizada no bairro Mar Grosso! Tudo para seu pet,
              jardim e piscina!
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Oferecemos produtos de petshop, jardinagem, itens para piscina e
              serviços de banho e tosa, garantindo cuidado e qualidade para seu
              lar e seus animais. Venha nos visitar!
            </p>
          </div>

          {/* Coluna da Imagem */}
          <div className="h-64 w-full rounded-lg object-cover sm:h-80 lg:h-96">
            <img
              src="/images/hero-van.png" // <-- Usando a mesma imagem do furgão
              alt="Furgão da Agro Nativa"
              className="h-full w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}