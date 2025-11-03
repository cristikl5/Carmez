import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../data/products";

export type CardProps = Product;

const ProductCard = ({
  image,
  title,
  titleRu,
  category,
  categoryRu,
  isNew,
  id,
}: CardProps) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentTitle = i18n.language === "ru" ? titleRu : title;
  const currentCategory = i18n.language === "ru" ? categoryRu : category;

  return (
    <div
      className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full relative cursor-pointer"
      role="button"
      onClick={() => navigate(`/produs/${encodeURIComponent(title)}`)}
    >
      {isNew && (
        <span className="absolute top-0 left-0 bg-primary text-white rounded-tl-[18px] rounded-br-3xl px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium">
          New
        </span>
      )}
      <div className="aspect-square mb-3 md:mb-4 flex items-center justify-center">
        <img src={image} alt={currentTitle} className="w-full h-full object-contain" />
      </div>
      <div className="space-y-1 md:space-y-2">
        <p className="text-gray-500 text-xs md:text-sm font-normal">
          {currentCategory}
        </p>
        <h3 className="font-bold text-sm md:text-base lg:text-lg leading-6 md:leading-7">
          {currentTitle}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
