import { MapPin, Phone } from "lucide-react";
import type { Store } from "./StoresGrid";

const StoreCard = ({ store }: { store: Store }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 bg-white p-5 rounded-4xl">
      <img
        src={store.location}
        alt="Locatie"
        className="object-contain"
        width={144}
        height={144}
      />
      <div className="space-y-3 ">
        <div>
          <span className="font-lato font-normal text-gray-400">
            Since {store.sinceYear}
          </span>
          <div className="font-bold text-2xl">{store.name}</div>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <MapPin size={16} className="text-primary" />
          <span className="font-lato font-bold text-gray-700">Adresa:</span>
          <span className="font-lato font-normal text-gray-700">
            {store.address}
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <Phone size={16} className="text-primary" />
          <span className="font-lato font-bold text-gray-700">Telefon:</span>
          <span className="font-lato font-normal text-gray-700">
            {store.phone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
