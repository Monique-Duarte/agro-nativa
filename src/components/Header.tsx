import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Banho e Tosa', href: '/banho-e-tosa' },
  { name: 'Petshop', href: '/petshop' },
  { name: 'A Loja', href: '/a-loja' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20agendar%20um%20banho.';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo Agro Nativa"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 transition-colors hover:text-brand-green-dark font-medium" 
            >
              {link.name}
            </Link>
          ))}

          {/* --- Botão CTA (Call to Action) --- */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="rounded-full bg-brand-green-dark px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-green-light hover:text-brand-green-dark"
          >
            Agendar Banho
          </Link>
        </nav>

        {/* --- Botão de Menu Mobile (ainda sem funcionalidade) --- */}
        <div className="md:hidden">
          {/* Adicionando text-gray-800 aqui também */}
          <button className="rounded p-2 text-gray-800 hover:text-brand-green-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}