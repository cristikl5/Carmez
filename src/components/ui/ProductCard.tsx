type CardProps = {
  image: string;
  category: string;
  title: string;
  isNew?: boolean;
};

const ProductCard = ({ image, title, category, isNew }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full max-w-[280px] relative cursor-pointer">
      {isNew && (
        <span className="absolute top-0 left-0 bg-primary text-white rounded-tl-[18px] rounded-br-3xl px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium">
          New
        </span>
      )}
      <div className="aspect-square mb-3 md:mb-4 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="space-y-1 md:space-y-2">
        <p className="text-gray-500 text-xs md:text-sm font-normal">
          {category}
        </p>
        <h3 className="font-bold text-base md:text-lg leading-6 md:leading-7">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
