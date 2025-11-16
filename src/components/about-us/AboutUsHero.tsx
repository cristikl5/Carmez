import Breadcrumbs from "../ui/Breadcrumbs";

const AboutUsHero = () => {
  return (
    <section
      className="min-h-[100vh] w-full bg-cover bg-center bg-no-repeat flex justify-end py-24 sm:py-36 relative"
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
