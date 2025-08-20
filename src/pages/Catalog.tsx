import Filters from "@/components/catalog/Filters";
import ProductsGrid from "@/components/catalog/ProductsGrid";
import { products } from "@/components/home/ProductsSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

type FilterData = {
  meatType?: string;
  productCategory?: string;
  expirationDate?: number;
  newProduct?: boolean;
};

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [filters, setFilters] = useState<FilterData>({});
  const totalPages = 2;

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const searchMatch =
        searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase());

      return searchMatch;
    });

    return filtered;
  }, [searchTerm]);

  const handleFiltersChange = (newFilters: FilterData) => {
    // TODO: Implement actual filtering logic using filters state
    setCurrentPage(1); // Reset to first page when filters change
    console.log("Applied filters:", newFilters);
    // TODO: Implement actual filtering logic using filters state
  };

  const handleFiltersReset = () => {
    // TODO: Implement logic to reset products to show all
    setCurrentPage(1);
    console.log("Filters reset");
  };

  return (
    <div className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs />
        <div className="mt-9">
          <Filters
            onFiltersChange={handleFiltersChange}
            onReset={handleFiltersReset}
          />
        </div>
        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-sm font-lato font-normal text-gray-400">
            Am găsit <span className="text-primary">24</span> de articole pentru
            tine
          </span>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Cauta..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="rounded-[10px] h-11 w-full sm:w-auto"
              icon={<Search size={20} className="text-gray-400" />}
            />
            <Select>
              <SelectTrigger className="w-full !h-11 sm:w-[180px] border-gray-400">
                <SelectValue placeholder="Sortare" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Crescător</SelectItem>
                <SelectItem value="desc">Descrescător</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-8 mt-11">
          <ProductsGrid products={filteredProducts} />
          <div className="flex items-center justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              visiblePages={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
