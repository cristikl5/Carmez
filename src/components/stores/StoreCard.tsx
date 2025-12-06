import { Clock, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import GoogleMap from "../contact/GoogleMap";
import type { Store } from "./StoresGrid";

const StoreCard = ({ store }: { store: Store }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white p-5 rounded-4xl">
      <GoogleMap
        embedUrl={store.location}
        className="object-contain rounded-[18px]"
      />
      <div className="space-y-3">
        <div>
          <span className="font-lato font-normal text-gray-400">
            {t("stores.since")} {store.sinceYear}
          </span>
          <div className="font-bold text-2xl">{store.name}</div>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <MapPin size={16} className="text-primary" />
          <span className="font-lato font-bold text-gray-700">{t("stores.address")}</span>
          <span className="font-lato font-normal text-gray-700">
            {store.address}
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <Phone size={16} className="text-primary" />
          <span className="font-lato font-bold text-gray-700">{t("stores.phone")}</span>
          <span className="font-lato font-normal text-gray-700">
            {store.phone}
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <Clock size={16} className="text-primary" />
          <span className="font-lato font-bold text-gray-700">{t("stores.schedule")}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-lato font-normal text-gray-700">
            {store.workingHours.map(hour => (
              <span key={hour} className="block text-sm whitespace-nowrap">
                {hour}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
