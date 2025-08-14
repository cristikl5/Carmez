type CardProps = {
  image: string;
  category: string;
  title: string;
  isNew?: boolean;
};

const ProductCard = ({ image, title, category, isNew }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200  hover:shadow-md transition-shadow duration-300 max-w-[280px] relative">
      {isNew && (
        <span className="absolute top-0 left-0 bg-primary text-white rounded-tl-[18px] rounded-br-3xl  px-6 py-3  text-sm font-medium">
          New
        </span>
      )}
      <div className="aspect-square mb-4 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="space-y-2">
        <p className="text-gray-500 text-sm font-normal">{category}</p>
        <h3 className="font-bold text-lg leading-7">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
