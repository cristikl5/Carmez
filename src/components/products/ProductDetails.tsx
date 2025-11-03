import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductMetric from "./ProductMetric";
import SuggestedProducts from "./SuggestedProducts";

export type Metric = {
  value: string;
  image: string;
};

const ProductDetails = () => {
  const { title } = useParams();
  const { i18n } = useTranslation();
  const decodedTitle = title ? decodeURIComponent(title) : "";
  const product = products.find(
    p => p.title === decodedTitle || p.titleRu === decodedTitle
  );

  if (!product) {
    return (
      <section className="py-24 sm:py-36">
        <div className="fluid-container">
          <Breadcrumbs hideTitle />
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">Produsul nu a fost găsit</p>
          </div>
        </div>
      </section>
    );
  }

  const currentTitle = i18n.language === "ru" ? product.titleRu : product.title;
  const currentCategory =
    i18n.language === "ru" ? product.categoryRu : product.category;
  const currentIngredients =
    i18n.language === "ru" ? product.ingredientsRu : product.ingredients;
  const currentPackaging =
    i18n.language === "ru" ? product.packagingRu : product.packaging;

  const metrics: Metric[] = [
    {
      value: product.weight,
      image: "/icons/scale.svg",
    },
    {
      value: product.expiration,
      image: "/icons/timer.svg",
    },
    {
      value: product.storageTemp,
      image: "/icons/thermometer.svg",
    },
    {
      value: currentPackaging,
      image: "/images/products/candy.png",
    },
  ];

  return (
    <section className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs hideTitle />
        <div className="mt-10 grid sm:grid-cols-2 gap-9">
          <div className="space-y-5">
            <img
              src={product.image}
              alt={currentTitle}
              className="object-contain rounded-[18px]"
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-4">
              <h1 className="font-semibold font-barlow text-4xl !mt-0">
                {currentTitle}
              </h1>
              <span className="text-gray-400">{currentCategory}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {metrics.map(metric => (
                <ProductMetric
                  key={`${metric.value}-${metric.image}`}
                  value={metric.value}
                  image={metric.image}
                />
              ))}
            </div>
            <div className="space-y-4 mt-5">
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Tehnologie de conservare a prospețimii
              </a>
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Controlul calității în toate etapele
              </a>
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Carne din fermele noastre
              </a>
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Condimente naturale
              </a>
            </div>
            <div className="mt-5 space-y-3">
              <h3 className="font-bold text-lg text-gray-800">
                {i18n.language === "ru" ? "Ингредиенты:" : "Ingrediente:"}
              </h3>
              <p className="font-normal leading-6 text-gray-600">
                {currentIngredients}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <SuggestedProducts />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
