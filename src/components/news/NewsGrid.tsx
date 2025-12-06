import { useTranslation } from "react-i18next";
import NewsCard from "./NewsCard";

export type News = {
  slug: string;
  image: string;
  title: string;
  timeStamp: string;
  excerpt?: string;
  body?: string;
};

const NewsGrid = ({ news }: { news: News[] }) => {
  const { t } = useTranslation();

  return news && news.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {news && news.length > 0 ? (
        news.map(newsItem => <NewsCard key={newsItem.slug} news={newsItem} />)
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">{t("news.noNewsFound")}</p>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center py-10">
      <p className="text-gray-500 text-lg">{t("news.noNewsFound")}</p>
    </div>
  );
};

export default NewsGrid;
