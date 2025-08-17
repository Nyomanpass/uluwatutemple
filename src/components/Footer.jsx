import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
   <footer className="bg-[#2A0C00] text-white px-6 py-20">
  <div className="max-w-6xl mx-auto md:grid md:grid-cols-4 md:gap-10">
    {/* Logo & Social Media */}
    <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
      <img
        src="/logofooter.png"
        alt="Uluwatu Temple Logo"
        className="w-24 mb-6"
      />

      <div className="flex gap-6 text-2xl">
        <a href="https://www.facebook.com/uluwatu.temple.1" target="_blank" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="https://www.instagram.com/uluwatu.temple/" target="_blank" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="https://www.tiktok.com/@uluwatu.temple" target="_blank" aria-label="Tiktok"><ion-icon name="logo-tiktok"></ion-icon></a>
        <a href="https://www.youtube.com/channel/UCWEbxVGp-hkT-kySxRQW76g" target="_blank" aria-label="YouTube"><ion-icon name="logo-youtube"></ion-icon></a>
      </div>
    </div>

    {/* Description */}
    <div className="mb-10 md:mb-0">
      <h4 className="text-sm font-bold mb-2">{t("footer.pagesName") || "About"}</h4>
      <p className="text-sm text-white/90 leading-relaxed">
        {t("footer.description")}
      </p>
    </div>

    {/* Contact Info */}
    <div className="mb-10 md:mb-0">
      <h4 className="text-sm font-bold mb-2">{t("footer.pagesContact") || "Contact"}</h4>
      <div className="text-sm text-white/90 space-y-2">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-white" />
          <p>{t("footer.contact.admin1")}</p>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-white" />
          <p>{t("footer.contact.admin2")}</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-white" />
          <p>{t("footer.contact.email")}</p>
        </div>
      </div>
    </div>

    {/* Our Pages */}
    <div>
      <h4 className="text-sm font-bold mb-2">{t("footer.pagesTitle")}</h4>
      <ul className="text-sm space-y-1 pl-1">
            <li><a href="/" onClick={() => setIsOpen(false)}>{t('homenav')}</a></li>
            <li><a href="/rules" onClick={() => setIsOpen(false)}>{t('rules')}</a></li>
            <li><a href="/map" onClick={() => setIsOpen(false)}>{t('map')}</a></li>
            <li><a href="/kecak-schedule" onClick={() => setIsOpen(false)}>{t('kecakSchedule')}</a></li>
            <li><a href="/venuerental" onClick={() => setIsOpen(false)}>{t('venueRental')}</a></li>
            <li><a href="/urgent-contact" onClick={() => setIsOpen(false)}>{t('urgentContact')}</a></li>
            <li><a href="https://uluwatutemple.id/" onClick={() => setIsOpen(false)}>{t('moreInfo')}</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <hr className="w-full border-white/30 my-10" />
  <p className="text-xs text-center text-white/50">
    {t("footer.copyright")} <br />
  </p>
</footer>

  );
};

export default Footer;
