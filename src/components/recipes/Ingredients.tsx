import { useTranslation } from "react-i18next";
import { type Ingredient } from "@/data/recipesData";

type IngredientsProps = {
  ingredients?: Ingredient[];
  cookingTime?: string;
  cookingTimeRu?: string;
  servings?: number;
};

const Ingredients = ({
  ingredients,
  cookingTime,
  cookingTimeRu,
  servings,
}: IngredientsProps) => {
  const { t, i18n } = useTranslation();
  const isRussian = i18n.language === "ru";

  const localizedCookingTime = isRussian
    ? cookingTimeRu || cookingTime
    : cookingTime;

  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  return (
    <div className="p-8 bg-white rounded-[18px] ">
      <h3 className="text-2xl font-bold">{t("recipes.ingredients")}</h3>
      <div className="mt-4">
        <div className="grid sm:grid-cols-2 gap-12">
          <div className="space-y-1 ">
            {ingredients.map((ingredient, index) => (
              <div
                className="flex items-center justify-between border-b border-gray-400"
                key={index}
              >
                <span className="font-normal text-gray-400">
                  {isRussian ? ingredient.nameRu : ingredient.name}
                </span>
                <span className="font-normal">
                  {ingredient.amount}{" "}
                  {isRussian
                    ? ingredient.unitMeasureRu
                    : ingredient.unitMeasure}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-start">
            <div className="space-y-4">
              {localizedCookingTime && (
                <div className="flex items-center gap-1">
                  <span className="font-lato font-normal text-gray-400">
                    {t("recipes.cookingTime")}
                  </span>
                  <span className="font-lato font-bold text-primary">
                    {localizedCookingTime}
                  </span>
                </div>
              )}
              {servings && (
                <div className="flex items-center gap-1">
                  <span className="font-lato font-normal text-gray-400">
                    {t("recipes.servings")}
                  </span>
                  <span className="font-lato font-bold text-primary">
                    {servings}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
