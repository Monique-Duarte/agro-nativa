import Link from 'next/link';
import Image from 'next/image';

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramCTA() {
  const INSTAGRAM_LINK = "https://www.instagram.com/agronativa.laguna/";

  return (
    <section className="bg-gray-50 py-8 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
            Siga-nos no Instagram!
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Acompanhe de perto nossos <strong>eventos, sorteios, promoções</strong> e todas as novidades da loja. É por lá que tudo acontece!
          </p>
          <Link
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-x-3 rounded-full bg-[#224724] px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#9dd03a] hover:text-[#224724] focus:outline-none focus:ring-2 focus:ring-[#9dd03a] focus:ring-offset-2"
          >
            <InstagramIcon />
            @agronativa.laguna
          </Link>
        </div>
      </div>
    </section>
  );
}