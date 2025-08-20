import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export type Motive = {
  unitMeasure: string;
  value: string;
  description: string;
};

const motives: Motive[] = [
  {
    unitMeasure: "TONE",
    value: "65",
    description:
      "Capacitate de producere zilnicã este de 65 tone de produs prelucrat",
  },
  {
    unitMeasure: "m2",
    value: "12000",
    description: "Suprafata totala a producerii si depozitului de marfa",
  },
  {
    unitMeasure: "angajati",
    value: "650",
    description: "La moment in cadrul companiei lucreaza 650 de angajati",
  },
];

const WhyUsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="pb-10 bg-white">
      <div className="fluid-container">
        <div
          className="p-4 sm:p-10 border border-gray-400 rounded-4xl overflow-visible"
          style={{
            backgroundImage: "url('/images/why-us/Group.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="space-y-11">
            <h3 className="text-center font-barlow font-medium text-3xl">
              De ce Carmez?
            </h3>
            <div className="grid lg:grid-cols-3 gap-24">
              {motives.map(motive => (
                <div key={motive.description}>
                  <h4 className="text-center font-barlow font-bold text-9xl">
                    {motive.value}
                    <span className="text-lg font-barlow font-bold">
                      {motive.unitMeasure}
                    </span>
                  </h4>
                  <p className="text-center font-normal text-sm text-gray-700">
                    {motive.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Button onClick={() => navigate("/catalog")}>
                Vezi produsele
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
