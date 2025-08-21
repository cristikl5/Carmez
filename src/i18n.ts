import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ro: {
    translation: {
      // Navigation
      nav: {
        home: "Acasă",
        aboutUs: "Despre Noi",
        news: "Noutăți",
        catalog: "Catalog",
        recipes: "Rețete",
        contacts: "Contacte",
      },

      // Common
      common: {
        loading: "Se încarcă...",
        error: "Eroare",
        submit: "Trimite",
        cancel: "Anulează",
        save: "Salvează",
        edit: "Editează",
        delete: "Șterge",
        viewAll: "Vezi toate",
        learnMore: "Află mai mult",
        buyHere: "Cumpara aici",
        followUs: "Urmărește-ne",
      },

      // Home Page
      home: {
        hero: {
          title: "Retele clasice la masa de Pasti. Din 1904.",
          subtitle: "pasiune. Tradiție. Gust autentic.",
          button: "Cumpara aici",
        },
        history: {
          title: "Noi suntem Carmez",
          subtitle: "Sed ut perspiciatis unde omnis iste natus error",
          description:
            "Istoria companiei datează încă din anul 1904, când în partea de sud-vest a Chișinăului, autoritățile orașului au permis construcţia primului abator privat.",
          button: "Află mai mult",
        },
        products: {
          title: "Produse",
          button: "Vezi toate",
        },
        news: {
          title: "Noutăți",
          button: "Cumpara aici",
          viewAll: "Vezi toate",
          items: {
            title: "Retele clasice la masa de Pasti. Din 1904.",
            buttonText: "Cumpara aici",
          },
        },
        whyUs: {
          title: "De ce Carmez?",
          button: "Vezi produsele",
          stats: {
            capacity:
              "Capacitate de producere zilnicã este de 65 tone de produs prelucrat",
            area: "Suprafata totala a producerii si depozitului de marfa",
            employees: "La moment in cadrul companiei lucreaza 650 de angajati",
          },
        },
      },

      // About Us Page
      aboutUs: {
        description:
          "CARMEZ este un nume de referință în industria cărnii din Republica Moldova. Cu o tradiție care începe în urmă cu peste 25 de ani, producem și livrăm produse din carne proaspete și procesate care respectă cele mai înalte standarde de calitate.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        moments: {
          current: {
            title: "NOI SUNTEM SPECIALISTI ÎN CARNE",
            subtitle: "pasiune. Tradiție. Gust autentic.",
            description:
              "CARMEZ este un nume de referință în industria cărnii din Republica Moldova. Cu o tradiție care îmbrace în urmă cu peste 25 de ani, producem și iertăm produse din carne proaspete și procesate care respectă cele mai înalte standarde de calitate.",
            stats: {
              employees: "ANGAJAȚI DEDICAȚI",
              products: "PRODUSE",
            },
          },
          "2014": {
            title: "EXTINDERE NAȚIONALĂ",
            description:
              "Extinderea rețelei de distribuție la nivel național și modernizarea facilităților de producție.",
          },
          "2008": {
            title: "MODERNIZARE",
            description:
              "Implementarea tehnologiilor moderne de producție și certificarea conform standardelor europene.",
          },
          "2004": {
            title: "DEZVOLTARE",
            description:
              "Lansarea primelor produse premium și extinderea gamei de produse.",
          },
          "2000": {
            title: "MILENIUL NOU",
            description:
              "Intrarea în noul mileniu cu planuri ambițioase de dezvoltare.",
          },
          "1999": {
            title: "CONSOLIDARE",
            description:
              "Consolidarea poziției pe piața locală și îmbunătățirea proceselor.",
          },
          "1991": {
            title: "INDEPENDENȚA",
            description:
              "Începutul activității companiei în perioada post-sovietică.",
          },
          "1988": {
            title: "TRANSFORMARE",
            description:
              "Perioada de transformări importante în organizarea producției.",
          },
          "1970-1985": {
            title: "CREȘTERE SUSȚINUTĂ",
            description:
              "Perioada de creștere și dezvoltare susținută a capacităților de producție.",
          },
          "1964": {
            title: "DEZVOLTARE",
            description:
              "Continuarea dezvoltării și îmbunătățirea tehnologiilor de producție.",
          },
          "1955": {
            title: "STABILIZARE",
            description:
              "Stabilizarea activității și consolidarea echipei de lucru.",
          },
          "1947": {
            title: "RECONSTRUIRE",
            description:
              "Perioada de reconstruire după război și relansarea activității.",
          },
          "1941-1944": {
            title: "RECONSTRUIRE",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
          },
          "1908": {
            title: "ÎNCEPUTURI",
            description:
              "Primii pași în industria cărnii și stabilirea bazelor pentru viitor.",
          },
          "1904": {
            title: "FONDAREA",
            description:
              "Fondarea companiei și începutul unei tradiții de peste un secol.",
          },
        },
      },

      // Footer
      footer: {
        company: "Company",
        categories: "Categories",
        information: "Information",
        address: "Adresa",
        phone: "Tel",
        email: "Email",
        workingHours: "Ore de lucru",
        copyright: "Copyright © 2025 Carmez Moldova.",
        aboutUs: "About us",
        affiliate: "Affiliate",
        career: "Career",
        contactUs: "Contact us",
        cookiePolicy: "Cookie Policy",
        termsConditions: "Terms & Conditions",
        returnsExchanges: "Returns & Exchanges",
        shippingDelivery: "Shipping & Delivery",
        privacyPolicy: "Privacy Policy",
        description: "Awesome grocery store website template",
        followUs: "Urmărește-ne",
        milksDairies: "Milks and Dairies",
        clothingBeauty: "Clothing & beauty",
        petToy: "Pet Toy",
        bakingMaterial: "Baking material",
        freshFruit: "Fresh Fruit",
        winesDrinks: "Wines & Drinks",
        infoItems: {
          address: "R. Moldova, or. Chișinău, str. Calea Basarabiei 36/4",
          phone: "0 (22) 78 82 51",
          email: "reception@farmmeatgroup.md",
          workingHours: "08:00 - 18:00, Luni - Sâmb",
        },
        phoneNumbers: {
          primary: "0 227 88 251",
          secondary: "0 610 61 666",
        },
      },

      // Contact Form
      contact: {
        form: {
          title: "Contactează-ne",
          subtitle: "Hai să discutăm!",
          fields: {
            name: "Numele",
            email: "Adresa de E-Mail",
            address: "Domiciliul",
            phone: "Telefon",
            subject: "Subiect",
            message: "Mesajul tău...",
          },
          validation: {
            nameMin: "Numele trebuie să conțină cel puțin 2 caractere",
            nameMax: "Numele nu poate depăși 50 de caractere",
            emailRequired: "Emailul este obligatoriu",
            emailInvalid: "Adresa de email nu este validă",
            addressMin: "Adresa trebuie să conțină cel puțin 5 caractere",
            addressMax: "Adresa nu poate depăși 100 de caractere",
            phoneMin: "Numărul de telefon trebuie să conțină cel puțin 8 cifre",
            phoneInvalid: "Numărul de telefon conține caractere nevalide",
            subjectMin: "Subiectul trebuie să conțină cel puțin 3 caractere",
            subjectMax: "Subiectul nu poate depăși 100 de caractere",
            messageMin: "Mesajul trebuie să conțină cel puțin 10 caractere",
            messageMax: "Mesajul nu poate depăși 1000 de caractere",
            termsRequired: "Trebuie să accepți termenii și condițiile",
          },
          terms: {
            agree: "Sunt deacord cu",
            conditions: "Termenii și Condițiile",
          },
          submit: "Trimite Mesajul",
          submitting: "Se trimite...",
          successMessage: "Mesajul a fost trimis cu succes!",
          errorMessage:
            "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
        },
      },

      // Breadcrumbs
      breadcrumbs: {
        home: "Acasă",
        aboutUs: "Despre Noi",
        news: "Noutăți",
        catalog: "Catalog",
        recipes: "Rețete",
        contacts: "Contacte",
        stores: "Magazine",
        product: "Produs",
      },

      // Moments
      moments: {
        title: "Momente",
      },

      // FAQ
      faq: {
        title: "FAQ",
        subtitle: "Întrebări Frecvente",
        description: "Cele mai frecvente întrebări adresate",
        questions: {
          q1: "Care sunt cele mai potrivite condimente pentru fiecare tip de carne?",
          a1: "Pentru carne de porc puteți folosi cu încredere rozmarin, busuioc, coriandru, cimbru, chimen sau mentă.",
          q2: "Care materia primã se utilizeazã pentru producerea mezelurilor sau specialitãtilor afumate din carne?",
          a2: "Pentru producerea mezelurilor sau specialitãtilor afumate din carne se utilizeazã carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan, carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan.",
          q3: "Cum se afumă carnea si specialitätile din carne?",
          a3: "Pentru producerea mezelurilor sau specialitãtilor afumate din carne se utilizeazã carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan, carne de porc, carne de vitã, carne de gãinã, carne de miel, carne de pui, carne de curcan.",
          q4: "Care este diferenta între salamul semi-afumat si fiert-afumat?",
          a4: "Salamul semi-afumat este un produs care este afumat, dar nu este fierbere, iar salamul fiert-afumat este un produs care este fierbere, dar nu este afumat.",
          q5: "Cum se fierb corect crenvurstile si safaladele?",
          a5: "Salamul semi-afumat este un produs care este afumat, dar nu este fierbere, iar salamul fiert-afumat este un produs care este fierbere, dar nu este afumat.",
        },
      },

      // Stores
      stores: {
        title: "Magazinele noastre",
        search: "Cauta...",
        workingHours: {
          mondayFriday: "Luni –Vineri:",
          saturday: "Sîmbata:",
          sunday: "Duminica:",
          closed: "zi liberă",
        },
        storeNames: {
          chisinau: "Carmez Chișinău",
          drochia: "Carmez Drochia",
          bubuieci: "Carmez Bubuieci",
        },
        timeFormats: {
          mondayFriday: "Luni –Vineri:",
          saturday: "Sîmbata:",
          sunday: "Duminica:",
          dayOff: "zi liberă",
        },
      },

      // Contacts
      contacts: {
        office: "Oficiu",
        factory: "Fabrica",
        allStores: "Toate magazinele",
        address: "R. Moldova, or. Chișinău, str. Calea Basarabiei, 36/4",
        phone: "Telefon: 0(22) 78 82 51",
        email: "Email: reception@carmez.md",
      },

      // Catalog Filters
      filters: {
        meatType: "Tipul de carne",
        productCategory: "Categorie de produse",
        expirationDate: "Data de expirare a produsului",
        newProduct: "Produs nou",
        reset: "Resetare",
        months: "Luni",
        years: "Ani",
        pork: "Carne de porc",
        beef: "Carne de vita",
        chicken: "Carne de pui",
        carnat: "Carnat",
        ciorba: "Ciorba de burta",
        conserve: "Conserve",
      },

      // Recipes
      recipes: {
        search: "Cauta...",
        sort: "Sort",
        sortOptions: {
          newest: "Newest",
          oldest: "Oldest",
          mostViewed: "Most viewed",
          leastViewed: "Least viewed",
        },
      },
    },
  },
  ru: {
    translation: {
      // Navigation
      nav: {
        home: "Главная",
        aboutUs: "О нас",
        news: "Новости",
        catalog: "Каталог",
        recipes: "Рецепты",
        contacts: "Контакты",
      },

      // Common
      common: {
        loading: "Загрузка...",
        error: "Ошибка",
        submit: "Отправить",
        cancel: "Отмена",
        save: "Сохранить",
        edit: "Редактировать",
        delete: "Удалить",
        viewAll: "Посмотреть все",
        learnMore: "Узнать больше",
        buyHere: "Купить здесь",
        followUs: "Подписывайтесь на нас",
      },

      // Home Page
      home: {
        hero: {
          title: "Классические колбасы на пасхальном столе. С 1904 года.",
          subtitle: "страсть. традиция. аутентичный вкус.",
          button: "Купить здесь",
        },
        history: {
          title: "Мы - Кармез",
          subtitle: "Sed ut perspiciatis unde omnis iste natus error",
          description:
            "История компании начинается еще в 1904 году, когда в юго-западной части Кишинева городские власти разрешили строительство первой частной скотобойни.",
          button: "Узнать больше",
        },
        products: {
          title: "Продукты",
          button: "Посмотреть все",
        },
        news: {
          title: "Новости",
          button: "Купить здесь",
          viewAll: "Посмотреть все",
          items: {
            title: "Классические колбасы на пасхальном столе. С 1904 года.",
            buttonText: "Купить здесь",
          },
        },
        whyUs: {
          title: "Почему Кармез?",
          button: "Посмотреть продукты",
          stats: {
            capacity:
              "Ежедневная производственная мощность составляет 65 тонн переработанной продукции",
            area: "Общая площадь производства и товарного склада",
            employees: "В настоящее время в компании работает 650 сотрудников",
          },
        },
      },

      // About Us Page
      aboutUs: {
        description:
          "КАРМЕЗ - это имя-синоним в мясной промышленности Республики Молдова. С традицией, которая началась более 25 лет назад, мы производим и поставляем свежие и переработанные мясные продукты, которые соответствуют самым высоким стандартам качества.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        moments: {
          current: {
            title: "МЫ СПЕЦИАЛИСТЫ ПО МЯСУ",
            subtitle: "страсть. традиция. аутентичный вкус.",
            description:
              "КАРМЕЗ - это имя-синоним в мясной промышленности Республики Молдова. С традицией, которая началась более 25 лет назад, мы производим и поставляем свежие и переработанные мясные продукты, которые соответствуют самым высоким стандартам качества.",
            stats: {
              employees: "ПРЕДАННЫЕ СОТРУДНИКИ",
              products: "ПРОДУКТЫ",
            },
          },
          "2014": {
            title: "НАЦИОНАЛЬНОЕ РАСШИРЕНИЕ",
            description:
              "Расширение сети дистрибуции на национальном уровне и модернизация производственных мощностей.",
          },
          "2008": {
            title: "МОДЕРНИЗАЦИЯ",
            description:
              "Внедрение современных производственных технологий и сертификация по европейским стандартам.",
          },
          "2004": {
            title: "РАЗВИТИЕ",
            description:
              "Запуск первых премиальных продуктов и расширение продуктовой линейки.",
          },
          "2000": {
            title: "НОВОЕ ТЫСЯЧЕЛЕТИЕ",
            description:
              "Вступление в новое тысячелетие с амбициозными планами развития.",
          },
          "1999": {
            title: "КОНСОЛИДАЦИЯ",
            description:
              "Консолидация позиции на местном рынке и улучшение процессов.",
          },
          "1991": {
            title: "НЕЗАВИСИМОСТЬ",
            description: "Начало деятельности компании в постсоветский период.",
          },
          "1988": {
            title: "ТРАНСФОРМАЦИЯ",
            description:
              "Период важных преобразований в организации производства.",
          },
          "1970-1985": {
            title: "УСТОЙЧИВЫЙ РОСТ",
            description:
              "Период устойчивого роста и развития производственных мощностей.",
          },
          "1964": {
            title: "РАЗВИТИЕ",
            description:
              "Продолжение развития и улучшение производственных технологий.",
          },
          "1955": {
            title: "СТАБИЛИЗАЦИЯ",
            description:
              "Стабилизация деятельности и консолидация рабочей команды.",
          },
          "1947": {
            title: "ВОССТАНОВЛЕНИЕ",
            description:
              "Период восстановления после войны и возобновления деятельности.",
          },
          "1941-1944": {
            title: "ВОССТАНОВЛЕНИЕ",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
          },
          "1908": {
            title: "НАЧАЛО",
            description:
              "Первые шаги в мясной промышленности и закладка основ для будущего.",
          },
          "1904": {
            title: "ОСНОВАНИЕ",
            description: "Основание компании и начало традиции более века.",
          },
        },
      },

      // Footer

      // Contact Form
      contact: {
        form: {
          title: "Свяжитесь с нами",
          subtitle: "Давайте обсудим!",
          fields: {
            name: "Имя",
            email: "Адрес электронной почты",
            address: "Адрес",
            phone: "Телефон",
            subject: "Тема",
            message: "Ваше сообщение...",
          },
          validation: {
            nameMin: "Имя должно содержать не менее 2 символов",
            nameMax: "Имя не может превышать 50 символов",
            emailRequired: "Email обязателен",
            emailInvalid: "Адрес электронной почты недействителен",
            addressMin: "Адрес должен содержать не менее 5 символов",
            addressMax: "Адрес не может превышать 100 символов",
            phoneMin: "Номер телефона должен содержать не менее 8 цифр",
            phoneInvalid: "Номер телефона содержит недопустимые символы",
            subjectMin: "Тема должна содержать не менее 3 символов",
            subjectMax: "Тема не может превышать 100 символов",
            messageMin: "Сообщение должно содержать не менее 10 символов",
            messageMax: "Сообщение не может превышать 1000 символов",
            termsRequired: "Вы должны принять условия и положения",
          },
          terms: {
            agree: "Я согласен с",
            conditions: "Условиями и положениями",
          },
          submit: "Отправить сообщение",
          submitting: "Отправляется...",
          successMessage: "Сообщение успешно отправлено!",
          errorMessage:
            "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.",
        },
      },

      // Breadcrumbs
      breadcrumbs: {
        home: "Главная",
        aboutUs: "О нас",
        news: "Новости",
        catalog: "Каталог",
        recipes: "Рецепты",
        contacts: "Контакты",
        stores: "Магазины",
        product: "Продукт",
      },

      // Moments
      moments: {
        title: "Моменты",
      },

      // FAQ
      faq: {
        title: "FAQ",
        subtitle: "Часто задаваемые вопросы",
        description: "Самые часто задаваемые вопросы",
        questions: {
          q1: "Какие специи лучше всего подходят для каждого типа мяса?",
          a1: "Для свинины вы можете уверенно использовать розмарин, базилик, кориандр, тимьян, тмин или мяту.",
          q2: "Какое сырье используется для производства колбас или копченых мясных изделий?",
          a2: "Для производства колбас или копченых мясных изделий используется свинина, говядина, курятина, баранина, индейка, свинина, говядина, курятина, баранина, индейка.",
          q3: "Как коптится мясо и мясные изделия?",
          a3: "Для производства колбас или копченых мясных изделий используется свинина, говядина, курятина, баранина, индейка, свинина, говядина, курятина, баранина, индейка.",
          q4: "В чем разница между полукопченой и варено-копченой колбасой?",
          a4: "Полукопченая колбаса - это продукт, который коптится, но не варится, а варено-копченая колбаса - это продукт, который варится, но не коптится.",
          q5: "Как правильно варить краковские колбаски и салями?",
          a5: "Полукопченая колбаса - это продукт, который коптится, но не варится, а варено-копченая колбаса - это продукт, который варится, но не коптится.",
        },
      },

      // Stores
      stores: {
        title: "Наши магазины",
        search: "Поиск...",
        workingHours: {
          mondayFriday: "Понедельник – Пятница:",
          saturday: "Суббота:",
          sunday: "Воскресенье:",
          closed: "выходной",
        },
        storeNames: {
          chisinau: "Кармез Кишинев",
          drochia: "Кармез Дрокия",
          bubuieci: "Кармез Буюкань",
        },
        timeFormats: {
          mondayFriday: "Понедельник – Пятница:",
          saturday: "Суббота:",
          sunday: "Воскресенье:",
          dayOff: "выходной",
        },
      },

      // Contacts
      contacts: {
        office: "Офис",
        factory: "Фабрика",
        allStores: "Все магазины",
        address: "Р. Молдова, г. Кишинев, ул. Калеа Басарабией, 36/4",
        phone: "Телефон: 0(22) 78 82 51",
        email: "Email: reception@carmez.md",
      },

      // Catalog Filters
      filters: {
        meatType: "Тип мяса",
        productCategory: "Категория продуктов",
        expirationDate: "Срок годности продукта",
        newProduct: "Новый продукт",
        reset: "Сброс",
        months: "Месяцы",
        years: "Годы",
        pork: "Свинина",
        beef: "Говядина",
        chicken: "Курятина",
        carnat: "Колбаса",
        ciorba: "Суп из рубца",
        conserve: "Консервы",
      },

      // Recipes
      recipes: {
        search: "Поиск...",
        sort: "Сортировка",
        sortOptions: {
          newest: "Новые",
          oldest: "Старые",
          mostViewed: "Популярные",
          leastViewed: "Менее популярные",
        },
      },

      // Footer
      footer: {
        company: "Компания",
        categories: "Категории",
        information: "Информация",
        address: "Адрес",
        phone: "Телефон",
        email: "Email",
        workingHours: "Часы работы",
        copyright: "Авторские права © 2025 Кармез Молдова.",
        aboutUs: "О нас",
        affiliate: "Партнерство",
        career: "Карьера",
        contactUs: "Связаться с нами",
        cookiePolicy: "Политика использования файлов cookie",
        termsConditions: "Условия и положения",
        returnsExchanges: "Возврат и обмен",
        shippingDelivery: "Доставка",
        privacyPolicy: "Политика конфиденциальности",
        description: "Отличный шаблон сайта продуктового магазина",
        followUs: "Подписывайтесь на нас",
        milksDairies: "Молоко и молочные продукты",
        clothingBeauty: "Одежда и красота",
        petToy: "Игрушки для животных",
        bakingMaterial: "Материалы для выпечки",
        freshFruit: "Свежие фрукты",
        winesDrinks: "Вино и напитки",
        infoItems: {
          address: "Р. Молдова, г. Кишинев, ул. Калеа Басарабией, 36/4",
          phone: "0 (22) 78 82 51",
          email: "reception@farmmeatgroup.md",
          workingHours: "08:00 - 18:00, Понедельник - Суббота",
        },
        phoneNumbers: {
          primary: "0 227 88 251",
          secondary: "0 610 61 666",
        },
      },
    },
  },
};

