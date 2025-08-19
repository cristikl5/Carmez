import RecipeCard from "./RecipeCard";

export type Recipe = {
  image: string;
  title: string;
};

const RecipesGrid = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesGrid;
