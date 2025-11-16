import { type News } from "@/components/news/NewsGrid";

// News items matching https://carmez.md/ru/news
export const newsData: Record<"ro" | "ru", News[]> = {
  ru: [
    {
      image: "/images/recipes/food-1.png",
      title: "Классческие рецепты к Пасхальному столу",
      timeStamp: "2024-04-01",
      views: 1520,
    },
    {
      image: "/images/recipes/food-2.png",
      title:
        "На Торжестве Молдавского Бизнесса организованном Торгово-Промышленной палатой Республики Молдова компания Carmez Processing SRL была удостоена премии",
      timeStamp: "2022-07-16",
      views: 2130,
    },
    {
      image: "/images/recipes/food-3.png",
      title: "Tехнический Университет Молдовы — надёжный партнёр!",
      timeStamp: "2021-08-15",
      views: 1890,
    },
    {
      image: "/images/recipes/food-4.png",
      title: "Сырокопченые колбасы Carmez Clasic — стоит попробовать",
      timeStamp: "2021-08-10",
      views: 2450,
    },
    {
      image: "/images/recipes/food-5.png",
      title: "Carmez — традиционное качество в обновленной упаковке",
      timeStamp: "2021-08-05",
      views: 1980,
    },
    {
      image: "/images/recipes/food-6.png",
      title:
        "Суджук и Брауншвейгская: Рукописи не горят, а рецепты не устаревают",
      timeStamp: "2021-08-01",
      views: 1760,
    },
    {
      image: "/images/recipes/food-7.png",
      title: "И в пост, и в веганские будни: Чем заменить любимую колбасу",
      timeStamp: "2021-07-25",
      views: 2210,
    },
    {
      image: "/images/recipes/food-8.png",
      title: "Непростое украшение: Как собрать мясную тарелку",
      timeStamp: "2021-07-20",
      views: 1930,
    },
  ],
  ro: [
    {
      image: "/images/recipes/food-1.png",
      title: "Rețete clasice la masa de Paște",
      timeStamp: "2024-04-01",
      views: 1520,
    },
    {
      image: "/images/recipes/food-2.png",
      title:
        "Carmez Processing SRL a fost premiat în cadrul Galei Businessului Moldovenesc, ogranizată de către Camera de Comerț și Industrie a Republicii Moldova",
      timeStamp: "2022-07-16",
      views: 2130,
    },
    {
      image: "/images/recipes/food-3.png",
      title: "Achiziționarea bunurilor în cadrul scheme de sub-granturi",
      timeStamp: "2022-06-01",
      views: 1450,
    },
    {
      image: "/images/recipes/food-4.png",
      title:
        "Evaluării prealabile a impactului asupra mediului a activității planificate",
      timeStamp: "2022-05-15",
      views: 1320,
    },
    {
      image: "/images/recipes/food-5.png",
      title: "Universitatea Tehnică a Moldovei – un partener de încredere!",
      timeStamp: "2021-08-15",
      views: 1890,
    },
    {
      image: "/images/recipes/food-6.png",
      title: "Salamuri crud-afumate Carmez Clasic: Merită să le încercați",
      timeStamp: "2021-08-10",
      views: 2450,
    },
    {
      image: "/images/recipes/food-7.png",
      title: "Carmez – calitatea tradițională într-un ambalaj nou",
      timeStamp: "2021-08-05",
      views: 1980,
    },
    {
      image: "/images/recipes/food-8.png",
      title:
        "Sudjuc și Braunșveigscaia : Manuscrisele nu ard, iar rețetele nu se îmbătrânesc",
      timeStamp: "2021-08-01",
      views: 1760,
    },
    {
      image: "/images/recipes/food-1.png",
      title:
        "În post și în viața de zi cu zi vegană: Cu ce puteți înlocui salamuri preferate",
      timeStamp: "2021-07-25",
      views: 2210,
    },
    {
      image: "/images/recipes/food-2.png",
      title:
        "Nu este o decorare simplă: Cum se aranjează un platou de salamuri",
      timeStamp: "2021-07-20",
      views: 1930,
    },
  ],
};

// Re-export News type for convenience
export type { News } from "@/components/news/NewsGrid";
