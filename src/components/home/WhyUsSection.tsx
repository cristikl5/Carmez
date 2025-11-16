import { useTranslation } from "react-i18next";

export type Motive = {
  unitMeasure: string;
  value: string;
  description: string;
};

const WhyUsSection = () => {
  const { t } = useTranslation();

  const motives: Motive[] = [
    {
      unitMeasure: t("home.whyUs.unitMeasures.tone"),
      value: "80",
      description: t("home.whyUs.stats.capacity"),
    },
    {
      unitMeasure: t("home.whyUs.unitMeasures.m2"),
      value: "12000",
      description: t("home.whyUs.stats.area"),
    },
    {
      unitMeasure: t("home.whyUs.unitMeasures.angajati"),
      value: "650",
      description: t("home.whyUs.stats.employees"),
    },
  ];

  return (
    <section className="pb-10 bg-white">
      <div className="fluid-container">
        <div
          className="p-4 sm:p-10 border border-gray-400 rounded-4xl overflow-visible"
          style={{
            backgroundImage: "url('/images/why-us/Group.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="space-y-11">
            <h3 className="text-center font-barlow font-medium text-3xl">
              {t("home.whyUs.title")}
            </h3>
            <div className="grid lg:grid-cols-3 gap-24">
              {motives.map(motive => (
                <div key={motive.description}>
                  <h4 className="text-center font-barlow font-bold text-7xl lg:text-9xl">
                    {motive.value}
                    <span className="text-lg font-barlow font-bold">
                      {motive.unitMeasure}
                    </span>
                  </h4>
                  <p className="text-center font-normal text-sm text-gray-700">
                    {motive.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
