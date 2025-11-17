import { useNavigate } from "react-router-dom";
import type { Recipe } from "@/data/recipesData";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      className="space-y-5 hover:scale-[102%] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/retete/${recipe.title}`)}
    >
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
