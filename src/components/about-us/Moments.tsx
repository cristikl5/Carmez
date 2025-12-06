import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

interface MomentData {
  years: string[];
  title: string;
  description: string;
  image: string;
}

const Moments = () => {
  const [clickedYear, setClickedYear] = useState<string>("1904");
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const scrollToYear = useCallback((year: string) => {
    const container = scrollContainerRef.current;
    const button = buttonRefs.current.get(year);

    if (container && button) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      // Calculate scroll position to center the button
      const scrollLeft = button.offsetLeft - (containerRect.width / 2) + (buttonRect.width / 2);

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, []);

  const handleYearClick = useCallback((year: string) => {
    setClickedYear(year);
    scrollToYear(year);
  }, [scrollToYear]);

  // Scroll to the default year (1904) on mount - scroll to end
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll to the end on mount (where 1904 is located)
      container.scrollLeft = container.scrollWidth;
    }
  }, []);

  const momentsData: Record<string, MomentData> = {
    "2014": {
      years: ["2014"],
      title: t("aboutUs.moments.2014.title"),
      description: t("aboutUs.moments.2014.description"),
      image: "/images/about-us/c-t-17.jpeg",
    },
    "2008": {
      years: ["2008"],
      title: t("aboutUs.moments.2008.title"),
      description: t("aboutUs.moments.2008.description"),
      image: "/images/about-us/c-t-16.jpeg",
    },
    "2004": {
      years: ["2004"],
      title: t("aboutUs.moments.2004.title"),
      description: t("aboutUs.moments.2004.description"),
      image: "/images/about-us/c-t-15.jpeg",
    },
    "2000": {
      years: ["2000"],
      title: t("aboutUs.moments.2000.title"),
      description: t("aboutUs.moments.2000.description"),
      image: "/images/about-us/c-t-14.jpeg",
    },
    "1999": {
      years: ["1999"],
      title: t("aboutUs.moments.1999.title"),
      description: t("aboutUs.moments.1999.description"),
      image: "/images/about-us/c-t-13.jpeg",
    },
    "1995": {
      years: ["1995"],
      title: t("aboutUs.moments.1995.title"),
      description: t("aboutUs.moments.1995.description"),
      image: "/images/about-us/c-t-12.jpeg",
    },
    "1991": {
      years: ["1991"],
      title: t("aboutUs.moments.1991.title"),
      description: t("aboutUs.moments.1991.description"),
      image: "/images/about-us/c-t-11.jpeg",
    },
    "1988": {
      years: ["1988"],
      title: t("aboutUs.moments.1988.title"),
      description: t("aboutUs.moments.1988.description"),
      image: "/images/about-us/c-t-10.jpeg",
    },
    "1970-1985": {
      years: ["1970-1985"],
      title: t("aboutUs.moments.1970-1985.title"),
      description: t("aboutUs.moments.1970-1985.description"),
      image: "/images/about-us/c-t-9.jpeg",
    },
    "1966": {
      years: ["1966"],
      title: t("aboutUs.moments.1966.title"),
      description: t("aboutUs.moments.1966.description"),
      image: "/images/about-us/c-t-6.jpeg",
    },
    "1964": {
      years: ["1964"],
      title: t("aboutUs.moments.1964.title"),
      description: t("aboutUs.moments.1964.description"),
      image: "/images/about-us/c-t-8.jpeg",
    },
    "1955": {
      years: ["1955"],
      title: t("aboutUs.moments.1955.title"),
      description: t("aboutUs.moments.1955.description"),
      image: "/images/about-us/c-t-7.jpeg",
    },
    "1950": {
      years: ["1950"],
      title: t("aboutUs.moments.1950.title"),
      description: t("aboutUs.moments.1950.description"),
      image: "/images/about-us/c-t-5.jpeg",
    },
    "1947": {
      years: ["1947"],
      title: t("aboutUs.moments.1947.title"),
      description: t("aboutUs.moments.1947.description"),
      image: "/images/about-us/c-t-4.jpeg",
    },
    "1941-1944": {
      years: ["1941-1944"],
      title: t("aboutUs.moments.1941-1944.title"),
      description: t("aboutUs.moments.1941-1944.description"),
      image: "/images/about-us/c-t-3.jpeg",
    },
    "1908": {
      years: ["1908"],
      title: t("aboutUs.moments.1908.title"),
      description: t("aboutUs.moments.1908.description"),
      image: "/images/about-us/c-t-2.jpeg",
    },
    "1904": {
      years: ["1904"],
      title: t("aboutUs.moments.1904.title"),
      description: t("aboutUs.moments.1904.description"),
      image: "/images/about-us/c-t-1.jpeg",
    },
  };

  const yearsList = [
    "2014",
    "2008",
    "2004",
    "2000",
    "1999",
    "1995",
    "1991",
    "1988",
    "1970-1985",
    "1966",
    "1964",
    "1955",
    "1950",
    "1947",
    "1941-1944",
    "1908",
    "1904",
  ];
  const currentContent = momentsData[clickedYear];

  return (
    <section className="py-12 lg:py-20">
      <h2 className="text-4xl md:text-[56px] text-center font-barlow font-semibold text-dark">
        {t("moments.title")}
      </h2>

      {/* Mobile: Horizontal scrollable year pills */}
      <div
        ref={scrollContainerRef}
        className="lg:hidden mt-8 overflow-x-auto scrollbar-hide -mx-4 px-4"
      >
        <div className="flex gap-2 min-w-max pb-2">
          {yearsList.map(year => (
            <button
              key={year}
              ref={el => {
                if (el) buttonRefs.current.set(year, el);
              }}
              onClick={() => handleYearClick(year)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                clickedYear === year
                  ? "bg-primary text-white"
                  : "bg-white text-gray-500 hover:text-primary"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 lg:mt-11 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 lg:h-[600px]">
        {/* Desktop: Year list + large year display */}
        <div className="hidden lg:flex items-center justify-between h-full">
          <ul className="flex flex-col items-baseline h-full text-sm font-bold list-disc text-gray-500 gap-3">
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
          <div className="flex flex-col font-bold items-end relative">
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

        {/* Mobile: Large year display */}
        <div className="lg:hidden flex justify-center">
          {currentContent?.years.map((year, index) => (
            <span
              key={`mobile-${clickedYear}-${year}-${index}`}
              className={`text-7xl font-barlow font-bold transition-all duration-500 ease-out transform ${
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

        {/* Content area */}
        <div className="lg:h-full">
          <div className="transition-all duration-500 ease-out transform animate-fade-in h-full flex flex-col">
            <h2 className="text-xl lg:text-2xl font-medium !font-barlow text-primary !leading-7 lg:!leading-8 text-center lg:text-left">
              {currentContent?.title}
            </h2>
            <div className="min-h-[60px] lg:h-32 overflow-hidden transition-all duration-300 mt-4 lg:mt-5">
              <p className="font-medium text-sm lg:text-base text-center lg:text-left">
                {currentContent?.description}
              </p>
            </div>
            <div className="mt-5 lg:mt-7 aspect-video lg:aspect-auto lg:h-64">
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
