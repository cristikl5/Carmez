import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const HomeNewsCard = ({
  title,
  buttonText,
  bgImage,
}: {
  title: string;
  buttonText: string;
  bgImage: string;
}) => {
  return (
    <div
      className="rounded-2xl w-full max-w-[520px] h-auto pb-3 sm:pb-6 md:pb-10 pt-12 sm:pt-20 md:pt-32 pl-3 sm:pl-6 md:pl-10 pr-6 sm:pr-12 md:pr-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top right, rgba(160, 30, 34, 1) 0%, rgba(160, 30, 34, 0.7) 50%, rgba(160, 30, 34, 0.7) 50%, rgba(160, 30, 34, 0) 100%), url(${bgImage})`,
      }}
    >
      <h3 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 md:mb-7 leading-tight">
        {title}
      </h3>
      <Button
        variant="secondary"
        className="w-fit text-xs sm:text-sm md:text-base"
        icon={
          <ArrowRight
            size={14}
            className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
          />
        }
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default HomeNewsCard;
