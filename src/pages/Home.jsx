import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ClipboardList,
  MapPin,
  CalendarDays,
  Building2,
  Phone,
  Info,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import HeroSlider from "../components/HeroSlider";

function Home() {
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

      <HeroSlider/>
  
      {/* Main Content */}
      <div id="maincontent" className="bg-white rounded-t-3xl p-4 mb-14 max-w-6xl mx-auto">
        {/* Opening Hours */}
        <div
          className="bg-secondary text-white p-4 rounded-xl flex items-center gap-3 mb-6"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <div className="text-sm font-bold">{t("home.openingHours.title")}</div>
            <div className="text-xs">{t("home.openingHours.time")}</div>
          </div>
        </div>

        {/* Button Grid */}
        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6"
        >
          {[
            { label: t("home.buttons.rules"), icon: ClipboardList, link: "/rules" },
            { label: t("home.buttons.map"), icon: MapPin, link: "/map" },
            { label: t("home.buttons.kecakSchedule"), icon: CalendarDays, link: "/kecak-schedule" },
            { label: t("home.buttons.venueRental"), icon: Building2, link: "/venuerental" },
            { label: t("home.buttons.urgentContact"), icon: Phone, link: "/urgent-contact" },
            { label: t("home.buttons.moreInfo"), icon: Info, link: "https://uluwatutemple.id/" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="bg-[#9C4F3B] text-white p-4 rounded-xl flex flex-col items-center justify-center text-sm font-semibold hover:bg-[#B75D46] transition-colors"
            >
              <item.icon className="w-6 h-6 mb-2" />
              <p className="text-center">{item.label}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Section Description */}
      <section
        className="bg-[#FFF6F0] py-10 px-6 rounded-[40px] max-w-6xl mx-auto shadow-lg md:flex md:items-start md:gap-10"
        data-aos="fade-up"
      >
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-4 mb-6 md:mb-0">
          <img
            src="/aboutuluwatudua.jpeg"
            alt="About 2"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
            {t("home.section.title")}
          </h2>
          <p className="text-gray-800 mb-6 text-sm leading-relaxed">
            {t("home.section.paragraph")}
          </p>
          <button className="bg-[#6C2D14] text-white font-semibold px-6 py-2 rounded-xl">
            {t("home.section.button")}
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-10 mb-28 mt-14 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kolom kiri */}
          <div className="flex flex-col gap-4">
            <img
              src="/galeryhomesatu.jpg"
              alt="Gallery 1"
              className="w-full h-[250px] object-cover rounded-xl"
            />
            <img
              src="/aboutuluwatu.png"
              alt="Gallery About"
              className="w-full h-[250px] object-cover rounded-xl"
            />
          </div>

          {/* Kolom kanan */}
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4 w-1/2">
              <img
                src="/galeryhomedua.jpg"
                alt="Gallery 2"
                className="w-full h-[200px] md:h-[250px] object-cover object-center rounded-xl"
              />
              <img
                src="/galeryhomelima.jpeg"
                alt="Gallery 3"
                className="w-full h-[200px] md:h-[250px] object-cover object-center rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <img
                src="/galeryhometiga.jpeg"
                alt="Gallery 4"
                className="w-full h-[200px] md:h-[250px] object-cover object-center rounded-xl"
              />
              <img
                src="/galeryhomeempat.jpeg"
                alt="Gallery 5"
                className="w-full h-[200px] md:h-[250px] object-cover object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
