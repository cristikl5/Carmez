import Breadcrumbs from "../ui/Breadcrumbs";

const AboutUsHero = () => {
  return (
    <section
      className="min-h-[380px] w-full bg-cover bg-no-repeat flex items-center justify-start relative px-4 md:px-0"
      style={{
        backgroundImage: "url('/images/about-us/hero.jpg')",
      }}
    >
      <div className="fluid-container w-full">
        <Breadcrumbs />
      </div>
    </section>
  );
};

export default AboutUsHero;
