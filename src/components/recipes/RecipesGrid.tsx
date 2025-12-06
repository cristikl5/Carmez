import type { Recipe } from "@/data/recipesData";
import { useTranslation } from "react-i18next";
import RecipeCard from "./RecipeCard";

const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
  const { t } = useTranslation();

  return recipes && recipes.length > 0 ? (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.slug || recipe.title} recipe={recipe} />
      ))}
    </div>
  ) : (
    <div className="text-center py-10">
      <p className="text-gray-500 text-lg">{t("recipes.noRecipesFound")}</p>
    </div>
  );
};

export default RecipesGrid;
