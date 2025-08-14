import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const History = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-11 mt-20 items-center">
      <div className="grid sm:grid-cols-2 gap-12">
        <img
          src="/images/la-gust.svg"
          alt="Gust"
          className="w-full h-full object-contain"
        />
        <img
          src="/images/old-photo.png"
          alt="Gust"
          className="w-full h-full object-contain"
        />
        <img
          src="/images/old-photo-2.png"
          alt="Gust"
          className="w-full h-full object-contain col-span-full"
        />
      </div>
      <div className="flex flex-col gap-11">
        <span className="text-primary font-bold">Noi suntem Carmez</span>
        <div className="space-y-4">
          <h2 className="font-barlow font-medium text-[40px] leading-10">
            Sed ut perspiciatis unde omnis iste natus error
          </h2>
          <p className="font-normal text-base">
            Istoria companiei datează încă din anul 1904, când în partea de
            sud-vest a Chișinăului, autoritățile orașului au permis construcţia
            primului abator privat.
          </p>
        </div>
        <Button
          icon={<ArrowRight size={18} className="text-white" />}
          className="w-fit"
        >
          Află mai mult
        </Button>
      </div>
    </div>
  );
};

export default History;
