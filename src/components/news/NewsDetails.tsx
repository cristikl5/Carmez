import { findNewsBySlug } from "@/data/newsData";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";

const NewsDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const locale = i18n.language === "ru" ? "ru" : "ro";
  const newsItem = findNewsBySlug(locale, slug);

  const formattedDate = useMemo(() => {
    if (!newsItem) return "";
    return new Date(newsItem.timeStamp).toLocaleDateString("ro-RO", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [newsItem]);

  if (!newsItem) {
    return (
      <section className="py-24 sm:py-36">
        <div className="fluid-container">
          <div className="details-fluid-container">
            <Breadcrumbs hideTitle />
            <div className="text-center space-y-4">
              <h1 className="font-semibold text-3xl">
                Articolul nu a fost găsit
              </h1>
              <p className="text-gray-500">
                Înapoiază-te la lista de noutăți pentru a continua explorarea.
              </p>
              <button
                onClick={() => navigate("/news")}
                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold"
              >
                Înapoi la noutăți
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const bodyParagraphs = newsItem.body
    ?.split(/\n{2,}/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean);
  const hasBody = Boolean(bodyParagraphs && bodyParagraphs.length > 0);

  return (
    <section className="py-24 sm:py-36">
      <div className="fluid-container">
        <div className="details-fluid-container">
          <Breadcrumbs hideTitle />
          <div className="space-y-5">
            <h1 className="font-semibold font-barlow text-4xl">
              {newsItem.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
            </div>
          </div>
          <div className="mt-8 space-y-8">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="object-contain rounded-[18px] w-full"
            />
            {hasBody ? (
              <div className="space-y-6 text-gray-600 leading-7">
                {bodyParagraphs?.map((paragraph, index) => {
                  const lines = paragraph.split("\n");
                  return (
                    <p key={`${newsItem.slug}-paragraph-${index}`}>
                      {lines.map((line, lineIndex) => (
                        <span
                          key={`${newsItem.slug}-line-${index}-${lineIndex}`}
                        >
                          {line.trim()}
                          {lineIndex < lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Imaginile vorbesc de la sine pentru această noutate.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
