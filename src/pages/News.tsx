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

const initialNews: News[] = [
  {
    image: "/images/recipes/food-1.png",
    title: "4 Expert Tips On How To Choose The Right Men’s Wallet",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-2.png",
    title: "Sexy Clutches: How to Buy & Wear a Designer Clutch Bag",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-3.png",
    title: "The Top 2020 Handbag Trends to Know",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-4.png",
    title: "How to Match the Color ofYour Handbag With an Outfit",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-5.png",
    title: "How to Care for Leather Bags",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-6.png",
    title: "We're Crushing Hard on Summer's 10 Biggest Bag Trends",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-7.png",
    title: "Essential Qualities of Highly Successful Music",
    timeStamp: "2021-01-01",
    views: 2130,
  },
  {
    image: "/images/recipes/food-8.png",
    title: "9 Things I Love About Shaving My Head",
    timeStamp: "2021-01-01",
    views: 2130,
  },
];

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const filteredNews = useMemo(() => {
    return initialNews.filter(news =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="py-36">
      <div className="fluid-container">
        <div className="flex items-center flex-wrap justify-between">
          <Breadcrumbs />
          <div className="flex items-end flex-wrap gap-6">
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
          <NewsGrid news={filteredNews} />
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            visiblePages={5}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
