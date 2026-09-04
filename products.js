/* Products Catalog Data - Base Price strictly per 1 KG */
export const products = [
  // --- 1. LAMB MEAT (اللحوم الضاني) ---
  {
    id: "lamb-1",
    categoryId: "lamb",
    name: { ar: "فخذ ضاني طازج", en: "Fresh Lamb Leg" },
    desc: { ar: "فخذ ضاني بلدي طازج ممتاز للولائم والفرن", en: "Fresh prime lamb leg, perfect for roasting and banquets" },
    price: 65,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png",
    badge: { ar: "الأكثر طلباً", en: "Bestseller" }
  },
  {
    id: "lamb-2",
    categoryId: "lamb",
    name: { ar: "كتف ضاني", en: "Lamb Shoulder" },
    desc: { ar: "كتف ضاني بلدي طازج ذو طعم غني ومثالي للشوي", en: "Tender lamb shoulder with rich flavor, ideal for roasting" },
    price: 60,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png",
    badge: { ar: "طازج يومياً", en: "Fresh Daily" }
  },
  {
    id: "lamb-3",
    categoryId: "lamb",
    name: { ar: "ريش ضاني فاخرة", en: "Prime Lamb Chops" },
    desc: { ar: "ريش ضاني مجهزة ومقصوصة للشوي المباشر", en: "Prepped fresh lamb chops ready for perfect grilling" },
    price: 70,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png",
    badge: { ar: "قطعية خاصة", en: "Prime Cut" }
  },
  {
    id: "lamb-4",
    categoryId: "lamb",
    name: { ar: "ضلوع ضاني", en: "Lamb Ribs" },
    desc: { ar: "ضلوع ضاني طازجة مثالية للمندي والطواجن", en: "Fresh lamb ribs ideal for traditional mandi & stews" },
    price: 58,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png"
  },
  {
    id: "lamb-5",
    categoryId: "lamb",
    name: { ar: "رقبة ضاني", en: "Lamb Neck" },
    desc: { ar: "رقبة ضاني غنية بالجيلاتين وممتازة للشوربة", en: "Gelatinous lamb neck cut perfect for rich broths" },
    price: 55,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png"
  },
  {
    id: "lamb-6",
    categoryId: "lamb",
    name: { ar: "موزة ضاني", en: "Lamb Shank" },
    desc: { ar: "موزة ضاني طرية جداً تذوب في الفم", en: "Ultra-tender lamb shank that melts in your mouth" },
    price: 68,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png"
  },
  {
    id: "lamb-7",
    categoryId: "lamb",
    name: { ar: "لحم ضاني مفروم", en: "Minced Lamb" },
    desc: { ar: "لحم ضاني مفروم طازج بدون دهن زائد", en: "Freshly ground lamb mince with low fat ratio" },
    price: 60,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png"
  },
  {
    id: "lamb-8",
    categoryId: "lamb",
    name: { ar: "مكعبات ضاني صافي", en: "Boneless Lamb Cubes" },
    desc: { ar: "مكعبات لحم ضاني خالية من العظم للخضار والشيش", en: "Boneless lean lamb cubes for stews and skewers" },
    price: 65,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/lamb_cuts.png"
  },

  // --- 2. VEAL MEAT (اللحوم البتلو) ---
  {
    id: "veal-1",
    categoryId: "veal",
    name: { ar: "فيليه بتلو ناعم", en: "Veal Fillet" },
    desc: { ar: "فيليه بتلو ناعم وطري جداً أسرع في الطهي", en: "Super tender veal tenderloin fillet cut" },
    price: 60,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/beef_ribeye.png",
    badge: { ar: "فاخر", en: "Gourmet" }
  },
  {
    id: "veal-2",
    categoryId: "veal",
    name: { ar: "ستيك بتلو", en: "Veal Steak" },
    desc: { ar: "شرائح ستيك بتلو صافي طازجة للطهي السريع", en: "Fresh lean veal steak slices for quick grilling" },
    price: 55,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/beef_ribeye.png"
  },
  {
    id: "veal-3",
    categoryId: "veal",
    name: { ar: "مكعبات بتلو للطاجن", en: "Veal Cubes for Stew" },
    desc: { ar: "مكعبات بتلو حمراء بدون دهن ممتازة للطواجن", en: "Lean veal cubes ideal for rich casseroles" },
    price: 50,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/hero_banner.png"
  },

  // --- 3. BEEF MEAT (اللحوم البقري) ---
  {
    id: "beef-1",
    categoryId: "beef",
    name: { ar: "ستيك ريب آي بقري", en: "Prime Ribeye Steak" },
    desc: { ar: "قطعة ريب آي غنية بالترخيم والدهن الطيب", en: "Highly marbled ribeye steak for supreme juiciness" },
    price: 60,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/beef_ribeye.png",
    badge: { ar: "توصية الجزار", en: "Butcher's Choice" }
  },
  {
    id: "beef-2",
    categoryId: "beef",
    name: { ar: "ستيك تي بون", en: "T-Bone Steak" },
    desc: { ar: "قطعة تي بون تدمج الفيليه والسيرلوين", en: "Classic T-Bone steak combining tenderloin and sirloin" },
    price: 58,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/beef_ribeye.png"
  },
  {
    id: "beef-3",
    categoryId: "beef",
    name: { ar: "فيليه بقري ناعم", en: "Beef Fillet Tenderloin" },
    desc: { ar: "أنعم قطعة لحم بقري خالية تماماً من الدهن والعظم", en: "The softest lean tenderloin beef fillet cut" },
    price: 60,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/hero_banner.png",
    badge: { ar: "عالي الجودة", en: "Top Grade" }
  },
  {
    id: "beef-4",
    categoryId: "beef",
    name: { ar: "ستيك سيرلوين", en: "Sirloin Steak" },
    desc: { ar: "شرائح ستيك سيرلوين بقري بنكهة قوية للشوي", en: "Flavorful sirloin steak for pan-searing or grilling" },
    price: 52,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/beef_ribeye.png"
  },

  // --- 4. FRESH CHICKEN (الدجاج الطازج) ---
  {
    id: "chicken-1",
    categoryId: "chicken",
    name: { ar: "دجاج كامل طازج", en: "Fresh Whole Chicken" },
    desc: { ar: "دجاج بلدي منظف ومجهز يومياً (1100-1200g)", en: "Fresh whole cleaned chicken delivered daily" },
    price: 24,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/hero_banner.png",
    badge: { ar: "طازج يومياً", en: "Fresh Daily" }
  },
  {
    id: "chicken-2",
    categoryId: "chicken",
    name: { ar: "صدور دجاج طازجة", en: "Fresh Chicken Breast" },
    desc: { ar: "صدور دجاج بدون عظم أو جلد نظيفة تماماً", en: "Skinless boneless fresh chicken breasts" },
    price: 30,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/hero_banner.png"
  },
  {
    id: "chicken-3",
    categoryId: "chicken",
    name: { ar: "أوراك دجاج طازجة", en: "Chicken Thighs" },
    desc: { ar: "أوراك دجاج طازجة ومثالية للشوي والفرن", en: "Juicy chicken thighs ideal for oven baking & grill" },
    price: 26,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/hero_banner.png"
  },

  // --- 5. PANE & CHICKEN PRODUCTS (البانيه) ---
  {
    id: "pane-1",
    categoryId: "pane",
    name: { ar: "بانيه دجاج متبل", en: "Marinated Chicken Pane" },
    desc: { ar: "شرائح بانيه متبلة بخلطة ميت هاوس المقرمشة", en: "Marinated crisp chicken pane slices" },
    price: 34,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/burgers.png",
    badge: { ar: "جاهز للطهي", en: "Ready to Cook" }
  },
  {
    id: "pane-2",
    categoryId: "pane",
    name: { ar: "ستريبس دجاج مقرمش", en: "Crispy Chicken Strips" },
    desc: { ar: "أصابع دجاج كرسبي جاهزة للقلي السريع", en: "Crispy chicken tender strips ready for air-fryer or oil" },
    price: 36,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/burgers.png"
  },

  // --- 6. BURGERS (البرجر) ---
  {
    id: "burger-1",
    categoryId: "burgers",
    name: { ar: "برجر لحم فاخر (100% بلدي)", en: "Gourmet Beef Burger" },
    desc: { ar: "أقراص برجر لحم سميكة بنكهة الفحم 100% لحم صافي", en: "Thick 100% pure beef burger patties for juicy grilling" },
    price: 40,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/burgers.png",
    badge: { ar: "الأعلى مبيعاً", en: "Top Rated" }
  },

  // --- 7. KEBAB & KOFTA (الكباب والكفتة) ---
  {
    id: "kebab-1",
    categoryId: "kebab",
    name: { ar: "كفتة لحم بلدي للشوي", en: "Fresh Beef Kofta" },
    desc: { ar: "كفتة لحم متبلة ومشكّلة على أسياخ للشوي", en: "Authentic spiced beef kofta skewers ready for grilling" },
    price: 40,
    unit: "/ KG",
    weights: ["500g", "1 KG", "2 KG"],
    image: "assets/images/kebab_kofta.png",
    badge: { ar: "طازج يومياً", en: "Fresh Daily" }
  }
];
