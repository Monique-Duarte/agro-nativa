import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Petshop', href: '/petshop' },
  { name: 'A Loja', href: '/a-loja' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%mais%20informações.';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm relative">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <Image
            src="/images/logoB.png"
            alt="Logo AgroNativa"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 transition-colors hover:text-[#224724] font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="rounded-full bg-[#224724] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#9dd03a] hover:text-[#224724]"
          >
            Agendar Banho
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="rounded p-2 text-gray-800 hover:text-[#224724]"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 w-full bg-white shadow-md md:hidden z-30 border-t border-gray-200">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-[#224724]"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              className="mt-4 block w-full rounded-full bg-[#224724] px-5 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-[#9dd03a] hover:text-[#224724]"
              onClick={closeMobileMenu}
            >
              Entrar em contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}