import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const getFlag = (lang) => {
    switch (lang) {
      case 'id': return '/indonesia.png';
      case 'zh': return '/china.png';
      case 'ko': return '/koreaselatan.png';
      case 'hi': return '/india.png';
      default: return '/unitedkingdom.png'; // en
    }
  };

  return (
    <div className={`fixed w-full xl:max-w-[80%] xl:mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${!isScrolled ? 'mt-4' : ''}`}>
      <nav className={`bg-white shadow-xl px-4 py-2 flex items-center justify-between relative z-50 transition-all duration-300 
        ${!isScrolled ? 'rounded-3xl mx-4' : 'py-3'}`}>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/uluwatulogo.jpg" alt="Logo Uluwatu" className="h-14" />
          <img src="/monyet.jpg" alt="Monkey Icon" className="h-14" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-6 text-gray-700 font-medium">
          <a href="/">{t('homenav')}</a>
          <a href="/rules">{t('rules')}</a>
          <a href="/map">{t('map')}</a>
          <a href="/kecak-schedule">{t('kecakSchedule')}</a>
          <a href="/venuerental">{t('venueRental')}</a>
          <a href="/urgent-contact">{t('urgentContact')}</a>
          <a href="https://uluwatutemple.id/">{t('moreInfo')}</a>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center space-x-3 xl:hidden relative">
          {/* Language Button (icon only) */}
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="p-1 bg-white border border-gray-300 rounded-xl shadow-sm"
          >
            <img src={getFlag(i18n.language)} alt="Lang" className="w-6 h-6 rounded-full" />
          </button>

          {/* Language Popup */}
          {langOpen && (
            <div className="absolute top-10 right-10 bg-white border w-[100px] rounded-xl shadow-xl z-50">
              {['en', 'id', 'zh', 'ko', 'hi'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <img src={getFlag(lang)} alt={lang} className="w-5 h-5 rounded-full" />
                  <span className="uppercase">{lang}</span>
                </button>
              ))}
            </div>
          )}

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Language Button Desktop */}
        <div className="hidden xl:block relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="p-1 bg-white border border-gray-300 rounded-xl shadow-sm"
          >
            <img src={getFlag(i18n.language)} alt="Lang" className="w-6 h-6 rounded-full" />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-xl z-50">
              {['en', 'id', 'zh', 'ko', 'hi'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <img src={getFlag(lang)} alt={lang} className="w-5 h-5 rounded-full" />
                  <span className="uppercase">{lang}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:hidden`}
        >
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4 text-gray-800 text-xl font-medium py-8">
            <a href="/" onClick={() => setIsOpen(false)}>{t('homenav')}</a>
            <a href="/rules" onClick={() => setIsOpen(false)}>{t('rules')}</a>
            <a href="/map" onClick={() => setIsOpen(false)}>{t('map')}</a>
            <a href="/kecak-schedule" onClick={() => setIsOpen(false)}>{t('kecakSchedule')}</a>
            <a href="/venuerental" onClick={() => setIsOpen(false)}>{t('venueRental')}</a>
            <a href="/urgent-contact" onClick={() => setIsOpen(false)}>{t('urgentContact')}</a>
            <a href="https://uluwatutemple.id/" onClick={() => setIsOpen(false)}>{t('moreInfo')}</a>
          </nav>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-30 xl:hidden" onClick={() => setIsOpen(false)} />
        )}
      </nav>
    </div>
  );
}

export default Navbar;
