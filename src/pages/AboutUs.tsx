import { useTranslation } from "react-i18next";
import Faq from "../components/about-us/Faq";
import Moments from "../components/about-us/Moments";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20">
      <div className="fluid-container">
        <h2 className="text-4xl md:text-[56px] font-semibold text-dark font-barlow text-center leading-10 mb-6">
          {t("footer.aboutUs")}
        </h2>
        <p className="text-justify font-medium text-base md:text-lg whitespace-pre-line">
          {t("aboutUs.description")}
        </p>
        <Moments />
        <Faq />
      </div>
    </section>
  );
};

export default AboutUs;
