import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../products/ProductCard";
import Breadcrumbs from "../ui/Breadcrumbs";
import Button from "../ui/Button";
import Ingredients from "./Ingredients";
import PreparationMethod from "./PreparationMethod";

const products = [
  {
    image: "/images/products/carnat-1.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
  },
  {
    image: "/images/products/carnat-2.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
    isNew: true,
  },
  {
    image: "/images/products/carnat-3.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
    isNew: true,
  },
  {
    image: "/images/products/carnat-4.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
    isNew: true,
  },
  {
    image: "/images/products/carnat-5.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
  },
  {
    image: "/images/products/carnat-6.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
    isNew: true,
  },
  {
    image: "/images/products/carnat-7.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
  },
  {
    image: "/images/products/carnat-8.png",
    title: "Chobani Complete V",
    category: "Diet Foods",
    isNew: true,
  },
];

const RecipeDetails = () => {
  const { name } = useParams();
  const swiperRef = useRef<any>(null);

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
          <h1 className="font-semibold font-barlow text-4xl">{name}</h1>
          <div className="mt-8 space-y-8 flex flex-col justify-center">
            <img
              src="/images/recipes/olivier.png"
              alt={name}
              className="rounded-[18px] object-contain"
            />
            <Ingredients />
            <PreparationMethod />
          </div>
        </div>
        <div className="mt-28">
          <div className="flex sm:items-center flex-col sm:flex-row sm:justify-between">
            <h3 className="font-medium text-3xl font-barlow">
              Produse din rețetă
            </h3>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                className="font-bold whitespace-nowrap pl-0 sm:pl-6"
              >
                Vezi pe toate
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
                // Mobile: Strict 1 slide per view with centered slides
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: true,
                },
                // Tablet: Show 1.5 slides per view
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                // Desktop: Auto slides with full spacing
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 32,
                  centeredSlides: false,
                },
              }}
            >
              {products.map(product => (
                <SwiperSlide
                  key={product.image}
                  className="overflow-visible w-full"
                >
                  <ProductCard {...product} key={product.title} />
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
