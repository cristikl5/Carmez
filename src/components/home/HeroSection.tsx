import ButtonPrimary from "../ui/ButtonPrimary";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/images/hero.svg')",
      }}
    >
      <div className="fluid-container w-full">
        <div className="flex flex-col gap-[60px] max-w-2xl">
          <h1 className="font-bold !text-7xl text-white leading-tight">
            Retele clasice
            <br />
            la masa de Pasti.
            <br />
            Din 1904.
          </h1>
          <ButtonPrimary className="w-fit">Cumpara aici</ButtonPrimary>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
