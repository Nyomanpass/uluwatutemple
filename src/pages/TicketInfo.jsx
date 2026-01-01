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
            <span>Rp 60K</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-1">
            <span>{t("ticket.indonesianAdult")}</span>
            <span>Rp 40K</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-1">
            <span>{t("ticket.foreignerChild")}</span>
            <span>Rp 40K</span>
          </li>
          <li className="flex justify-between">
            <span>{t("ticket.indonesianChild")}</span>
            <span>Rp 30K</span>
          </li>
        </ul>
         <p className="mt-5">{t("ticket.dsckawasan")}</p>
      </div>

      {/* KECAK DANCE */}
      <div className="bg-secondary text-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">{t("ticket.kecakDance")}</h3>
         <p className="mb-1">{t("ticket.performs")} <span className="font-semibold">6PM</span></p>
         <p className="mb-5">{t("ticket.dsckecak")}</p>
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
        <p className="mt-5">{t("ticket.dsckecak")}</p>
      </div>
    </div>
  );
};

export default TicketInfo;
