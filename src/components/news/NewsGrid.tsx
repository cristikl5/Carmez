import NewsCard from "./NewsCard";

export type News = {
  image: string;
  title: string;
  timeStamp: string;
  views: number;
};

const NewsGrid = ({ news }: { news: News[] }) => {
  return news && news.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {news && news.length > 0 ? (
        news.map(news => <NewsCard key={news.title} news={news} />)
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">Nu au fost găsite articole</p>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center py-10">
      <p className="text-gray-500 text-lg">Nu au fost găsite articole</p>
    </div>
  );
};

export default NewsGrid;
