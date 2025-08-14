import { useLocation } from "react-router-dom";

const Magazine = () => {
  const location = useLocation();
  const isNestedRoute = location.pathname.includes("/contacte/");

  return (
    <div className="py-20">
      <div className="fluid-container">
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {isNestedRoute
              ? "Magazinele noastre de pe pagina de contacte - găsiți locațiile unde ne puteți contacta direct."
              : "Găsiți magazinele noastre în toată țara pentru a achiziționa produse fresh."}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Magazin Central</h3>
              <p className="text-gray-600 mb-2">Str. Ștefan cel Mare 123</p>
              <p className="text-gray-600">Chișinău, Moldova</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Magazin Botanica</h3>
              <p className="text-gray-600 mb-2">Str. Dacia 45</p>
              <p className="text-gray-600">Chișinău, Moldova</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Magazin Rîșcani</h3>
              <p className="text-gray-600 mb-2">Str. Alba Iulia 78</p>
              <p className="text-gray-600">Chișinău, Moldova</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
