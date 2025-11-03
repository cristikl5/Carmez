import Filters from "@/components/catalog/Filters";
import ProductsGrid from "@/components/catalog/ProductsGrid";
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
import { products } from "@/data/products";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type FilterData = {
  meatType?: string;
  productCategory?: string;
  expirationDate?: number;
  newProduct?: boolean;
};

const ITEMS_PER_PAGE = 12;

// Map filter category values to product category values
const categoryMap: Record<string, string> = {
  "crenvursti-safalade": "Crenvurști/Safalade",
  fiert: "Fiert",
  sunci: "Sunci",
  "semi-afumat": "Semi-afumat",
  "fiert-afumat": "Fiert-afumat",
  "crud-afumat": "Crud-afumat",
  delicatese: "Delicatese",
  "alte-produse": "Alte produse",
  conserve: "Conserve",
  "produse-vegetale": "Produse vegetale",
  "carne-fresh": "Carne fresh",
  marinade: "Marinade",
  "cirnaciori-mici": "Cirnaciori mici",
  "snackz-stickz": "Snackz Stickz",
};

// Extract meat type from product ingredients or title
const getMeatType = (product: {
  ingredients: string;
  title: string;
}): string[] => {
  const text = `${product.ingredients} ${product.title}`.toLowerCase();
  const meatTypes: string[] = [];

  if (text.includes("porc") || text.includes("свинина")) {
    meatTypes.push("porc");
  }
  if (
    text.includes("vită") ||
    text.includes("vita") ||
    text.includes("говядина")
  ) {
    meatTypes.push("vita");
  }
  if (
    text.includes("pui") ||
    text.includes("pasăre") ||
    text.includes("pasare") ||
    text.includes("курятина") ||
    text.includes("găină") ||
    text.includes("gaină")
  ) {
    meatTypes.push("pui");
  }

  return meatTypes;
};

// Parse expiration string to months
const parseExpirationToMonths = (expiration: string): number => {
  // Match patterns like "15 zile", "21 de zile", "30 de zile", "2 luni", "1 an", etc.
  const daysRegex = /(\d+)\s*(?:de\s*)?zile/i;
  const daysMatch = daysRegex.exec(expiration);
  if (daysMatch) {
    const days = Number.parseInt(daysMatch[1], 10);
    // Convert days to months (approximate: 30 days = 1 month)
    return Math.round((days / 30) * 10) / 10; // Round to 1 decimal place
  }

  const monthsRegex = /(\d+)\s*(?:de\s*)?luni/i;
  const monthsMatch = monthsRegex.exec(expiration);
  if (monthsMatch) {
    return Number.parseInt(monthsMatch[1], 10);
  }

  const yearsRegex = /(\d+)\s*(?:de\s*)?ani/i;
  const yearsMatch = yearsRegex.exec(expiration);
  if (yearsMatch) {
    return Number.parseInt(yearsMatch[1], 10) * 12;
  }

  return 0;
};

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterData>({});
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      const searchMatch =
        searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.titleRu.toLowerCase().includes(searchTerm.toLowerCase());

      if (!searchMatch) return false;

      // Category filter
      if (filters.productCategory) {
        const mappedCategory = categoryMap[filters.productCategory];
        if (mappedCategory && product.category !== mappedCategory) {
          return false;
        }
      }

      // Meat type filter
      if (filters.meatType) {
        const meatTypes = getMeatType(product);
        if (!meatTypes.includes(filters.meatType)) {
          return false;
        }
      }

      // Expiration date filter
      if (filters.expirationDate && filters.expirationDate > 0) {
        const productMonths = parseExpirationToMonths(product.expiration);
        if (productMonths > filters.expirationDate) {
          return false;
        }
      }

      // New product filter
      if (filters.newProduct && !product.isNew) {
        return false;
      }

      return true;
    });

    // Sort products (simple alphabetical sort for now)
    filtered = [...filtered].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    return filtered;
  }, [searchTerm, filters, sortOrder]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters or search term change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm]);

  const handleFiltersChange = (newFilters: FilterData) => {
    setFilters(newFilters);
  };

  const handleFiltersReset = () => {
    setFilters({});
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value as "asc" | "desc");
    setCurrentPage(1);
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
            Am găsit{" "}
            <span className="text-primary">{filteredProducts.length}</span> de
            articole pentru tine
          </span>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Cauta..."
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-[10px] h-11 w-full sm:w-auto"
              icon={<Search size={20} className="text-gray-400" />}
            />
            <Select value={sortOrder} onValueChange={handleSortChange}>
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
          <ProductsGrid products={paginatedProducts} />
          {totalPages > 1 && (
            <div className="flex items-center justify-center">
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
    </div>
  );
};

export default Catalog;
