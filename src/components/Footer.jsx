import { useTranslation } from 'react-i18next';

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
        <a href="#" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#" aria-label="Tiktok"><ion-icon name="logo-tiktok"></ion-icon></a>
        <a href="#" aria-label="YouTube"><ion-icon name="logo-youtube"></ion-icon></a>
      </div>
    </div>

    {/* Description */}
    <div className="mb-10 md:mb-0">
      <h4 className="text-sm font-bold mb-2">{t("footer.aboutTitle") || "About"}</h4>
      <p className="text-sm text-white/90 leading-relaxed">
        {t("footer.description")}
      </p>
    </div>

    {/* Contact Info */}
    <div className="mb-10 md:mb-0">
      <h4 className="text-sm font-bold mb-2">{t("footer.contactTitle") || "Contact"}</h4>
      <div className="text-sm text-white/90 space-y-1">
        <p>{t("footer.contact.admin1")}</p>
        <p>{t("footer.contact.admin2")}</p>
        <p className="mt-2">{t("footer.contact.email")}</p>
      </div>
    </div>

    {/* Our Pages */}
    <div>
      <h4 className="text-sm font-bold mb-2">{t("footer.pagesTitle")}</h4>
      <ul className="text-sm space-y-1 pl-1">
        <li><a href="#" className="hover:underline">{t("footer.pages.anchor1")}</a></li>
        <li><a href="#" className="hover:underline">{t("footer.pages.anchor2")}</a></li>
        <li><a href="#" className="hover:underline">{t("footer.pages.anchor3")}</a></li>
        <li><a href="#" className="hover:underline">{t("footer.pages.anchor4")}</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <hr className="w-full border-white/30 my-10" />
  <p className="text-xs text-center text-white/50">
    {t("footer.copyright")} <br />
    {t("footer.poweredBy")}
  </p>
</footer>

  );
};

export default Footer;
