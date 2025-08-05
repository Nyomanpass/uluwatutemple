import { useTranslation } from "react-i18next";

const TicketInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-4 p-4 max-w-6xl mx-auto">
      {/* ENTRANCE FEE */}
      <div className="bg-secondary text-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">{t("ticket.entranceFee")}</h3>
        <ul className="text-sm space-y-3">
          <li className="flex justify-between border-b border-white/20 pb-1">
            <span>{t("ticket.foreignerAdult")}</span>
            <span>Rp 50K</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-1">
            <span>{t("ticket.indonesianAdult")}</span>
            <span>Rp 30K</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-1">
            <span>{t("ticket.foreignerChild")}</span>
            <span>Rp 30K</span>
          </li>
          <li className="flex justify-between">
            <span>{t("ticket.indonesianChild")}</span>
            <span>Rp 20K</span>
          </li>
        </ul>
      </div>

      {/* KECAK DANCE */}
      <div className="bg-secondary text-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">{t("ticket.kecakDance")}</h3>
        <p className="text-sm mb-1">{t("ticket.performs")} <span className="font-semibold">6PM</span></p>
        <p className="text-xs text-white/70 mb-4">{t("ticket.available")} 5PM</p>
        <ul className="text-sm space-y-3">
          <li className="flex justify-between border-b border-white/20 pb-1">
            <span>{t("ticket.adult")}</span>
            <span>Rp 150K</span>
          </li>
          <li className="flex justify-between">
            <span>{t("ticket.child")}</span>
            <span>Rp 75K</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TicketInfo;
