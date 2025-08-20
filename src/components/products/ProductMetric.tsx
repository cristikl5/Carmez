import type { Metric } from "./ProductDetails";

const ProductMetric = ({ value, image }: Metric) => {
  return (
    <div className="bg-[#F3F2F0] rounded-[18px] py-4 px-7 border border-white flex items-center justify-center flex-col gap-2 min-w-fit w-auto">
      <img
        src={image}
        alt="Metric"
        width={40}
        height={40}
        className="object-contain"
      />
      <span className="font-bold whitespace-nowrap text-center">{value}</span>
    </div>
  );
};

export default ProductMetric;
