import NewsGrid, { type News } from "@/components/news/NewsGrid";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 12;

// News items matching https://carmez.md/ru/news
const newsData: Record<"ro" | "ru", News[]> = {
  ru: [
    {
      image: "/images/recipes/food-1.png",
      title: "Классческие рецепты к Пасхальному столу",
      timeStamp: "2024-04-01",
      views: 1520,
    },
    {
      image: "/images/recipes/food-2.png",
      title: "На Торжестве Молдавского Бизнесса организованном Торгово-Промышленной палатой Республики Молдова компания Carmez Processing SRL была удостоена премии",
      timeStamp: "2022-07-16",
      views: 2130,
    },
    {
      image: "/images/recipes/food-3.png",
      title: "Tехнический Университет Молдовы — надёжный партнёр!",
      timeStamp: "2021-08-15",
      views: 1890,
    },
    {
      image: "/images/recipes/food-4.png",
      title: "Сырокопченые колбасы Carmez Clasic — стоит попробовать",
      timeStamp: "2021-08-10",
      views: 2450,
    },
    {
      image: "/images/recipes/food-5.png",
      title: "Carmez — традиционное качество в обновленной упаковке",
      timeStamp: "2021-08-05",
      views: 1980,
    },
    {
      image: "/images/recipes/food-6.png",
      title: "Суджук и Брауншвейгская: Рукописи не горят, а рецепты не устаревают",
      timeStamp: "2021-08-01",
      views: 1760,
    },
    {
      image: "/images/recipes/food-7.png",
      title: "И в пост, и в веганские будни: Чем заменить любимую колбасу",
      timeStamp: "2021-07-25",
      views: 2210,
    },
    {
      image: "/images/recipes/food-8.png",
      title: "Непростое украшение: Как собрать мясную тарелку",
      timeStamp: "2021-07-20",
      views: 1930,
    },
  ],
  ro: [
    {
      image: "/images/recipes/food-1.png",
      title: "Rețete clasice la masa de Paște",
      timeStamp: "2024-04-01",
      views: 1520,
    },
    {
      image: "/images/recipes/food-2.png",
      title: "Carmez Processing SRL a fost premiat în cadrul Galei Businessului Moldovenesc, ogranizată de către Camera de Comerț și Industrie a Republicii Moldova",
      timeStamp: "2022-07-16",
      views: 2130,
    },
    {
      image: "/images/recipes/food-3.png",
      title: "Achiziționarea bunurilor în cadrul scheme de sub-granturi",
      timeStamp: "2022-06-01",
      views: 1450,
    },
    {
      image: "/images/recipes/food-4.png",
      title: "Evaluării prealabile a impactului asupra mediului a activității planificate",
      timeStamp: "2022-05-15",
      views: 1320,
    },
    {
      image: "/images/recipes/food-5.png",
      title: "Universitatea Tehnică a Moldovei – un partener de încredere!",
      timeStamp: "2021-08-15",
      views: 1890,
    },
    {
      image: "/images/recipes/food-6.png",
      title: "Salamuri crud-afumate Carmez Clasic: Merită să le încercați",
      timeStamp: "2021-08-10",
      views: 2450,
    },
    {
      image: "/images/recipes/food-7.png",
      title: "Carmez – calitatea tradițională într-un ambalaj nou",
      timeStamp: "2021-08-05",
      views: 1980,
    },
    {
      image: "/images/recipes/food-8.png",
      title: "Sudjuc și Braunșveigscaia : Manuscrisele nu ard, iar rețetele nu se îmbătrânesc",
      timeStamp: "2021-08-01",
      views: 1760,
    },
    {
      image: "/images/recipes/food-1.png",
      title: "În post și în viața de zi cu zi vegană: Cu ce puteți înlocui salamuri preferate",
      timeStamp: "2021-07-25",
      views: 2210,
    },
    {
      image: "/images/recipes/food-2.png",
      title: "Nu este o decorare simplă: Cum se aranjează un platou de salamuri",
      timeStamp: "2021-07-20",
      views: 1930,
    },
  ],
};

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n } = useTranslation();

  // Get news based on current language
  const currentNews = newsData[i18n.language === "ru" ? "ru" : "ro"];

  const filteredNews = useMemo(() => {
    return currentNews.filter(newsItem =>
      newsItem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentNews, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  return (
    <div className="py-24 sm:py-36">
      <div className="fluid-container">
        <div className="flex items-center flex-wrap justify-between">
          <Breadcrumbs />
          <div className="flex items-end flex-wrap gap-6 w-full sm:w-auto">
            <Input
              placeholder="Cauta..."
              className="rounded-[10px] h-11 w-full sm:w-auto"
              icon={<Search size={20} className="text-gray-400" />}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Select>
              <SelectTrigger className="w-full !h-11 sm:w-[180px] rounded-[10px] border-gray-400">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="most-viewed">Most viewed</SelectItem>
                  <SelectItem value="least-viewed">Least viewed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-8">
          {paginatedNews.length > 0 ? (
            <NewsGrid news={paginatedNews} />
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Nu au fost găsite articole</p>
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              visiblePages={5}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
