import NewsCard from "./NewsCard";

export type News = {
  image: string;
  title: string;
  timeStamp: string;
  views: number;
};

const NewsGrid = ({ news }: { news: News[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {news.map(news => (
        <NewsCard key={news.title} news={news} />
      ))}
    </div>
  );
};

export default NewsGrid;
