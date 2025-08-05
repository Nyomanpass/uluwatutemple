// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from 'react-i18next';



export default function HeroSlider() {
const { t } = useTranslation();
const slides = [
  {
    image: "/homedua.jpeg",
    title: t('home.hero.title'),
    description: t('home.hero.description'),
    buttonText: t('home.hero.buttonTextsatu'),
    buttonLink: "#maincontent",
  },
  {
    image: "/hometiga.jpeg",
    title: t('home.hero.titlesatu'),
    description: t('home.hero.descriptionsatu'),
    buttonText: t('home.hero.buttonTextdua'),
    buttonLink: "/tutorial",
  },
  {
    image: "/galeryhometiga.jpeg",
    title: t('home.hero.titledua'),
    description: t('home.hero.descriptiondua'),
    buttonText: t('home.hero.buttonTexttiga'),
    buttonLink: "/kecak-schedule",
  },
];

  return (
    <div className="relative w-full h-[75vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[75vh]">
              <picture>
                <source srcSet={slide.image} media="(min-width: 768px)" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </picture>

              {/* Overlay hitam */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Teks di tengah */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base text-[.8rem] md:text-xl max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                    <a
                    href={slide.buttonLink}
                    className="bg-white text-black px-6 mt-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                    {slide.buttonText}
                    </a>
                )}
              </div>

              {/* Gelombang di bawah */}
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
                <svg
                  className="relative block w-full h-[80px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,160 C360,0 1080,320 1440,160 L1440,320 L0,320 Z"
                  ></path>
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
