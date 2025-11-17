import RecipesGrid from "@/components/recipes/RecipesGrid";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { recipes } from "@/data/recipesData";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const filteredProducts = useMemo(() => {
    const filtered = recipes.filter(recipe => {
      const searchMatch =
        searchTerm === "" ||
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

      return searchMatch;
    });

    return filtered;
  }, [searchTerm]);

  return (
    <div className="py-24 sm:py-36">
      <div className="fluid-container">
        <div className="flex items-center justify-between flex-wrap">
          <Breadcrumbs />
          <div className="flex items-end flex-wrap gap-6 w-full sm:w-auto">
            <Input
              placeholder={t("recipes.search")}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="rounded-[10px] h-11 w-full sm:w-auto"
              icon={<Search size={20} className="text-gray-400" />}
            />
            <Select>
              <SelectTrigger className="w-full !h-11 sm:w-[180px] rounded-[10px] border-gray-400">
                <SelectValue placeholder={t("recipes.sort")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newest">
                    {t("recipes.sortOptions.newest")}
                  </SelectItem>
                  <SelectItem value="oldest">
                    {t("recipes.sortOptions.oldest")}
                  </SelectItem>
                  <SelectItem value="most-viewed">
                    {t("recipes.sortOptions.mostViewed")}
                  </SelectItem>
                  <SelectItem value="least-viewed">
                    {t("recipes.sortOptions.leastViewed")}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <RecipesGrid recipes={filteredProducts} />
      </div>
    </div>
  );
};

export default Recipes;
