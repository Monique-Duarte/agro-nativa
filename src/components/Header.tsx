import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Petshop', href: '/petshop' },
  { name: 'A Loja', href: '/a-loja' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20agendar%20um%20banho.';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <Image
            src="/images/logoB.png"
            alt="Logo AgroNativa"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* --- Navegação Desktop --- */}
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

        {/* --- Botão de Menu Mobile --- */}
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

      {/* --- Menu Mobile Fixo na Parte Inferior --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 w-full bg-white shadow-lg md:hidden">
          <nav className="flex justify-around py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex flex-col items-center justify-center rounded-md p-2 text-xs font-medium text-gray-800 hover:bg-gray-100 hover:text-[#224724]"
                onClick={closeMobileMenu}
              >
                <span>{link.name}</span>
              </Link>
            ))}

            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              className="flex flex-col items-center justify-center rounded-md p-2 text-xs font-medium text-white bg-[#224724] hover:bg-[#9dd03a] hover:text-[#224724]"
              onClick={closeMobileMenu}
            >
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mb-1" />
              <span>Fale conosco</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}