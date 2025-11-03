import Link from 'next/link';
import Image from "next/image";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Petshop', href: '/petshop' },
  { name: 'A Loja', href: '/a-loja' },
  { name: 'Contato', href: '/contato' },
];

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const ADDRESS_LINK = 'https://maps.app.goo.gl/vEST4gyNeVpPiH9C9';
  const ADDRESS_TEXT = 'Av. João Pinho, 483 - Mar Grosso, Laguna - SC, 88790-000';
  const INSTAGRAM_LINK = "https://www.instagram.com/agronativa.laguna/";
  const TRABALHE_CONOSCO_LINK = "https://app.pipefy.com/public/form/nUxi6lF5?fbclid=PAZXh0bgNhZW0CMTEAAac1_odsL4Q-48gzKqTWYHb-THb65Pb7FAHaXd9xmKMdX4XOvvbZMY5oN8Q2g_aem_7N-kym6opiHBWnC5Q4QNgQ";

  return (
    <footer className="bg-[#224724] text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-10">

        {/* --- Grid de 4 Colunas --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logoBranco2.png"
                width={120}
                height={100}
                alt="Logo Agro Nativa"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm">
              Agropecuária localizada no bairro Mar Grosso! <br />
              Tudo para seu pet, casa e jardim!
            </p>
          </div>

          {/* Coluna 2: Endereço e Contato */}
          <div className="space-y-4 text-sm">
             <h3 className="text-lg font-semibold text-white">
                Endereço e Contato
             </h3>
             <div className="space-y-2">
                <p className='pt-2 font-semibold text-white/80'>
                  Contato:
                </p>
                <p>
                  <a
                    href="tel:48999557752"
                    className="hover:text-[#9dd03a]"
                  >
                    (48) 99955-7752
                  </a>
                </p>
                <p>
                  <a href="mailto:agronativalaguna@gmail.com" className="hover:text-[#9dd03a] hover:underline">
                      agronativalaguna@gmail.com
                    </a>
                </p>
                  <Link
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 text-sm hover:text-[#9dd03a] pt-1"
                  >
                    <InstagramIcon />
                    Instagram
                  </Link>
                <p className='font-semibold text-white/80'>
                  Endereço:
                </p>
                <p>
                  <Link href={ADDRESS_LINK} target="_blank" className="hover:text-[#9dd03a] hover:underline">
                    {ADDRESS_TEXT}
                  </Link>
                </p>
             </div>
          </div>

          {/* Coluna 3: Navegação */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#9dd03a]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href={TRABALHE_CONOSCO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#9dd03a]"
                >
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horários */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Horário de Funcionamento
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <strong>Segunda a Sexta:</strong>
                <br />
                  08:30 - 12:00 <br />
                  13:30 - 19:00
              </li>
              <li>
                <strong>Sábado:</strong>
                <br />
                08:30 - 13:00
              </li>
              <li>
                <strong>Domingo:</strong>
                <br />
                Fechado
              </li>
            </ul>
          </div>
        </div>

        {/* --- Copyright --- */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} AgroNativa. Todos os direitos reservados.
          </p>
          <p>CNPJ 36.435.570/0001-51</p>
        </div>
      </div>
    </footer>
  );
}
