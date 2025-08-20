import StoresGrid, { type Store } from "@/components/stores/StoresGrid";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const stores: Store[] = [
  {
    name: "Carmez Chișinău",
    address: "str. Andrei Doga 26A",
    phone: "0(22) 78 82 51",
    sinceYear: 2000,
    location: "/images/stores/map-cropped.png",
  },
  {
    name: "Carmez Chișinău",
    address: "str. Independenței 6/2",
    phone: "0(22) 78 82 51",
    sinceYear: 2000,
    location: "/images/stores/map-cropped.png",
  },
  {
    name: "Carmez Chișinău",
    address: "str. Toader Bubuiog 1C",
    phone: "0(22) 78 82 51",
    sinceYear: 2000,
    location: "/images/stores/map-cropped.png",
  },
  {
    name: "Carmez Chișinău",
    address: "str. Mitropolit Varlaam 65",
    phone: "0(22) 78 82 51",
    sinceYear: 2000,
    location: "/images/stores/map-cropped.png",
  },
  {
    name: "Carmez Chișinău",
    address: "str.Calea Basarabiei 36/4",
    phone: "0(22) 78 82 51",
    sinceYear: 2000,
    location: "/images/stores/map-cropped.png",
  },
  {
    name: "Carmez Chișinău",
    address: "str.Sarmizegetusa 30",
    phone: "0(22) 78 82 51",
    sinceYear: 2000,
    location: "/images/stores/map-cropped.png",
  },
];

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStores = useMemo(() => {
    return stores.filter(store =>
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="py-24 sm:py-36">
      <div className="fluid-container">
        <div className="flex items-center justify-between">
          <Breadcrumbs />
          <Input
            placeholder="Cauta..."
            className="rounded-[10px] h-11 w-full sm:w-auto"
            icon={<Search size={20} className="text-gray-400" />}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <StoresGrid stores={filteredStores} />
        </div>
      </div>
    </div>
  );
};

export default Stores;
