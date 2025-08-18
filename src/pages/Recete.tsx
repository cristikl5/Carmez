import { Search } from "lucide-react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Input from "../components/ui/Input";

const Recete = () => {
  return (
    <div className="py-28">
      <div className="fluid-container">
        <div className="flex items-center justify-between">
          <Breadcrumbs />
          <div className="flex items-end gap-6">
            <Input
              placeholder="Cauta"
              icon={<Search size={20} className="text-gray-400" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recete;
