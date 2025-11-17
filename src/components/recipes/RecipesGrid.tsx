import type { Recipe } from "@/data/recipesData";
import RecipeCard from "./RecipeCard";

const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
  return recipes && recipes.length > 0 ? (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.title} recipe={recipe} />
      ))}
    </div>
  ) : (
    <div className="text-center py-10">
      <p className="text-gray-500 text-lg">Nu au fost găsite rețete</p>
    </div>
  );
};

export default RecipesGrid;
