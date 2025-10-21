import Link from 'next/link';

export default function WhatsappButton() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=5548999557752&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20%20banho';

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-brand-green-light p-3 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-brand-green-dark"
      aria-label="Agendar pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8 fill-current"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.607-1.474l-6.177 1.688zm5.465-5.99c.3.006.6-.036.883-.108 1.144-.29 2.195-.71 3.14-1.298.231-.14.51-.193.78-.15.27.043.518.19.69.418s.255.498.228.777c-.027.278-.168.528-.39.697-1.011.76-2.14 1.349-3.35 1.76-.328.113-.673.168-1.02.163l-3.53-1.011 1.01-3.533zM12 2C6.477 2 2 6.477 2 12c0 1.992.54 3.86 1.464 5.497l-1.4 5.125 5.25-1.432A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    </Link>
  );
}