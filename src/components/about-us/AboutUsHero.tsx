import Breadcrumbs from "../ui/Breadcrumbs";

const AboutUsHero = () => {
  return (
    <section
      className="min-h-[60vh] sm:min-h-[155vh] w-full bg-contain sm:bg-cover bg-bottom sm:bg-center bg-no-repeat flex justify-end py-24 sm:py-36 relative"
      style={{
        backgroundImage:
          "url('/images/about-us/hero.jpg'), linear-gradient(to right, #4699F0 0%, #3380E3 70%)",
      }}
    >
      <div className="fluid-container w-full">
        <Breadcrumbs />
      </div>
    </section>
  );
};

export default AboutUsHero;
