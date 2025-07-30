import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Kecak = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      <Navbar />

      {/* Section Kecak Info */}
      <section className="py-10 px-6 text-gray-800 bg-[url('/pattern.png')] bg-no-repeat bg-contain bg-right-top mt-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#5B2C06] font-bold mb-6">{t("kecakPage.welcomeTitle")}</h2>

          {/* Image */}
       <div className="grid grid-cols-1 md:items-center md:grid-cols-2 gap-4 md:gap-8">
          <div className="w-full hidden md:block h-[80%]">
            <img
              src="/kecak.png"
              alt="Kecak Dance"
              className="w-full h-full object-cover rounded-xl"
              data-aos="zoom-in"
            />
          </div>
          <div className="w-full h-[80%]">
            <img
              src="/kecakuluwatupage.jpg"
              alt="Kecak Dance"
              className="w-full h-full object-cover rounded-xl"
              data-aos="zoom-in"
            />
          </div>
        </div>


          {/* Schedule Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-10">
            {/* Card */}
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-lg font-bold text-[#5B2C06] mb-2">
                {t("kecakPage.openingHoursTitle")}
              </h3>
              <p className="text-gray-700 text-sm">• {t("kecakPage.openingHoursTime")}</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-lg font-bold text-[#5B2C06] mb-2">
                {t("kecakPage.openGateTitle")}
              </h3>
              <p className="text-gray-700 text-sm">• {t("kecakPage.openGateTime")}</p>
              <p className="mt-2 text-xs text-gray-500">{t("kecakPage.openGateNote")}</p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-lg font-bold text-[#5B2C06] mb-2">
                {t("kecakPage.ticketPricesTitle")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>{t("kecakPage.ticketPrices.adults")}</li>
                <li>{t("kecakPage.ticketPrices.children")}</li>
              </ul>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-lg font-bold text-[#5B2C06] mb-2">
                {t("kecakPage.whereToBuyTitle")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>{t("kecakPage.whereToBuy.booth")}</li>
                <li>{t("kecakPage.whereToBuy.online")}</li>
              </ul>
            </div>

            {/* Spanning item */}
            <div
              className="md:col-span-2 p-6 bg-white shadow-lg rounded-xl"
            >
              <h3 className="text-lg font-bold text-[#5B2C06] mb-2">
                {t("kecakPage.importantNoteTitle")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>{t("kecakPage.importantNotes.fees")}</li>
                <li>{t("kecakPage.importantNotes.payment")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kecak is Unique */}
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-[#5B2C06] sm:text-4xl lg:text-5xl font-extrabold text-center leading-tight mb-12">
            {t("kecakPage.whyUniqueTitle")}
          </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[1, 2, 3].map((num) => (
            <div className="mb-12" data-aos="fade-up" key={num}>
              <img
                src={
                  num === 1
                    ? "aboutkecaksatu.jpg"
                    : num === 2
                    ? "hanoman.jpg"
                    : "aboutkecak.jpg"
                }
                alt="Unique Section"
                className="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
              />
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#5B2C06] mb-4">
                  {t(`kecakPage.section${num}.title`)}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t(`kecakPage.section${num}.description`)}
                </p>
              </div>
            </div>
          ))}
         </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kecak;
