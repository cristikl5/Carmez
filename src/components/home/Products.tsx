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
    <div className="mt-16">
      <h2 className="text-center font-medium text-[32px] font-barlow">
        Produse
      </h2>
      <div className="space-y-8 mt-8">
        <div className="grid sm:grid-cols-4 gap-x-10 gap-y-20">
          {products.map(product => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button variant="outline">Vezi toate</Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
