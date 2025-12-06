import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const HistorySection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-layout pt-10 md:pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-11 items-start fluid-container">
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 order-2 lg:order-1">
          <img
            src="/images/history/la-gust.svg"
            alt="Gust"
            className="w-3/4 md:w-full h-full object-contain rounded-4xl"
          />
          <img
            src="/images/history/old-photo.jpg"
            alt="Gust"
            className="w-full h-full object-contain rounded-4xl"
          />
          <img
            src="/images/history/old-photo-2.jpg"
            alt="Gust"
            className="w-full h-full object-contain col-span-2 rounded-4xl"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-11 order-1 lg:order-2">
          <div className="space-y-3 md:space-y-4">
            <h2 className="font-barlow font-semibold text-4xl md:text-[56px]">
              {t("home.history.subtitle")}
            </h2>
            <p className="font-normal text-sm md:text-base text-gray-700 leading-relaxed">
              {t("home.history.description")}
            </p>
          </div>
          <Button
            icon={
              <ArrowRight
                size={16}
                className="text-white md:w-[18px] md:h-[18px]"
              />
            }
            onClick={() => navigate("/catalog")}
            className="w-fit text-sm md:text-base"
          >
            {t("home.history.button")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
