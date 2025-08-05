import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';


const Prewedding = () => {
  const { t } = useTranslation();

  return (
    <>
         <a href="https://wa.me/6281236937479" target="_blank"
            className="fixed bottom-6 right-6 z-50 text-white animate-bounce focus:outline-none transition duration-300">
            <div className="flex gap-2 items-center">
                <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14"/>
            </div>
        </a>
      <Navbar />
    
      <section className="py-20 mt-16 px-6 bg-white font-sans">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#5B2C06] mb-2"
            data-aos="fade-down"
          >
            {t("prewedding.title")}
          </h1>
          <p className="text-md md:text-lg text-gray-600 mb-10" data-aos="fade-up">
            {t("prewedding.subtitle")}
          </p>

          {/* GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {['/wedingsatu.jpeg', '/wedingdua.jpeg', '/wedingtiga.jpeg'].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Photo ${i + 1}`}
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover h-[300px] w-full"
                data-aos="zoom-in"
              />
            ))}
          </div>

          {/* CONTENT */}
          <div className="text-left space-y-12 text-gray-700 px-2 md:px-10">
            {/* Why Choose */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#5B2C06] mb-2">
                {t("prewedding.whyTitle")}
              </h2>
              <p>{t("prewedding.whyDescription")}</p>
            </div>

            {/* Best Locations */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#5B2C06] mb-2">
                {t("prewedding.locationsTitle")}
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>{t("prewedding.locations.cliffside")}</li>
                <li>{t("prewedding.locations.amphitheater")}</li>
                <li>{t("prewedding.locations.rockFormations")}</li>
                <li>{t("prewedding.locations.sunset")}</li>
              </ul>
            </div>

            {/* Themes */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#5B2C06] mb-2">
                {t("prewedding.themesTitle")}
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>{t("prewedding.themes.traditional")}</li>
                <li>{t("prewedding.themes.adventurous")}</li>
                <li>{t("prewedding.themes.casual")}</li>
              </ul>
            </div>

            {/* Price Info */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#5B2C06] mb-2">
                {t("prewedding.priceTitle")}
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>{t("prewedding.price.permits")}</li>
                <li>{t("prewedding.price.privateSession")}</li>
                <li>{t("prewedding.price.contact")}</li>
              </ul>
            </div>

            {/* Guidelines */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#5B2C06] mb-2">
                {t("prewedding.guidelinesTitle")}
              </h2>
              <p>{t("prewedding.guidelinesNote")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Prewedding;
