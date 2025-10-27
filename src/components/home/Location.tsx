export default function Location() {
  const googleMapsLink =
    'https://maps.app.goo.gl/3crepFaedKXPqjt19';

  // Link de incorporação do Google Maps
  const embedMapLink =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.717145899997!2d-48.78443908491873!3d-28.49051808244199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95215c0e0b3c1b6b%3A0xe4a1f59265f2a1b1!2sAv.%20Jo%C3%A3o%20Pinho%2C%20483%20-%20Mar%20Grosso%2C%20Laguna%20-%20SC%2C%2088790-000!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr';

  return (
    <section className="py-8 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-[#224724] sm:text-4xl">
              Venha nos Visitar!
            </h2>
            <p className="text-lg text-gray-600">
              Estamos localizados no coração do Mar Grosso, prontos para
              atender você e seu pet.
            </p>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-[#224724]">
                  Endereço
                </h3>
                <p className="mt-1 text-gray-600">
                  Av. João Pinho, 483 - Mar Grosso
                  <br />
                  Laguna - SC, 88790-000
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#224724]">
                  Telefone
                </h3>
                <a
                  href="tel:48999557752"
                  className="mt-1 text-gray-600 hover:text-[#9dd03a]"
                >
                  (48) 99955-7752
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#224724]">
                  Horário
                </h3>
                <ul className="mt-1 text-gray-600">
                  <li>Segunda a Sexta: 08:30 - 12:00 / 13:30 – 19:00</li>
                  <li>Sábado: 08:30 - 13:00</li>
                  <li>Domingo: Fechado</li>
                </ul>
              </div>
            </div>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#9dd03a] px-8 py-3 text-base font-medium text-[#224724] shadow-sm transition-transform hover:scale-105"
            >
              Ver no Google Maps
            </a>
          </div>

          {/* Coluna 2: Mapa Incorporado */}
          <div className="overflow-hidden rounded-lg">
            <iframe
              src={embedMapLink}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Agro Nativa no Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}