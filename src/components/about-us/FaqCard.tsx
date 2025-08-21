import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FaqCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="rounded-[18px] bg-white py-7 px-8 cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={toggleExpanded}
    >
      <div className="flex items-center  gap-6">
        <div className="w-10 h-10 p-2.5 rounded-[10px] bg-primary/10">
          <ChevronDown
            size={22}
            className={`${expanded ? "rotate-180" : ""} transition-transform duration-300 text-primary`}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold !mb-0">{title}</h4>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out  ${
              expanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <p className="font-normal text-gray-500 pb-4 leading-7">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
