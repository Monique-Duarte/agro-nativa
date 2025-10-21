import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Banho e Tosa', href: '/banho-e-tosa' },
  { name: 'Petshop', href: '/petshop' },
  { name: 'A Loja', href: '/a-loja' },
  { name: 'Contato', href: '/contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Coluna 1: Logo e Contato */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              {/* IMPORTANTE: Use o mesmo caminho do logo do Header */}
              <img
                src="/images/logo.png" // <-- Ajuste este caminho se for diferente
                alt="Logo Agro Nativa"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm">
              Agropecuária localizada no bairro Mar Grosso! Tudo para seu pet,
              jardim e piscina!
            </p>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Endereço:</strong>
                <br />
                Av. João Pinho, 483 - Mar Grosso, Laguna - SC, 88790-000
              </p>
              <p>
                <strong>Telefone:</strong>
                <br />
                <a
                  href="tel:48999557752"
                  className="hover:text-brand-green-light"
                >
                  (48) 99955-7752
                </a>
              </p>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos (Navegação) */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-green-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Horário de Funcionamento (Exemplo) */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Horário de Funcionamento
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
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