import { useTranslation } from "react-i18next";
import Faq from "../components/about-us/Faq";
import Moments from "../components/about-us/Moments";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20">
      <div className="fluid-container">
        <p className="text-center font-medium whitespace-pre-line">
          {t("aboutUs.description")}
        </p>
        <Moments />
        <Faq />
      </div>
    </section>
  );
};

export default AboutUs;
