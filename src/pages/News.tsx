import NewsGrid from "@/components/news/NewsGrid";
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
import { newsData } from "@/data/newsData";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 12;

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n } = useTranslation();

  // Get news based on current language
  const currentNews = newsData[i18n.language === "ru" ? "ru" : "ro"];

  const filteredNews = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return currentNews;

    return currentNews.filter(newsItem => {
      const haystack = [
        newsItem.title,
        newsItem.excerpt ?? "",
        newsItem.body ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(term);
    });
  }, [currentNews, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, i18n.language]);

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
              <p className="text-gray-500 text-lg">
                Nu au fost găsite articole
              </p>
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
