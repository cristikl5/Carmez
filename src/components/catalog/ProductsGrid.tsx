import ProductCard from "../home/ProductCard";
import type { Product } from "../home/ProductsSection";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return products && products.length > 0 ? (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
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
