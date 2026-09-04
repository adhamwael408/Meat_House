/* Standalone Browser Bundle for Meat House - Dynamic Weight Pricing & 5 SAR Safwa Delivery */
(function() {
  // --- 1. DATA: CATEGORIES ---
  const categories = [
    {
      id: "lamb",
      name: { ar: "اللحوم الضاني", en: "Lamb Meat" },
      icon: "🥩",
      count: 8,
      description: { ar: "لحوم ضاني طازجة وبلدية مختارة من أجود السلالات", en: "Fresh premium lamb cuts sourced from finest farms" }
    },
    {
      id: "veal",
      name: { ar: "اللحوم البتلو", en: "Veal Meat" },
      icon: "🍖",
      count: 6,
      description: { ar: "لحم بتلو طري وسريع الطهي وعالي الجودة", en: "Tender, high-quality premium veal meat cuts" }
    },
    {
      id: "beef",
      name: { ar: "اللحوم البقري / الكندوز", en: "Beef Meat" },
      icon: "🥩",
      count: 8,
      description: { ar: "قطعيات بقري فاخرة وستيك عالي الترخيم", en: "Prime beef cuts and heavily marbled steaks" }
    },
    {
      id: "small-cuts",
      name: { ar: "اللحوم الصغيرة والقطع الخاصة", en: "Small Cuts & Specialties" },
      icon: "🔪",
      count: 5,
      description: { ar: "قطعيات خاصة وعكاري وموزات وشرائح رفيعة", en: "Specialty cuts, ox tail, tender medallions & bone marrow" }
    },
    {
      id: "chicken",
      name: { ar: "الدجاج الطازج", en: "Fresh Chicken" },
      icon: "🍗",
      count: 6,
      description: { ar: "دجاج بلدي ومزارع طازج يومياً ونظيف تماماً", en: "Freshly prepared daily poultry and whole chicken" }
    },
    {
      id: "pane",
      name: { ar: "البانيه وصدور الدجاج", en: "Chicken Breast & Pane" },
      icon: "🥖",
      count: 5,
      description: { ar: "صدور دجاج متبلة ومقرمشة جاهزة للطهي السريع", en: "Crispy pane fillet and marinated chicken breasts" }
    },
    {
      id: "prepared",
      name: { ar: "المصنعات والمنتجات الجاهزة", en: "Prepared Meat Products" },
      icon: "🌭",
      count: 6,
      description: { ar: "سجق بلدي، حواوشي، شاورما وكرات لحم طازجة", en: "Artisanal sausages, hawawshi mix, shawarma & meatballs" }
    },
    {
      id: "burgers",
      name: { ar: "البرجر الفاخر", en: "Gourmet Burgers" },
      icon: "🍔",
      count: 5,
      description: { ar: "أقراص برجر بلدي صافي 100% بدون إضافات صويا", en: "100% pure beef burger patties with rich seasoning" }
    },
    {
      id: "kebab",
      name: { ar: "الكباب والكفتة", en: "Kebab & Kofta" },
      icon: "🍢",
      count: 5,
      description: { ar: "كفتة بلدي وكباب متبل بتتبيلة ميت هاوس الخاصة", en: "Authentic spiced kofta & kebab skewers ready for grill" }
    },
    {
      id: "marinated",
      name: { ar: "المنتجات المتبلة", en: "Marinated Products" },
      icon: "🧂",
      count: 5,
      description: { ar: "قطع لحم ودجاج متبلة ببهارات الباربكيو الفاخرة", en: "Premium meats infused with artisan BBQ seasonings" }
    }
  ];

  // --- 2. DATA: PRODUCTS (Base Price per 1 KG) ---
  const products = [
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

  // --- 3. DATA: OFFERS ---
  const specialOffers = [
    {
      id: "offer-bbq-box",
      title: { ar: "صندوق الشواء العائلي (BBQ Family Box)", en: "BBQ Family Box" },
      desc: { ar: "تشكيلة فاخرة للشواء: 1 كجم كباب وكفتة + 1 كجم برجر + 1 دجاج متبل + 1 كجم ستيك بقري", en: "Ultimate BBQ mix: 1kg Kebab & Kofta + 1kg Gourmet Burgers + 1 Marinated Chicken + 1kg Beef Steak" },
      originalPrice: 195,
      price: 149,
      unit: "SAR",
      saveBadge: { ar: "وفر 25%", en: "SAVE 25%" },
      image: "assets/images/bbq_box.png",
      popular: true
    },
    {
      id: "offer-burger-party",
      title: { ar: "باقة حفلة البرجر (Burger Party Box)", en: "Burger Party Pack" },
      desc: { ar: "12 قطعة برجر لحم بلدي + 6 برجر دجاج + 4 أقراص محشوة بالجبنة + صوصات ميت هاوس", en: "12 Fresh beef patties + 6 Chicken burgers + 4 Cheese stuffed burgers + Signature sauces" },
      originalPrice: 150,
      price: 119,
      unit: "SAR",
      saveBadge: { ar: "وفر 20%", en: "SAVE 20%" },
      image: "assets/images/burgers.png",
      popular: false
    }
  ];

  // --- 4. STATE & DICTIONARY ---
  const translations = {
    ar: {
      nav: {
        home: "الرئيسية",
        products: "المنتجات",
        categories: "الأقسام",
        offers: "العروض الخاصة",
        about: "من نحن",
        contact: "اتصل بنا",
        searchPlaceholder: "ابحث عن لحوم، ستيك، برجر...",
        cart: "السلة"
      },
      hero: {
        badge: "لحوم طازجة ومذبوحة يومياً",
        title: "أجود أنواع اللحوم بين يديك",
        subtitle: "لحوم طازجة ومختارة بعناية لتقديم أفضل جودة لعائلتك في صفوى والمنطقة الشرقية.",
        ctaShop: "تسوق الآن",
        ctaMenu: "عرض المنتجات"
      },
      sections: {
        categoriesTag: "تصفح أطباكنا",
        categoriesTitle: "تسوق حسب القسم",
        featuredTag: "قطعيات مختارة",
        featuredTitle: "أحدث المنتجات الطازجة",
        offersTag: "وفر أكثر",
        offersTitle: "العروض والباكات العائلية",
        aboutTag: "قصة ميت هاوس",
        aboutTitle: "جودة لا تضاهى واهتمام بأدق التفاصيل"
      },
      product: {
        addToCart: "أضف إلى السلة",
        quickView: "معاينة سريعة",
        selectWeight: "اختر الوزن:",
        orderWhatsApp: "اطلب عبر واتساب",
        sar: "ر.س",
        related: "منتجات ذات صلة"
      },
      cart: {
        title: "سلة التسوق",
        empty: "سلة التسوق فارغة حالياً",
        subtotal: "المجموع الفرعي:",
        delivery: "التوصيل (صفوى):",
        deliveryFee: "5 ر.س (ثابت لجميع مناطق صفوى)",
        free: "5 ر.س",
        total: "الإجمالي النهائي:",
        continueShopping: "متابعة التسوق",
        checkout: "إتمام الطلب"
      },
      checkout: {
        title: "إتمام الطلب",
        personalInfo: "بيانات العميل",
        fullName: "الاسم الكامل",
        phone: "رقم الجوال (واتساب)",
        city: "المدينة",
        address: "العنوان بالتفصيل",
        notes: "ملاحظات الطلب / طريقة التقطيع",
        paymentMethod: "طريقة الدفع",
        cod: "الدفع عند الاستلام (Cash on Delivery)",
        onlineSoon: "الدفع الإلكتروني (مدى / فيزا) - قريباً",
        confirmWhatsApp: "تأكيد وإرسال الطلب عبر واتساب",
        orderSummary: "ملخص الطلب"
      },
      about: {
        arabicContent: "في Meat House نحرص على تقديم أجود أنواع اللحوم الطازجة والمصنعات عالية الجودة، مع الاهتمام بأدق التفاصيل لضمان تجربة مميزة لعملائنا في صفوى وجميع مدن المنطقة الشرقية.",
        quality: "الجودة العالية",
        qualityDesc: "نخبة من أجود السلالات البلدي الذبيحة يومياً تحت إشراف طبي وصحي كامل.",
        fresh: "منتجات طازجة 100%",
        freshDesc: "لا نستخدم أي لحوم مجمدة، جميع قطعياتنا طازجة يومياً ونظيفة.",
        prep: "تجهيز وتقطيع احترافي",
        prepDesc: "نقطع ونجهز لحمك حسب رغبتك وطريقة طهيك المفضلة بكل احترافية.",
        satisfaction: "رضا العملاء أولويتنا",
        satisfactionDesc: "خدمة سريعة وتوصيل مبرد محافظ على درجة الحرارة المثالية."
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "نحن هنا لخدمتك وإجابة جميع استفساراتك",
        location: "الموقع: صفوى، حي العروبة، مجمع الاقتصاد - المنطقة الشرقية، المملكة العربية السعودية",
        phone: "الهاتف والواتساب: +966568148422",
        instagram: "انستغرام: @meathouse.sa",
        formTitle: "أرسل لنا رسالة",
        send: "إرسال الرسالة"
      },
      footer: {
        brandDesc: "ميت هاوس - The Butcher's - الخيار الأول للحوم الطازجة والمصنعات الفاخرة في صفوى والمنطقة الشرقية.",
        quickLinks: "روابط سريعة",
        rights: "© 2026 ميت هاوس Meat House. جميع الحقوق محفوظة."
      }
    },
    en: {
      nav: {
        home: "Home",
        products: "Products",
        categories: "Categories",
        offers: "Special Offers",
        about: "About Us",
        contact: "Contact Us",
        searchPlaceholder: "Search meat, steak, burgers...",
        cart: "Cart"
      },
      hero: {
        badge: "Fresh & Daily Slaughtered Meats",
        title: "Premium Quality Meat, Delivered to You",
        subtitle: "Fresh, carefully selected meat with premium quality for your family in Safwa and Eastern Province.",
        ctaShop: "Shop Now",
        ctaMenu: "View Products"
      },
      sections: {
        categoriesTag: "Browse Categories",
        categoriesTitle: "Shop by Category",
        featuredTag: "Handpicked Cuts",
        featuredTitle: "Featured Fresh Products",
        offersTag: "Save More",
        offersTitle: "Special Packages & Family Boxes",
        aboutTag: "The Meat House Story",
        aboutTitle: "Uncompromising Quality & Precision Butchery"
      },
      product: {
        addToCart: "Add to Cart",
        quickView: "Quick View",
        selectWeight: "Select Weight:",
        orderWhatsApp: "Order via WhatsApp",
        sar: "SAR",
        related: "Related Products"
      },
      cart: {
        title: "Shopping Cart",
        empty: "Your shopping cart is currently empty",
        subtotal: "Subtotal:",
        delivery: "Delivery (Safwa):",
        deliveryFee: "5 SAR (Fixed within Safwa)",
        free: "5 SAR",
        total: "Grand Total:",
        continueShopping: "Continue Shopping",
        checkout: "Proceed to Checkout"
      },
      checkout: {
        title: "Complete Order",
        personalInfo: "Customer Details",
        fullName: "Full Name",
        phone: "Phone Number (WhatsApp)",
        city: "City",
        address: "Detailed Delivery Address",
        notes: "Order Notes / Cutting Preferences",
        paymentMethod: "Payment Method",
        cod: "Cash on Delivery",
        onlineSoon: "Online Payment (Mada / Visa) - Coming Soon",
        confirmWhatsApp: "Confirm & Send Order via WhatsApp",
        orderSummary: "Order Summary"
      },
      about: {
        englishContent: "At Meat House, we are committed to providing premium-quality fresh meat and carefully prepared products, with attention to every detail to ensure an exceptional experience for our customers.",
        quality: "Supreme Quality",
        qualityDesc: "Selected top-grade livestock daily under strict health supervision.",
        fresh: "100% Fresh Daily",
        freshDesc: "Never frozen. All cuts are freshly butchered every morning.",
        prep: "Professional Butchery",
        prepDesc: "We cut and prepare your meats according to your custom culinary preference.",
        satisfaction: "Customer First",
        satisfactionDesc: "Prompt service with refrigerated delivery ensuring ideal freshness."
      },
      contact: {
        title: "Contact Us",
        subtitle: "We are here to assist you with all your inquiries and orders",
        location: "Location: Safwa, Al-Orouba Dist., Economy Complex, Eastern Province, Saudi Arabia",
        phone: "Phone & WhatsApp: +966568148422",
        instagram: "Instagram: @meathouse.sa",
        formTitle: "Send Us a Message",
        send: "Send Message"
      },
      footer: {
        brandDesc: "Meat House - The Butcher's - Premier butcher shop for fresh meats and gourmet preparations in Safwa, KSA.",
        quickLinks: "Quick Links",
        rights: "© 2026 Meat House. All Rights Reserved."
      }
    }
  };

  let currentLang = localStorage.getItem('meathouse_lang') || 'ar';
  let currentTheme = localStorage.getItem('meathouse_theme') || 'dark';
  let cart = JSON.parse(localStorage.getItem('meathouse_cart')) || [];

  function getWeightMultiplier(weightStr) {
    if (!weightStr) return 1.0;
    const w = weightStr.toString().toLowerCase().trim();
    if (w.includes('500g') || w.includes('نصف') || w.includes('half')) return 0.5;
    if (w.includes('2') || w.includes('٢')) return 2.0;
    return 1.0; // 1 KG
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('meathouse_lang', lang);
    renderAll();
  }

  function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('meathouse_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    renderNavbar();
  }

  function toggleTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  function t(keyPath) {
    const keys = keyPath.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return keyPath;
      }
    }
    return value;
  }

  function saveCart() {
    localStorage.setItem('meathouse_cart', JSON.stringify(cart));
    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.innerText = getCartCount();
    renderCartDrawer();
  }

  function addToCart(product, selectedWeight = '1 KG', qty = 1) {
    const weight = selectedWeight || '1 KG';
    const multiplier = getWeightMultiplier(weight);
    const basePricePerKg = product.price;

    const existingIndex = cart.findIndex(item => item.id === product.id && item.weight === weight);

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        basePrice: basePricePerKg,
        multiplier: multiplier,
        itemUnitPrice: basePricePerKg * multiplier,
        image: product.image,
        weight: weight,
        qty: qty
      });
    }
    saveCart();
  }

  function removeFromCart(id, weight) {
    cart = cart.filter(item => !(item.id === id && item.weight === weight));
    saveCart();
  }

  function updateQty(id, weight, delta) {
    const item = cart.find(item => item.id === id && item.weight === weight);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        removeFromCart(id, weight);
      } else {
        saveCart();
      }
    }
  }

  function getCartSubtotal() {
    return cart.reduce((sum, item) => sum + (item.itemUnitPrice * item.qty), 0);
  }

  function getDeliveryFee() {
    const subtotal = getCartSubtotal();
    if (subtotal === 0) return 0;
    return 5; // Fixed 5 SAR inside Safwa
  }

  function getCartTotal() {
    return getCartSubtotal() + getDeliveryFee();
  }

  function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function formatWhatsAppMessage(customerDetails = null) {
    const subtotal = getCartSubtotal();
    const delivery = getDeliveryFee();
    const total = getCartTotal();

    if (currentLang === 'ar') {
      let msg = `مرحباً Meat House 👋\n\nأرغب في طلب المنتجات التالية:\n\n`;
      cart.forEach((item, index) => {
        const name = typeof item.name === 'object' ? item.name.ar : item.name;
        const itemTotal = item.itemUnitPrice * item.qty;
        msg += `${index + 1}. *${name}*\n   • السعر للكيلو: ${item.basePrice} ر.س / كيلو\n   • الوزن المختار: ${item.weight}\n   • الكمية: ${item.qty}\n   • إجمالي المنتج: ${itemTotal} ر.س\n\n`;
      });
      msg += `---------------------------\n`;
      msg += `المجموع الفرعي: ${subtotal} ر.س\n`;
      msg += `التوصيل (صفوى): ${delivery} ر.س\n`;
      msg += `*الإجمالي النهائي: ${total} ر.س*\n\n`;

      if (customerDetails) {
        msg += `📋 *بيانات العميل:*\n`;
        msg += `• الاسم: ${customerDetails.fullName || 'غير محدد'}\n`;
        msg += `• الجوال: ${customerDetails.phone || 'غير محدد'}\n`;
        msg += `• المدينة: ${customerDetails.city || 'صفوى'}\n`;
        msg += `• العنوان: ${customerDetails.address || 'غير محدد'}\n`;
        if (customerDetails.notes) {
          msg += `• ملاحظات التقطيع والطلب: ${customerDetails.notes}\n`;
        }
      }
      msg += `\nيرجى تأكيد الطلب. شكراً لك!`;
      return encodeURIComponent(msg);
    } else {
      let msg = `Hello Meat House 👋\n\nI would like to order the following products:\n\n`;
      cart.forEach((item, index) => {
        const name = typeof item.name === 'object' ? item.name.en : item.name;
        const itemTotal = item.itemUnitPrice * item.qty;
        msg += `${index + 1}. *${name}*\n   • Price per KG: ${item.basePrice} SAR / KG\n   • Selected Weight: ${item.weight}\n   • Quantity: ${item.qty}\n   • Product Total: ${itemTotal} SAR\n\n`;
      });
      msg += `---------------------------\n`;
      msg += `Subtotal: ${subtotal} SAR\n`;
      msg += `Delivery (Safwa): ${delivery} SAR\n`;
      msg += `*Final Order Total: ${total} SAR*\n\n`;

      if (customerDetails) {
        msg += `📋 *Customer Details:*\n`;
        msg += `• Name: ${customerDetails.fullName || 'Not specified'}\n`;
        msg += `• Phone: ${customerDetails.phone || 'Not specified'}\n`;
        msg += `• City: ${customerDetails.city || 'Safwa'}\n`;
        msg += `• Address: ${customerDetails.address || 'Not specified'}\n`;
        if (customerDetails.notes) {
          msg += `• Cutting Notes: ${customerDetails.notes}\n`;
        }
      }
      msg += `\nPlease confirm my order. Thank you!`;
      return encodeURIComponent(msg);
    }
  }

  // --- 5. UI COMPONENTS & CURSOR ---
  function initCustomCursor() {
    if (!window.matchMedia('(pointer: fine)').matches || window.innerWidth <= 768) return;
    document.querySelectorAll('.custom-cursor-dot').forEach(el => el.remove());

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.innerHTML = `
      <svg class="custom-cursor-svg" viewBox="0 0 32 32">
        <g transform="rotate(-20 16 16)">
          <rect x="14" y="17" width="4" height="11" rx="1.5" fill="#1C1514" stroke="#D4AF37" stroke-width="0.8"/>
          <path d="M10 4 h12 v11 c0 3.5 -3.5 5.5 -12 5.5 z" fill="#9E2A2B" stroke="#FFFFFF" stroke-width="1.2"/>
          <circle cx="18" cy="8" r="1.2" fill="#FFFFFF"/>
        </g>
      </svg>
    `;
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.classList.add('active');
      const target = e.target.closest('a, button, .clickable, .product-card, .category-card, .weight-opt');
      if (target) cursorDot.classList.add('hovering');
      else cursorDot.classList.remove('hovering');
    });

    window.addEventListener('mousedown', () => {
      cursorDot.classList.add('chop');
      setTimeout(() => cursorDot.classList.remove('chop'), 220);
    });

    function animate() {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;
      cursorDot.style.left = `${currentX}px`;
      cursorDot.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    }
    animate();
  }

  function renderNavbar() {
    const navHtml = `
      <nav class="navbar">
        <div class="container nav-container">
          <a href="#home" class="brand-logo clickable">
            <img src="assets/logo/logo.svg" alt="Meat House Logo">
            <span>MEAT HOUSE</span>
          </a>

          <ul class="nav-links">
            <li><a href="#home" class="nav-link" data-route="home">${t('nav.home')}</a></li>
            <li><a href="#products" class="nav-link" data-route="products">${t('nav.products')}</a></li>
            <li><a href="#categories" class="nav-link" data-route="categories">${t('nav.categories')}</a></li>
            <li><a href="#offers" class="nav-link" data-route="offers">${t('nav.offers')}</a></li>
            <li><a href="#about" class="nav-link" data-route="about">${t('nav.about')}</a></li>
            <li><a href="#contact" class="nav-link" data-route="contact">${t('nav.contact')}</a></li>
          </ul>

          <div class="nav-actions">
            <button class="icon-btn clickable" id="searchBtn">🔍</button>

            <button class="icon-btn clickable" id="langToggleBtn">
              <span style="font-weight: 800; font-size: 0.85rem;">${currentLang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button class="icon-btn clickable" id="themeToggleBtn">
              ${currentTheme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button class="icon-btn clickable" id="cartOpenBtn">
              🛒
              <span class="cart-badge" id="cartCountBadge">${getCartCount()}</span>
            </button>

            <button class="icon-btn mobile-menu-btn clickable" id="mobileMenuBtn">☰</button>
          </div>
        </div>
      </nav>

      <div class="drawer-overlay" id="mobileDrawerOverlay"></div>
      <div class="mobile-drawer" id="mobileDrawer">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="brand-logo">
            <img src="assets/logo/logo.svg" alt="Meat House Logo" style="height: 40px;">
            <span>MEAT HOUSE</span>
          </div>
          <button class="icon-btn clickable" id="closeMobileDrawerBtn">✕</button>
        </div>

        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1rem;">
          <li><a href="#home" class="nav-link mobile-nav-link" data-route="home">${t('nav.home')}</a></li>
          <li><a href="#products" class="nav-link mobile-nav-link" data-route="products">${t('nav.products')}</a></li>
          <li><a href="#categories" class="nav-link mobile-nav-link" data-route="categories">${t('nav.categories')}</a></li>
          <li><a href="#offers" class="nav-link mobile-nav-link" data-route="offers">${t('nav.offers')}</a></li>
          <li><a href="#about" class="nav-link mobile-nav-link" data-route="about">${t('nav.about')}</a></li>
          <li><a href="#contact" class="nav-link mobile-nav-link" data-route="contact">${t('nav.contact')}</a></li>
        </ul>
      </div>
    `;

    document.getElementById('appNavbar').innerHTML = navHtml;

    document.getElementById('langToggleBtn')?.addEventListener('click', () => {
      setLang(currentLang === 'ar' ? 'en' : 'ar');
    });

    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
      toggleTheme();
    });

    document.getElementById('cartOpenBtn')?.addEventListener('click', () => {
      document.getElementById('cartDrawer')?.classList.add('open');
      document.getElementById('cartDrawerOverlay')?.classList.add('active');
    });

    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');

    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
      drawer?.classList.add('open');
      overlay?.classList.add('active');
    });

    document.getElementById('closeMobileDrawerBtn')?.addEventListener('click', () => {
      drawer?.classList.remove('open');
      overlay?.classList.remove('active');
    });

    overlay?.addEventListener('click', () => {
      drawer?.classList.remove('open');
      overlay?.classList.remove('active');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer?.classList.remove('open');
        overlay?.classList.remove('active');
      });
    });

    document.getElementById('searchBtn')?.addEventListener('click', () => {
      window.location.hash = '#products';
      setTimeout(() => document.getElementById('productSearchInput')?.focus(), 200);
    });
  }

  function createProductCard(product) {
    const name = typeof product.name === 'object' ? product.name[currentLang] : product.name;
    const desc = typeof product.desc === 'object' ? product.desc[currentLang] : product.desc;
    const badgeText = product.badge ? (typeof product.badge === 'object' ? product.badge[currentLang] : product.badge) : null;
    const basePrice = product.price;
    const unitLabel = currentLang === 'ar' ? 'ر.س / كيلو' : 'SAR / KG';

    return `
      <div class="product-card clickable" data-product-id="${product.id}">
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${name}" class="product-img" loading="lazy">
          <div class="product-brand-stamp">
            <img src="assets/logo/logo.svg" alt="Meat House Stamp">
          </div>
          ${badgeText ? `<span class="product-badge">${badgeText}</span>` : ''}
        </div>

        <div class="product-info">
          <h3 class="product-name">${name}</h3>
          <p class="product-desc">${desc}</p>

          <div class="weight-selector" data-base-price="${basePrice}">
            <button class="weight-opt clickable" data-weight="500g" data-mult="0.5">500g</button>
            <button class="weight-opt active clickable" data-weight="1 KG" data-mult="1.0">1 KG</button>
            <button class="weight-opt clickable" data-weight="2 KG" data-mult="2.0">2 KG</button>
          </div>

          <div class="product-bottom">
            <div>
              <span class="product-price" data-price-el="${product.id}">${basePrice}</span>
              <span class="product-currency" data-unit-el="${product.id}">${unitLabel}</span>
            </div>

            <div style="display: flex; gap: 8px;">
              <button class="btn btn-secondary quick-view-btn clickable" data-id="${product.id}" title="${t('product.quickView')}" style="padding: 8px 12px; font-size: 0.85rem;">
                👁️
              </button>
              <button class="btn btn-primary add-cart-btn clickable" data-id="${product.id}" style="padding: 8px 16px; font-size: 0.9rem;">
                🛒 ${t('product.addToCart')}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function bindProductCardEvents(containerElement) {
    if (!containerElement) return;

    containerElement.querySelectorAll('.weight-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const card = btn.closest('.product-card');
        const selector = btn.closest('.weight-selector');
        const productId = card.dataset.productId;
        const basePrice = parseFloat(selector.dataset.basePrice || 60);
        const mult = parseFloat(btn.dataset.mult || 1.0);

        selector.querySelectorAll('.weight-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const priceDisplay = card.querySelector(`[data-price-el="${productId}"]`);
        const unitDisplay = card.querySelector(`[data-unit-el="${productId}"]`);

        if (priceDisplay) priceDisplay.innerText = basePrice * mult;
        if (unitDisplay) {
          unitDisplay.innerText = mult === 1.0 
            ? (currentLang === 'ar' ? 'ر.س / كيلو' : 'SAR / KG')
            : (currentLang === 'ar' ? 'ر.س' : 'SAR');
        }
      });
    });

    containerElement.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const productId = btn.dataset.id;
        const card = btn.closest('.product-card');
        const activeWeightBtn = card.querySelector('.weight-opt.active');
        const weight = activeWeightBtn ? activeWeightBtn.dataset.weight : '1 KG';
        const prod = products.find(p => p.id === productId);
        if (prod) {
          addToCart(prod, weight, 1);
          document.getElementById('cartDrawer')?.classList.add('open');
          document.getElementById('cartDrawerOverlay')?.classList.add('active');
        }
      });
    });

    containerElement.querySelectorAll('.quick-view-btn, .product-img-wrapper').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const card = btn.closest('.product-card');
        const productId = card.dataset.productId;
        openProductModal(productId);
      });
    });
  }

  function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const name = typeof product.name === 'object' ? product.name[currentLang] : product.name;
    const desc = typeof product.desc === 'object' ? product.desc[currentLang] : product.desc;
    const basePricePerKg = product.price;
    let currentWeight = '1 KG';
    let currentQty = 1;

    function getCalcPrice() {
      return basePricePerKg * getWeightMultiplier(currentWeight) * currentQty;
    }

    const modalHtml = `
      <div class="modal-backdrop active" id="productDetailModalBackdrop">
        <div class="modal-card" id="productDetailModalCard">
          <button class="icon-btn clickable modal-close-btn" id="modalCloseBtn">✕</button>

          <div style="display: flex; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 280px; max-width: 400px; background-color: var(--bg-secondary); position: relative; min-height: 350px;">
              <img src="${product.image}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
              <div class="product-brand-stamp" style="top: 20px; right: 20px;">
                <img src="assets/logo/logo.svg" alt="Meat House Logo">
              </div>
            </div>

            <div style="flex: 1; min-width: 280px; padding: 2.5rem; display: flex; flex-direction: column;">
              <span style="font-size: 0.85rem; color: var(--accent-red); font-weight: 800; letter-spacing: 1px; margin-bottom: 0.4rem;">
                MEAT HOUSE OFFICIAL CUT
              </span>
              <h2 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 0.5rem;">${name}</h2>
              <div style="font-size: 0.95rem; color: var(--text-muted); font-weight: 700; margin-bottom: 1rem;">
                ${currentLang === 'ar' ? `السعر الكلي: ${basePricePerKg} ر.س / كيلو` : `Base Price: ${basePricePerKg} SAR / KG`}
              </div>

              <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>

              <div style="font-size: 2.4rem; font-weight: 900; color: var(--accent-red); margin-bottom: 1.5rem; display: flex; align-items: baseline; gap: 8px;">
                <span id="modalCalculatedPrice">${getCalcPrice()}</span>
                <span style="font-size: 1.1rem; font-weight: 600;">${t('product.sar')}</span>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 700; margin-bottom: 0.5rem;">${t('product.selectWeight')}</label>
                <div class="weight-selector" id="modalWeightSelector">
                  <button class="weight-opt clickable" data-weight="500g">500g</button>
                  <button class="weight-opt active clickable" data-weight="1 KG">1 KG</button>
                  <button class="weight-opt clickable" data-weight="2 KG">2 KG</button>
                </div>
              </div>

              <div style="margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
                <label style="font-weight: 700;">${currentLang === 'ar' ? 'الكمية:' : 'Quantity:'}</label>
                <div style="display: flex; align-items: center; gap: 8px; background-color: var(--bg-secondary); padding: 6px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                  <button class="clickable" id="modalQtyMinus" style="font-size: 1.2rem; font-weight: 900; width: 28px; height: 28px;">-</button>
                  <span id="modalQtyVal" style="font-size: 1.1rem; font-weight: 800; min-width: 24px; text-align: center;">1</span>
                  <button class="clickable" id="modalQtyPlus" style="font-size: 1.2rem; font-weight: 900; width: 28px; height: 28px;">+</button>
                </div>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px; margin-top: auto;">
                <button class="btn btn-primary clickable" id="modalAddToCartBtn" style="width: 100%;">
                  🛒 ${t('product.addToCart')}
                </button>
                <a id="modalWhatsAppBtn" href="#" target="_blank" class="btn btn-whatsapp clickable" style="width: 100%;">
                  📱 ${t('product.orderWhatsApp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const container = document.getElementById('appModal');
    container.innerHTML = modalHtml;

    document.getElementById('productDetailModalCard')?.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    function closeModal() {
      container.innerHTML = '';
    }

    document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
    document.getElementById('productDetailModalBackdrop')?.addEventListener('click', (e) => {
      if (e.target.id === 'productDetailModalBackdrop') closeModal();
    });

    function updateModalState() {
      const priceEl = document.getElementById('modalCalculatedPrice');
      if (priceEl) priceEl.innerText = getCalcPrice();

      const itemTotal = getCalcPrice();
      const delivery = 5;
      const finalTotal = itemTotal + delivery;

      const text = currentLang === 'ar' 
        ? `مرحباً Meat House 👋\n\nأرغب في طلب المنتج التالي:\n• المنتج: ${name}\n• السعر للكيلو: ${basePricePerKg} ريال للكيلو\n• الوزن المختار: ${currentWeight}\n• الكمية: ${currentQty}\n• إجمالي المنتج: ${itemTotal} ريال\n• التوصيل (صفوى): ${delivery} ريال\n• الإجمالي النهائي: ${finalTotal} ريال\n\nيرجى تأكيد الطلب.`
        : `Hello Meat House 👋\n\nI would like to order:\n• Product: ${name}\n• Price: ${basePricePerKg} SAR / KG\n• Selected Weight: ${currentWeight}\n• Quantity: ${currentQty}\n• Product Total: ${itemTotal} SAR\n• Delivery (Safwa): ${delivery} SAR\n• Final Total: ${finalTotal} SAR\n\nPlease confirm my order.`;

      const waBtn = document.getElementById('modalWhatsAppBtn');
      if (waBtn) waBtn.href = `https://wa.me/966568148422?text=${encodeURIComponent(text)}`;
    }

    document.querySelectorAll('#modalWeightSelector .weight-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        document.querySelectorAll('#modalWeightSelector .weight-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentWeight = btn.dataset.weight;
        updateModalState();
      });
    });

    const qtyValEl = document.getElementById('modalQtyVal');
    document.getElementById('modalQtyMinus')?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (currentQty > 1) {
        currentQty--;
        if (qtyValEl) qtyValEl.innerText = currentQty;
        updateModalState();
      }
    });

    document.getElementById('modalQtyPlus')?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      currentQty++;
      if (qtyValEl) qtyValEl.innerText = currentQty;
      updateModalState();
    });

    updateModalState();

    document.getElementById('modalAddToCartBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      addToCart(product, currentWeight, currentQty);
      closeModal();
      document.getElementById('cartDrawer')?.classList.add('open');
      document.getElementById('cartDrawerOverlay')?.classList.add('active');
    });
  }

  function renderCartDrawer() {
    const subtotal = getCartSubtotal();
    const delivery = getDeliveryFee();
    const total = getCartTotal();

    const drawerHtml = `
      <div class="drawer-overlay" id="cartDrawerOverlay"></div>
      <div class="cart-drawer" id="cartDrawer">
        <div class="cart-header">
          <h3 style="font-size: 1.25rem; font-weight: 800;">🛒 ${t('cart.title')}</h3>
          <button class="icon-btn clickable" id="closeCartDrawerBtn">✕</button>
        </div>

        <div class="cart-body">
          ${cart.length === 0 ? `
            <div style="text-align: center; margin: auto 0; padding: 2rem; color: var(--text-muted);">
              <div style="font-size: 3.5rem; margin-bottom: 1rem;">🥩</div>
              <p style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">${t('cart.empty')}</p>
            </div>
          ` : `
            <div class="safwa-delivery-badge">
              <span>🚚</span>
              <span>${currentLang === 'ar' ? 'رسوم التوصيل داخل جميع مناطق صفوى 5 ريال فقط' : 'Delivery within all areas of Safwa: Only 5 SAR'}</span>
            </div>

            ${cart.map(item => {
              const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
              const itemTotal = item.itemUnitPrice * item.qty;
              return `
                <div class="cart-item">
                  <img src="${item.image}" alt="${name}" class="cart-item-img">
                  <div class="cart-item-info">
                    <h4 style="font-size: 0.95rem; font-weight: 700;">${name}</h4>
                    <div style="font-size: 0.8rem; color: var(--text-muted); margin: 2px 0;">
                      ${currentLang === 'ar' ? `السعر للكيلو: ${item.basePrice} ر.س | الوزن: ${item.weight}` : `Rate: ${item.basePrice} SAR/KG | Weight: ${item.weight}`}
                    </div>
                    <div style="font-weight: 800; color: var(--accent-red); font-size: 0.95rem;">${itemTotal} ${t('product.sar')}</div>
                  </div>

                  <div style="display: flex; align-items: center; gap: 6px; background-color: var(--bg-secondary); padding: 4px 8px; border-radius: var(--radius-sm);">
                    <button class="cart-qty-btn clickable" data-id="${item.id}" data-weight="${item.weight}" data-delta="-1" style="font-weight: 900; width: 22px; height: 22px;">-</button>
                    <span style="font-weight: 800; font-size: 0.9rem; min-width: 18px; text-align: center;">${item.qty}</span>
                    <button class="cart-qty-btn clickable" data-id="${item.id}" data-weight="${item.weight}" data-delta="1" style="font-weight: 900; width: 22px; height: 22px;">+</button>
                  </div>

                  <button class="cart-remove-btn clickable" data-id="${item.id}" data-weight="${item.weight}" style="color: var(--text-muted); font-size: 1.1rem; padding: 4px;">🗑️</button>
                </div>
              `;
            }).join('')}
          `}
        </div>

        ${cart.length > 0 ? `
          <div class="cart-footer">
            <div class="cart-row">
              <span>${t('cart.subtotal')}</span>
              <span>${subtotal} ${t('product.sar')}</span>
            </div>
            <div class="cart-row" style="font-size: 0.9rem; color: var(--text-muted);">
              <span>${currentLang === 'ar' ? 'توصيل صفوى:' : 'Safwa Delivery:'}</span>
              <span>${delivery} ${t('product.sar')}</span>
            </div>
            <div class="cart-row total">
              <span>${t('cart.total')}</span>
              <span>${total} ${t('product.sar')}</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 1.25rem;">
              <a href="https://wa.me/966568148422?text=${formatWhatsAppMessage()}" target="_blank" class="btn btn-whatsapp clickable" style="width: 100%;">
                📱 ${t('product.orderWhatsApp')}
              </a>
              <a href="#checkout" class="btn btn-primary clickable" id="cartToCheckoutBtn" style="width: 100%;">
                💳 ${t('cart.checkout')}
              </a>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    document.getElementById('appCartDrawer').innerHTML = drawerHtml;

    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');

    document.getElementById('closeCartDrawerBtn')?.addEventListener('click', () => {
      drawer?.classList.remove('open');
      overlay?.classList.remove('active');
    });

    overlay?.addEventListener('click', () => {
      drawer?.classList.remove('open');
      overlay?.classList.remove('active');
    });

    document.getElementById('cartToCheckoutBtn')?.addEventListener('click', () => {
      drawer?.classList.remove('open');
      overlay?.classList.remove('active');
    });

    document.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const weight = btn.dataset.weight;
        const delta = parseInt(btn.dataset.delta);
        updateQty(id, weight, delta);
      });
    });

    document.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const weight = btn.dataset.weight;
        removeFromCart(id, weight);
      });
    });
  }

  function renderFooter() {
    const footerHtml = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="brand-logo" style="color: #ffffff;">
                <img src="assets/logo/logo.svg" alt="Meat House Logo" style="height: 50px;">
                <div>
                  <div style="font-size: 1.3rem; font-weight: 900;">MEAT HOUSE</div>
                  <div style="font-size: 0.75rem; color: var(--accent-gold); letter-spacing: 2px;">THE BUTCHER'S</div>
                </div>
              </div>
              <p>${t('footer.brandDesc')}</p>
              <div style="display: flex; gap: 12px; margin-top: 1.25rem;">
                <a href="https://www.instagram.com/meathouse.sa?igsi=MWJwY2oxZ3JucHNyaw==" target="_blank" class="icon-btn clickable">📸</a>
                <a href="https://wa.me/966568148422" target="_blank" class="icon-btn clickable" style="color: #25D366;">💬</a>
                <a href="tel:+966568148422" class="icon-btn clickable">📞</a>
              </div>
            </div>

            <div>
              <h4 class="footer-title">${t('footer.quickLinks')}</h4>
              <ul class="footer-links">
                <li><a href="#home" class="footer-link clickable">${t('nav.home')}</a></li>
                <li><a href="#products" class="footer-link clickable">${t('nav.products')}</a></li>
                <li><a href="#categories" class="footer-link clickable">${t('nav.categories')}</a></li>
                <li><a href="#offers" class="footer-link clickable">${t('nav.offers')}</a></li>
                <li><a href="#about" class="footer-link clickable">${t('nav.about')}</a></li>
                <li><a href="#contact" class="footer-link clickable">${t('nav.contact')}</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-title">${t('nav.categories')}</h4>
              <ul class="footer-links">
                <li><a href="#products?cat=lamb" class="footer-link clickable">${currentLang === 'ar' ? 'اللحوم الضاني' : 'Lamb Meat'}</a></li>
                <li><a href="#products?cat=veal" class="footer-link clickable">${currentLang === 'ar' ? 'اللحوم البتلو' : 'Veal Meat'}</a></li>
                <li><a href="#products?cat=beef" class="footer-link clickable">${currentLang === 'ar' ? 'اللحوم البقري' : 'Beef Meat'}</a></li>
                <li><a href="#products?cat=chicken" class="footer-link clickable">${currentLang === 'ar' ? 'الدجاج الطازج' : 'Fresh Chicken'}</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-title">${t('contact.title')}</h4>
              <ul class="footer-links" style="font-size: 0.95rem; line-height: 1.6;">
                <li style="display: flex; gap: 10px;">
                  <span>📍</span>
                  <span>${currentLang === 'ar' ? 'صفوى، حي العروبة، مجمع الاقتصاد - المنطقة الشرقية' : 'Safwa, Al-Orouba Dist., Economy Complex, Eastern Province, KSA'}</span>
                </li>
                <li style="display: flex; gap: 10px;">
                  <span>📱</span>
                  <a href="tel:+966568148422" style="color: var(--accent-gold); font-weight: 700;">+966568148422</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            ${t('footer.rights')}
          </div>
        </div>
      </footer>
    `;

    document.getElementById('appFooter').innerHTML = footerHtml;
  }

  // --- 6. PAGES ---
  function renderHomePage(container) {
    const featuredProducts = products.slice(0, 8);
    const mainOffer = specialOffers[0];

    container.innerHTML = `
      <section class="hero-section fade-in-up">
        <div class="container hero-content">
          <div class="hero-badge">👑 ${t('hero.badge')}</div>
          <h1 class="hero-title">${t('hero.title')}</h1>
          <p class="hero-subtitle">${t('hero.subtitle')}</p>
          <div class="hero-ctas">
            <a href="#products" class="btn btn-primary clickable">${t('hero.ctaShop')} ➔</a>
            <a href="#categories" class="btn btn-secondary clickable">${t('hero.ctaMenu')}</a>
          </div>
        </div>
      </section>

      <section class="container fade-in-up" style="padding: 5rem 1.5rem 2rem 1.5rem;">
        <div class="section-header">
          <span class="section-tag">${t('sections.categoriesTag')}</span>
          <h2 class="section-title">${t('sections.categoriesTitle')}</h2>
        </div>

        <div class="category-grid">
          ${categories.map(cat => `
            <a href="#products?cat=${cat.id}" class="category-card clickable">
              <div class="category-icon">${cat.icon}</div>
              <h3 class="category-title">${cat.name[currentLang]}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">${cat.description[currentLang]}</p>
              <span class="category-count">${cat.count} ${currentLang === 'ar' ? 'منتج طازج' : 'Fresh Items'}</span>
            </a>
          `).join('')}
        </div>
      </section>

      <section class="container fade-in-up" style="padding: 4rem 1.5rem 5rem 1.5rem;">
        <div class="section-header">
          <span class="section-tag">${t('sections.featuredTag')}</span>
          <h2 class="section-title">${t('sections.featuredTitle')}</h2>
        </div>

        <div class="product-grid" id="homeProductGrid">
          ${featuredProducts.map(p => createProductCard(p)).join('')}
        </div>

        <div style="text-align: center; margin-top: 3.5rem;">
          <a href="#products" class="btn btn-secondary clickable" style="border-color: var(--accent-red); color: var(--accent-red);">
            ${currentLang === 'ar' ? 'عرض جميع المنتجات (40+ منتج)' : 'Explore Full Menu (40+ Items)'} ➔
          </a>
        </div>
      </section>

      ${mainOffer ? `
        <section class="container fade-in-up" style="padding: 0 1.5rem 5rem 1.5rem;">
          <div style="background: linear-gradient(135deg, #1C1514 0%, #341A17 100%); border-radius: var(--radius-lg); border: 1px solid var(--accent-red); padding: 3rem 2rem; color: #fff; display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; box-shadow: var(--shadow-lg);">
            <div style="flex: 1; min-width: 280px;">
              <span style="background: var(--accent-red); color: #fff; font-weight: 800; font-size: 0.8rem; padding: 4px 12px; border-radius: var(--radius-full); text-transform: uppercase;">
                ${mainOffer.saveBadge[currentLang]}
              </span>
              <h2 style="font-size: 2.2rem; font-weight: 900; margin: 1rem 0; color: #ffffff;">${mainOffer.title[currentLang]}</h2>
              <p style="font-size: 1.05rem; color: #D4CDC7; line-height: 1.6; margin-bottom: 1.5rem;">${mainOffer.desc[currentLang]}</p>
              <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
                <span style="font-size: 2.5rem; font-weight: 900; color: var(--accent-gold);">${mainOffer.price} ${t('product.sar')}</span>
                <span style="font-size: 1.4rem; color: #8A817A; text-decoration: line-through;">${mainOffer.originalPrice} ${t('product.sar')}</span>
              </div>
              <a href="#offers" class="btn btn-primary clickable">
                🔥 ${currentLang === 'ar' ? 'اطلب الباقة الآن' : 'Claim Special Offer'}
              </a>
            </div>

            <div style="flex: 1; min-width: 280px; max-width: 480px; margin: 0 auto; text-align: center;">
              <img src="${mainOffer.image}" alt="BBQ Box" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md); border: 2px solid rgba(212,175,55,0.3);">
            </div>
          </div>
        </section>
      ` : ''}

      <section style="background-color: var(--bg-secondary); padding: 5rem 0;">
        <div class="container fade-in-up" style="display: flex; flex-wrap: wrap; align-items: center; gap: 3rem;">
          <div style="flex: 1; min-width: 280px;">
            <span class="section-tag">${t('sections.aboutTag')}</span>
            <h2 class="section-title" style="margin-bottom: 1.5rem;">${t('sections.aboutTitle')}</h2>
            <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 2rem;">
              ${currentLang === 'ar' ? t('about.arabicContent') : t('about.englishContent')}
            </p>
            <a href="#about" class="btn btn-secondary clickable" style="border-color: var(--accent-red); color: var(--accent-red);">${t('nav.about')} ➔</a>
          </div>

          <div style="flex: 1; min-width: 280px; text-align: center;">
            <img src="assets/images/hero_banner.png" alt="Meat House Quality" style="width: 100%; max-width: 500px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); margin: 0 auto;">
          </div>
        </div>
      </section>
    `;

    bindProductCardEvents(document.getElementById('homeProductGrid'));
  }

  function renderProductsPage(container, initialCategory = null) {
    let selectedCategory = initialCategory || 'all';
    let searchQuery = '';
    let sortBy = 'default';

    function filterProducts() {
      return products.filter(p => {
        if (selectedCategory !== 'all' && p.categoryId !== selectedCategory) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const nameAr = (p.name.ar || '').toLowerCase();
          const nameEn = (p.name.en || '').toLowerCase();
          return nameAr.includes(q) || nameEn.includes(q);
        }
        return true;
      }).sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
    }

    function updateGrid() {
      const filtered = filterProducts();
      const grid = document.getElementById('catalogProductGrid');
      const countEl = document.getElementById('productResultsCount');

      if (countEl) countEl.innerText = `${filtered.length} ${currentLang === 'ar' ? 'منتج متاح' : 'Products Available'}`;

      if (grid) {
        if (filtered.length === 0) {
          grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
              <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
              <h3>${currentLang === 'ar' ? 'لم نجد أي منتج يطابق بحثك' : 'No products match your search'}</h3>
            </div>
          `;
        } else {
          grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
          bindProductCardEvents(grid);
        }
      }
    }

    container.innerHTML = `
      <div class="container fade-in-up" style="padding: 4rem 1.5rem;">
        <div style="margin-bottom: 2.5rem;">
          <h1 style="font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">${t('nav.products')}</h1>
          <p style="color: var(--text-muted);">${currentLang === 'ar' ? 'جميع اللحوم والمصنعات الطازجة يومياً من ميت هاوس صفوى' : 'Explore all fresh meats butchered daily at Meat House KSA'}</p>
        </div>

        <div style="background-color: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); padding: 1.25rem; margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between;">
          <div style="position: relative; flex: 1; min-width: 260px;">
            <input type="text" id="productSearchInput" class="form-input" placeholder="${t('nav.searchPlaceholder')}" style="padding-left: 42px;">
            <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); opacity: 0.5;">🔍</span>
          </div>

          <div style="width: 180px;">
            <select id="productSortSelect" class="form-select">
              <option value="default">${currentLang === 'ar' ? 'الترتيب الافتراضي' : 'Default Sorting'}</option>
              <option value="price-low">${currentLang === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
              <option value="price-high">${currentLang === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
            </select>
          </div>

          <div id="productResultsCount" style="font-weight: 700; color: var(--accent-red);">
            -- ${currentLang === 'ar' ? 'منتج متاح' : 'Products'}
          </div>
        </div>

        <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 2.5rem;" id="categoryPillContainer">
          <button class="weight-opt ${selectedCategory === 'all' ? 'active' : ''} clickable" data-cat="all" style="padding: 10px 20px; white-space: nowrap;">
            🌟 ${currentLang === 'ar' ? 'جميع الأقسام' : 'All Categories'}
          </button>
          ${categories.map(c => `
            <button class="weight-opt ${selectedCategory === c.id ? 'active' : ''} clickable" data-cat="${c.id}" style="padding: 10px 20px; white-space: nowrap;">
              ${c.icon} ${c.name[currentLang]}
            </button>
          `).join('')}
        </div>

        <div class="product-grid" id="catalogProductGrid"></div>
      </div>
    `;

    document.getElementById('productSearchInput')?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      updateGrid();
    });

    document.getElementById('productSortSelect')?.addEventListener('change', (e) => {
      sortBy = e.target.value;
      updateGrid();
    });

    document.querySelectorAll('#categoryPillContainer .weight-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#categoryPillContainer .weight-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCategory = btn.dataset.cat;
        updateGrid();
      });
    });

    updateGrid();
  }

  function renderOffersPage(container) {
    container.innerHTML = `
      <div class="container fade-in-up" style="padding: 4rem 1.5rem;">
        <div class="section-header">
          <span class="section-tag">${t('sections.offersTag')}</span>
          <h1 class="section-title">${t('sections.offersTitle')}</h1>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-top: 3rem;">
          ${specialOffers.map(offer => `
            <div style="background-color: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow: hidden; display: flex; flex-direction: column;">
              <div style="position: relative; height: 240px;">
                <img src="${offer.image}" alt="${offer.title[currentLang]}" style="width: 100%; height: 100%; object-fit: cover;">
                <span style="position: absolute; top: 16px; right: 16px; background-color: var(--accent-red); color: #fff; font-weight: 800; font-size: 0.85rem; padding: 6px 14px; border-radius: var(--radius-full);">
                  ${offer.saveBadge[currentLang]}
                </span>
              </div>

              <div style="padding: 2rem; display: flex; flex-direction: column; flex-grow: 1;">
                <h3 style="font-size: 1.4rem; font-weight: 900; margin-bottom: 0.75rem;">${offer.title[currentLang]}</h3>
                <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; margin-bottom: 1.5rem;">${offer.desc[currentLang]}</p>

                <div style="margin-top: auto; padding-top: 1.25rem; border-top: 1px dashed var(--border-color); display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <span style="font-size: 2rem; font-weight: 900; color: var(--accent-red);">${offer.price} ${t('product.sar')}</span>
                    <span style="font-size: 1.1rem; color: var(--text-muted); text-decoration: line-through;">${offer.originalPrice} ${t('product.sar')}</span>
                  </div>

                  <a href="https://wa.me/966568148422?text=${encodeURIComponent(`Hello Meat House 👋\nOrder: ${offer.title[currentLang]}`)}" target="_blank" class="btn btn-whatsapp clickable">
                    📱 ${currentLang === 'ar' ? 'اطلب الباقة' : 'Order Bundle'}
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderCheckoutPage(container) {
    const subtotal = getCartSubtotal();
    const delivery = getDeliveryFee();
    const total = getCartTotal();

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="container fade-in-up" style="padding: 6rem 1.5rem; text-align: center;">
          <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
          <h2>${t('cart.empty')}</h2>
          <a href="#products" class="btn btn-primary clickable" style="margin-top: 1.5rem;">${t('hero.ctaShop')}</a>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="container fade-in-up" style="padding: 4rem 1.5rem;">
        <h1 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 2rem;">${t('checkout.title')}</h1>

        <div class="safwa-delivery-badge" style="margin-bottom: 2rem; padding: 14px 20px;">
          <span style="font-size: 1.4rem;">🚚</span>
          <div>
            <div style="font-weight: 800;">${currentLang === 'ar' ? 'توصيل سريع ومبرد داخل صفوى' : 'Refrigerated Delivery inside Safwa'}</div>
            <div style="font-size: 0.9rem; font-weight: 600; opacity: 0.9;">
              ${currentLang === 'ar' ? 'التوصيل داخل جميع مناطق صفوى 5 ريال فقط' : 'Delivery within all areas of Safwa: Only 5 SAR'}
            </div>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 3rem;">
          <div style="flex: 1.2; min-width: 300px; background-color: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
              📋 ${t('checkout.personalInfo')}
            </h2>

            <form id="checkoutForm">
              <div class="form-group">
                <label class="form-label">${t('checkout.fullName')} *</label>
                <input type="text" id="custName" class="form-input" required>
              </div>

              <div class="form-group">
                <label class="form-label">${t('checkout.phone')} *</label>
                <input type="tel" id="custPhone" class="form-input" required>
              </div>

              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <div class="form-group" style="flex: 1; min-width: 140px;">
                  <label class="form-label">${t('checkout.city')} *</label>
                  <select id="custCity" class="form-select">
                    <option value="Safwa">صفوى (Safwa)</option>
                    <option value="Qatif">القطيف (Qatif)</option>
                    <option value="Dammam">الدمام (Dammam)</option>
                    <option value="Khobar">الخبر (Khobar)</option>
                  </select>
                </div>

                <div class="form-group" style="flex: 2; min-width: 200px;">
                  <label class="form-label">${t('checkout.address')} *</label>
                  <input type="text" id="custAddress" class="form-input" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">${t('checkout.notes')}</label>
                <textarea id="custNotes" class="form-textarea" rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-whatsapp clickable" style="width: 100%; padding: 16px; font-size: 1.1rem; margin-top: 1rem;">
                📱 ${t('checkout.confirmWhatsApp')}
              </button>
            </form>
          </div>

          <div style="flex: 0.8; min-width: 280px; background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); height: fit-content;">
            <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1.25rem;">
              🛒 ${t('checkout.orderSummary')} (${cart.length})
            </h2>

            <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
              ${cart.map(item => {
                const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
                const itemTotal = item.itemUnitPrice * item.qty;
                return `
                  <div style="display: flex; justify-content: space-between; font-size: 0.95rem;">
                    <div>
                      <div style="font-weight: 700;">${name}</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${item.basePrice} ${currentLang === 'ar' ? 'ر.س/كيلو' : 'SAR/KG'} | ${item.weight} × ${item.qty}</div>
                    </div>
                    <div style="font-weight: 800; color: var(--accent-red);">${itemTotal} ${t('product.sar')}</div>
                  </div>
                `;
              }).join('')}
            </div>

            <div style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
              <div class="cart-row">
                <span>${t('cart.subtotal')}</span>
                <span>${subtotal} ${t('product.sar')}</span>
              </div>
              <div class="cart-row" style="font-size: 0.9rem; color: var(--text-muted);">
                <span>${currentLang === 'ar' ? 'توصيل صفوى:' : 'Safwa Delivery:'}</span>
                <span>${delivery} ${t('product.sar')}</span>
              </div>
              <div class="cart-row total">
                <span>${t('cart.total')}</span>
                <span>${total} ${t('product.sar')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const customerDetails = {
        fullName: document.getElementById('custName').value,
        phone: document.getElementById('custPhone').value,
        city: document.getElementById('custCity').value,
        address: document.getElementById('custAddress').value,
        notes: document.getElementById('custNotes').value
      };
      const waEncoded = formatWhatsAppMessage(customerDetails);
      window.open(`https://wa.me/966568148422?text=${waEncoded}`, '_blank');
    });
  }

  function renderAboutPage(container) {
    container.innerHTML = `
      <div class="container fade-in-up" style="padding: 4rem 1.5rem;">
        <div class="section-header">
          <span class="section-tag">${t('sections.aboutTag')}</span>
          <h1 class="section-title">${t('nav.about')}</h1>
        </div>

        <div style="background-color: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 3.5rem 2.5rem; margin-bottom: 4rem;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 3rem;">
            <div style="flex: 1.2; min-width: 280px;">
              <h2 style="font-size: 2rem; font-weight: 900; margin-bottom: 1rem;">MEAT HOUSE</h2>
              <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-primary); font-weight: 600;">
                ${currentLang === 'ar' ? t('about.arabicContent') : t('about.englishContent')}
              </p>
            </div>
            <div style="flex: 0.8; min-width: 260px;">
              <img src="assets/images/hero_banner.png" style="width: 100%; border-radius: var(--radius-md);">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderContactPage(container) {
    container.innerHTML = `
      <div class="container fade-in-up" style="padding: 4rem 1.5rem;">
        <div class="section-header">
          <span class="section-tag">${t('contact.title')}</span>
          <h1 class="section-title">MEAT HOUSE "The Butcher's"</h1>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 3rem; margin-top: 3rem;">
          <div style="flex: 1; min-width: 300px; background-color: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem;">📍 ${currentLang === 'ar' ? 'معلومات الموقع والاتصال' : 'Location & Contact Details'}</h2>
            <p style="margin-bottom: 1rem;">${t('contact.location')}</p>
            <a href="https://wa.me/966568148422" target="_blank" class="btn btn-whatsapp clickable" style="width: 100%; justify-content: center; margin-top: 1.5rem;">📱 WhatsApp +966568148422</a>
          </div>

          <div style="flex: 1.2; min-width: 300px; height: 350px;">
            <iframe src="https://maps.google.com/maps?q=Safwa+Saudi+Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0; border-radius: var(--radius-lg);" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    `;
  }

  function renderFloatingWhatsApp() {
    if (!document.getElementById('whatsappFloatBtn')) {
      const btn = document.createElement('a');
      btn.id = 'whatsappFloatBtn';
      btn.href = 'https://wa.me/966568148422';
      btn.target = '_blank';
      btn.className = 'whatsapp-float clickable';
      btn.innerHTML = `💬`;
      document.body.appendChild(btn);
    }
  }

  // --- 7. ROUTING AND INITIALIZATION ---
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const mainContent = document.getElementById('appContent');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (hash.startsWith(`#${link.dataset.route}`)) link.classList.add('active');
    });

    if (hash === '#home' || hash === '') {
      renderHomePage(mainContent);
    } else if (hash.startsWith('#products')) {
      const urlParams = new URLSearchParams(hash.split('?')[1] || '');
      renderProductsPage(mainContent, urlParams.get('cat'));
    } else if (hash === '#categories') {
      renderHomePage(mainContent);
      setTimeout(() => document.querySelector('.category-grid')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (hash.startsWith('#product/')) {
      const productId = hash.replace('#product/', '');
      renderHomePage(mainContent);
      openProductModal(productId);
    } else if (hash === '#offers') {
      renderOffersPage(mainContent);
    } else if (hash === '#checkout') {
      renderCheckoutPage(mainContent);
    } else if (hash === '#about') {
      renderAboutPage(mainContent);
    } else if (hash === '#contact') {
      renderContactPage(mainContent);
    } else {
      renderHomePage(mainContent);
    }
  }

  function renderAll() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-theme', currentTheme);
    renderNavbar();
    renderFooter();
    renderCartDrawer();
    renderFloatingWhatsApp();
    handleRoute();
  }

  window.addEventListener('hashchange', handleRoute);

  document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    renderAll();
  });
})();
