import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../data/products";
import Button from "../ui/Button";
import ProductCard from "./ProductCard";

const SuggestedProducts = () => {
  const { t } = useTranslation();
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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-barlow text-3xl font-normal">
          {t("products.suggested")}
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="icon" onClick={handlePrev}>
            <ArrowLeft size={16} />
          </Button>
          <Button variant="icon" onClick={handleNext}>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      <div className="swiper-container overflow-visible">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          className="overflow-visible"
          style={{ overflow: "visible" }}
          breakpoints={{
            // Mobile: Strict 1 slide per view with centered slides
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            // Tablet: Show 1.5 slides per view
            768: {
              slidesPerView: 1.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
            // Desktop: Show 4 slides
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
        >
          {products.slice(0, 8).map(product => (
            <SwiperSlide
              key={product.id}
              className="overflow-visible"
            >
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuggestedProducts;