// Function to get the saved language from localStorage
const getSavedLanguage = (): string => {
  try {
    // First, try to get the saved language from localStorage
    const saved = localStorage.getItem("carmez-language");
    if (saved && (saved === "ro" || saved === "ru")) {
      return saved;
    }

    // If no saved language, try to detect from browser
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language || navigator.languages?.[0];
      if (browserLang) {
        if (browserLang.startsWith("ru")) {
          return "ru";
        }
        if (browserLang.startsWith("ro")) {
          return "ro";
        }
      }
    }

    // Default to Romanian
    return "ro";
  } catch {
    return "ro";
  }
};

// Function to save language to localStorage
export const saveLanguage = (language: string): void => {
  try {
    localStorage.setItem("carmez-language", language);
  } catch {
    // Silently fail if localStorage is not available
  }
};

// Function to get current language
export const getCurrentLanguage = (): string => {
  return i18n.language;
};

// Function to reset language to default
export const resetLanguage = (): void => {
  saveLanguage("ro");
  i18n.changeLanguage("ro");
};

// Debug function to check language state
export const debugLanguageState = (): void => {
  console.log("Current i18n language:", i18n.language);
  console.log(
    "Saved language in localStorage:",
    localStorage.getItem("carmez-language")
  );
  console.log("Browser language:", navigator.language);
  console.log("Available languages:", i18n.languages);
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(), // Use saved language or default
  fallbackLng: "ro", // Fallback language
  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});

export default i18n;
