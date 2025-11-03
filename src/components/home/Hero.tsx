import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const WHATSAPP_LINK =
    "https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20mais%20informações.";

  return (
    <section className="relative  h-[35vh] md:h-[70vh] text-white">
      <Image
        src="/images/hero.webp"
        alt="Logo da AgroNativa"
        fill
        priority
        className="hidden md:block absolute inset-0 h-full w-full object-cover"
        sizes="100vw"
      />

      <Image
        src="/images/hero.png"
        alt="Logo da AgroNativa"
        fill
        priority
        className="md:hidden absolute inset-0 h-full w-full object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black/60 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 to-transparent z-10" />
      <div className="relative z-20 flex h-full flex-col justify-end items-center p-2 md:p-8">
        <div className="flex items-center justify-center gap-4 flex-row">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="rounded-full bg-[#9dd03a] text-center px-8 py-2 text-lg font-semibold text-[#224724] shadow-sm transition-transform hover:scale-105 hover:bg-[#224724] hover:text-white"
          >
            Entrar em contato
          </Link>
          <Link
            href="/petshop"
            className="rounded-full border-2 border-white text-center px-8 py-2 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-[#224724]"
          >
            Conhecer Planos
          </Link>
        </div>
      </div>
    </section>
  );
}
