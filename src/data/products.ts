export type Product = {
  id: number;
  image: string;
  title: string;
  titleRu: string;
  category: string;
  categoryRu: string;
  ingredients: string;
  ingredientsRu: string;
  weight: string;
  expiration: string;
  storageTemp: string;
  packaging: string;
  packagingRu: string;
  isNew?: boolean;
};

// Helper function to get image path for a product based on its title and category
const getImagePath = (title: string, category: string): string => {
  // Normalize title for matching (remove diacritics, lowercase, remove special chars)
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const normalizedTitle = normalize(title);
  const basePath = "/images/products";

  // Product title to image file mapping (using category-specific keys to avoid duplicates)
  const imageMap: Record<string, string> = {
    // Fiert products
    "parizer doktorskaia membrana naturala": `${basePath}/Fiert/Doktorskaia membrana naturala.jpg`,
    "parizer doktorskaia": `${basePath}/Fiert/Carmez Parizer Doctorscaia.jpg`,
    "parizer lacta": `${basePath}/Fiert/Carmez Parizer Lacta.jpg`,
    "rulada lancimit": `${basePath}/Fiert/Carmez Rulada Lancimit .jpg`,
    "parizer preferat": `${basePath}/Fiert/Carmez Preferat.jpg`,

    // Crenvursti/Safalade products
    "crenvursti carmez": `${basePath}/Crenvursti, safalade/Carmez Crenvursti Carmez.jpg`,
    "crenvursti cu cascaval": `${basePath}/Crenvursti, safalade/Carmez Crenvursti cu cascaval.jpg`,
    "crenvursti de vita": `${basePath}/Crenvursti, safalade/Carmez Crenvursti de Vita.jpg`,
    "crenvursti de pui": `${basePath}/Crenvursti, safalade/Carmez Crenvursti de pui_up.jpg`,
    "crenvursti lacta": `${basePath}/Crenvursti, safalade/Carmez Crenvursti Lacta.jpg`,
    "crenvursti carmezel": `${basePath}/Crenvursti, safalade/Carmez Crenvursti Carmezel_up.jpg`,
    "safalade clasice": `${basePath}/Crenvursti, safalade/Carmez Safalade Clasice.jpg`,
    "safalade carmezel": `${basePath}/Crenvursti, safalade/Carmez Safalade Carmezel.jpg`,
    "safalade porc-vita": `${basePath}/Crenvursti, safalade/Carmez Safalade porc vita.jpg`,

    // Semi-afumat products
    "sunca bavaria": `${basePath}/Semiafumat/Carmez Sunca Bavaria.jpg`,
    "cirnaciori de pui": `${basePath}/Semiafumat/Carmez Cirnaciori de pui.jpg`,
    "salam codru": `${basePath}/Semiafumat/Carmez Salam Codru_mod.jpg`,
    "salam de odesa": `${basePath}/Semiafumat/Carmez Salam de Odesa.jpg`,
    "salam cracovia": `${basePath}/Semiafumat/Carmez Salam Cracovia.jpg`,
    "salam satesc": `${basePath}/Semiafumat/Salam Satesc.jpg`,
    "salam vienez": `${basePath}/Semiafumat/Carmez Salam Vienez.jpg`,
    "sunca lancimit": `${basePath}/Semiafumat/Carmez Sunca Lancimit.jpg`,

    // Fiert-afumat products
    "salam de moscova": `${basePath}/Fiert afumat/Carmez Salam De Moscova .jpg`,
    "salam moldovenesc": `${basePath}/Fiert afumat/Carmez Salam Moldovenesc.jpg`,
    "saliami premium": `${basePath}/Fiert afumat/Saliami Premium.jpg`,
    "saliami italian": `${basePath}/Fiert afumat/Saliami Italian.jpg`,
    "saliami clasic": `${basePath}/Fiert afumat/Saliami Premium.jpg`,
    "servelat boieresc": `${basePath}/Fiert afumat/Carmez Servelat Boieresc.jpg`,

    // Crud-afumat products
    "salam braunsveigscaia": `${basePath}/Crud afumat/Carmez Salam Braunsveigscaia ca.jpg`,
    "salam mozaic": `${basePath}/Crud afumat/Carmez Salam Mozaic.jpg`,
    "salan napoli": `${basePath}/Crud afumat/Carmez Salam Napoli.jpg`,
    "saleami studentesc": `${basePath}/Crud afumat/Carmez Saliami Studentesc ca.jpg`,
    servelat: `${basePath}/Crud afumat/Carmez Salam Servelat ca .jpg`,
    "salam capitala": `${basePath}/Crud afumat/Carmez Salam Capitala .jpg`,
    sudjuc: `${basePath}/Crud afumat/Carmez Salam Sudjuc ca.jpg`,

    // Delicatese products
    "aripi de pui": `${basePath}/Delicatese/Carmez Aripi de gaina afumate.jpg`,
    "batog din carne de porc": `${basePath}/Delicatese/Carmez Batog de Porc.jpg`,
    "ceafa boiereasca": `${basePath}/Delicatese/Ceafa Boiereasca копия.jpg`,
    "file de porc": `${basePath}/Delicatese/Carmez File de porc.jpg`,
    "file de pui": `${basePath}/Delicatese/File de pui afum. fiert___cut.png`,
    "piept de porc kaizer": `${basePath}/Delicatese/Carmez Kaizer.jpg`,
    "muschi de porc": `${basePath}/Delicatese/Muschi de porc.jpg`,
    "pastrama de capitala": `${basePath}/Delicatese/CARMEZ Pastrama de Capitala.jpg`,
    "piept de porc de casa": `${basePath}/Delicatese/Carmez Piept de porc de casa.jpg`,
    "rulada de pasare": `${basePath}/Delicatese/Carmez Rulada de Pasare.jpg`,
    "pulpe de pui": `${basePath}/Delicatese/Carmez Pulpe de gaina afumate.jpg`,

    // Alte produse
    "urechi de porc": `${basePath}/Alte produse/Carmez Urechi de porc.jpg`,
    "singerete taranesc": `${basePath}/Alte produse/Singerete___cut.png`,
    "toba de casa": `${basePath}/Alte produse/Carmez Toba de casa.jpg`,
    "toba moldoveneasca": `${basePath}/Alte produse/Carmez Toba Moldoveneasca.jpg`,
    "toba de pui": `${basePath}/Alte produse/Carmez Toba de pui .jpg`,

    // Sunci products
    "sunca din piept de gaina": `${basePath}/Sunci/Carmez Sunca din piept de gaina.jpg`,
    "sunca familia mea": `${basePath}/Sunci/Carmez Sunca Familia mea.jpg`,
    "sunca pizza": `${basePath}/Sunci/Carmez Sunca Pizza.jpg`,
    "sunca imparateasca": `${basePath}/Sunci/Sunca Imparateasca__.jpg`,

    // Conserve products
    "carne de porc inabusita": `${basePath}/Conserve/Carne de porc inabusita 280gr.jpg`,
    "carne de vita inabusita": `${basePath}/Conserve/Carne de vita inabusita 280gr.jpg`,
    "carne de gaina in suc propriu": `${basePath}/Conserve/Carne de gaina in suc propriu 280gr.jpg`,
    "carne de gaina deosebita": `${basePath}/Conserve/Carne Gaina Deosebit 300gr.jpg`,
    "carne de porc deosebita": `${basePath}/Conserve/Carne Porc Deosebit 300gr.jpg`,
    "carne de vita deosebita": `${basePath}/Conserve/Carne Vita Deosebit 300gr.jpg`,
    "pate cu ficat de curcan": `${basePath}/Conserve/Pate cu ficat de curcan 180gr.jpg`,
    "pate de ficat": `${basePath}/Conserve/Pate de ficat 180gr.jpg`,
    "pate de praga": `${basePath}/Conserve/Pate de praga 180gr.jpg`,
    "pate deosebit cu ficat de curcan": `${basePath}/Conserve/Pate Ficat Curcan 200gr.jpg`,
    "pate deosebit de gaina": `${basePath}/Conserve/Pate Ficat Gaina 200gr.jpg`,
    "pate cu ficat de porc": `${basePath}/Conserve/Pate Ficat Porc 200gr.jpg`,

    // Vegetale products
    "pate vegetal cu ardei": `${basePath}/Vegetale/Pate vegetal ardei 200gr.jpg`,
    "pate vegetal original": `${basePath}/Vegetale/Pate vegetal original 200gr.jpg`,
    "pate vegetal cu ciuperci": `${basePath}/Vegetale/Pate vegetal ciuperci 200gr.jpg`,
  };

  // Handle special cases where same product name exists in different categories
  if (normalizedTitle === "servelat cu coniac") {
    if (category === "Semi-afumat" || category === "Полу-копчёная") {
      return `${basePath}/Semiafumat/Carmez Servelat cu coniac .jpg`;
    }
    if (category === "Crud-afumat" || category === "Сыро-копчёная") {
      return `${basePath}/Crud afumat/Carmez Servelat cu coniac ca.jpg`;
    }
  }

  if (normalizedTitle === "servelat taranesc") {
    return `${basePath}/Semiafumat/Servelat cu coniac jumatate up.jpg`;
  }

  // Try exact match first
  if (imageMap[normalizedTitle]) {
    return imageMap[normalizedTitle];
  }

  // Try partial matches for variations
  for (const [key, value] of Object.entries(imageMap)) {
    if (
      normalizedTitle.includes(key) ||
      key.includes(normalizedTitle) ||
      normalizedTitle.replace(/s/g, "ș").includes(key) ||
      normalizedTitle.replace(/ș/g, "s").includes(key)
    ) {
      return value;
    }
  }

  // Fallback to default image
  return `/images/products/carnat-1.png`;
};

