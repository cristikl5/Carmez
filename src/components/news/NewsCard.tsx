import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { News } from "./NewsGrid";

const NewsCard = ({ news }: { news: News }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const viewsLabel =
    i18n.language === "ru"
      ? "просмотры"
      : i18n.language === "ro"
        ? "vizionari"
        : "views";
  const locale =
    i18n.language === "ru"
      ? "ru-RU"
      : i18n.language === "ro"
        ? "ro-RO"
        : "en-GB";

  return (
    <div
      className="space-y-5 hover:scale-[102%] transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => navigate(`/news/${news.slug}`)}
      role="button"
    >
      <div className="relative w-full overflow-hidden rounded-[18px] aspect-[4/3]">
        <img
          src={news.image}
          alt={news.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2.5 flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-center">
          {news.title}
        </h3>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {new Date(news.timeStamp).toLocaleDateString(locale, {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="bg-gray-400 size-1 rounded-full"></span>
            <span className="text-sm text-gray-500">
              {news.views} {viewsLabel}
            </span>
          </div>
        </div>
        {news.excerpt && (
          <p className="text-sm text-gray-500 text-center line-clamp-3">
            {news.excerpt}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
