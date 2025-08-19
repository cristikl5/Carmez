import RecipesGrid, { type Recipe } from "@/components/recipes/RecipesGrid";
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

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const recipes: Recipe[] = [
  {
    image: "/images/recipes/food-1.png",
    title: "4 Expert Tips On How To Choose The Right Men’s Wallet",
  },
  {
    image: "/images/recipes/food-2.png",
    title: "Sexy Clutches: How to Buy & Wear a Designer Clutch Bag",
  },
  {
    image: "/images/recipes/food-3.png",
    title: "The Top 2020 Handbag Trends to Know",
  },
  {
    image: "/images/recipes/food-4.png",
    title: "How to Match the Color ofYour Handbag With an Outfit",
  },
  {
    image: "/images/recipes/food-5.png",
    title: "How to Care for Leather Bags",
  },
  {
    image: "/images/recipes/food-6.png",
    title: "We're Crushing Hard on Summer's 10 Biggest Bag Trends",
  },
  {
    image: "/images/recipes/food-7.png",
    title: "Essential Qualities of Highly Successful Music",
  },
  {
    image: "/images/recipes/food-8.png",
    title: "9 Things I Love About Shaving My Head",
  },
];

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = recipes.filter(recipe => {
      const searchMatch =
        searchTerm === "" ||
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

      return searchMatch;
    });

    return filtered;
  }, [searchTerm]);

  return (
    <div className="py-36">
      <div className="fluid-container">
        <div className="flex items-center justify-between flex-wrap">
          <Breadcrumbs />
          <div className="flex items-end gap-6">
            <Input
              placeholder="Cauta..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="rounded-[10px] h-11 w-full sm:w-auto"
              icon={<Search size={20} className="text-gray-400" />}
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
        <RecipesGrid recipes={filteredProducts} />
      </div>
    </div>
  );
};

export default Recipes;
