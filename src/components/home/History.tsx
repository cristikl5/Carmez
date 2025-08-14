import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const History = () => {
  return (
    <div className="bg-layout pt-10 md:pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-11 items-center fluid-container">
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 order-2 lg:order-1">
          <img
            src="/images/history/la-gust.svg"
            alt="Gust"
            className="w-full h-full object-contain"
          />
          <img
            src="/images/history/old-photo.png"
            alt="Gust"
            className="w-full h-full object-contain"
          />
          <img
            src="/images/history/old-photo-2.png"
            alt="Gust"
            className="w-full h-full object-contain col-span-2"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-11 order-1 lg:order-2">
          <span className="text-primary font-bold text-sm md:text-base">
            Noi suntem Carmez
          </span>
          <div className="space-y-3 md:space-y-4">
            <h2 className="font-barlow font-medium text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-10">
              Sed ut perspiciatis unde omnis iste natus error
            </h2>
            <p className="font-normal text-sm md:text-base text-gray-700 leading-relaxed">
              Istoria companiei datează încă din anul 1904, când în partea de
              sud-vest a Chișinăului, autoritățile orașului au permis
              construcţia primului abator privat.
            </p>
          </div>
          <Button
            icon={
              <ArrowRight
                size={16}
                className="text-white md:w-[18px] md:h-[18px]"
              />
            }
            className="w-fit text-sm md:text-base"
          >
            Află mai mult
          </Button>
        </div>
      </div>
    </div>
  );
};

export default History;
