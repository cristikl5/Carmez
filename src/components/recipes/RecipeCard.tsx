import type { Recipe } from "./RecipesGrid";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="space-y-5">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-[18px] object-contain"
      />
      <h3 className="text-xl sm:text-2xl font-bold text-center">
        {recipe.title}
      </h3>
    </div>
  );
};

export default RecipeCard;
