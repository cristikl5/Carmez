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
          title: "Retele clasice la masa de Pasti.",
          subtitle: "Din 1904.",
          description: "pasiune. Tradiție. Gust autentic.",
          button: "Cumpara aici",
        },
        history: {
          title: "Noi suntem Carmez",
          subtitle: "E istoria mea și a ta.",
          description:
            "Carmez – companie cu mai mult de un secol de existență și activitate neîntreruptă, răstimp în care bine cunoscuta întreprindere de industrializare și comercializare a cărnii a adus o inegalabilă contribuție la dezvoltarea industriei autohtone și la soluționalizarea problemelor sociale. La ziua de azi compania produce cel mai larg asortiment de produse din carne.",
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
              "Capacitatea de producție este de 80 de tone produse finite pe zi",
            area: "Suprafața totală a producerii și depozitului frigorific de marfă",
            employees: "La moment în cadrul companiei lucrează 650 de angajați",
          },
        },
      },

      // About Us Page
      aboutUs: {
        description:
          'Istoria companiei datează încă din anul 1904, când în partea de sud-vest a Chișinăului, autoritățile orașului au permis construcția primului abator privat, cu o suprafață de doar 2576 m2. Timp de trei decenii, întreprinderea a funcționat și s-a dezvoltat cu pași încrezători, au fost extinse capacitățile de producție și a fost construită propria fântână arteziană.\n\nConstrucția întreprinderii moderne începe în anul 1947. Până la începutul noului deceniu, au fost construite două frigidere noi, cu o suprafață de 1000 și 2000 m2. În același timp, a fost aprobat planul pentru construcția unei noi secții de producere a mezelurilor.\n\nTimp de trei decenii, întreprinderea a continuat să-și perfecționeze capacitățile de producere, să-și modernizeze secțiile existente și să-și îmbunătățească politica de personal a companiei.\n\nDupă destrămarea URSS, apare SA "Carmez", producând produse din carne până în anul 2013, când, ca urmare a fuziunii cu compania "Carmez International", are loc o reorganizare structurală completă, cu revizuirea sortimentului de produse fabricate, cu modernizarea proceselor de producere și ambalare a produselor finite.\n\nÎn 2019 este dată în exploatare o secție nouă de producere și un centru de logistică, cu o suprafață totală de 10000 m2, care respectă normele sanitare aprobate și standardele europene de calitate și siguranță a produselor alimentare, ceea ce este confirmat prin certificarea companiei standartelor ISO 22000:2018.\n\nAstăzi, "Carmez Processing" este cea mai mare și cea mai modernă întreprindere de pe teritoriul Republicii Moldova în industria, construită cu ajutorul experților străini special invitați. Capacitatea de producție este de 80 de tone de produse finite pe zi, iar rețeaua de logistică proprie, formată din mai mult de 60 de camioane echipate cu sisteme de răcire, ne permite să livrăm zilnic produse pe întreg teritoriul Republicii Moldova.',
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
              'După destrămarea URSS, apare SA "Carmez", producând produse din carne până în anul 2013.',
          },
          "1988": {
            title: "TRANSFORMARE",
            description:
              "Perioada de transformări importante în organizarea producției.",
          },
          "1970-1985": {
            title: "PERFECȚIONARE ȘI MODERNIZARE",
            description:
              "Timp de trei decenii, întreprinderea a continuat să-și perfecționeze capacitățile de producere, să-și modernizeze secțiile existente și să-și îmbunătățească politica de personal a companiei.",
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
              "Construcția întreprinderii moderne începe în anul 1947. Până la începutul noului deceniu, au fost construite două frigidere noi, cu o suprafață de 1000 și 2000 m2. În același timp, a fost aprobat planul pentru construcția unei noi secții de producere a mezelurilor.",
          },
          "1941-1944": {
            title: "PERIOADA DE RĂZBOI",
            description:
              "Perioada dificilă a celui de-al Doilea Război Mondial, care a afectat activitățile întreprinderii.",
          },
          "1908": {
            title: "ÎNCEPUTURI",
            description:
              "Primii pași în industria cărnii și stabilirea bazelor pentru viitor.",
          },
          "1904": {
            title: "FONDAREA",
            description:
              "În partea de sud-vest a Chișinăului, autoritățile orașului au permis construcția primului abator privat, cu o suprafață de doar 2576 m2. Timp de trei decenii, întreprinderea a funcționat și s-a dezvoltat cu pași încrezători, au fost extinse capacitățile de producție și a fost construită propria fântână arteziană.",
          },
          "2019": {
            title: "MODERNIZARE ȘI EXTINDERE",
            description:
              "Este dată în exploatare o secție nouă de producere și un centru de logistică, cu o suprafață totală de 10000 m2, care respectă normele sanitare aprobate și standardele europene de calitate și siguranță a produselor alimentare, ceea ce este confirmat prin certificarea companiei standartelor ISO 22000:2018.",
          },
          "2013": {
            title: "REORGANIZARE STRUCTURALĂ",
            description:
              'Ca urmare a fuziunii cu compania "Carmez International", are loc o reorganizare structurală completă, cu revizuirea sortimentului de produse fabricate, cu modernizarea proceselor de producere și ambalare a produselor finite.',
          },
        },
      },

      // Footer
      footer: {
        company: "Companie",
        categories: "Categorii",
        information: "Informație",
        address: "Adresa",
        phone: "Tel",
        email: "Email",
        workingHours: "Ore de lucru",
        copyright: "Copyright © 2025 Carmez Moldova.",
        aboutUs: "Despre noi",
        news: "Noutăți",
        recipes: "Rețete",
        contactUs: "Contacte",
        cookiePolicy: "Politica de cookie-uri",
        termsConditions: "Termeni și condiții",
        returnsExchanges: "Returnări și schimburi",
        shippingDelivery: "Livrare",
        privacyPolicy: "Politica de confidențialitate",
        description: "Carmez - tradiție și gust autentic din 1904",
        followUs: "Urmărește-ne",
        // Categories
        crenvurstiSafalade: "Crenvurști/Safalade",
        fierte: "Fierte",
        semiAfumate: "Semi-afumate",
        fiertAfumate: "Fiert-afumate",
        crudAfumate: "Crud-afumate",
        delicatese: "Delicatese",
        alteProduse: "Alte produse",
        conserve: "Conserve",
        carneFreshMarinade: "Carne fresh/marinade",
        cirnacioriMici: "Cîrnăciori/mici",
        infoItems: {
          address: "R.Moldova, or.Chișinău, str.Calea Basarabiei 36/4",
          phone: "(+373) 22 788 251",
          email: "receptio@carmez.md",
          workingHours: "08:00 - 18:00, Luni - Sâmb",
        },
        phoneNumbers: {
          primary: "(+373) 22 788 251",
          secondary: "(+373) 61 06 16 66",
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
        crenvurstiSafalade: "Crenvurști/safalade",
        fiert: "Fiert",
        sunci: "Șunci",
        semiAfumat: "Semi-afumat",
        fiertAfumat: "Fiert-afumat",
        crudAfumat: "Crud-afumat",
        delicatese: "Delicatese",
        alteProduse: "Alte produse",
        conserve: "Conserve",
        produseVegetale: "Produse vegetale",
        carneFresh: "Carne fresh",
        marinade: "Marinade",
        cirnacioriMici: "Cărnăciori/Mici",
        snackzStickz: "Snackz/Stickz",
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
          title: "Классические колбасы на пасхальном столе.",
          subtitle: "С 1904 года.",
          description: "страсть. традиция. аутентичный вкус.",
          button: "Купить здесь",
        },
        history: {
          title: "Мы - Кармез",
          subtitle: "Это наша с тобой история.",
          description:
            "Кармез — компания с более чем столетним существованием и непрерывной деятельностью, в ходе которой известное предприятие по сбыту и продвижении мяса внесло неоценимый вклад в развитие местной промышленности и решение социальных проблем. Сегодня компания производит самый широкий ассортимент мясных продуктов.",
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
              "Производственная мощность составляет 80 тонн готовой продукции в сутки",
            area: "Площадь производства и холодильных складов",
            employees: "Численность персонала составляет 650 специалистов",
          },
        },
      },

      // About Us Page
      aboutUs: {
        description:
          'История предприятия начинается ещё в 1904 году, когда, в юго-западной части Кишинёва, городские власти разрешают строительство первой частной бойни, площадью всего 2576 м2. На протяжении трёх десятилетий, предприятие функционировало и развивалось уверенными шагами, расширялись производственные мощности, была построена собственная водонапорная башня, пробурены водяные скважины.\n\nСтроительство современного завода начинается в 1947 году. К началу нового десятилетия, были построены два новых холодильника, площадью 1000 и 2000м2. В это же время, был утвержден план строительства нового колбасного цеха. Последующие тридцать лет, предприятие продолжает совершенствование производственных мощностей, модернизацию действующих цехов, улучшение кадровой политики предприятия.\n\nПосле развала СССР, появляется АО «Кармез», производящее мясную продукцию до 2013 года, когда, в следствие слияния с компанией "Carmez International", происходит полная структурная реорганизация, пересматривается ассортимент выпускаемой продукции, усовершенствуются процессы производства и упаковки готового продукта.\n\nВ 2019 году сдаётся в эксплуатацию абсолютно новое производство и логистический центр, общей площадью в 10000м2, соответствующие утвержденным санитарным нормам и европейским стандартам качества и безопасности пищевых продуктов, что подтверждает сертификация предприятия стандартам ISO 22000:2018.\n\nНа сегодняшний день, "Carmez Processing" является крупнейшим и самым современным предприятием в отрасли мясо перерабатывающей промышленности на территории Республики Молдова, построенным по передовым технологиям с помощью зарубежных специалистов в данной отрасли. Производственные мощности составляют 80 тонн готовой продукции в сутки, а собственная логистическая сеть, состоящая более чем из 60 грузовых автомобилей оснащенных холодильными установками, позволяет ежедневно развозить продукцию по всей территории Республики Молдова.',
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
            description:
              "После развала СССР, появляется АО «Кармез», производящее мясную продукцию до 2013 года.",
          },
          "1988": {
            title: "ТРАНСФОРМАЦИЯ",
            description:
              "Период важных преобразований в организации производства.",
          },
          "1970-1985": {
            title: "СОВЕРШЕНСТВОВАНИЕ И МОДЕРНИЗАЦИЯ",
            description:
              "Последующие тридцать лет, предприятие продолжает совершенствование производственных мощностей, модернизацию действующих цехов, улучшение кадровой политики предприятия.",
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
              "Строительство современного завода начинается в 1947 году. К началу нового десятилетия, были построены два новых холодильника, площадью 1000 и 2000м2. В это же время, был утвержден план строительства нового колбасного цеха.",
          },
          "1941-1944": {
            title: "ПЕРИОД ВОЙНЫ",
            description:
              "Трудный период Второй мировой войны, который повлиял на деятельность предприятия.",
          },
          "1908": {
            title: "НАЧАЛО",
            description:
              "Первые шаги в мясной промышленности и закладка основ для будущего.",
          },
          "1904": {
            title: "ОСНОВАНИЕ",
            description:
              "В юго-западной части Кишинёва, городские власти разрешают строительство первой частной бойни, площадью всего 2576 м2. На протяжении трёх десятилетий, предприятие функционировало и развивалось уверенными шагами, расширялись производственные мощности, была построена собственная водонапорная башня, пробурены водяные скважины.",
          },
          "2019": {
            title: "МОДЕРНИЗАЦИЯ И РАСШИРЕНИЕ",
            description:
              "Сдаётся в эксплуатацию абсолютно новое производство и логистический центр, общей площадью в 10000м2, соответствующие утвержденным санитарным нормам и европейским стандартам качества и безопасности пищевых продуктов, что подтверждает сертификация предприятия стандартам ISO 22000:2018.",
          },
          "2013": {
            title: "СТРУКТУРНАЯ РЕОРГАНИЗАЦИЯ",
            description:
              'В следствие слияния с компанией "Carmez International", происходит полная структурная реорганизация, пересматривается ассортимент выпускаемой продукции, усовершенствуются процессы производства и упаковки готового продукта.',
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
        crenvurstiSafalade: "Сосиски/Сардельки",
        fiert: "Варёные",
        sunci: "Ветчины",
        semiAfumat: "Полу-копчёные",
        fiertAfumat: "Варёно-копчёные",
        crudAfumat: "Сыро-копчёные",
        delicatese: "Деликатесы",
        alteProduse: "Другие продукты",
        conserve: "Консервы",
        produseVegetale: "Растительные продукты",
        carneFresh: "Свежее мясо",
        marinade: "Маринады",
        cirnacioriMici: "Колбаски/мититеи",
        snackzStickz: "Snackz/Stickz",
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
        news: "Новости",
        recipes: "Рецепты",
        contactUs: "Контакты",
        cookiePolicy: "Политика использования файлов cookie",
        termsConditions: "Условия и положения",
        returnsExchanges: "Возврат и обмен",
        shippingDelivery: "Доставка",
        privacyPolicy: "Политика конфиденциальности",
        description: "Кармез - традиция и аутентичный вкус с 1904 года",
        followUs: "Подписывайтесь на нас",
        // Categories
        crenvurstiSafalade: "Сосиски/Сардельки",
        fierte: "Варёные",
        semiAfumate: "Полу-копчёные",
        fiertAfumate: "Варёно-копчёные",
        crudAfumate: "Сыро-копчёные",
        delicatese: "Деликатесы",
        alteProduse: "Другие продукты",
        conserve: "Консервы",
        carneFreshMarinade: "Свежее мясо/маринады",
        cirnacioriMici: "Колбаски/мититеи",
        infoItems: {
          address: "Р.Молдова, г.Кишинёв, ул.Calea Basarabiei 36/4",
          phone: "(+373) 22 788 251",
          email: "receptio@carmez.md",
          workingHours: "08:00 - 18:00, Понедельник - Суббота",
        },
        phoneNumbers: {
          primary: "(+373) 22 788 251",
          secondary: "(+373) 61 06 16 66",
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
