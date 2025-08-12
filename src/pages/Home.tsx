import { HeroSection } from "../components/home";
import ButtonPrimary from "../components/ui/ButtonPrimary";

const Home = () => {
  return (
    <section className="grid sm:grid-cols-2 items-center justify-center">
      <div className="flex flex-col gap-16">
        <h1 className="font-bold text-7xl">
          Retele clasice la masa de Pasti. Din 1904.
        </h1>
        <ButtonPrimary className="w-fit">Cumpara aici</ButtonPrimary>
      </div>
      <HeroSection />
    </section>
  );
};

export default Home;
