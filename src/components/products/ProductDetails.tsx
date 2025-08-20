import { useParams } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductMetric from "./ProductMetric";
import SuggestedProducts from "./SuggestedProducts";

export type Metric = {
  value: string;
  image: string;
};

const metrics: Metric[] = [
  {
    value: "450 Gr",
    image: "/icons/scale.svg",
  },
  {
    value: "48 Zile",
    image: "/icons/timer.svg",
  },
  {
    value: "De la 0°C la +6°C",
    image: "/icons/thermometer.svg",
  },
  {
    value: "Vid",
    image: "/images/products/candy.png",
  },
];

const ProductDetails = () => {
  const { title } = useParams();

  return (
    <section className="py-24 sm:py-36">
      <div className="fluid-container">
        <Breadcrumbs hideTitle />
        <div className="mt-10 grid sm:grid-cols-2 gap-9">
          <div className="space-y-5">
            <img
              src="/images/products/carnat-details.png"
              alt=""
              className="object-contain rounded-[18px]"
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-4">
              <h1 className="font-semibold font-barlow text-4xl !mt-0">
                {title}
              </h1>
              <span className="text-gray-400">Diet Foods</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {metrics.map(metric => (
                <ProductMetric
                  key={metric.value}
                  value={metric.value}
                  image={metric.image}
                />
              ))}
            </div>
            <div className="space-y-4 mt-5">
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Tehnologie de conservare a prospețimii
              </a>
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Controlul calității în toate etapele
              </a>
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Carne din fermele noastre
              </a>
              <a
                href="#"
                className="font-bold text-primary block hover:underline underline-offset-4"
              >
                Condimente naturale
              </a>
            </div>
            <p className="mt-5 font-normal leading-6 text-gray-600">
              Istoria acestei cervelate a început în perioada sovietică, când
              produse speciale erau produse în cantități limitate, special
              pentru rațiile Kremlinului. Mai târziu, gustul clasic bogat de
              carne și aspectul memorabil al cervelatei au fost apreciate și
              îndrăgite de clienții obișnuiți. Calitatea acestei cervelate a
              fost testată de timp.
            </p>
          </div>
        </div>
        <div className="mt-32">
          <SuggestedProducts />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
