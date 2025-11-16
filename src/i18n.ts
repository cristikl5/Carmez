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
            buttonText: "citește mai mult",
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
          unitMeasures: {
            tone: "TONE",
            m2: "m2",
            angajati: "angajati",
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
            title: "110 ani - Jubileu",
            description:
              'Marca comercială «Carmez» lansează o serie specială de produse cârnați în onoarea aniversării de 110 ani, care include produsele preferate de consumatori, cum ar fi: "Servelat de Jubileu", "De Moscova de Jubileu", "Parizer Doctorscaia de Jubileu", "Crenvurști de Jubileu".',
          },
          "2008": {
            title: "Marca anului",
            description:
              'Marca comercială «Carmez» a fost distinsă pentru a 4-a oară cu premiul "Marca anului".',
          },
          "2004": {
            title: "Magazine specializate",
            description:
              "SA «Carmez» colaborează cu 1400 de magazine de retail și en-gros, precum și deține cea mai largă rețea de magazine proprii, formată din 25 de magazine specializate, situate în întreaga țară.",
          },
          "2000": {
            title: "Premiul de stat",
            description:
              "Pentru prima dată în Republica Moldova, SA «Carmez» a fost distins cu Premiul de Stat pentru realizări în domeniul calității.",
          },
          "1999": {
            title: "95 de ani - Jubileu",
            description:
              "Carmez sărbătorește jubileul - 95 de ani de la fondare. În acest an, SA «Carmez» a fost recunoscut ca cel mai mare combinat de prelucrare a cărnii din Moldova.",
          },
          "1991": {
            title: "INDEPENDENȚA",
            description:
              'După destrămarea URSS, apare SA "Carmez", producând produse din carne până în anul 2013.',
          },
          "1988": {
            title: "A 3-a reconstrucție",
            description:
              "A început a treia reconstrucție a combinatului: fabrica de prelucrare a cărnii și fabrica de prelucrare primară a animalelor, complexul de instalații de epurare, cazaneria mare.",
          },
          "1970-1985": {
            title: "Reechipare tehnică",
            description:
              "Creșterea capacităților s-a realizat în principal prin reconstrucții și reechipare tehnică a producției fără creșterea suprafețelor de producție și dezvoltarea corespunzătoare a infrastructurii de inginerie.",
          },
          "1966": {
            title: "Noi ateliere",
            description:
              "Au intrat în funcțiune atelierul de cârnați și atelierul de conserve, precum și un nou frigider.",
          },
          "1964": {
            title: "Lucrători",
            description:
              "În 1964, la combinatul de carne lucrau 1391 de persoane. Dintre acestea: Moldoveni - 569, Ruși - 328, Ucraineni – 156.",
          },
          "1955": {
            title: "Suprafață",
            description:
              "Suprafața de producție a atelierelor principale a fost adusă la 12460 m2.",
          },
          "1950": {
            title: "Abator de păsări",
            description:
              "A început să funcționeze abatorul de păsări, s-a construit un frigider de 100 de tone pentru depozitarea simultană a cărnii, precum și o centrală termoelectrică cu o putere de 500 kW.",
          },
          "1947": {
            title: "Combinat",
            description:
              "Poate fi considerat începutul construcției combinatului cu toate atelierele sale.",
          },
          "1941-1944": {
            title: "Reconstrucție",
            description:
              "Sfârșitul războiului, precum și primii ani de pace - ani de muncă istovitoare, reconstrucție și restabilire a întreprinderii.",
          },
          "1908": {
            title: "Turn",
            description: "A fost construit turnul de apă.",
          },
          "1904": {
            title: "Începutul Istoriei",
            description:
              "Istoria combinatului de carne din Chișinău a început în 1904, în partea de sud-vest a Chișinăului, la patru kilometri de stația de cale ferată din Chișinău, unde autoritățile orașului au permis construirea primului abator privat. Primele capete de animale au fost sacrificate în condiții noi sub supravegherea unui medic veterinar în octombrie 1904. Suprafața de producție a întreprinderii era de doar 2576 m2. Numărul de angajați la acel moment era de 70 de persoane.",
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
        description: "Rețete clasice. Din 1904",
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
            buttonText: "Читать далее",
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
          unitMeasures: {
            tone: "тонн",
            m2: "м2",
            angajati: "angajati",
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
            title: "110 лет - Юбилей",
            description:
              "Торговая марка «Carmez» выпускает специальную серию колбасных изделий в честь 110летнего юбилея, в которую вошли полюбившиеся потребителю продукты такие как: «Servelat de Jubileu», «De Moscova de Jubileu», «Parizer Doctorscaia de Jubileu», «Crenvurști de Jubileu».",
          },
          "2008": {
            title: "Марка года",
            description:
              "Торговая марка «Carmez» в 4 раз удостоена премии Марка года.",
          },
          "2004": {
            title: "Спец. магазины",
            description:
              "АО «Carmez» сотрудничает с 1400 магазинами розничной и оптовой торговли, а также обладает самой широкой сетью своих магазинов, состоящий из 25 специализированных магазинов, расположенных по всей стране.",
          },
          "2000": {
            title: "Гос. премия",
            description:
              "Впервые в Республике Молдова АО «Carmez» удастоено Государственной премии за достижения в области качества.",
          },
          "1999": {
            title: "95 лет - Юбилей",
            description:
              "Carmez празднует юбилей - 95 лет со дня основания. В этот год SA «Carmez» был отмечен как крупнейший в Молдове мясоперерабатывающий завод.",
          },
          "1991": {
            title: "НЕЗАВИСИМОСТЬ",
            description:
              "После развала СССР, появляется АО «Кармез», производящее мясную продукцию до 2013 года.",
          },
          "1988": {
            title: "3-я реконструкция",
            description:
              "Началась третья реконструкция комбината: мясоперерабатывающего завода и завода первичной переработки скота, комплекса очистных сооружений, крупной котельной.",
          },
          "1970-1985": {
            title: "Тех. перевооружения",
            description:
              "Наращивание мощностей осуществлялось в основном за счет реконструкций и технического перевооружения производства без увеличения производственных площадей, и соответствующего развития инженерного обеспечения.",
          },
          "1966": {
            title: "Новые цеха",
            description:
              "Вступили в строй колбасный и консервный цеха, и новый холодильник.",
          },
          "1964": {
            title: "Работники",
            description:
              "В 1964 Году на мясокомбинате работало 1391 чел. Из них: Молдаван - 569, Русских - 328, Украинцев – 156.",
          },
          "1955": {
            title: "Площадь",
            description:
              "Производственная площадь основных цехов была доведена до 12460 м2.",
          },
          "1950": {
            title: "Птицебойня",
            description:
              "Начала действовать птицебойня, построили холодильник на 100 тонн единовременного хранения мяса, а также ТЭЦ мощностью 500 кВт.",
          },
          "1947": {
            title: "Комбинат",
            description:
              "Можно считать началом строительства комбината со всеми его цехами.",
          },
          "1941-1944": {
            title: "Реконструкция",
            description:
              "Окончание войны,а также первые мирные годы - годы изнурительного труда, реконструкция и восстановление предприятия.",
          },
          "1908": {
            title: "Башня",
            description: "Построена водонапорная башня.",
          },
          "1904": {
            title: "Начало Истории",
            description:
              "История Кишиневского мясокомбината началась с 1904 года в юго-западной части Кишинева в четырех километрах от железнодорожной станции Кишинева, где городские власти разрешили построить первую частную бойню. Первые головы скота были забиты в новых условиях под надзором ветеринарного врача в октябре 1904 года. Производственная площадь предприятия равнялась всего лишь 2576 м2. Численность сотрудников на тот момент состовляло 70 чел.",
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
        description: "Классические рецепты. С 1904.",
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
          address: "R.Moldova, or.Chișinău, Str.Calea Basarabiei 36/4",
          phone: "(+373) 22 788 251",
          email: "receptio@carmez.md",
          workingHours: "9:00 – 17:30 Lu – Vi (9:00 – 17:30 Пн – Пт)",
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
