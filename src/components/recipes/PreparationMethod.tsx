type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Pasul 1",
    description:
      "Fierbeți ouăle tari, fierbeți cartofii cu coajă și fierbeți morcovii. Scurgeți lichidul din mazărea din conservă.",
  },
  {
    title: "Pasul 2",
    description:
      "Fierbeți ouăle tari, fierbeți cartofii cu coajă și fierbeți morcovii. Scurgeți lichidul din mazărea din conservă.",
  },
  {
    title: "Pasul 3",
    description:
      "Fierbeți ouăle tari, fierbeți cartofii cu coajă și fierbeți morcovii. Scurgeți lichidul din mazărea din conservă.",
  },
  {
    title: "Pasul 4",
    description:
      "Fierbeți ouăle tari, fierbeți cartofii cu coajă și fierbeți morcovii. Scurgeți lichidul din mazărea din conservă.",
  },
  {
    title: "Pasul 5",
    description:
      "Fierbeți ouăle tari, fierbeți cartofii cu coajă și fierbeți morcovii. Scurgeți lichidul din mazărea din conservă.",
  },
];

const PreparationMethod = () => {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-2xl">Metoda de preparare:</h4>
      <p className="font-normal text-gray-400">
        În ciuda faptului că fiecare familie prepară salata Olivier în felul
        său, aceasta este cea mai comună rețetă, care poate fi numită clasică.
        Cheia unui Olivier bun sunt ingredientele proaspete și de înaltă
        calitate. Încercați să preparați această salată cu cârnați fierți de la
        Mikoyan.
      </p>
      <div className="space-y-8">
        {steps.map(step => (
          <div className="space-y-2">
            <h4 className="font-bold text-2xl">{step.title}</h4>
            <p className="font-normal text-gray-400">{step.description}</p>
          </div>
        ))}
        <div className="space-y-4">
          <h4 className="font-bold text-2xl">
            Dacă doriți să schimbați ingredientele din salata Olivier, păstrând
            în același timp gustul original, încercați următoarele înlocuiri:
          </h4>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              În loc de cârnați, puteți folosi carne roșie gătită, cum ar fi
              carnea de vită, sau carnea de pasăre, cum ar fi curcanul, rața sau
              puiul.
            </li>
            <li>
              În loc de cârnați gătiți, puteți folosi cârnați afumați sau îi
              puteți înlocui cu o parte din cârnații gătiți, de exemplu, într-un
              raport de 1:1.
            </li>
            <li>
              Mazărea verde conservată poate fi înlocuită cu mazăre proaspătă
              sau congelată, fiartă în prealabil.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreparationMethod;
