import { useTranslation } from "react-i18next";
import { type Step } from "@/data/recipesData";

type PreparationMethodProps = {
  description?: string;
  descriptionRu?: string;
  steps?: Step[];
};

const PreparationMethod = ({
  description,
  descriptionRu,
  steps,
}: PreparationMethodProps) => {
  const { t, i18n } = useTranslation();
  const isRussian = i18n.language === "ru";

  const localizedDescription = isRussian
    ? descriptionRu || description
    : description;

  return (
    <div className="space-y-4">
      <h4 className="font-bold text-2xl">{t("recipes.preparationMethod")}</h4>
      {localizedDescription && (
        <p className="font-normal text-gray-400">{localizedDescription}</p>
      )}
      {steps && steps.length > 0 && (
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div className="space-y-2" key={index}>
              <h4 className="font-bold text-2xl">
                {isRussian ? step.titleRu : step.title}
              </h4>
              <p className="font-normal text-gray-400">
                {isRussian ? step.descriptionRu : step.description}
              </p>
            </div>
          ))}
          <div className="space-y-4">
            <h4 className="font-bold text-2xl">{t("recipes.tips")}</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>{t("recipes.tipsList.tip1")}</li>
              <li>{t("recipes.tipsList.tip2")}</li>
              <li>{t("recipes.tipsList.tip3")}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreparationMethod;
