import React from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';

const Tutorial = () => {

const { t } = useTranslation();


const stepsSarong = [
  { img: "/kambensatu.png", text: t("tutorial.stepsSarong.0") },
  { img: "/kambendua.png", text: t("tutorial.stepsSarong.1") },
  { img: "/kambentiga.png", text: t("tutorial.stepsSarong.2") },
  { img: "/kambenempat.png", text: t("tutorial.stepsSarong.3") }
];

const stepsSash = [
  { img: "/selendangsatu.png", text: t("tutorial.stepsSash.0") },
  { img: "/selendangdua.png", text: t("tutorial.stepsSash.1") },
  { img: "/selendangtiga.png", text: t("tutorial.stepsSash.2") },
  { img: "/selendangempat.png", text: t("tutorial.stepsSash.3") }
];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 pt-36">
        {/* Header merah */}
        <div className="bg-secondary text-white text-center p-4 rounded-t-lg mb-10">
          <p className="font-bold text-lg">
           {t("tutorial.title")}
          </p>
        </div>

        {/* Grid utama: 1 kolom di mobile, 2 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bagian Sarong */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">{t("tutorial.sarung")}</h2>
            <div className="grid grid-cols-2 gap-4">
              {stepsSarong.map((step, i) => (
                <div  key={i}  data-aos="fade-up"
      data-aos-delay={i * 100}
 className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img src={step.img} alt={`Step ${i+1}`} className="w-full h-50 md:h-82 object-cover rounded" />
                  <p className="mt-2 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian Sash */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">{t("tutorial.selendang")}</h2>
            <div className="grid grid-cols-2 gap-4">
              {stepsSash.map((step, i) => (
                <div key={i}       data-aos="fade-up"
      data-aos-delay={i * 100}
 className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img src={step.img} alt={`Step ${i+1}`} className="w-full h-50 md:h-82 object-cover rounded" />
                  <p className="mt-2 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tutorial;
