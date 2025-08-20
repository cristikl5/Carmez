import type { Product } from "../home/ProductsSection";
import ProductCard from "../products/ProductCard";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return products && products.length > 0 ? (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10">
      {products.map(product => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  ) : (
    <div className="text-center py-10">
      <p className="text-gray-500 text-lg">Nu au fost găsite produse</p>
    </div>
  );
};

export default ProductsGrid;
