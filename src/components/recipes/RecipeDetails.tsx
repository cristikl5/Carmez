import { recipes } from "@/data/recipesData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../data/products";
import ProductCard from "../products/ProductCard";
import Breadcrumbs from "../ui/Breadcrumbs";
import Button from "../ui/Button";

const RecipeDetails = () => {
  const { t, i18n } = useTranslation();
  const { name } = useParams();
  const swiperRef = useRef<any>(null);
  const isRussian = i18n.language === "ru";
  const decodedName = name ? decodeURIComponent(name) : "";
  const recipe = recipes.find(
    r =>
      r.slug === decodedName ||
      r.title === decodedName ||
      r.titleRu === decodedName
  );
  const recipeImage =
    recipe?.image ?? "/images/recipes/carnaciori-de-pui-bruxelles.jpg";
  const recipeTitle = isRussian
    ? recipe?.titleRu || recipe?.title
    : recipe?.title;

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs hideTitle />
        <div className="details-fluid-container">
          <h1 className="font-semibold font-barlow text-4xl">
            {recipeTitle ?? decodedName}
          </h1>
          <div className="mt-8 flex flex-col justify-center">
            <img
              src={recipeImage}
              alt={recipeTitle ?? decodedName}
              className="rounded-[18px] object-contain"
            />
          </div>
        </div>
        <div className="mt-28">
          <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between">
            <h3 className="font-medium text-3xl font-barlow">
              {t("recipes.productsInRecipe")}
            </h3>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                className="font-bold whitespace-nowrap pl-0 sm:pl-6"
              >
                {t("recipes.seeAll")}
              </Button>
              <div className="flex items-center gap-1">
                <Button variant="icon" onClick={handlePrev}>
                  <ArrowLeft />
                </Button>
                <Button variant="icon" onClick={handleNext}>
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 swiper-container overflow-visible">
            <Swiper
              onSwiper={swiper => (swiperRef.current = swiper)}
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              className="overflow-visible"
              style={{ overflow: "visible" }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                  centeredSlides: false,
                },
              }}
            >
              {products.slice(0, 8).map(product => (
                <SwiperSlide
                  key={product.id}
                  className="overflow-visible w-full"
                >
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
