import { useState } from "react";

interface MomentData {
  years: string[];
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stats?: { number: string; label: string }[];
}

const Moments = () => {
  const [hoveredYear, setHoveredYear] = useState<string>("1941-1944");

  const momentsData: Record<string, MomentData> = {
    ACUM: {
      years: ["ACUM"],
      title: "NOI SUNTEM SPECIALISTI ÎN CARNE",
      subtitle: "pasiune. Tradiție. Gust autentic.",
      description:
        "CARMEZ este un nume de referință în industria cărnii din Republica Moldova. Cu o tradiție care îmbrace în urmă cu peste 25 de ani, producem și iertăm produse din carne proaspete și procesate care respectă cele mai înalte standarde de calitate.",
      image: "/images/about-us/hero.jpg",
      stats: [
        { number: "150", label: "ANGAJAȚI DEDICAȚI" },
        { number: "238", label: "PRODUSE" },
      ],
    },
    "2014": {
      years: ["2014"],
      title: "EXTINDERE NAȚIONALĂ",
      description:
        "Extinderea rețelei de distribuție la nivel național și modernizarea facilităților de producție.",
      image: "/images/about-us/hero.jpg",
    },
    "2008": {
      years: ["2008"],
      title: "MODERNIZARE",
      description:
        "Implementarea tehnologiilor moderne de producție și certificarea conform standardelor europene.",
      image: "/images/about-us/hero.jpg",
    },
    "2004": {
      years: ["2004"],
      title: "DEZVOLTARE",
      description:
        "Lansarea primelor produse premium și extinderea gamei de produse.",
      image: "/images/about-us/hero.jpg",
    },
    "2000": {
      years: ["2000"],
      title: "MILENIUL NOU",
      description:
        "Intrarea în noul mileniu cu planuri ambițioase de dezvoltare.",
      image: "/images/about-us/hero.jpg",
    },
    "1999": {
      years: ["1999"],
      title: "CONSOLIDARE",
      description:
        "Consolidarea poziției pe piața locală și îmbunătățirea proceselor.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1991": {
      years: ["1991"],
      title: "INDEPENDENȚA",
      description:
        "Adaptarea la noile realități de piață după independența Moldovei.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1988": {
      years: ["1988"],
      title: "TRANSFORMARE",
      description:
        "Perioada de transformări importante în organizarea producției.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1970-1985": {
      years: ["1970-1985"],
      title: "CREȘTERE SUSȚINUTĂ",
      description:
        "Perioada de creștere și dezvoltare susținută a capacităților de producție.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1964": {
      years: ["1964"],
      title: "DEZVOLTARE",
      description:
        "Continuarea dezvoltării și îmbunătățirea tehnologiilor de producție.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1955": {
      years: ["1955"],
      title: "STABILIZARE",
      description: "Stabilizarea activității și consolidarea echipei de lucru.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1947": {
      years: ["1947"],
      title: "RECONSTRUIRE",
      description:
        "Perioada de reconstruire după război și relansarea activității.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1941-1944": {
      years: ["1941-1944"],
      title: "RECONSTRUIRE",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1908": {
      years: ["1908"],
      title: "ÎNCEPUTURI",
      description:
        "Primii pași în industria cărnii și stabilirea bazelor pentru viitor.",
      image: "/images/about-us/reconsctruction.jpg",
    },
    "1904": {
      years: ["1904"],
      title: "FONDAREA",
      description:
        "Fondarea companiei și începutul unei tradiții de peste un secol.",
      image: "/images/about-us/reconsctruction.jpg",
    },
  };

  const yearsList = [
    "ACUM",
    "2014",
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
  const currentContent = momentsData[hoveredYear];

  return (
    <section className="py-20">
      <h2 className="text-[32px] text-center font-barlow font-medium text-3xl md:text-4xl lg:text-5xl text-dark">
        Momente
      </h2>
      <div className="mt-11 grid sm:grid-cols-2 gap-20">
        <div className="flex items-center justify-between h-full">
          <ul className="flex flex-col items-baseline justify-between h-full text-sm font-bold list-disc text-gray-500">
            {yearsList.map(year => (
              <li
                key={year}
                className={`cursor-pointer transition-colors duration-300 hover:text-primary ${
                  hoveredYear === year ? "text-black" : ""
                }`}
                onClick={() => setHoveredYear(year)}
              >
                {year}
              </li>
            ))}
          </ul>
          <div className="flex flex-col font-bold items-end relative overflow-hidden">
            {currentContent?.years.map((year, index) => (
              <span
                key={`${hoveredYear}-${year}-${index}`}
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
          <div className="transition-all duration-500 ease-out transform animate-fade-in">
            <h2 className="text-2xl font-medium !font-barlow text-primary !leading-8">
              {currentContent?.title}
            </h2>
            {currentContent?.subtitle && (
              <p className="text-sm text-gray-600 mt-1 italic">
                {currentContent.subtitle}
              </p>
            )}
            <p className="font-medium mt-5">{currentContent?.description}</p>
            {currentContent?.stats && (
              <div className="flex gap-8 mt-6">
                {currentContent.stats.map(
                  (stat: { number: string; label: string }, index: number) => (
                    <div
                      key={`${hoveredYear}-stat-${stat.label}-${index}`}
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
            <div className="mt-7">
              <img
                src={currentContent?.image}
                alt={currentContent?.title}
                className="w-full h-full object-contain rounded-[18px] transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moments;
