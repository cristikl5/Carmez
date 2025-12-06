export type Ingredient = {
  name: string;
  nameRu: string;
  amount: string;
  unitMeasure: string;
  unitMeasureRu: string;
};

export type Step = {
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
};

export type Recipe = {
  slug: string;
  image: string;
  title: string;
  titleRu: string;
  cookingTime?: string;
  cookingTimeRu?: string;
  servings?: number;
  ingredients?: Ingredient[];
  steps?: Step[];
  description?: string;
  descriptionRu?: string;
};

export const recipes: Recipe[] = [
  {
    slug: "carnaciori-de-pui-bruxelles",
    image: "/images/recipes/carnaciori-de-pui-bruxelles.jpg",
    title: "Cîrnăciori de pui cu varză bruxelles și cartofi",
    titleRu: "Куриные колбаски с брюссельской капустой и картофелем",
  },
  {
    slug: "carnaciori-bavarezi",
    image: "/images/recipes/carnaciori-bavarezi.jpg",
    title: "Cârnăciori bavarezi cu varză murată și muștar",
    titleRu: "Баварские колбаски с квашеной капустой и горчицей",
  },
  {
    slug: "olivier",
    image: "/images/recipes/olivier.jpg",
    title: "Salată Olivier",
    titleRu: "Салат Оливье",
    cookingTime: "2 ore",
    cookingTimeRu: "2 часа",
    servings: 10,
    description:
      "În ciuda faptului că fiecare familie prepară salata Olivier în felul său, aceasta este cea mai comună rețetă, care poate fi numită clasică. Cheia unui Olivier bun sunt ingredientele proaspete și de înaltă calitate. Încercați să preparați această salată cu cârnați fierți de la Carmez.",
    descriptionRu:
      "Несмотря на то, что каждая семья готовит салат Оливье по-своему, это самый распространенный рецепт, который можно назвать классическим. Ключ к хорошему Оливье — свежие и качественные ингредиенты. Попробуйте приготовить этот салат с вареной колбасой от Carmez.",
    ingredients: [
      {
        name: "Cârnați fierți ai doctorului",
        nameRu: "Докторская вареная колбаса",
        amount: "100",
        unitMeasure: "g",
        unitMeasureRu: "г",
      },
      {
        name: "Cartofi",
        nameRu: "Картофель",
        amount: "4-5",
        unitMeasure: "buc",
        unitMeasureRu: "шт",
      },
      {
        name: "Castraveți proaspeți",
        nameRu: "Свежие огурцы",
        amount: "4",
        unitMeasure: "buc",
        unitMeasureRu: "шт",
      },
      {
        name: "Ouă",
        nameRu: "Яйца",
        amount: "4",
        unitMeasure: "buc",
        unitMeasureRu: "шт",
      },
      {
        name: "Morcovi",
        nameRu: "Морковь",
        amount: "100",
        unitMeasure: "g",
        unitMeasureRu: "г",
      },
      {
        name: "Mazăre conservată",
        nameRu: "Консервированный горошек",
        amount: "100",
        unitMeasure: "g",
        unitMeasureRu: "г",
      },
      {
        name: "Maioneză",
        nameRu: "Майонез",
        amount: "100",
        unitMeasure: "g",
        unitMeasureRu: "г",
      },
      {
        name: "Mărar",
        nameRu: "Укроп",
        amount: "câteva",
        unitMeasure: "crenguțe",
        unitMeasureRu: "веточек",
      },
      {
        name: "Sare, piper",
        nameRu: "Соль, перец",
        amount: "după",
        unitMeasure: "gust",
        unitMeasureRu: "по вкусу",
      },
    ],
    steps: [
      {
        title: "Pasul 1",
        titleRu: "Шаг 1",
        description:
          "Fierbeți ouăle tari, fierbeți cartofii cu coajă și fierbeți morcovii. Scurgeți lichidul din mazărea din conservă.",
        descriptionRu:
          "Сварите яйца вкрутую, отварите картофель в мундире и сварите морковь. Слейте жидкость из консервированного горошка.",
      },
      {
        title: "Pasul 2",
        titleRu: "Шаг 2",
        description:
          "Curățați cartofii și morcovii de coajă. Tăiați cartofii, morcovii și ouăle în cuburi mici.",
        descriptionRu:
          "Очистите картофель и морковь от кожуры. Нарежьте картофель, морковь и яйца мелкими кубиками.",
      },
      {
        title: "Pasul 3",
        titleRu: "Шаг 3",
        description:
          "Tăiați cârnații fierți în cuburi de aceeași dimensiune ca și celelalte ingrediente.",
        descriptionRu:
          "Нарежьте вареную колбасу кубиками такого же размера, как и остальные ингредиенты.",
      },
      {
        title: "Pasul 4",
        titleRu: "Шаг 4",
        description:
          "Tăiați castraveții proaspeți în cuburi mici. Adăugați mazărea scursă.",
        descriptionRu:
          "Нарежьте свежие огурцы мелкими кубиками. Добавьте слитый горошек.",
      },
      {
        title: "Pasul 5",
        titleRu: "Шаг 5",
        description:
          "Amestecați toate ingredientele cu maioneză, adăugați sare și piper după gust. Decorați cu mărar proaspăt.",
        descriptionRu:
          "Смешайте все ингредиенты с майонезом, добавьте соль и перец по вкусу. Украсьте свежим укропом.",
      },
    ],
  },
  {
    slug: "tartina-cu-pate-lamaie",
    image: "/images/recipes/tartina-cu-pate.jpg",
    title: "Tartină cu pate, lămâie și măsline",
    titleRu: "Тартинка с паштетом, лимоном и оливками",
  },
  {
    slug: "tartina-cu-pate-castraveti",
    image: "/images/recipes/tartina-cu-castraveti.jpg",
    title: "Tartină cu pate și castraveți",
    titleRu: "Тартинка с паштетом и огурцами",
  },
  {
    slug: "tartina-cu-salam-burrata",
    image: "/images/recipes/tartina-cu-salam.jpg",
    title: "Tartină cu salam, burrata și pesto roșu",
    titleRu: "Тартинка с салями, бурратой и красным песто",
  },
  {
    slug: "tartina-cu-salam-rosii",
    image: "/images/recipes/tartina-cu-salam-si-rosii.jpg",
    title: "Tartină cu salam, roșii și rucola",
    titleRu: "Тартинка с салями, помидорами и руколой",
  },
  {
    slug: "mici-altfel",
    image: "/images/recipes/mici-altfel.jpg",
    title: "Micii altfel",
    titleRu: "Мититеи по-другому",
  },
  {
    slug: "carnaciori-altfel",
    image: "/images/recipes/carnaciori-altfel.jpg",
    title: "Cârnăciorii altfel",
    titleRu: "Колбаски по-другому",
  },
  {
    slug: "carnaciori-altfel-2",
    image: "/images/recipes/carnaciori-altfel-2.jpg",
    title: "Cârnăciorii altfel",
    titleRu: "Колбаски по-другому",
  },
  {
    slug: "frigarui-altfel",
    image: "/images/recipes/frigarui-altfel.jpg",
    title: "Frigărui altfel",
    titleRu: "Шашлычки по-другому",
  },
];

export const findRecipeBySlug = (slug?: string): Recipe | undefined => {
  if (!slug) return undefined;
  return recipes.find(recipe => recipe.slug === slug);
};
