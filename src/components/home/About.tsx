import Image from "next/image";

export default function About() {
  return (
    <section className="overflow-hidden bg-white py-8 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-x-16 lg:grid-cols-2">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
              Conheça a AgroNativa
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 ">
              Estamos localizados no bairro Mar Grosso! Tudo para sua família!
            </p>
            <p className="my-4 text-base leading-7 text-gray-600">
              Oferecemos produtos de petshop, jardinagem, ferramentas e
              serviços de banho e tosa, garantindo cuidado e qualidade para seu
              lar e seus animais.
            </p>
          </div>

          <div className="h-64 w-full rounded-lg object-cover sm:h-80 lg:h-96">
            <Image
              src="/images/AgroNativa.png"
              alt="Furgão da Agro Nativa"
              width={200}
              height={200}
              className="h-full w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}