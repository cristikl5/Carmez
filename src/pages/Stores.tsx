import StoresGrid, { type Store } from "@/components/stores/StoresGrid";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const stores: Store[] = [
    {
      name: t("stores.storeNames.chisinau"),
      address: "str. Andrei Doga 26A",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2719.377948750273!2d28.856596!3d47.032814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d454d8bbee3%3A0xaac9db64fd52e3d5!2sCarmez!5e0!3m2!1sru!2sus!4v1755723724943!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 9:00 – 21:00`,
        `${t("stores.timeFormats.saturday")} 9:00 -19:00`,
        `${t("stores.timeFormats.sunday")} 9:00-18:00`,
      ],
    },
    {
      name: t("stores.storeNames.drochia"),
      address: "str. Independenței 6/2",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5336.277486952334!2d27.813691!3d48.030347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ccafcbb275397f%3A0x758e51f0ccd908ee!2zQnVsZXZhcmR1bCBJbmRlcGVuZGVuyJtlaSA2LCBEcm9jaGlhLCDQnNC-0LvQtNC-0LLQsA!5e0!3m2!1sru!2sus!4v1755723569963!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 8:00 - 19:00`,
        `${t("stores.timeFormats.saturday")} 8:00 - 17:00`,
        `${t("stores.timeFormats.sunday")} 8:00 - 15:00`,
      ],
    },
    {
      name: t("stores.storeNames.bubuieci"),
      address: "str. Toader Bubuiog 1C",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d680.4560054678401!2d28.931075000000003!3d46.984791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97b8d40cbea8b%3A0xf06ec68b4d23dcf1!2sCarmez!5e0!3m2!1sru!2sus!4v1755723513568!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 8:00 - 20:00`,
        `${t("stores.timeFormats.saturday")} 9:00 - 18:00`,
        `${t("stores.timeFormats.sunday")} 9:00-17:00`,
      ],
    },
    {
      name: t("stores.storeNames.chisinau"),
      address: "str. Cuza Vodă 41",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5444.578608872445!2d28.851603!3d46.975652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97933e1d5cf1b%3A0x6495fbf8af89302c!2zU3RyYWRhIEN1emEgVm9kxIMgNDEsIE1ELTIwNzIsIENoaciZaW7Eg3UsINCc0L7Qu9C00L7QstCw!5e0!3m2!1sru!2sus!4v1755724027311!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 8:00 - 20:00`,
        `${t("stores.timeFormats.saturday")} 9:00 - 18:00`,
        `${t("stores.timeFormats.sunday")} 9:00-18:00`,
      ],
    },
    {
      name: t("stores.storeNames.chisinau"),
      address: "str. Mitropolit Varlaam 65",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d339.9933134853089!2d28.840702000000004!3d47.021655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d21f26ec74d%3A0x4107115f3c1a3132!2sCarmez!5e0!3m2!1sru!2sus!4v1755723614944!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 8:00 – 19:00`,
        `${t("stores.timeFormats.saturday")} 8:00 -16:00`,
        `${t("stores.timeFormats.sunday")} 8:00-16:00`,
      ],
    },
    {
      name: t("stores.storeNames.chisinau"),
      address: "str.Calea Basarabiei 36/4",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5442.851673875432!2d28.891973!3d46.992611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c04202877d1%3A0xa3b31a53eb81bb57!2sCarmez!5e0!3m2!1sru!2sus!4v1755723692065!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 8:00-19:00`,
        `${t("stores.timeFormats.saturday")} 8:00-17:00`,
        `${t("stores.timeFormats.sunday")} ${t("stores.timeFormats.dayOff")}`,
      ],
    },
    {
      name: t("stores.storeNames.chisinau"),
      address: "str.Sarmizegetusa 30",
      phone: "0(22) 78 82 51",
      sinceYear: 2000,
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5443.780728252564!2d28.876814000000003!3d46.983488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9794485c39bb9%3A0x143c35d1d1c5bd76!2zU3RyYWRhIFNhcm1pemVnZXR1c2EgMzAsIENoaciZaW7Eg3UsINCc0L7Qu9C00L7QstCw!5e0!3m2!1sru!2sus!4v1755723656491!5m2!1sru!2sus",
      workingHours: [
        `${t("stores.timeFormats.mondayFriday")} 8:00-19:00`,
        `${t("stores.timeFormats.saturday")} 8:00-17:00`,
        `${t("stores.timeFormats.sunday")} ${t("stores.timeFormats.dayOff")}`,
      ],
    },
  ];

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
            placeholder={t("stores.search")}
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
