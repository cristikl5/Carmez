import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center relative px-4 md:px-0"
      style={{
        backgroundImage: "url('/images/hero.svg')",
      }}
    >
      <div className="fluid-container w-full">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[60px] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <h1 className="font-bold !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl text-white leading-tight">
            Retele clasice
            <br />
            la masa de Pasti.
            <br />
            Din 1904.
          </h1>
          <Button
            variant="secondary"
            className="w-fit text-sm md:text-base"
            icon={<ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />}
          >
            Cumpara aici
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-3 absolute bottom-3 md:bottom-5 left-0 right-0">
          <span className="w-6 h-0.5 md:w-9 md:h-1 bg-white opacity-20 rounded-xs"></span>
          <span className="w-6 h-0.5 md:w-9 md:h-1 bg-primary rounded-full"></span>
          <span className="w-6 h-0.5 md:w-9 md:h-1 bg-white opacity-20 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
