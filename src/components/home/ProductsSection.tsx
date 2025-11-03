import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import Button from "../ui/Button";
import { products } from "../../data/products";

export type { Product } from "../../data/products";

const ProductsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="bg-layout py-10">
      <div className="fluid-container">
        <h2 className="text-center font-medium text-2xl md:text-[32px] font-barlow text-dark">
          {t("home.products.title")}
        </h2>
        <div className="space-y-8 md:space-y-12 mt-6 md:mt-8">
          <div className="grid  grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-20 justify-items-center">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="text-sm md:text-base"
              onClick={() => navigate("/catalog")}
            >
              {t("home.products.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
