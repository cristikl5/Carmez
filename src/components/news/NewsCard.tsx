import type { News } from "./NewsGrid";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="space-y-5">
      <img src={news.image} alt={news.title} className="rounded-[18px]" />
      <div className="flex flex-col gap-2.5">
        <h3 className="text-xl sm:text-2xl font-bold text-center">
          {news.title}
        </h3>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {new Date(news.timeStamp).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="bg-gray-400 size-1 rounded-full"></span>
            <span className="text-sm text-gray-500">{news.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
