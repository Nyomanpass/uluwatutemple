import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const Rules = () => {
  const [selectedTab, setSelectedTab] = useState('uluwatu');
  const { t } = useTranslation();


  const rules = t(`rulespage.${selectedTab}`, { returnObjects: true });

  return (
    <>
         <a href="https://wa.me/6281236937479" target="_blank"
            className="fixed bottom-6 right-6 z-50 text-white animate-bounce focus:outline-none transition duration-300">
            <div className="flex gap-2 items-center">
                <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14"/>
            </div>
        </a>
      <Navbar />

      <section className="bg-white px-4 py-6 max-w-5xl mx-auto mt-28">
        <div className="text-center mb-8" data-aos="fade-down">
          <p className="italic text-sm text-gray-500">{t('rulespage.intro')}</p>
          <h2 className="text-2xl text-[#5B2C06] font-bold">{t('rulespage.title')}</h2>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 text-xs font-semibold mb-8 tracking-widest uppercase"
          data-aos="fade-up"
        >
          <button
            className={`pb-1 border-b-2 ${
              selectedTab === 'uluwatu'
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-gray-400'
            }`}
            onClick={() => setSelectedTab('uluwatu')}
          >
            {t('rulespage.buttomsatu')}
          </button>
          <button
            className={`pb-1 border-b-2 ${
              selectedTab === 'kecak'
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-gray-400'
            }`}
            onClick={() => setSelectedTab('kecak')}
          >
            {t('rulespage.buttomdua')}
          </button>
        </div>

        {/* Do's & Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
          {/* Do's */}
          <div className="bg-white shadow-xl rounded-xl" data-aos="fade-up">
            <div className="flex items-center bg-green-600 text-white px-4 py-4 rounded-t-xl">
              <ThumbsUp size={18} className="mr-2" />
              <h3 className="font-bold text-md">
                {selectedTab === 'uluwatu' ? 'Yang Boleh' : 'Yang Harus Dilakukan'}
              </h3>
            </div>
            <ul className="p-4 space-y-3 text-sm">
              {rules.dos.map((item, index) => (
                <li key={index}>
                  <p className="font-bold text-green-700">
                    {index + 1}. {item.title}
                  </p>
                  <p className="text-gray-700">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-white shadow-xl rounded-xl" data-aos="fade-up">
            <div className="flex items-center bg-red-600 text-white px-4 py-4 rounded-t-xl">
              <ThumbsDown size={18} className="mr-2" />
              <h3 className="font-bold text-md">
                {selectedTab === 'uluwatu' ? 'Yang Tidak Boleh' : 'Hal yang Dilarang'}
              </h3>
            </div>
            <ul className="p-4 space-y-3 text-sm">
              {rules.donts.map((item, index) => (
                <li key={index}>
                  <p className="font-bold text-red-700">
                    {index + 1}. {item.title}
                  </p>
                  <p className="text-gray-700">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Rules;
