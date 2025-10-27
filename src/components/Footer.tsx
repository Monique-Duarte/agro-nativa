import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Petshop', href: '/petshop' },
  { name: 'A Loja', href: '/a-loja' },
  { name: 'Contato', href: '/contato' },
];

export default function Footer() {
  const ADDRESS_LINK = 'https://maps.app.goo.gl/vEST4gyNeVpPiH9C9';
  const ADDRESS_TEXT = 'Av. João Pinho, 483 - Mar Grosso, Laguna - SC, 88790-000';
  const TRABALHE_CONOSCO_LINK = "https://app.pipefy.com/public/form/nUxi6lF5?fbclid=PAZXh0bgNhZW0CMTEAAac1_odsL4Q-48gzKqTWYHb-THb65Pb7FAHaXd9xmKMdX4XOvvbZMY5oN8Q2g_aem_7N-kym6opiHBWnC5Q4QNgQ";

  return (
    <footer className="bg-[#224724] text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-10">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="space-y-4 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logoBranco2.png"
                alt="Logo Agro Nativa"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm">
              Agropecuária localizada no bairro Mar Grosso! <br />
              Tudo para seu pet, jardim e piscina!
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Endereço:</strong>
                <br />
                <Link href={ADDRESS_LINK} target="_blank" className="hover:text-[#9dd03a] hover:underline">
                  {ADDRESS_TEXT}
                </Link>
              </p>
              <p>
                <strong>Telefone:</strong>
                <br />
                <a
                  href="tel:48999557752"
                  className="hover:text-[#9dd03a]"
                >
                  (48) 99955-7752
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1">
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

          <div className="md:col-span-1 lg:col-span-1">
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

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} AgroNativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}