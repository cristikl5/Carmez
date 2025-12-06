import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Recipe } from "@/data/recipesData";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRussian = i18n.language === "ru";
  const title = isRussian ? recipe.titleRu || recipe.title : recipe.title;

  return (
    <div
      className="space-y-5 hover:scale-[102%] transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/retete/${recipe.slug || recipe.title}`)}
    >
      <img
        src={recipe.image}
        alt={title}
        className="rounded-[18px] object-contain"
      />
      <h3 className="text-xl sm:text-2xl font-bold text-center">{title}</h3>
    </div>
  );
};

export default RecipeCard;
