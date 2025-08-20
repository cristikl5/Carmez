type Ingredient = {
  name: string;
  amount: string;
  unitMeasure: string;
};

const ingredients: Ingredient[] = [
  {
    name: "Cârnați fierți ai doctorului",
    amount: "100",
    unitMeasure: "g",
  },
  {
    name: "Cartofi",
    amount: "4-5",
    unitMeasure: "buc",
  },

  {
    name: "Castraveți proaspeți",
    amount: "4",
    unitMeasure: "buc",
  },
  {
    name: "Ouă",
    amount: "4",
    unitMeasure: "buc",
  },
  {
    name: "Morcovi",
    amount: "100",
    unitMeasure: "g",
  },
  {
    name: "Mazăre conservată",
    amount: "100",
    unitMeasure: "g",
  },
  {
    name: "Maioneză",
    amount: "100",
    unitMeasure: "g",
  },
  {
    name: "Mărar",
    amount: "cateva",
    unitMeasure: "crengute",
  },
  {
    name: "Sare, piper",
    amount: "dupa",
    unitMeasure: "gust",
  },
];

const Ingredients = () => {
  return (
    <div className="p-8 bg-white rounded-[18px] ">
      <h3 className="text-2xl font-bold">Ingrediente:</h3>
      <div className="mt-4">
        <div className="grid sm:grid-cols-2 gap-12">
          <div className="space-y-1 ">
            {ingredients.map(ingredient => (
              <div className="flex items-center justify-between border-b border-gray-400">
                <span className="font-normal text-gray-400">
                  {ingredient.name}
                </span>
                <span className="font-normal">
                  {ingredient.amount} {ingredient.unitMeasure}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-start">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <span className="font-lato font-normal text-gray-400">
                  Timp de gătire
                </span>
                <span className="font-lato font-bold text-primary">2 ori</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-lato font-normal text-gray-400">
                  Numar de portii
                </span>
                <span className="font-lato font-bold text-primary">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
