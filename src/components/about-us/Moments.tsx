import { useState } from "react";
import { useTranslation } from "react-i18next";

interface MomentData {
  years: string[];
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stats?: { number: string; label: string }[];
}

const Moments = () => {
  const [clickedYear, setClickedYear] = useState<string>("1941-1944");
  const { t } = useTranslation();

  const momentsData: Record<string, MomentData> = {
    ACUM: {
      years: ["ACUM"],
      title: t("aboutUs.moments.current.title"),
      subtitle: t("aboutUs.moments.current.subtitle"),
      description: t("aboutUs.moments.current.description"),
      image: "/images/about-us/hero.jpg",
      stats: [
        { number: "150", label: t("aboutUs.moments.current.stats.employees") },
        { number: "238", label: t("aboutUs.moments.current.stats.products") },
      ],
    },
    "2019": {
      years: ["2019"],
      title: t("aboutUs.moments.2019.title"),
      description: t("aboutUs.moments.2019.description"),
      image: "/images/about-us/hero.jpg",
    },
    "2014": {
      years: ["2014"],
      title: t("aboutUs.moments.2014.title"),
      description: t("aboutUs.moments.2014.description"),
      image: "/images/about-us/hero.jpg",
    },
    "2013": {
      years: ["2013"],
      title: t("aboutUs.moments.2013.title"),
      description: t("aboutUs.moments.2013.description"),
      image: "/images/about-us/hero.jpg",
    },
    "2008": {
      years: ["2008"],
      title: t("aboutUs.moments.2008.title"),
      description: t("aboutUs.moments.2008.description"),
      image: "/images/about-us/hero.jpg",
    },
    "2004": {
      years: ["2004"],
      title: t("aboutUs.moments.2004.title"),
      description: t("aboutUs.moments.2004.description"),
      image: "/images/about-us/hero.jpg",
    },
    "2000": {
      years: ["2000"],
      title: t("aboutUs.moments.2000.title"),
      description: t("aboutUs.moments.2000.description"),
      image: "/images/about-us/hero.jpg",
    },
    "1999": {
      years: ["1999"],
      title: t("aboutUs.moments.1999.title"),
      description: t("aboutUs.moments.1999.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1991": {
      years: ["1991"],
      title: t("aboutUs.moments.1991.title"),
      description: t("aboutUs.moments.1991.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1988": {
      years: ["1988"],
      title: t("aboutUs.moments.1988.title"),
      description: t("aboutUs.moments.1988.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1970-1985": {
      years: ["1970-1985"],
      title: t("aboutUs.moments.1970-1985.title"),
      description: t("aboutUs.moments.1970-1985.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1964": {
      years: ["1964"],
      title: t("aboutUs.moments.1964.title"),
      description: t("aboutUs.moments.1964.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1955": {
      years: ["1955"],
      title: t("aboutUs.moments.1955.title"),
      description: t("aboutUs.moments.1955.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1947": {
      years: ["1947"],
      title: t("aboutUs.moments.1947.title"),
      description: t("aboutUs.moments.1947.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1941-1944": {
      years: ["1941-1944"],
      title: t("aboutUs.moments.1941-1944.title"),
      description: t("aboutUs.moments.1941-1944.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1908": {
      years: ["1908"],
      title: t("aboutUs.moments.1908.title"),
      description: t("aboutUs.moments.1908.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1904": {
      years: ["1904"],
      title: t("aboutUs.moments.1904.title"),
      description: t("aboutUs.moments.1904.description"),
      image: "/images/about-us/reconsctruction.jpg",
    },
  };

  const yearsList = [
    "ACUM",
    "2019",
    "2014",
    "2013",
    "2008",
    "2004",
    "2000",
    "1999",
    "1991",
    "1988",
    "1970-1985",
    "1964",
    "1955",
    "1947",
    "1941-1944",
    "1908",
    "1904",
  ];
  const currentContent = momentsData[clickedYear];

  return (
    <section className="py-20">
      <h2 className="text-[32px] text-center font-barlow font-medium text-3xl md:text-4xl lg:text-5xl text-dark">
        {t("moments.title")}
      </h2>
      <div className="mt-11 grid sm:grid-cols-2 gap-20 h-[600px]">
        <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between h-full">
          <ul className="flex flex-col items-baseline justify-between h-full text-sm font-bold list-disc text-gray-500">
            {yearsList.map(year => (
              <li
                key={year}
                className={`cursor-pointer transition-colors duration-300 hover:text-primary ${
                  clickedYear === year ? "text-black" : ""
                }`}
                onClick={() => setClickedYear(year)}
              >
                {year}
              </li>
            ))}
          </ul>
          <div className="flex flex-col font-bold items-start sm:items-end relative mt-5 sm:mt-0">
            {currentContent?.years.map((year, index) => (
              <span
                key={`${clickedYear}-${year}-${index}`}
                className={`text-8xl font-barlow transition-all duration-500 ease-out transform ${
                  index === currentContent.years.length - 1
                    ? "text-primary"
                    : "text-gray-500"
                } animate-fade-in-up`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {year}
              </span>
            ))}
          </div>
        </div>
        <div className="h-full">
          <div className="transition-all duration-500 ease-out transform animate-fade-in h-full flex flex-col">
            <h2 className="text-2xl font-medium !font-barlow text-primary !leading-8">
              {currentContent?.title}
            </h2>
            {currentContent?.subtitle && (
              <p className="text-sm text-gray-600 mt-1 italic">
                {currentContent.subtitle}
              </p>
            )}
            <div className="h-32 overflow-hidden transition-all duration-300 mt-5">
              <p className="font-medium">{currentContent?.description}</p>
            </div>
            {currentContent?.stats && (
              <div className="flex gap-8 mt-6">
                {currentContent.stats.map(
                  (stat: { number: string; label: string }, index: number) => (
                    <div
                      key={`${clickedYear}-stat-${stat.label}-${index}`}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-primary font-barlow">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            <div className="mt-7 h-64">
              <img
                src={currentContent?.image}
                alt={currentContent?.title}
                className="w-full h-full object-cover rounded-[18px] transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moments;