export const products: Product[] = [
  {
    id: 1,
    image: getImagePath("Parizer Doktorskaia membrana naturala", "Fiert"),
    title: "Parizer Doktorskaia membrana naturala",
    titleRu: "Докторская натуральная оболочка",
    category: "Fiert",
    categoryRu: "Варёная",
    ingredients:
      "Carne de porc, carne de vită, lapte praf, praf de oua, sare, zahăr, nucșoară.",
    ingredientsRu:
      "Cвинина, говядина, сухое молоко, яичный порошок, соль, сахар, мускатный орех.",
    weight: "Mic - 0.25-0.35 kg , Mare - 2-2.5kg",
    expiration: "15 zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 2,
    image: getImagePath("Parizer Doktorskaia", "Fiert"),
    title: "Parizer Doktorskaia",
    titleRu: "Колбаса Докторская",
    category: "Fiert",
    categoryRu: "Варёная",
    ingredients:
      "Carne de porc, carne de vită, carne de pasăre, slănină, apă, lapte praf, sare, zahăr, coriandru, piper negru, piper roșu.",
    ingredientsRu:
      "Cвинина, говядина, курятина, шпик, вода, сухое молоко, соль, сахар, кориандр, черный перец, красный перец.",
    weight: "Mic - 0.5kg , Mare - 1kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 3,
    image: getImagePath("Parizer Lacta", "Fiert"),
    title: "Parizer Lacta",
    titleRu: "Колбаса Молочная",
    category: "Fiert",
    categoryRu: "Варёная",
    ingredients:
      "Carne de porc, carne de pasăre, carne de vită, slănină, apă, lapte praf, sare, zahăr, ghimbir, piper negru, chili.",
    ingredientsRu:
      "Cвинина, курятина, говядина, шпик, вода, сухое молоко, соль сахар, имбирь, черный перец, чили.",
    weight: "Mic - 0.5kg , Mare - 1kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 4,
    image: getImagePath("Rulada Lancimit", "Fiert"),
    title: "Rulada Lancimit",
    titleRu: "Рулет Ланчмит",
    category: "Fiert",
    categoryRu: "Варёная",
    ingredients:
      "Carne de porc, carne de pasăre, carne de vită, apă, amidon, sare, zahăr, usturoi.",
    ingredientsRu: "Cвинина, курятина, говядина, вода, соль, сахар, чеснок.",
    weight: "Mic - 0.5kg , Mare - 1kg",
    expiration: "30 zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 5,
    image: getImagePath("Parizer Preferat", "Fiert"),
    title: "Parizer Preferat",
    titleRu: "Колбаса Любительская",
    category: "Fiert",
    categoryRu: "Варёная",
    ingredients:
      "Carne de porc, carne de pasăre, slănină, apă, sare, zahăr, ghimbir, piper negru, usturoi.",
    ingredientsRu:
      "Свинина, говядина, курятина, сухое молоко, яйца куриные, соль, сахар, черный перец, душистый перец, мускатный орех.",
    weight: "Mare - 2 - 2.5 kg",
    expiration: "15 zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 6,
    image: getImagePath("Crenvurști Carmez", "Crenvurști/Safalade"),
    title: "Crenvurști Carmez",
    titleRu: "Сосиски Кармез",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de pasăre, carne de vită, slănină, apă, sare, zahăr, piper negru, nucșoară, coriandru, ghimbir.",
    ingredientsRu:
      "Курятина, говядина, шпик, вода, соль, сахар, черный перец, мускатный орех, кориандр, имбирь",
    weight: "0.6 - 0.8 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 7,
    image: getImagePath("Crenvurști cu cașcaval", "Crenvurști/Safalade"),
    title: "Crenvurști cu cașcaval",
    titleRu: "Сосиски с сыром",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de pasăre, carne de porc, carne de vită, slănină, cașcaval, apă, lapte praf, sare, zahăr, piper negru, nucșoară, coriandru, ghimbir, usturoi.",
    ingredientsRu:
      "Курятина, свинина, говядина, шпик, сыр, вода, соль, сухое молоко, сахар, перец черный, мускатный орех, кориандр, имбирь, чеснок.",
    weight: "0.6 - 0.8 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 8,
    image: getImagePath("Crenvurști de vită", "Crenvurști/Safalade"),
    title: "Crenvurști de vită",
    titleRu: "Сосиски говяжьи",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients: "Carne de vită, slănină, apă, sare, zahăr, piper negru.",
    ingredientsRu: "Говядина, курятина, шпик, вода, соль, сахар, черный перец.",
    weight: "Mic - 0.27 kg, Mare - 0.6 - 0.8 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 9,
    image: getImagePath("Crenvurști de pui", "Crenvurști/Safalade"),
    title: "Crenvurști de pui",
    titleRu: "Сосиски с курицей",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de pasăre, apă, sare, lapte praf, zahăr, piper negru, nucșoară, ghimbir, coriandru, paprică, usturoi.",
    ingredientsRu:
      "Курятина, вода, соль, сухое молоко,черный перец, мускатный орех,имбирь, красный перец сладкий, чеснок.",
    weight: "0.6 - 0.8 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 10,
    image: getImagePath("Crenvurști Lacta", "Crenvurști/Safalade"),
    title: "Crenvurști Lacta",
    titleRu: "Сосиски молочные",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de porc, carne de pasăre, carne de vită, apă, sare, zahăr, piper negru.",
    ingredientsRu:
      "Cвинина, курятина, говядина, вода, соль, сахар, черный перец.",
    weight: "Mic - 0.27 kg, Mare - 0.6 - 0.8 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 11,
    image: getImagePath("Crenvurști Carmezel", "Crenvurști/Safalade"),
    title: "Crenvurști Carmezel",
    titleRu: "Сосиски Carmezel",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de porc, carne de vită, carne de pasăre, apă, lapte praf, sare, zahăr, ghimbir, piper negru",
    ingredientsRu:
      "Cвинина, говядина, курятина, вода, сухое молоко, соль, сахар, имбирь, черный перец.",
    weight: "0.6 - 0.8 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 12,
    image: getImagePath("Safalade Clasice", "Crenvurști/Safalade"),
    title: "Safalade Clasice",
    titleRu: "Сардельки классические",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de porc, carne de pasăre, slănină, carne de vită, apă , lapte praf, sare, zahăr, usturoi, piper roșu.",
    ingredientsRu:
      "Cвинина, курятина, шпик, говядина, вода, сухое молоко, соль, сахар, чеснок, красный перец.",
    weight: "0.8 - 0.9 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 13,
    image: getImagePath("Safalade Carmezel", "Crenvurști/Safalade"),
    title: "Safalade Carmezel",
    titleRu: "Сардельки Carmezel",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de pasăre, slănină, ulei de floarea-soarelui, apă, lapte praf, sare, zahăr, piper negru, ghimbir, nucșoară, usturoi.",
    ingredientsRu:
      "Курятина, шпик, подсолнечное масло, вода, сухое молоко, соль, сахар, черный перец, имбирь, мускатный орех, чеснок.",
    weight: "0.8 - 0.9 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 14,
    image: getImagePath("Safalade porc-vită", "Crenvurști/Safalade"),
    title: "Safalade porc-vită",
    titleRu: "Сардельки свино-говяжьи",
    category: "Crenvurști/Safalade",
    categoryRu: "Сосиски/сардельки",
    ingredients:
      "Carne de porc , carne de vită, apă, sare, zahăr, piper negru, coriandru, usturoi, ghimbir.",
    ingredientsRu:
      "Свинина, говядина, вода, соль, сахар, черный перец, кориандр, чеснок, имбирь.",
    weight: "0.8 - 0.9 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 15,
    image: getImagePath("Șuncă Bavaria", "Semi-afumat"),
    title: "Șuncă Bavaria",
    titleRu: "Колбаса Bavaria",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients: "Carne de porc, carne de pasăre, apă, sare,  zahăr, usturoi.",
    ingredientsRu: "Cвинина, курятина, вода, соль, сахар, чеснок. ",
    weight: "Mic - 0.25-0.3 kg, Mare - 0.45 - 0.5 kg",
    expiration: "20 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 16,
    image: getImagePath("Cîrnăciori de pui", "Semi-afumat"),
    title: "Cîrnăciori de pui",
    titleRu: "Колбаски куриные",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Сarne de pasăre, slănină, apă, sare, zahăr, piper negru, nucșoară.",
    ingredientsRu:
      "Куриное мясо, говядина, шпик, вода, соль, сахар, черный перец, мускатный орех.",
    weight: "0.3 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 17,
    image: getImagePath("Salam Codru", "Semi-afumat"),
    title: "Salam Codru",
    titleRu: "Колбаса Кодру",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de vită, carne de porc, carne de pasăre, slănină, sare, zahăr, coriandru, cardamom, piper roșu,  nucșoară, ghimbir, usturoi.",
    ingredientsRu:
      "Говядина, свинина, курятина, шпик,соль, сахар, кориандр, кардамон, красный перец, мускатный орех, имбирь, чеснок.",
    weight: "Mic - 0.25-0.3 kg, Mare 0.5 - 0.6 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 18,
    image: getImagePath("Salam De Odesa", "Semi-afumat"),
    title: "Salam De Odesa",
    titleRu: "Колбаса Одесская",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de porc, carne de pasăre, carne de vită, slănină, apă, sare, zahăr, piper negru, cardamom, usturoi.",
    ingredientsRu:
      "Свинина, курятина, говядина, шпик, вода, крахмал,соль, сахар, черный перец, кардамон, чеснок.",
    weight: "0.3 - 0.4 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 19,
    image: getImagePath("Salam Cracovia", "Semi-afumat"),
    title: "Salam Cracovia",
    titleRu: "Колбаса Краковская",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de porc, carne de pasăre, carne de vită, apă, sare, zahăr, usturoi, piper negru, cardamom.",
    ingredientsRu:
      "Свинина, курятина, говядина, вода,соль, сахар, чеснок, черный перец, кардамон.",
    weight: "Mic - 0.25 - 0.35 kg, Mare - 0.5 - 0.6 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 20,
    image: getImagePath("Salam Sătesc", "Semi-afumat"),
    title: "Salam Sătesc",
    titleRu: "Колбаса Sătesc",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de porc, carne de pasăre, slănină, apă, sare, zahăr, usturoi, piper negru.",
    ingredientsRu:
      "Свинина, курятина, сало, вода, соль, сахар, чеснок, черный перец.",
    weight: "Mic - 0.23 - 0.25 kg, Mare - 0.45 - 0.5 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 21,
    image: getImagePath("Servelat cu coniac", "Semi-afumat"),
    title: "Servelat cu coniac",
    titleRu: "Сервелат коньячный",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de vită, carne de porc, carne de pasăre, slănină, sare, coniac , zahăr ,piper negru, nucșoară.",
    ingredientsRu:
      "Говядина, свинина, курятина, шпик,соль, коньяк, сахар, черный перец, мускатный орех.",
    weight: "Mic - 0.25 - 0.3 kg, Mare - 0.45 - 0.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 22,
    image: getImagePath("Servelat Țărănesc", "Semi-afumat"),
    title: "Servelat Țărănesc",
    titleRu: "Сервелат Țărănesc",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de vită, carne de pasăre, slănină, sare, zahăr, piper negru, nucșoară, usturoi.",
    ingredientsRu:
      "Говядина, курятина, шпик,соль, сахар, черный перец, мускатный орех, чеснок.",
    weight: "Mic - 0.25 - 0.3 kg, Mare - 0.45 - 0.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 23,
    image: getImagePath("Salam Vienez", "Semi-afumat"),
    title: "Salam Vienez",
    titleRu: "Колбаса Венская",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients:
      "Carne de porc, carne de pasăre, slănină, apă, sare, zahăr, usturoi, piper negru.",
    ingredientsRu:
      "Свинина, курятина, сало, вода, соль, сахар, чеснок, черный перец. ",
    weight: "Mic - 0.23 - 0.25 kg, Mare - 0.45 - 0.5 kg",
    expiration: "21 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 24,
    image: getImagePath("Șuncă Lancimit", "Semi-afumat"),
    title: "Șuncă Lancimit",
    titleRu: "Колбаса Lancimit",
    category: "Semi-afumat",
    categoryRu: "Полу-копчёная",
    ingredients: "Carne de porc, slănină, apă, sare, zahăr, usturoi.",
    ingredientsRu: " Свинина, шпик, вода,соль, сахар, чеснок.",
    weight: "Mic - 0.23 - 0.25 kg, Mare - 0.45 - 0.5 kg",
    expiration: "20 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 25,
    image: getImagePath("Salam De Moscova", "Fiert-afumat"),
    title: "Salam De Moscova",
    titleRu: "Колбаса Московская",
    category: "Fiert-afumat",
    categoryRu: "Варёно-копчёная",
    ingredients:
      "Carne de vită, carne de porc, carne de pasăre, slănină, sare, zahăr, piper negru, nucșoară , usturoi, chimen.",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, сахар, черный перец, мускатный орех.",
    weight: "0.45 - 0.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 26,
    image: getImagePath("Salam Moldovenesc", "Fiert-afumat"),
    title: "Salam Moldovenesc",
    titleRu: "Колбаса Молдавская",
    category: "Fiert-afumat",
    categoryRu: "Варёно-копчёная",
    ingredients:
      "Carne de vită, carne de porc, slănină, sare, zahăr, piper negru, nucșoară.",
    ingredientsRu:
      "Говядина, свинина, шпик,соль, сахар, черный перец, мускатный орех.",
    weight: "Mic 0.25 - 0.3 kg, Mare - 0.5 - 0.6kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 27,
    image: getImagePath("Saliami Premium", "Fiert-afumat"),
    title: "Saliami Premium",
    titleRu: "Колбаса Premium",
    category: "Fiert-afumat",
    categoryRu: "Варёно-копчёная",
    ingredients:
      "Carne de vită, carne de porc, slănină, sare, zahăr,coriandru, piper roșu , nucșoară, ghimbir, usturoi.",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, сахар, кориандр, красный перец, мускатный орех, имбирь, чеснок.",
    weight: "0.5 - 0.6 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 28,
    image: getImagePath("Saliami Italian", "Fiert-afumat"),
    title: "Saliami Italian",
    titleRu: "Колбаса Итальянская",
    category: "Fiert-afumat",
    categoryRu: "Варёно-копчёная",
    ingredients:
      "Carne de porc, slănină, sare, zahăr, piper negru, coriandru, piper alb, chili, ghimbir.",
    ingredientsRu:
      "Свинина, шпик, соль, сахар, черный перец, кориандр, белый перец, чили, имбирь.",
    weight: "0.45 - 0.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 29,
    image: getImagePath("Saliami Clasic", "Fiert-afumat"),
    title: "Saliami Clasic",
    titleRu: "Салями классическая",
    category: "Fiert-afumat",
    categoryRu: "Варёно-копчёная",
    ingredients:
      "Carne de porc, carne de pasăre, slănină, sare, zahăr, piper negru,  nucșoară.",
    ingredientsRu:
      "Свинина, курятина, сало, соль, сахар, черный перец, мускатный орех.",
    weight: "1.3 - 1.4 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 30,
    image: getImagePath("Servelat Boieresc", "Fiert-afumat"),
    title: "Servelat Boieresc",
    titleRu: "Колбаса Boieresc",
    category: "Fiert-afumat",
    categoryRu: "Варёно-копчёная",
    ingredients:
      "Carne de vită, carne de porc, carne de pasăre, slănină, sare, zahăr, piper negru, nucșoară , usturoi, chimen.",
    ingredientsRu:
      "Говядина, свинина, курятина, шпик,соль, сахар, черный перец, мускатный орех, чеснок, тмин.",
    weight: "0.8 - 0.9 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Atmosfera protectoare",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 31,
    image: getImagePath("Salam De Moscova", "Crud-afumat"),
    title: "Salam De Moscova",
    titleRu: "Колбаса Московская",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Carne de vită, carne de porc, slănină, sare, zahăr, piper negru, nucșoară.",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, сахар, черный перец, мускатный орех.",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 32,
    image: getImagePath("Salam Braunșveigscaia", "Crud-afumat"),
    title: "Salam Braunșveigscaia",
    titleRu: "Колбаса Брауншвейгская",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Carne de porc, carne de vită, slănină, sare, zahăr, piper negru.",
    ingredientsRu: "Свинина, говядина, шпик, соль, сахар, черный перец.",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 33,
    image: getImagePath("Salam Moldovenesc", "Crud-afumat"),
    title: "Salam Moldovenesc",
    titleRu: "Колбаса Молдавская",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Сarne de porc, slănină, sare, zahăr, piper negru, cardamon, muștar, nucșoară.",
    ingredientsRu:
      "Свинина, сало, соль, сахар, черный перец, кардамон, горчица, мускатный орех. ",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 34,
    image: getImagePath("Salam Mozaic", "Crud-afumat"),
    title: "Salam Mozaic",
    titleRu: "Колбаса Зернистая",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients: "Carne de porc, sare, zahăr, piper negru, piper alb.",
    ingredientsRu: "Cвинина, соль, сахар, черный перец, белый перец. ",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 35,
    image: getImagePath("Salan Napoli", "Fiert-afumat"),
    title: "Salan Napoli",
    titleRu: "Колбаса Napoli",
    category: "Fiert-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients: "Carne de porc, sare, zahăr, piper negru, usturoi.",
    ingredientsRu: "Cвинина, шпик, соль, сахар, черный перец.",
    weight: "0.35 - 0.4 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 36,
    image: getImagePath("Servelat cu coniac", "Crud-afumat"),
    title: "Servelat cu coniac",
    titleRu: "Сервелат коньячный",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Carne de vită, carne de porc, slănină, sare, coniac , zahăr, piper negru .",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, коньяк, сахар, черный перец.",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 37,
    image: getImagePath("Saleami Studențesc", "Crud-afumat"),
    title: "Saleami Studențesc",
    titleRu: "Колбаса Studențesc",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Carne de vită, carne de porc, slănină, sare, zahăr, piper negru, piper roşu, ienibahar.",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, сахар, черный перец, красный перец, мускатный орех.",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 38,
    image: getImagePath("Servelat", "Crud-afumat"),
    title: "Servelat",
    titleRu: "Сервелат",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Сarne de vită, carne de porc, slănină, sare, zahăr, piper negru, nucşoară.",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, сахар, черный перец, мускатный орех.",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 39,
    image: getImagePath("Salam Capitala", "Crud-afumat"),
    title: "Salam Capitala",
    titleRu: "Колбаса столичная",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Сarne de vită, carne de porc, slănină, sare, zahăr, coniac, piper negru, nucşoară, ienibahar.",
    ingredientsRu:
      "Говядина, свинина, шпик, соль, сахар, коньяк, черный перец, мускатный орех, душистый перец.",
    weight: "0.32 - 0.35 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 40,
    image: getImagePath("Sudjuc", "Crud-afumat"),
    title: "Sudjuc",
    titleRu: "Суджук",
    category: "Crud-afumat",
    categoryRu: "Сыро-копчёная",
    ingredients:
      "Сarne de vită, sare, zahăr, piper negru, chimen, piper roşu iute, coriandru .",
    ingredientsRu:
      "Говядина, соль, сахар, черный перец, тмин, красный перец чили, кориандр.",
    weight: "0.15 - 0.18 kg",
    expiration: "120 de zile         60 de zile",
    storageTemp: "0°...+6°C            12°...+15°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Защитная газосфера",
  },
  {
    id: 41,
    image: getImagePath("Aripi de pui", "Delicatese"),
    title: "Aripi de pui",
    titleRu: "Крылья куриные копчёные",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients:
      "Aripi de pui, apă, lapte praf, sare, zahăr, piper rosu dulce, usturoi .",
    ingredientsRu:
      "Куриное крыло, вода, сухое молоко, соль, сахар, красный сладкий перец, чеснок.",
    weight: "0.3 - 0.45 kg",
    expiration: "15 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 42,
    image: getImagePath("Batog din carne de porc", "Delicatese"),
    title: "Batog din carne de porc",
    titleRu: "Балык свиной",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Antricot de porc, sare, zahăr, piper negru, usturoi.",
    ingredientsRu: " Свиная вырезка, соль, сахар, черный перец, чеснок.",
    weight: "Mic 0.25 - 0.3 kg, Mare - 0.6 - 0.8kg",
    expiration: "90 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 43,
    image: getImagePath("Ceafa Boiereasca", "Delicatese"),
    title: "Ceafa Boiereasca",
    titleRu: "Шея Boiereasca",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Ceafă de porc, apă, zahăr, piper negru, usturoi.",
    ingredientsRu: "Свиная шея, вода,  сахар, черный перец, чеснок.",
    weight: "Mic 0.25 - 0.4 kg, Mare - 0.8 - 1.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 44,
    image: getImagePath("File de porc", "Delicatese"),
    title: "File de porc",
    titleRu: "Филе свиное",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Antricot de porc, apă, zahăr, piper negru, usturoi.",
    ingredientsRu: "Свиной антрикот, вода,  сахар, черный перец, чеснок.",
    weight: "Mic 0.25 - 0.4 kg, Mare - 1.2 - 1.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 45,
    image: getImagePath("File de pui", "Delicatese"),
    title: "File de pui",
    titleRu: "Филе куриное",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients:
      "Fileu de pui, apă, sare, zahăr, piper rosu dulce, piper negru",
    ingredientsRu:
      "Куриное филе,вода, соль,сахар, красный сладкий перец, черный перец.",
    weight: "0.3-0.4 kg",
    expiration: "15  de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 46,
    image: getImagePath("Piept de porc Kaizer", "Delicatese"),
    title: "Piept de porc Kaizer",
    titleRu: "Грудинка свиная Kaizer",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Piept de porc, sare, zahăr, usturoi, chimen , muștar.",
    ingredientsRu: "Грудинка свиная, вода, соль, сахар, черный перец, чеснок.",
    weight: "Mic - 0.25 - 0.35 kg, Mare - 0.7 - 1.2 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 47,
    image: getImagePath("Mușchi de porc", "Delicatese"),
    title: "Mușchi de porc",
    titleRu: "Мушка свиная",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Muschi de porc, sare, zahăr, piper roşu.",
    ingredientsRu: "Свиная вырезка, соль, сахар, красный перец.",
    weight: "Mic - 0.25 - 0.4 kg, Mare - 0.6 - 1.0 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 48,
    image: getImagePath("Pastramă De Capitală", "Delicatese"),
    title: "Pastramă De Capitală",
    titleRu: "Пастрама Столичная",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Antricot de porc , apă, sare, usturoi, piper negru, zahăr.",
    ingredientsRu: "Свиная вырезска, вола, соль, чеснок, черный перец, сахар.",
    weight: "0.7 - 1.0 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 49,
    image: getImagePath('Piept de porc "De Casă"', "Delicatese"),
    title: 'Piept de porc "De Casă"',
    titleRu: "Грудинка свиная домашняя",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Piept de porc , sare, zahăr, usturoi, chimen, muștar.",
    ingredientsRu: "Грудинка свиная, соль, сахар, чеснок, тмин, горчица.",
    weight: "Mic 0.25 - 0.35 kg, Mare 0.8 - 1.0 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 50,
    image: getImagePath("Ruladă de pasăre", "Delicatese"),
    title: "Ruladă de pasăre",
    titleRu: "Рулет куриный",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients: "Piept de pasăre ,  apă,  sare, zahăr, muștar, usturoi ",
    ingredientsRu:
      "Куриная грудинка, вода, крахмал, соль, сахар, горчица, чеснок.",
    weight: "0.6 - 0.8 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 51,
    image: getImagePath("Pulpe de pui", "Delicatese"),
    title: "Pulpe de pui",
    titleRu: "Окорочка куриные копчёные",
    category: "Delicatese",
    categoryRu: "Деликатесы",
    ingredients:
      "Pulpe de pui, apa, lapte praf, sare, zahăr, piper rosu dulce, usturoi.",
    ingredientsRu:
      "Куриный окорок, вода, сухое молоко, соль, сахар, красный сладкий перец, чеснок.",
    weight: "0.3-0.4 kg",
    expiration: "15 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 52,
    image: getImagePath("Urechi de porc", "Alte produse"),
    title: "Urechi de porc",
    titleRu: "Уши свиные",
    category: "Alte produse",
    categoryRu: "Другие продукты",
    ingredients: "Urechi de porc, sare, zahăr, usturoi.",
    ingredientsRu: "Свиные уши, соль, сахар, чеснок.",
    weight: "0.15 - 0.2 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 53,
    image: getImagePath("Sîngerete Țărănesc", "Alte produse"),
    title: "Sîngerete Țărănesc",
    titleRu: "Кровянка Țărănesc",
    category: "Alte produse",
    categoryRu: "Другие продукты",
    ingredients:
      "Şorici de porc, slănină, ficat de pasăre, apă, produs din sânge alimentar, sare, lapte praf, usturoi, piper negru, coriandru, ienibahar, ceapă, chili, zahăr.",
    ingredientsRu:
      "Свиная шкура, сало, куриная печень, вода, кровь пищевая, соль, сухое молоко, чеснок, черный перец, кориандр, душистый перец, лук, чили, сахар.",
    weight: "0.3 - 0.4 kg",
    expiration: "10 zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 54,
    image: getImagePath("Tobă De Casă", "Alte produse"),
    title: "Tobă De Casă",
    titleRu: "Зельц домашний",
    category: "Alte produse",
    categoryRu: "Другие продукты",
    ingredients:
      "Carne de porc, limbă de porc, șorici de porc, apă, sare, zahăr, gelatină de porc, usturoi, piper negru, ienibahar.",
    ingredientsRu:
      "Мясо свиное, язык свиной, шкура свиная, вода, соль, сахар, желатин свиной, чеснок, черный перец, душистый перец.",
    weight: "1 - 1.25 kg",
    expiration: "15 zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 55,
    image: getImagePath("Tobă Moldovenească", "Alte produse"),
    title: "Tobă Moldovenească",
    titleRu: "Зельц Молдавский",
    category: "Alte produse",
    categoryRu: "Другие продукты",
    ingredients:
      "Carne de porc, şorici de porc, limbă de porc, inimă de porc, apă, sare, gelatină , zahăr, ienibahar, piper negru, usturoi .",
    ingredientsRu:
      "Свинина, свиная шкура, язык свиной, сердце свиное, вода, соль, пищевой желатин, сахар, душистый перец, черный перец, чеснок.",
    weight: "Mic 0.4 - 0.5 kg, Mare 0.8 - 1.0 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 56,
    image: getImagePath("Tobă de pui", "Alte produse"),
    title: "Tobă de pui",
    titleRu: "Зельц куриный",
    category: "Alte produse",
    categoryRu: "Другие продукты",
    ingredients:
      "Carne de găină, apă, sare, zahăr,gelatină, ienibahar, piper negru, usturoi.",
    ingredientsRu:
      "Мясо куриное, вода, соль, пищевой желатин, сахар, душистый перец, черный перец, чеснок.",
    weight: "0.45 - 0.5 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 57,
    image: getImagePath("Șuncă din piept de găină", "Șunci"),
    title: "Șuncă din piept de găină",
    titleRu: "Ветчина куриная",
    category: "Șunci",
    categoryRu: "Ветчины",
    ingredients: "Piept de găină, carne de găină, apă,  sare, zahăr, usturoi.",
    ingredientsRu: "Куриная грудка, курятина, вода, соль, сахар, чеснок.",
    weight: "0.8 - 1.0 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 58,
    image: getImagePath("Șuncă Familia Mea", "Șunci"),
    title: "Șuncă Familia Mea",
    titleRu: "Ветчина Familia Mea",
    category: "Șunci",
    categoryRu: "Ветчины",
    ingredients:
      "Carne de porc, carne de pasăre, carne de vită, apă, sare, zahăr, usturoi.",
    ingredientsRu: " Свинина, курятина, говядина, вода, соль, сахар, чеснок.",
    weight: "Mic 0.45 - 0.5 kg, Mare 0.8 - 1.0 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 59,
    image: getImagePath("Șuncă Pizza", "Șunci"),
    title: "Șuncă Pizza",
    titleRu: "Ветчина Pizza",
    category: "Șunci",
    categoryRu: "Ветчины",
    ingredients: "Carne de porc, apă,  sare, zahăr, piper negru, cardamom.",
    ingredientsRu: "Свинина, вода, соль, сахар, черный перец, кардамон",
    weight: "Mic 0.75 - 0.85, Mare 1.3 - 1.4 kg",
    expiration: "30 de zile",
    storageTemp: "0°...+6°C",
    packaging: "Fără ambalaj secundar",
    packagingRu: "Без вторичной упаковки",
  },
  {
    id: 60,
    image: getImagePath("Șuncă Împărătească", "Șunci"),
    title: "Șuncă Împărătească",
    titleRu: "Ветчина Împărătească",
    category: "Șunci",
    categoryRu: "Ветчины",
    ingredients:
      "Carne de porc, apă,  sare, zahar, piper negru, ghimbir, nucşoară .",
    ingredientsRu:
      "Свинина, вода, соль, сахар, черный перец, имбирь, мускатный орех.",
    weight: "1.8- 2 kg",
    expiration: "15 zile",
    storageTemp: "0°...+6°C",
    packaging: "VID",
    packagingRu: "Вакуум",
  },
  {
    id: 61,
    image: getImagePath("Carne de porc înăbușită", "Conserve"),
    title: "Carne de porc înăbușită",
    titleRu: "Свинина тушёная",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de porc , apă, sare, zahăr, ceapă, piper negru, frunze de dafin.",
    ingredientsRu:
      "Мясо свиное, вода, соль, сахар, лук, черный перец, лавровый лист .",
    weight: "0.28 kg/0.3kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "sticla/metal",
    packagingRu: "Стеклянная банка / Металлическая банка",
  },
  {
    id: 62,
    image: getImagePath("Carne de vită înăbușită", "Conserve"),
    title: "Carne de vită înăbușită",
    titleRu: "Говядина тушеная",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients: "Carne de vită, apă, sare, zahăr, piper negru.",
    ingredientsRu: "Говяжье мясо, вода, соль, сахар, черный перец.",
    weight: "0.28 kg/0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "sticla/metal",
    packagingRu: "Стеклянная банка / Металлическая банка",
  },
  {
    id: 63,
    image: getImagePath("Carne de găină în suc propriu", "Conserve"),
    title: "Carne de găină în suc propriu",
    titleRu: "Курица в собственном соку",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de găină , apă, sare, zahăr, ceapă, piper negru, frunze de dafin.",
    ingredientsRu:
      "Мясо куриное, вода, соль, сахар, лук, черный перец, лавровый лист .",
    weight: "0.28 kg /0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "sticla/metal",
    packagingRu: "Стеклянная банка / Металлическая банка",
  },
  {
    id: 64,
    image: getImagePath("Carne de găină deosebită", "Conserve"),
    title: "Carne de găină deosebită",
    titleRu: 'Мясо куриное "Особенное"',
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de găină , apă, făină de grâu,sare, zahăr, usturoi, piper negru, coriandru.",
    ingredientsRu:
      "Мясо куриное, вода, пшеничная мука, соль, сахар, чеснок, черный перец, кориандр.",
    weight: "0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 65,
    image: getImagePath("Carne de porc deosebită", "Conserve"),
    title: "Carne de porc deosebită",
    titleRu: 'Мясо свиное "Особенное"',
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de porc, carne de pasăre, apă, făină de grâu, sare, zahăr, usturoi, coriandru, piper negru.",
    ingredientsRu:
      "Мясо свиное, вода, пшеничная мука,соль, сахар, чеснок, кориандр, черный перец.",
    weight: "0.2 kg/0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 66,
    image: getImagePath("Carne de vita deosebită", "Conserve"),
    title: "Carne de vita deosebită",
    titleRu: 'Мясо говяжье "Особенное"',
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de vita, carne de pasăre, apă, sare, zahăr, piper negru, usturoi.",
    ingredientsRu:
      "Мясо говяжье,мясо птицы, вода, соль, сахар,черный перец,чеснок.",
    weight: " 0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 67,
    image: getImagePath("Pate Cu Ficat De Curcan", "Conserve"),
    title: "Pate Cu Ficat De Curcan",
    titleRu: "Паштет с индюшиной печенью",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de porc, ficat de curcan , grăsime de porc, slănină, şorici de porc, apă, lapte praf, făină de grâu , crupe de griş, sare, ceapă,zahăr, usturoi, piper negru, paprică.",
    ingredientsRu:
      "Мясо свиное, индюшиная печень, жир свиной, сало, шкура свиная, вода, сухое молоко, пшеничная мука, манная крупа, соль, лук,сахар, чеснок, черный перец, паприка.",
    weight: "0.18 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "sticla",
    packagingRu: "Стеклянная банка",
  },
  {
    id: 68,
    image: getImagePath("Pate De Ficat", "Conserve"),
    title: "Pate De Ficat",
    titleRu: "Паштет Печёночный",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Ficat de porc , grăsime de porc, carne de porc, şorici de porc, apă, făină de grâu , crupe de griş, sare,lapte praf, zahăr, ceapă, usturoi, piper negru, paprică.",
    ingredientsRu:
      "Печень свиная, жир свиной, мясо свиное, шкура свиная, вода, пшеничная мука, манная крупа, соль, сухое молоко,сахар, лук, чеснок, черный перец, паприка.",
    weight: "0.18 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "sticla",
    packagingRu: "Стеклянная банка",
  },
  {
    id: 69,
    image: getImagePath("Pate De Praga", "Conserve"),
    title: "Pate De Praga",
    titleRu: "Паштет Пражский",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de porc, ficat de porc, grăsime de porc, şorici de porc, apă,lapte praf , făină de grâu ,sare, zahăr,ceapă, piper negru, ghimbir, scorţişoară .",
    ingredientsRu:
      "Мясо свиное, печень свиная, жир свиной, шкура свиная, вода, сухое молоко, пшеничная мука, соль, сахар, лук, черный перец, имбирь, корица.",
    weight: "0.18 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "sticla",
    packagingRu: "Стеклянная банка",
  },
  {
    id: 70,
    image: getImagePath("Pate Deosebit cu ficat de curcan", "Conserve"),
    title: "Pate Deosebit cu ficat de curcan",
    titleRu: "Паштет особенный с индюшиной печенью",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de curcan, ficat de curcan , apă, făină de grâu , sare, zahăr.",
    ingredientsRu:
      "Мясо индюшиное, печень индюшиная, вода, пшеничная мука, соль, сахар.",
    weight: "0.2 kg/0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 71,
    image: getImagePath("Pate Deosebit de găină", "Conserve"),
    title: "Pate Deosebit de găină",
    titleRu: "Паштет особенный куриный ",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de găină, ficat de găină, apă, făină de grâu, sare, zahăr, ceapă.",
    ingredientsRu:
      "Мясо куриное, печень куриная, вода, пшеничная мука,соль, сахар, лук.",
    weight: "0.2 kg/0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 72,
    image: getImagePath("Pate cu ficat de porc", "Conserve"),
    title: "Pate cu ficat de porc",
    titleRu: "Паштет со свиной печенью",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Carne de porc, ficat de porc, apă, făină de grâu, sare, zahăr, ceapă,usturoi, piper negru, paprică.",
    ingredientsRu:
      "Мясо свиное, печень свиная, вода, пшеничная мука, соль, сахар, лук, чеснок, черный перец, паприка.",
    weight: "0.2 kg/0.3 kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 73,
    image: getImagePath("Pate vegetal cu ardei", "Conserve"),
    title: "Pate vegetal cu ardei",
    titleRu: "Паштет постный со сладким перцем",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Ulei de floarea-soarelui, apă, sare, ardei dulce, ceapă, zahăr, piper negru, maioran.",
    ingredientsRu:
      "Масло подсолнечное,вода,соль,сладкий перец,лук,сахар,черный перец,майоран.",
    weight: "0.2kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 74,
    image: getImagePath("Pate vegetal original ", "Conserve"),
    title: "Pate vegetal original ",
    titleRu: "Паштет постный оригинальный",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Ulei de floarea-soarelui, apă, sare, ceapă, zahăr, paprică, ghimbir, muştar, piper negru, chili.",
    ingredientsRu:
      "Масло подсолнечное, вода, соль, лук, сахар, паприка, имбирь, горцица, черный перец, чили.",
    weight: "0.2kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
  {
    id: 75,
    image: getImagePath("Pate vegetal cu ciuperci", "Conserve"),
    title: "Pate vegetal cu ciuperci",
    titleRu: "Паштет постный с грибами",
    category: "Conserve",
    categoryRu: "Консервы",
    ingredients:
      "Ulei de floarea-soarelui, apă, sare, ciuperci, ceapă, zahăr, piper negru, maioran.",
    ingredientsRu:
      "Масло подсолнечное,вода,соль,грибы,лук,сахар,черный перец,майоран.",
    weight: "0.2kg",
    expiration: "2 ani",
    storageTemp: "0°...+25°C",
    packaging: "metal",
    packagingRu: "Металлическая банка",
  },
];
