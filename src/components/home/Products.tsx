import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";

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

const Products = () => {
  return (
    <div className="bg-layout py-10">
      <div className="fluid-container">
        <h2 className="text-center font-medium text-2xl md:text-[32px] font-barlow text-dark">
          Produse
        </h2>
        <div className="space-y-8 md:space-y-12 mt-6 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-20 justify-items-center">
            {products.map(product => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button variant="outline" className="text-sm md:text-base">
              Vezi toate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
