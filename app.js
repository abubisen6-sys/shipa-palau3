// Multi-language support and page transitions
(function() {
  'use strict';

  // Translations object
  const translations = {
    // Common
    menu: { en: "Menu", ru: "Меню", kz: "Мәзір" },
    book: { en: "Book", ru: "Бронь", kz: "Брондау" },
    about: { en: "About", ru: "О нас", kz: "Біз туралы" },
    barMenu: { en: "Bar Menu", ru: "Бар меню", kz: "Бар мәзірі" },
    desserts: { en: "Desserts", ru: "Десерты", kz: "Десерттер" },
    salad: { en: "Salad", ru: "Салат", kz: "Салат" },
    mainFoods: { en: "Main Foods", ru: "Основные блюда", kz: "Негізгі тағамдар" },
    soups: { en: "Soups", ru: "Супы", kz: "Сорпалар" },
    pizzas: { en: "Pizzas", ru: "Пиццы", kz: "Пиццалар" },
    sideDishes: { en: "Side Dishes", ru: "Гарниры", kz: "Қосымша тағамдар" },
    platters: { en: "Platters", ru: "Ассорти", kz: "Тағам топтамалары" },
    breads: { en: "Breads", ru: "Хлеб", kz: "Нандар" },
    sets: { en: "Sets", ru: "Сеты", kz: "Сеттер" },
    ourMenu: { en: "Our Menu", ru: "Наше меню", kz: "Біздің мәзір" },
    comeVisit: { en: "Come Visit Us", ru: "Приходите к нам", kz: "Бізге келіңіз" },
    openDaily: { en: "Open daily · 11:00 — 23:00", ru: "Ежедневно · 11:00 — 23:00", kz: "Күн сайын · 11:00 — 23:00" },
    teas: { en: "Teas", ru: "Чаи", kz: "Шәйлар" },
    lemonades: { en: "Lemonades", ru: "Лимонады", kz: "Лимонадтар" },
    drinksCategory: { en: "Drinks", ru: "Напитки", kz: "Сусындар" },
    coldDrinks: { en: "Cold Drinks", ru: "Холодные напитки", kz: "Салқын сусындар" },
    milkshakes: { en: "Milkshakes", ru: "Милкшейки", kz: "Милкшейктер" },
    smoothies: { en: "Smoothies", ru: "Смузи", kz: "Смузи" },
    iceTea: { en: "Ice Tea", ru: "Айс-ти", kz: "Айс-ти" },
    cakesForTea: { en: "Cakes for Tea", ru: "Пирожные к чаю", kz: "Шәйға тәттілер" },
    
    // Index page
    subtitle: { en: "Family Restaurant", ru: "Семейный ресторан", kz: "Отбасылық дәмхана" },
    tagline: { en: "The art of authentic palau", ru: "Искусство настоящего плова", kz: "Нағыз палаудың өнері" },
    heroDesc: { en: "Experience the centuries-old tradition of Central Asian cuisine, crafted with love and the finest ingredients.", ru: "Откройте для себя вековые традиции центральноазиатской кухни, приготовленной с любовью и лучшими ингредиентами.", kz: "Ғасырлық дәстүрлі орталық азия тағамдарын, сүйіспеншілікпен және ең жақсы ингредиенттермен дайындалған." },
    
    // WhatsApp booking message
    whatsappBookMessage: {
      en: "Hello! I would like to book and place an order.",
      ru: "Здравствуйте! Хотел(а) бы забронировать и сделать заказ.",
      kz: "Сәлеметсіз бе! Мен брондағым және тапсырыс бергім келеді."
    },
    
    // Contact page
    contactDesc: { en: "We'd love to welcome you to our table. Experience the warmth of Central Asian hospitality and the unforgettable taste of authentic palau.", ru: "Мы будем рады приветствовать вас за нашим столом. Почувствуйте тепло центральноазиатского гостеприимства и незабываемый вкус настоящего плова.", kz: "Сізді дастарханымызда қарсы алуға қуаныштымыз. Орталық Азия қонақжайлылығының жылуын және нағыз палаудың ұмытылмас дәмін сезініңіз." },
    contactQuote: { en: '"Every dish tells a story of tradition."', ru: '"Каждое блюдо рассказывает историю традиций."', kz: '"Әр тағам дәстүр туралы әңгімелейді."' },
    
    // Menu items
    menuItems: {
      "Shipa Plov": { en: "Shipa Plov", ru: "Шипа плов", kz: "Шипа палау" },
      "Royal Plov": { en: "Kazy Plov", ru: "Казы плов", kz: "Қазы палау" },
      "Chicken Plov": { en: "Chicken Plov", ru: "Плов ", kz: "Сүбе палау" },
      "Vegetable Plov": { en: "Vegetable Plov", ru: "Овощной плов", kz: "Көкөністі палау" },
      "Quail Egg Plov": { en: "Quail Egg Plov", ru: "Плов с перепелиными яйцами", kz: "Бөдене жұмыртқалы палау" },
      "Shah Plov": { en: "Shah Plov", ru: "Шах плов", kz: "Шах палау" },
      "Bukhara Plov": { en: "Bukhara Plov", ru: "Бухарский плов", kz: "Бұхара палауы" },
      "Samarkand Plov": { en: "Samarkand Plov", ru: "Самаркандский плов", kz: "Самарқанд палауы" },
      "Tashkent Plov": { en: "Tashkent Plov", ru: "Ташкентский плов", kz: "Ташкент палауы" },
      "Festive Plov": { en: "Festive Plov", ru: "Праздничный плов", kz: "Мерекелік палау" },
      "Lamb Samsa": { en: "Lamb Samsa", ru: "Самса с бараниной", kz: "Қой етті самса" },
      "Beef Manti": { en: "Beef Manti", ru: "Манты с говядиной", kz: "Сиыр етті мәнті" },
      "Lamb Shashlik": { en: "Lamb Shashlik", ru: "Шашлык из баранины", kz: "Қой шашлық" },
      "Chicken Shashlik": { en: "Chicken Shashlik", ru: "Шашлык из курицы", kz: "Тауық шашлық" },
      "Lagman Soup": { en: "Lagman Soup", ru: "Суп Лагман", kz: "Лағман сорпа" },
      "Shorpa": { en: "Shorpa", ru: "Шорпа", kz: "Сорпа" },
      "Achichuk Salad": { en: "Achichuk Salad", ru: "Салат Ачичук", kz: "Ашшық салат" },
      "Tandoor Bread": { en: "Tandoor Bread", ru: "Тандырная лепёшка", kz: "Тандыр нан" },
      "Dolma": { en: "Dolma", ru: "Долма", kz: "Долма" },
      "Qozon Kabob": { en: "Qozon Kabob", ru: "Казан кабоб", kz: "Қазан кәбап" },
      "Naryn": { en: "Naryn", ru: "Нарын", kz: "Нарын" },
      "Chuchvara": { en: "Chuchvara", ru: "Чучвара", kz: "Шүшпара" },
      "Hasip": { en: "Hasip", ru: "Хасип", kz: "Хасіп" },
      "Norin": { en: "Norin", ru: "Норин", kz: "Норын" },
      "Dimlama": { en: "Dimlama", ru: "Димлама", kz: "Дімлама" },
      "Ayran": { en: "Ayran", ru: "Айран", kz: "Айран" },
      "Kompot": { en: "Kompot", ru: "Компот", kz: "Компот" },
      "Green Tea": { en: "Green Tea", ru: "Зелёный чай", kz: "Жасыл шай" },
      "Black Tea": { en: "Black Tea", ru: "Чёрный чай", kz: "Қара шай" },
      "Fresh Pomegranate Juice": { en: "Fresh Pomegranate Juice", ru: "Свежий гранатовый сок", kz: "Жаңа анар шырыны" },
      "Halva": { en: "Halva", ru: "Халва", kz: "Халуа" },
      "Chak-Chak": { en: "Chak-Chak", ru: "Чак-чак", kz: "Шақ-шақ" },
      "Navat": { en: "Navat", ru: "Набат", kz: "Нәбәт" },
      "Parvarda": { en: "Parvarda", ru: "Парварда", kz: "Парварда" },
      "Baklava": { en: "Baklava", ru: "Баклава", kz: "Баклава" },
      "Osh with Kazy": { en: "Osh with Kazy", ru: "Ош с казы", kz: "Қазы қосылған ош" },
      "Beshbarmak": { en: "Beshbarmak", ru: "Бешбармак", kz: "Бешбармақ" },
      "Mastava": { en: "Mastava", ru: "Мастава", kz: "Мастава" },
      "Mixed Kebab": { en: "Mixed Kebab", ru: "Микс кебаб", kz: "Арала кебаб" },
      "Uzbek Vinegret": { en: "Uzbek Vinegret", ru: "Узбекский винегрет", kz: "Өзбек винегреті" },
      "Vinegret Salad": { en: "Vinegret Salad", ru: "Салат Винегрет", kz: "Винегрет салаты" },
      "Garden Salad": { en: "Garden Salad", ru: "Овощной салат", kz: "Көкөніс салаты" },
      "Shakarob": { en: "Shakarob", ru: "Шакароб", kz: "Шақароб" },
      "Greek Salad": { en: "Greek Salad", ru: "Греческий салат", kz: "Грек салаты" },
      "Cabbage Salad": { en: "Cabbage Salad", ru: "Капустный салат", kz: "Орамжапырақ салаты" },
      "Radish Salad": { en: "Radish Salad", ru: "Салат из редьки", kz: "Шалғам салаты" },
      "Carrot Salad": { en: "Carrot Salad", ru: "Морковный салат", kz: "Сәбіз салаты" },
      "Cucumber Salad": { en: "Cucumber Salad", ru: "Огуречный салат", kz: "Қияр салаты" },
      "Mixed Greens": { en: "Mixed Greens", ru: "Микс зелени", kz: "Жасылдар миксі" },
      "Spicy Carrot Salad": { en: "Spicy Carrot Salad", ru: "Острый морковный салат", kz: "Ащы сәбіз салаты" },
      "Onion Salad": { en: "Onion Salad", ru: "Луковый салат", kz: "Пияз салаты" },
      "Tomato Salad": { en: "Tomato Salad", ru: "Томатный салат", kz: "Қызанақ салаты" },
      "House Salad": { en: "House Salad", ru: "Фирменный салат", kz: "Үй салаты" },
      "Mineral Water": { en: "Mineral Water", ru: "Минеральная вода", kz: "Минералды су" },
      "Sparkling Water": { en: "Sparkling Water", ru: "Газированная вода", kz: "Газдалған су" },
      "Coffee": { en: "Coffee", ru: "Кофе", kz: "Кофе" },
      "Mushroom Soup": { en: "Mushroom Soup", ru: "Грибной суп", kz: "Саңырауқұлақ сорпа" },
      "Chicken Soup": { en: "Chicken Soup", ru: "Куриный суп", kz: "Тауық сорпа" },
      "Vegetable Soup": { en: "Vegetable Soup", ru: "Овощной суп", kz: "Көкөніс сорпа" },
      "Margherita Pizza": { en: "Margherita Pizza", ru: "Пицца Маргарита", kz: "Маргарита пиццасы" },
      "Pepperoni Pizza": { en: "Pepperoni Pizza", ru: "Пицца Пепперони", kz: "Пепперони пиццасы" },
      "Meat Lovers Pizza": { en: "Meat Lovers Pizza", ru: "Пицца мясная", kz: "Етті пицца" },
      "Vegetarian Pizza": { en: "Vegetarian Pizza", ru: "Пицца овощная", kz: "Көкөністі пицца" },
      "Cheese Pizza": { en: "Cheese Pizza", ru: "Пицца сырная", kz: "Сырлы пицца" },
      "French Fries": { en: "French Fries", ru: "Картофель фри", kz: "Фри картоп" },
      "Pickled Vegetables": { en: "Pickled Vegetables", ru: "Маринованные овощи", kz: "Маринадталған көкөністер" },
      "Mixed Grill Platter": { en: "Mixed Grill Platter", ru: "Сет гриль микс", kz: "Гриль аралас сет" },
      "Family Platter": { en: "Family Platter", ru: "Сет семейный", kz: "Отбасылық сет" },
      "Chef's Platter": { en: "Chef's Platter", ru: "Сет от шефа", kz: "Аспаз сеті" },
      "Lavash": { en: "Lavash", ru: "Лаваш", kz: "Лаваш" },
      "Naan": { en: "Naan", ru: "Нан", kz: "Нан" },
      "Obi-Non": { en: "Obi-Non", ru: "Оби-нон", kz: "Оби-нон" },
      "Qatlama": { en: "Qatlama", ru: "Катлама", kz: "Қатлама" },
      "Samarkand Bread": { en: "Samarkand Bread", ru: "Самаркандский хлеб", kz: "Самарқанд наны" },
      "Bukhara Bread": { en: "Bukhara Bread", ru: "Бухарский хлеб", kz: "Бұхара наны" },
      "Thin Lavash": { en: "Thin Lavash", ru: "Тонкий лаваш", kz: "Жұқа лаваш" },
      "Garlic Bread": { en: "Garlic Bread", ru: "Чесночный хлеб", kz: "Сарымсақты нан" },
      "Sesame Bread": { en: "Sesame Bread", ru: "Кунжутный хлеб", kz: "Күнжітті нан" },
      "Pita Bread": { en: "Pita Bread", ru: "Пита", kz: "Пита" },
      "Bread Basket": { en: "Bread Basket", ru: "Корзина хлеба", kz: "Нан себеті" },
      "Lunch Set A": { en: "Lunch Set A", ru: "Ланч-сет A", kz: "Ланч сет A" },
      "Lunch Set B": { en: "Lunch Set B", ru: "Ланч-сет B", kz: "Ланч сет B" },
      "Family Set": { en: "Family Set", ru: "Семейный сет", kz: "Отбасылық сет" },
      "Premium Set": { en: "Premium Set", ru: "Премиум сет", kz: "Премиум сет" }
    , "Earl Grey": { en: "Earl Grey", ru: "Эрл Грей", kz: "Ерл Грей" },
      "English Breakfast": { en: "English Breakfast", ru: "Английский завтрак", kz: "Ағылшын таңғы шайы" },
      "Jasmine Tea": { en: "Jasmine Tea", ru: "Жасминовый чай", kz: "Жасмин шайы" },
      "Sencha": { en: "Sencha", ru: "Сэнтя", kz: "Сенча" },
      "Oolong Tea": { en: "Oolong Tea", ru: "Улун", kz: "Улун шайы" },
      "Chamomile Tea": { en: "Chamomile Tea", ru: "Ромашковый чай", kz: "Түймедақ шайы" },
      "Peppermint Tea": { en: "Peppermint Tea", ru: "Мятный чай", kz: "Жалбыз шайы" },
      "Hibiscus Tea": { en: "Hibiscus Tea", ru: "Гибискус", kz: "Каркаде" },
      "Masala Chai": { en: "Masala Chai", ru: "Масала чай", kz: "Масала шай" },
      "Lemon Tea": { en: "Lemon Tea", ru: "Чай с лимоном", kz: "Лимонды шай" },
      "Rosehip Tea": { en: "Rosehip Tea", ru: "Чай из шиповника", kz: "Итмұрын шайы" },
      "Bergamot Tea": { en: "Bergamot Tea", ru: "Чай с бергамотом", kz: "Бергамотты шай" },
      "Milk Tea": { en: "Milk Tea", ru: "Чай с молоком", kz: "Сүтті шай" },
      "Classic Lemonade": { en: "Classic Lemonade", ru: "Классический лимонад", kz: "Классикалық лимонад" },
      "Strawberry Lemonade": { en: "Strawberry Lemonade", ru: "Клубничный лимонад", kz: "Құлпынай лимонады" },
      "Raspberry Lemonade": { en: "Raspberry Lemonade", ru: "Малиновый лимонад", kz: "Таңқурай лимонады" },
      "Blueberry Lemonade": { en: "Blueberry Lemonade", ru: "Черничный лимонад", kz: "Көкжидек лимонады" },
      "Mint Lemonade": { en: "Mint Lemonade", ru: "Мятный лимонад", kz: "Жалбыз лимонады" },
      "Ginger Lemonade": { en: "Ginger Lemonade", ru: "Имбирный лимонад", kz: "Зімбір лимонады" },
      "Peach Lemonade": { en: "Peach Lemonade", ru: "Персиковый лимонад", kz: "Шабдалы лимонады" },
      "Mango Lemonade": { en: "Mango Lemonade", ru: "Манговый лимонад", kz: "Манго лимонады" },
      "Cola": { en: "Cola", ru: "Кола", kz: "Кола" },
      "Orange Soda": { en: "Orange Soda", ru: "Апельсиновая сода", kz: "Апельсин содасы" },
      "Lemon-Lime Soda": { en: "Lemon-Lime Soda", ru: "Лимон-лайм сода", kz: "Лимон-лайм содасы" },
      "Tonic Water": { en: "Tonic Water", ru: "Тоник", kz: "Тоник суы" },
      "Iced Coffee": { en: "Iced Coffee", ru: "Холодный кофе", kz: "Салқын кофе" },
      "Apple Juice": { en: "Apple Juice", ru: "Яблочный сок", kz: "Алма шырыны" },
      "Orange Juice": { en: "Orange Juice", ru: "Апельсиновый сок", kz: "Апельсин шырыны" },
      "Vanilla Milkshake": { en: "Vanilla Milkshake", ru: "Ванильный милкшейк", kz: "Ванильді милкшейк" },
      "Chocolate Milkshake": { en: "Chocolate Milkshake", ru: "Шоколадный милкшейк", kz: "Шоколадты милкшейк" },
      "Strawberry Milkshake": { en: "Strawberry Milkshake", ru: "Клубничный милкшейк", kz: "Құлпынай милкшейк" },
      "Banana Milkshake": { en: "Banana Milkshake", ru: "Банановый милкшейк", kz: "Банан милкшейк" },
      "Caramel Milkshake": { en: "Caramel Milkshake", ru: "Карамельный милкшейк", kz: "Карамельді милкшейк" },
      "Berry Smoothie": { en: "Berry Smoothie", ru: "Ягодный смузи", kz: "Жидек смузи" },
      "Tropical Smoothie": { en: "Tropical Smoothie", ru: "Тропический смузи", kz: "Тропикалық смузи" },
      "Green Smoothie": { en: "Green Smoothie", ru: "Зелёный смузи", kz: "Жасыл смузи" },
      "Mango Banana Smoothie": { en: "Mango Banana Smoothie", ru: "Смузи манго-банан", kz: "Манго-банан смузи" },
      "Peach Iced Tea": { en: "Peach Iced Tea", ru: "Персиковый айс ти", kz: "Шабдалы мұзды шай" },
      "Lemon Iced Tea": { en: "Lemon Iced Tea", ru: "Лимонный айс ти", kz: "Лимон мұзды шай" },
      "Raspberry Iced Tea": { en: "Raspberry Iced Tea", ru: "Малиновый айс ти", kz: "Таңқурай мұзды шай" },
      "Cheesecake": { en: "Cheesecake", ru: "Чизкейк", kz: "Чизкейк" },
      "Honey Cake": { en: "Honey Cake", ru: "Медовик", kz: "Медовик" },
      "Chocolate Cake": { en: "Chocolate Cake", ru: "Шоколадный торт", kz: "Шоколадты торт" },
      "Carrot Cake": { en: "Carrot Cake", ru: "Морковный торт", kz: "Сәбіз торт" },
      "Red Velvet Cake": { en: "Red Velvet Cake", ru: "Красный бархат", kz: "Қызыл бархат" },
      "Tiramisu": { en: "Tiramisu", ru: "Тирамису", kz: "Тирамису" },
      "Lemon Tart": { en: "Lemon Tart", ru: "Лимонный тарт", kz: "Лимонды тарт" },
      "Apple Pie": { en: "Apple Pie", ru: "Яблочный пирог", kz: "Алма бәліші" },
      "Walnut Cake": { en: "Walnut Cake", ru: "Ореховый торт", kz: "Жаңғақты торт" },
      "Fruit Tart": { en: "Fruit Tart", ru: "Фруктовый тарт", kz: "Жемісті тарт" },
      "Лағман гуйру": { en: "Lagman Guyru", ru: "Лагман гуйру", kz: "Лағман гуйру" },
      "Лағман цомян": { en: "Lagman Tsomyan", ru: "Лагман цомян", kz: "Лағман цомян" },
      "Балғын қуырдақ": { en: "Fresh Kuyrdak", ru: "Балғын куырдак", kz: "Балғын қуырдақ" },
      "Бал қуырдақ": { en: "Honey Kuyrdak", ru: "Медовый куырдак", kz: "Бал қуырдақ" },
      "Бешбармақ": { en: "Beshbarmak", ru: "Бешбармак", kz: "Бешбармақ" },
      "Манты": { en: "Manti", ru: "Манты", kz: "Манты" },
      "Қазан кебаб": { en: "Qazan Kebab", ru: "Казан кебаб", kz: "Қазан кебаб" },
      "Шипа палау": { en: "Shipa Plov", ru: "Шипа плов", kz: "Шипа палау" },
      "Қазы палау": { en: "Kazy Plov", ru: "Казы плов", kz: "Қазы палау" },
      "Сүбе палау": { en: "Sube Plov", ru: "Сюбе плов", kz: "Сүбе палау" },
      "Қазы+сүбе палау": { en: "Kazy+Sube Plov", ru: "Казы+сюбе плов", kz: "Қазы+сүбе палау" },
      "Балық": { en: "Fish", ru: "Рыба", kz: "Балық" },
      "Долма": { en: "Dolma", ru: "Долма", kz: "Долма" },
      "Нан салма": { en: "Nan Salma", ru: "Нан салма", kz: "Нан салма" },
      "Рамен": { en: "Ramen", ru: "Рамен", kz: "Рамен" },
      "Кілегейлі рамен": { en: "Creamy Ramen", ru: "Сливочный рамен", kz: "Кілегейлі рамен" },
      "Қой сорпа": { en: "Lamb Soup", ru: "Суп из баранины", kz: "Қой сорпа" },
      "Нохат сорпа": { en: "Nohat Soup", ru: "Суп нохат", kz: "Нохат сорпа" },
      "Көкөніс сорпа": { en: "Vegetable Soup", ru: "Овощной суп", kz: "Көкөніс сорпа" },
      "Кеспе көже": { en: "Kespe Kozhe", ru: "Кеспе коже", kz: "Кеспе көже" },
      "Түшпара сорпа": { en: "Tushpara Soup", ru: "Суп с тушпарой", kz: "Түшпара сорпа" },
      "Шипа": { en: "Shipa", ru: "Шипа", kz: "Шипа" },
      "Пеперони": { en: "Pepperoni", ru: "Пепперони", kz: "Пеперони" },
      "Маргарита": { en: "Margherita", ru: "Маргарита", kz: "Маргарита" },
      "Болонеза": { en: "Bolognese", ru: "Болоньезе", kz: "Болонеза" },
      "4 мезгіл": { en: "Four Seasons", ru: "Четыре сезона", kz: "4 мезгіл" },
      "Картоп фри": { en: "French Fries", ru: "Картофель фри", kz: "Картоп фри" },
      "Наггетстер": { en: "Nuggets", ru: "Наггетсы", kz: "Наггетстер" },
      "Кесілген жемістер": { en: "Sliced Fruits", ru: "Нарезанные фрукты", kz: "Кесілген жемістер" },
      "Ет ассорти": { en: "Meat Platter", ru: "Мясное ассорти", kz: "Ет ассорти" },
      "Тұзды ассорти": { en: "Pickle Platter", ru: "Ассорти солений", kz: "Тұзды ассорти" },
      "Самса етпен": { en: "Samsa with Meat", ru: "Самса с мясом", kz: "Самса етпен" },
      "Самса асқабақпен": { en: "Samsa with Pumpkin", ru: "Самса с тыквой", kz: "Самса асқабақпен" },
      "Өрме нан": { en: "Braided Bread", ru: "Хлеб косичка", kz: "Өрме нан" },
      "Нан": { en: "Bread", ru: "Хлеб", kz: "Нан" },
      "Қара нан": { en: "Rye Bread", ru: "Чёрный хлеб", kz: "Қара нан" },
      "Қаттама пиязбен": { en: "Qatlama with Onion", ru: "Катлама с луком", kz: "Қаттама пиязбен" },
      "Қаттама шекермен": { en: "Qatlama with Sugar", ru: "Катлама с сахаром", kz: "Қаттама шекермен" },
      "Қуырылған түшпара": { en: "Fried Tushpara", ru: "Жареная тушпара", kz: "Қуырылған түшпара" },
      "Бауырсақ": { en: "Baursak", ru: "Баурсаки", kz: "Бауырсақ" },
      "Чебуреки (2 дана)": { en: "Chebureki (2 pcs)", ru: "Чебуреки (2 шт)", kz: "Чебуреки (2 дана)" },
      "Самса себет": { en: "Samsa Basket", ru: "Корзина самсы", kz: "Самса себет" },
      "Нан себет": { en: "Bread Basket", ru: "Корзина хлеба", kz: "Нан себет" },
      "Бешбармақ (5 адам)": { en: "Beshbarmak (5 ppl)", ru: "Бешбармак (5 чел)", kz: "Бешбармақ (5 адам)" },
      "Бешбармақ қабырғамен (8 адам)": { en: "Beshbarmak with ribs (8 ppl)", ru: "Бешбармак с рёбрами (8 чел)", kz: "Бешбармақ қабырғамен (8 адам)" },
      "Қуырдақ (5 адам)": { en: "Kuyrdak (5 ppl)", ru: "Куырдак (5 чел)", kz: "Қуырдақ (5 адам)" },
      "Әжемнің асқабағы (8 адам)": { en: "Grandma's Pumpkin (8 ppl)", ru: "Тыква по-бабушкиному (8 чел)", kz: "Әжемнің асқабағы (8 адам)" },
      "Шипа шәй": { en: "Shipa Tea", ru: "Шипа чай", kz: "Шипа шәй" },
      "Түркістан шәй": { en: "Turkistan Tea", ru: "Туркестанский чай", kz: "Түркістан шәй" },
      "Жидекті шәй": { en: "Berry Tea", ru: "Ягодный чай", kz: "Жидекті шәй" },
      "Сүтті шәй": { en: "Milk Tea", ru: "Чай с молоком", kz: "Сүтті шәй" },
      "Қара шәй": { en: "Black Tea", ru: "Чёрный чай", kz: "Қара шәй" },
      "Көк шәй": { en: "Green Tea", ru: "Зелёный чай", kz: "Көк шәй" },
      "Жемісті шәй": { en: "Fruit Tea", ru: "Фруктовый чай", kz: "Жемісті шәй" },
      "Апельсинді шәй": { en: "Orange Tea", ru: "Апельсиновый чай", kz: "Апельсинді шәй" },
      "Зімбір-лимон шәйі": { en: "Ginger-Lemon Tea", ru: "Имбирно-лимонный чай", kz: "Зімбір-лимон шәйі" },
      "Теңіз шырғанағы шәйі": { en: "Sea Buckthorn Tea", ru: "Облепиховый чай", kz: "Теңіз шырғанағы шәйі" },
      "Марокко шәйі": { en: "Moroccan Tea", ru: "Марокканский чай", kz: "Марокко шәйі" },
      "Алмалы шәй": { en: "Apple Tea", ru: "Яблочный чай", kz: "Алмалы шәй" },
      "Қара шәй стаканмен": { en: "Black Tea (glass)", ru: "Чёрный чай (стакан)", kz: "Қара шәй стаканмен" },
      "Көк шәй стаканмен": { en: "Green Tea (glass)", ru: "Зелёный чай (стакан)", kz: "Көк шәй стаканмен" },
      "Сүт шәй стаканмен": { en: "Milk Tea (glass)", ru: "Молочный чай (стакан)", kz: "Сүт шәй стаканмен" },
      "Мохито": { en: "Mojito", ru: "Мохито", kz: "Мохито" },
      "Киви-лайм": { en: "Kiwi-Lime", ru: "Киви-лайм", kz: "Киви-лайм" },
      "Манго-маракуя": { en: "Mango-Passion", ru: "Манго-маракуйя", kz: "Манго-маракуя" },
      "Жидекті": { en: "Berry", ru: "Ягодный", kz: "Жидекті" },
      "Тропикалық": { en: "Tropical", ru: "Тропический", kz: "Тропикалық" },
      "Цитрусты": { en: "Citrus", ru: "Цитрусовый", kz: "Цитрусты" },
      "Ананас-апельсин": { en: "Pineapple-Orange", ru: "Ананас-апельсин", kz: "Ананас-апельсин" },
      "Апельсинді": { en: "Orange", ru: "Апельсиновый", kz: "Апельсинді" },
      "Компот": { en: "Kompot", ru: "Компот", kz: "Компот" },
      "Қымыз": { en: "Kymyz", ru: "Кумыс", kz: "Қымыз" },
      "Піскен айран": { en: "Baked Ayran", ru: "Печёный айран", kz: "Піскен айран" },
      "Coca-Cola, Fanta, Sprite": { en: "Coca-Cola, Fanta, Sprite", ru: "Coca-Cola, Fanta, Sprite", kz: "Coca-Cola, Fanta, Sprite" },
      "Coca-Cola банка": { en: "Coca-Cola (can)", ru: "Coca-Cola (банка)", kz: "Coca-Cola банка" },
      "Coca-Cola, Fanta, Sprite шыны": { en: "Coca-Cola, Fanta, Sprite (glass)", ru: "Coca-Cola, Fanta, Sprite (стекло)", kz: "Coca-Cola, Fanta, Sprite шыны" },
      "BonAqua газсыз/газды": { en: "BonAqua still/sparkling", ru: "BonAqua без газа/с газом", kz: "BonAqua газсыз/газды" },
      "Borjomi шыны": { en: "Borjomi (glass)", ru: "Borjomi (стекло)", kz: "Borjomi шыны" },
      "Piko ассорти": { en: "Piko assorted", ru: "Piko ассорти", kz: "Piko ассорти" },
      "Натахтари ассорти": { en: "Natakhtari assorted", ru: "Натахтари ассорти", kz: "Натахтари ассорти" },
      "Балалар шырыны Piko": { en: "Piko kids juice", ru: "Детский сок Piko", kz: "Балалар шырыны Piko" },
      "Fuse tea": { en: "Fuse tea", ru: "Fuse tea", kz: "Fuse tea" },
      "Банан": { en: "Banana", ru: "Банан", kz: "Банан" },
      "Құлпынай": { en: "Strawberry", ru: "Клубника", kz: "Құлпынай" },
      "Шоколад": { en: "Chocolate", ru: "Шоколад", kz: "Шоколад" },
      "Сүтті": { en: "Milk", ru: "Молочный", kz: "Сүтті" },
      "Орео": { en: "Oreo", ru: "Орео", kz: "Орео" },
      "Құлпынай-банан": { en: "Strawberry-Banana", ru: "Клубника-банан", kz: "Құлпынай-банан" },
      "Таңқурай-банан": { en: "Raspberry-Banana", ru: "Малина-банан", kz: "Таңқурай-банан" },
      "Айс-ти Апельсинді": { en: "Iced Tea Orange", ru: "Айс-ти апельсиновый", kz: "Айс-ти Апельсинді" },
      "Айс-ти Жидекті": { en: "Iced Tea Berry", ru: "Айс-ти ягодный", kz: "Айс-ти Жидекті" },
      "Айс-ти Алмалы": { en: "Iced Tea Apple", ru: "Айс-ти яблочный", kz: "Айс-ти Алмалы" },
      "Испан чизкейк": { en: "Basque Cheesecake", ru: "Испанский чизкейк", kz: "Испан чизкейк" },
      "Орео чизкейк": { en: "Oreo Cheesecake", ru: "Орео чизкейк", kz: "Орео чизкейк" },
      "Сүтті қыз": { en: "Milk Girl Cake", ru: "Торт «Молочная девочка»", kz: "Сүтті қыз" },
      "Меренга орамы": { en: "Meringue Roll", ru: "Меренговый рулет", kz: "Меренга орамы" },
      "Карамель чизкейк": { en: "Caramel Cheesecake", ru: "Карамельный чизкейк", kz: "Карамель чизкейк" },
      "Пломбир": { en: "Plombir", ru: "Пломбир", kz: "Пломбир" },
      "Балды бәліш": { en: "Honey Pie", ru: "Медовый пирог", kz: "Балды бәліш" },
      "Наполеон": { en: "Napoleon", ru: "Наполеон", kz: "Наполеон" },
      "Тары чизкейк": { en: "Millet Cheesecake", ru: "Чизкейк из тары", kz: "Тары чизкейк" },
      "Сникерс": { en: "Snickers", ru: "Сникерс", kz: "Сникерс" },
      "Мадлен печеньесі": { en: "Madeleine Cookie", ru: "Печенье мадлен", kz: "Мадлен печеньесі" },
      "Ачучук": { en: "Achuchuk", ru: "Ачучук", kz: "Ачучук" },
      "Грек салаты": { en: "Greek Salad", ru: "Греческий салат", kz: "Грек салаты" },
      "Балғын салат": { en: "Fresh Salad", ru: "Свежий салат", kz: "Балғын салат" },
      "Қытырлак баклажан": { en: "Crispy Eggplant", ru: "Хрустящий баклажан", kz: "Қытырлак баклажан" },
      "Цезарь": { en: "Caesar", ru: "Цезарь", kz: "Цезарь" },
      "Тай салаты": { en: "Thai Salad", ru: "Тайский салат", kz: "Тай салаты" },
      "Үй салат": { en: "House Salad", ru: "Домашний салат", kz: "Үй салат" },
      "Витамин салат": { en: "Vitamin Salad", ru: "Витаминный салат", kz: "Витамин салат" },
      "Тұздалған капуста": { en: "Pickled Cabbage", ru: "Квашеная капуста", kz: "Тұздалған капуста" },
      "Шипа салат": { en: "Shipa Salad", ru: "Салат Шипа", kz: "Шипа салат" },
      "Ханшайым салат": { en: "Princess Salad", ru: "Салат «Принцесса»", kz: "Ханшайым салат" },
      "Ханзада салаты": { en: "Prince Salad", ru: "Салат «Принц»", kz: "Ханзада салаты" },
      "Винегрет": { en: "Vinaigrette", ru: "Винегрет", kz: "Винегрет" },
      "Брокколи салат": { en: "Broccoli Salad", ru: "Салат с брокколи", kz: "Брокколи салат" }
    },
    
    menuDescriptions: {
      "Lamb, rice, carrots, cumin": { en: "chevaline, rice, carrots, shipa oil", ru: "Конина, рис, морковь, Шипа масло", kz: "Жылқы еті, күріш, сәбіз, шипа майы" },
      "Beef, raisins, chickpeas, saffron": { en: "Beef, raisins, chickpeas, saffron", ru: "Говядина, изюм, нут, шафран", kz: "Сиыр еті, мейіз, нұт, зәпіран" },
      "Tender chicken, herbs, barberries": { en: "Tender chicken, herbs, barberries", ru: "Нежная курица, травы, барбарис", kz: "Жұмсақ тауық, шөптер, барбарис" },
      "Seasonal vegetables, fragrant spices": { en: "Seasonal vegetables, fragrant spices", ru: "Сезонные овощи, ароматные специи", kz: "Маусымдық көкөністер, хош иісті дәмдеуіштер" },
      "Rice, quail eggs, lamb": { en: "Rice, quail eggs, lamb", ru: "Рис, перепелиные яйца, баранина", kz: "Күріш, бөдене жұмыртқасы, қой еті" },
      "Wrapped in lavash, dried fruits": { en: "Wrapped in lavash, dried fruits", ru: "В лаваше, сухофрукты", kz: "Лаваштан оралған, кептірілген жемістер" },
      "Traditional Bukhara-style with chickpeas": { en: "Traditional Bukhara-style with chickpeas", ru: "Традиционный бухарский с нутом", kz: "Дәстүрлі Бұхара стилінде нұтпен" },
      "Yellow carrots, lamb ribs": { en: "Yellow carrots, lamb ribs", ru: "Жёлтая морковь, бараньи рёбрышки", kz: "Сары сәбіз, қой қабырғасы" },
      "Brown rice, tender beef": { en: "Brown rice, tender beef", ru: "Бурый рис, нежная говядина", kz: "Қоңыр күріш, жұмсақ сиыр еті" },
      "Premium lamb, chestnuts, quince": { en: "Premium lamb, chestnuts, quince", ru: "Отборная баранина, каштаны, айва", kz: "Премиум қой еті, каштан, айуа" },
      "Flaky pastry, spiced lamb filling": { en: "Flaky pastry, spiced lamb filling", ru: "Слоёное тесто, начинка из баранины", kz: "Қабатты қамыр, дәмді қой еті" },
      "Steamed dumplings, onion, spices": { en: "Steamed dumplings, onion, spices", ru: "Паровые пельмени, лук, специи", kz: "Бумен піскен, пияз, дәмдеуіштер" },
      "Charcoal-grilled marinated lamb": { en: "Charcoal-grilled marinated lamb", ru: "Маринованная баранина на углях", kz: "Көмірде пісірілген маринадталған қой еті" },
      "Tender chicken, special marinade": { en: "Tender chicken, special marinade", ru: "Нежная курица, особый маринад", kz: "Жұмсақ тауық, ерекше маринад" },
      "Hand-pulled noodles, rich broth": { en: "Hand-pulled noodles, rich broth", ru: "Домашняя лапша, наваристый бульон", kz: "Қолмен тартылған кеспе, қою сорпа" },
      "Traditional lamb bone broth": { en: "Traditional lamb bone broth", ru: "Традиционный бараний бульон", kz: "Дәстүрлі қой сүйек сорпасы" },
      "Fresh tomato, onion, herbs": { en: "Fresh tomato, onion, herbs", ru: "Свежие помидоры, лук, зелень", kz: "Жаңа қызанақ, пияз, шөптер" },
      "Freshly baked in clay oven": { en: "Freshly baked in clay oven", ru: "Свежевыпеченная в тандыре", kz: "Тандырда жаңа піскен" },
      "Grape leaves, rice, lamb": { en: "Grape leaves, rice, lamb", ru: "Виноградные листья, рис, баранина", kz: "Жүзім жапырағы, күріш, қой еті" },
      "Slow-cooked lamb in cast iron": { en: "Slow-cooked lamb in cast iron", ru: "Томлёная баранина в казане", kz: "Қазанда баяу пісірілген қой еті" },
      "Horse meat, thin noodles": { en: "Horse meat, thin noodles", ru: "Конина, тонкая лапша", kz: "Жылқы еті, жіңішке кеспе" },
      "Small dumplings in clear broth": { en: "Small dumplings in clear broth", ru: "Маленькие пельмени в бульоне", kz: "Кішкентай тұшпара мөлдір сорпада" },
      "Homemade lamb sausage": { en: "Homemade lamb sausage", ru: "Домашняя колбаса из баранины", kz: "Үй жасалған қой шұжық" },
      "Cold noodle dish with meat": { en: "Cold noodle dish with meat", ru: "Холодная лапша с мясом", kz: "Суық кеспе етпен" },
      "Braised vegetables with lamb": { en: "Braised vegetables with lamb", ru: "Тушёные овощи с бараниной", kz: "Қой етімен тушталған көкөністер" },
      "Traditional cold yogurt drink": { en: "Traditional cold yogurt drink", ru: "Традиционный холодный кисломолочный напиток", kz: "Дәстүрлі суық сүт қышқыл сусын" },
      "Dried fruit infusion": { en: "Dried fruit infusion", ru: "Напиток из сухофруктов", kz: "Кептірілген жеміс сусыны" },
      "Premium loose-leaf green tea": { en: "Premium loose-leaf green tea", ru: "Премиум листовой зелёный чай", kz: "Премиум жапырақты жасыл шай" },
      "Strong Uzbek black tea": { en: "Strong black tea", ru: "Крепкий чёрный чай", kz: "Қатты қара шай" },
      "Freshly pressed, seasonal": { en: "Freshly pressed, seasonal", ru: "Свежевыжатый, сезонный", kz: "Жаңа сығылған, маусымдық" },
      "Traditional sesame halva": { en: "Traditional sesame halva", ru: "Традиционная кунжутная халва", kz: "Дәстүрлі күнжітті халуа" },
      "Honey-soaked fried dough": { en: "Honey-soaked fried dough", ru: "Жареное тесто в мёде", kz: "Балға батырылған қуырылған қамыр" },
      "Crystallized sugar with spices": { en: "Crystallized sugar with spices", ru: "Кристаллизованный сахар со специями", kz: "Дәмдеуішті кристалданған қант" },
      "Traditional pulled candy": { en: "Traditional pulled candy", ru: "Традиционная тянутая конфета", kz: "Дәстүрлі созылмалы кәмпит" },
      "Layered pastry, walnuts, honey": { en: "Layered pastry, walnuts, honey", ru: "Слоёное тесто, грецкие орехи, мёд", kz: "Қабатты қамыр, грек жаңғағы, бал" },
      "Plov with horse sausage kazy": { en: "Plov with horse sausage kazy", ru: "Плов с конской колбасой казы", kz: "Қазы қосылған палау" },
      "Boiled meat with noodles": { en: "Boiled meat with noodles", ru: "Варёное мясо с лапшой", kz: "Қайнатылған ет кеспемен" },
      "Hearty rice and vegetable soup": { en: "Hearty rice and vegetable soup", ru: "Сытный суп с рисом и овощами", kz: "Құнарлы күріш пен көкөніс сорпасы" },
      "Assorted grilled meats": { en: "Assorted grilled meats", ru: "Ассорти жареного мяса", kz: "Әртүрлі гриль еттері" },
      "Beetroot, potato, carrot salad": { en: "Beetroot, potato, carrot salad", ru: "Свёкла, картофель, морковь", kz: "Қызылша, картоп, сәбіз" },
      "Tomato, cucumber, greens": { en: "Tomato, cucumber, greens", ru: "Помидор, огурец, зелень", kz: "Қызанақ, қияр, көк шөп" },
      "Tomato salad with herbs": { en: "Tomato salad with herbs", ru: "Томатный салат с зеленью", kz: "Шөптермен қызанақ салаты" },
      "Feta, olives, vegetables": { en: "Feta, olives, vegetables", ru: "Фета, оливки, овощи", kz: "Фета, зәйтүн, көкөністер" },
      "Shredded cabbage, herbs": { en: "Shredded cabbage, herbs", ru: "Шинкованная капуста, зелень", kz: "Турамалы орамжапырақ, көк шөп" },
      "Radish, greens, sour cream": { en: "Radish, greens, sour cream", ru: "Редис, зелень, сметана", kz: "Шалғам, көк, қаймақ" },
      "Grated carrot, spices": { en: "Grated carrot, spices", ru: "Тёртая морковь, специи", kz: "Үгілген сәбіз, дәмдеуіштер" },
      "Sliced cucumber, dill": { en: "Sliced cucumber, dill", ru: "Нарезанный огурец, укроп", kz: "Тілімделген қияр, аскөк" },
      "Seasonal greens blend": { en: "Seasonal greens blend", ru: "Сезонный микс зелени", kz: "Маусымдық жасылдар қоспасы" },
      "Жылқы еті, Лағман қамыры, Түрлі түсті болгар бұрышы, Пекин орамжапырағы, Сельдерей, Сарымсақ, Дәмдеуіштер": { en: "Horse meat, lagman noodles, bell peppers, napa cabbage, celery, garlic, spices", ru: "Конина, лапша лагман, болгарский перец, пекинская капуста, сельдерей, чеснок, специи", kz: "Жылқы еті, лағман қамыры, болгар бұрышы, пекин орамжапырағы, сельдерей, сарымсақ, дәмдеуіштер" },
      "Жылқы еті, Картоп, Жуа, Сливки, Дәмдеуіштер": { en: "Horse meat, potatoes, onion, cream, spices", ru: "Конина, картофель, лук, сливки, специи", kz: "Жылқы еті, картоп, жуа, сливки, дәмдеуіштер" },
      "Жылқы еті, Картоп, Пияз, Дәмдеуіштер": { en: "Horse meat, potatoes, onion, spices", ru: "Конина, картофель, лук, специи", kz: "Жылқы еті, картоп, пияз, дәмдеуіштер" },
      "Жылқы еті, Қазы, Картоп, Сәбіз, Пияз, Көк пияз, Сорпа, Қолдан жайылған қамыр": { en: "Horse meat, kazy, potatoes, carrots, onion, green onion, broth, handmade dough", ru: "Конина, казы, картофель, морковь, лук, зелёный лук, бульон, домашнее тесто", kz: "Жылқы еті, қазы, картоп, сәбіз, пияз, көк пияз, сорпа, қолдан жайылған қамыр" },
      "Тураланған жылқы еті, Пияз, Қаймақ": { en: "Minced horse meat, onion, sour cream", ru: "Фарш из конины, лук, сметана", kz: "Туралған жылқы еті, пияз, қаймақ" },
      "Қой еті, Картоп, Дәмдеуіштер": { en: "Lamb, potatoes, spices", ru: "Баранина, картофель, специи", kz: "Қой еті, картоп, дәмдеуіштер" },
      "Жылқы еті, Күріш, Сары сәбіз, Шипа майы": { en: "Horse meat, rice, yellow carrots, Shipa oil", ru: "Конина, рис, жёлтая морковь, масло Шипа", kz: "Жылқы еті, күріш, сары сәбіз, шипа майы" },
      "Жылқы еті, Қазы, Күріш, Сары сәбіз, Шипа майы": { en: "Horse meat, kazy, rice, yellow carrots, Shipa oil", ru: "Конина, казы, рис, жёлтая морковь, масло Шипа", kz: "Жылқы еті, қазы, күріш, сары сәбіз, шипа майы" },
      "Жылқы еті, Сүбе, Күріш, Сары сәбіз, Шипа майы": { en: "Horse meat, sube, rice, yellow carrots, Shipa oil", ru: "Конина, сюбе, рис, жёлтая морковь, масло Шипа", kz: "Жылқы еті, сүбе, күріш, сары сәбіз, шипа майы" },
      "Жылқы еті, Қазы, Сүбе, Күріш, Сары сәбіз, Шипа майы": { en: "Horse meat, kazy, sube, rice, yellow carrots, Shipa oil", ru: "Конина, казы, сюбе, рис, жёлтая морковь, масло Шипа", kz: "Жылқы еті, қазы, сүбе, күріш, сары сәбіз, шипа майы" },
      "Алмұрт, Черри қызанағы, Микс салат жапырақтары, Рукола, Фетакса, Зәйтүн майы": { en: "Pear, cherry tomato, mixed greens, arugula, Feta, olive oil", ru: "Груша, томаты черри, микс зелени, руккола, Фета, оливковое масло", kz: "Алмұрт, черри қызанағы, микс салат жапырақтары, рукола, фетакса, зәйтүн майы" },
      "Қызанақ, Пияз, Ащы бұрыш": { en: "Tomato, onion, hot pepper", ru: "Помидор, лук, острый перец", kz: "Қызанақ, пияз, ащы бұрыш" },
      "Қызанақ, Қияр, Болгар бұрышы, Уыз, Зәйтүн майы, Лимон суы, Салат жапырағы": { en: "Tomato, cucumber, bell pepper, Feta, olive oil, lemon juice, lettuce", ru: "Помидор, огурец, болгарский перец, Фета, оливковое масло, лимонный сок, салат", kz: "Қызанақ, қияр, болгар бұрышы, уыз, зәйтүн майы, лимон суы, салат жапырағы" },
      "Қызанақ, Қияр, Салат жапырақтары": { en: "Tomato, cucumber, lettuce", ru: "Помидор, огурец, листья салата", kz: "Қызанақ, қияр, салат жапырақтары" },
      "Қуырылған баял, Черри, Рукола, Сүзбелі ірімшік, Руколла тәттті қышқыл соусы": { en: "Fried eggplant, cherry tomatoes, arugula, curd cheese, sweet-sour arugula sauce", ru: "Жареный баклажан, томаты черри, руккола, творожный сыр, кисло-сладкий соус из рукколы", kz: "Қуырылған баял, черри, рукола, сүзбелі ірімшік, руколла тәттті қышқыл соусы" },
      "Айсберг, Черри қызанағы, Тауық еті, Кептірілген нан, Цезарь тұздығы, Пармезан ірімшігі, Бөдене жұмыртқасы": { en: "Iceberg, cherry tomatoes, chicken, croutons, Caesar dressing, Parmesan, quail egg", ru: "Айсберг, томаты черри, курица, сухарики, соус Цезарь, Пармезан, перепелиное яйцо", kz: "Айсберг, черри қызанағы, тауық еті, кептірілген нан, Цезарь тұздығы, пармезан ірімшігі, бөдене жұмыртқасы" },
      "Жылқы еті, Қияр, Қызанақ, Түрлі түсті болгар бұрышы": { en: "Horse meat, cucumber, tomato, bell peppers", ru: "Конина, огурец, помидор, болгарский перец", kz: "Жылқы еті, қияр, қызанақ, түрлі түсті болгар бұрышы" },
      "Асқабақ, Қызылша, Микс салат жапырақтары, Рукола, Сүзбелі ірімшік, Анар, Пармезан ірімшігі, Зәйтүн майы": { en: "Pumpkin, beetroot, mixed greens, arugula, curd cheese, pomegranate, Parmesan, olive oil", ru: "Тыква, свёкла, микс зелени, руккола, творожный сыр, гранат, Пармезан, оливковое масло", kz: "Асқабақ, қызылша, микс салат жапырақтары, рукола, сүзбелі ірімшік, анар, пармезан ірімшігі, зәйтүн майы" },
      "Тұздалған капуста, Қияр": { en: "Pickled cabbage, cucumber", ru: "Квашеная капуста, огурец", kz: "Тұздалған капуста, қияр" },
      "Алмұрт, Жылқы еті, Тауық еті, Пармезан ірімшігі, Горох, Фри, Карнишон": { en: "Pear, horse meat, chicken, Parmesan, peas, fries, gherkin", ru: "Груша, конина, курица, Пармезан, горох, фри, корнишон", kz: "Алмұрт, жылқы еті, тауық еті, пармезан ірімшігі, горох, фри, карнишон" },
      "Ананас, Жылқы еті, Қияр, Мейіз, Салат жапырағы, Пармезан ірімшігі, Тауық еті, Түрлі түсті болгар бұрышы": { en: "Pineapple, horse meat, cucumber, raisins, lettuce, Parmesan, chicken, bell peppers", ru: "Ананас, конина, огурец, изюм, листья салата, Пармезан, курица, болгарский перец", kz: "Ананас, жылқы еті, қияр, мейіз, салат жапырағы, пармезан ірімшігі, тауық еті, түрлі түсті болгар бұрышы" },
      "Картоп, Сәбіз, Жылқы еті, Қияр, Жұмыртқа": { en: "Potato, carrot, horse meat, cucumber, egg", ru: "Картофель, морковь, конина, огурец, яйцо", kz: "Картоп, сәбіз, жылқы еті, қияр, жұмыртқа" },
      "Қызылша, Картоп, Горох, Тұздалған қияр, Тұздалған орамжапырақ, Сәбіз, Зәйтүн майы": { en: "Beetroot, potato, peas, pickled cucumber, pickled cabbage, carrot, olive oil", ru: "Свёкла, картофель, горох, маринованный огурец, квашеная капуста, морковь, оливковое масло", kz: "Қызылша, картоп, горох, тұздалған қияр, тұздалған орамжапырақ, сәбіз, зәйтүн майы" },
      "Брокколи, Жүгері, Черри қызанағы, Бөдене жұмыртқасы, Карнишон, Қияр": { en: "Broccoli, corn, cherry tomatoes, quail egg, gherkin, cucumber", ru: "Брокколи, кукуруза, томаты черри, перепелиное яйцо, корнишон, огурец", kz: "Брокколи, жүгері, черри қызанағы, бөдене жұмыртқасы, карнишон, қияр" },
      "Итмұрын, Алма, Апельсин, Лимон, Жалбыз, Қалампыр, Жасмин шәй, Бадьян, Бал, Зімбір": { en: "Rosehip, apple, orange, lemon, mint, clove, jasmine tea, star anise, honey, ginger", ru: "Шиповник, яблоко, апельсин, лимон, мята, гвоздика, жасминовый чай, бадьян, мёд, имбирь", kz: "Итмұрын, алма, апельсин, лимон, жалбыз, қалампыр, жасмин шәй, бадьян, бал, зімбір" },
      "Қара шәй, Көк шәй, Лимон, Апельсин, Жалбыз, Нават": { en: "Black tea, green tea, lemon, orange, mint, navat", ru: "Чёрный чай, зелёный чай, лимон, апельсин, мята, нават", kz: "Қара шәй, көк шәй, лимон, апельсин, жалбыз, нават" },
      "Korean-style carrot salad": { en: "Korean-style carrot salad", ru: "Корейская морковь", kz: "Кәрісше сәбіз салаты" },
      "Korean-style carrot salad": { en: "Korean-style carrot salad", ru: "Корейская морковь", kz: "Кәрісше сәбіз салаты" },
      "Marinated onions, herbs": { en: "Marinated onions, herbs", ru: "Маринованный лук, зелень", kz: "Маринадталған пияз, көк" },
      "Sliced tomato, basil": { en: "Sliced tomato, basil", ru: "Нарезанный томат, базилик", kz: "Тілімделген қызанақ, райхан" },
      "Chef’s selection of greens": { en: "Chef’s selection of greens", ru: "Выбор шефа из зелени", kz: "Аспаз таңдаған көктер" },
      "Still mineral water": { en: "Still mineral water", ru: "Негазированная минеральная вода", kz: "Газдалмаған минералды су" },
      "Carbonated mineral water": { en: "Carbonated mineral water", ru: "Газированная минеральная вода", kz: "Газдалған минералды су" },
      "Freshly brewed coffee": { en: "Freshly brewed coffee", ru: "Свежесваренный кофе", kz: "Жаңа қайнатылған кофе" },
      "Mushrooms, cream, herbs": { en: "Mushrooms, cream, herbs", ru: "Грибы, сливки, зелень", kz: "Саңырауқұлақ, қаймақ, көк" },
      "Chicken broth, noodles": { en: "Chicken broth, noodles", ru: "Куриный бульон, лапша", kz: "Тауық сорпа, кеспе" },
      "Seasonal vegetables, herbs": { en: "Seasonal vegetables, herbs", ru: "Сезонные овощи, зелень", kz: "Маусымдық көкөністер, көк" },
      "Tomato, mozzarella, basil": { en: "Tomato, mozzarella, basil", ru: "Томат, моцарелла, базилик", kz: "Томат, моцарелла, райхан" },
      "Tomato, cheese, pepperoni": { en: "Tomato, cheese, pepperoni", ru: "Томат, сыр, пепперони", kz: "Томат, ірімшік, пепперони" },
      "Assorted meats, cheese": { en: "Assorted meats, cheese", ru: "Ассорти мясо, сыр", kz: "Әртүрлі ет, ірімшік" },
      "Vegetables, cheese": { en: "Vegetables, cheese", ru: "Овощи, сыр", kz: "Көкөністер, ірімшік" },
      "Four cheeses blend": { en: "Four cheeses blend", ru: "Смесь из четырёх сыров", kz: "Төрт ірімшік қоспасы" },
      "Crispy fries": { en: "Crispy fries", ru: "Хрустящий фри", kz: "Қытырлақ фри" },
      "Assorted pickled vegetables": { en: "Assorted pickled vegetables", ru: "Ассорти маринованных овощей", kz: "Маринадталған көкөністер ассорти" },
      "Grilled meats and sides": { en: "Grilled meats and sides", ru: "Мясо гриль и гарниры", kz: "Гриль ет және гарнирлер" },
      "Family-style assortment": { en: "Family-style assortment", ru: "Ассорти для семьи", kz: "Отбасылық ассорти" },
      "Chef selection assortment": { en: "Chef selection assortment", ru: "Ассорти от шефа", kz: "Аспаз таңдауы ассорти" },
      "Traditional flatbread": { en: "Traditional flatbread", ru: "Традиционная лепёшка", kz: "Дәстүрлі жұқа нан" },
      "Soft flatbread": { en: "Soft flatbread", ru: "Мягкая лепёшка", kz: "Жұмсақ жұқа нан" },
      "Uzbek round bread": { en: "Uzbek round bread", ru: "Узбекский круглый хлеб", kz: "Өзбекше домалақ нан" },
      "Layered pastry bread": { en: "Layered pastry bread", ru: "Слоёный хлеб", kz: "Қабатты нан" },
      "Classic Samarkand bread": { en: "Classic Samarkand bread", ru: "Классический самаркандский хлеб", kz: "Классикалық самарқанд наны" },
      "Classic Bukhara bread": { en: "Classic Bukhara bread", ru: "Классический бухарский хлеб", kz: "Классикалық бұхара наны" },
      "Thin flatbread": { en: "Thin flatbread", ru: "Тонкая лепёшка", kz: "Жұқа жұқа нан" },
      "Garlic infused bread": { en: "Garlic infused bread", ru: "Хлеб с чесноком", kz: "Сарымсақ қосылған нан" },
      "Sesame crust bread": { en: "Sesame crust bread", ru: "Хлеб с кунжутом", kz: "Күнжіт қабықты нан" },
      "Pita pocket bread": { en: "Pita pocket bread", ru: "Пита карман", kz: "Пита қалталы нан" },
      "Assorted bread basket": { en: "Assorted bread basket", ru: "Корзина ассорти хлеба", kz: "Нан ассорти себеті" },
      "Starter, main, drink": { en: "Starter, main, drink", ru: "Закуска, основное, напиток", kz: "Стартер, негізгі, сусын" },
      "Soup, main, tea": { en: "Soup, main, tea", ru: "Суп, основное, чай", kz: "Сорпа, негізгі, шай" },
      "Family set selection": { en: "Family set selection", ru: "Семейный набор", kz: "Отбасылық таңдау" },
      "Premium set selection": { en: "Premium set selection", ru: "Премиум набор", kz: "Премиум таңдау" },
      "Strong black tea": { en: "Strong black tea", ru: "Крепкий чёрный чай", kz: "Қатты қара шай" },
      "Bergamot flavored black tea": { en: "Bergamot flavored black tea", ru: "Чёрный чай с бергамотом", kz: "Бергамотты қара шай" },
      "Robust breakfast blend": { en: "Robust breakfast blend", ru: "Крепкий утренний купаж", kz: "Қанық таңғы қоспа" },
      "Fragrant jasmine green tea": { en: "Fragrant jasmine green tea", ru: "Ароматный жасминовый зелёный чай", kz: "Хош иісті жасмин жасыл шай" },
      "Japanese green tea": { en: "Japanese green tea", ru: "Японский зелёный чай", kz: "Жапон жасыл шайы" },
      "Semi-oxidized floral tea": { en: "Semi-oxidized floral tea", ru: "Полуферментированный цветочный чай", kz: "Жартылай ашытылған гүлді шай" },
      "Caffeine-free floral infusion": { en: "Caffeine-free floral infusion", ru: "Бескофеинный цветочный настой", kz: "Кофеинсіз гүл тұнбасы" },
      "Refreshing mint infusion": { en: "Refreshing mint infusion", ru: "Освежающий мятный настой", kz: "Сергітетін жалбыз тұнбасы" },
      "Tart ruby-red infusion": { en: "Tart ruby-red infusion", ru: "Кисловатый рубиновый настой", kz: "Қышқылтым рубин түсті тұнба" },
      "Spiced Indian milk tea": { en: "Spiced Indian milk tea", ru: "Индийский пряный молочный чай", kz: "Үнділік дәмді сүтті шай" },
      "Black tea with lemon": { en: "Black tea with lemon", ru: "Чёрный чай с лимоном", kz: "Лимон қосылған қара шай" },
      "Vitamin-rich herbal tea": { en: "Vitamin-rich herbal tea", ru: "Витаминами богатый травяной чай", kz: "Витаминге бай шөп шайы" },
      "Citrus-scented black tea": { en: "Citrus-scented black tea", ru: "Цитрусты ароматный чёрный чай", kz: "Цитрус хош иісті қара шай" },
      "Black tea with milk": { en: "Black tea with milk", ru: "Чёрный чай с молоком", kz: "Сүт қосылған қара шай" },
      "Fresh lemon, sugar, soda": { en: "Fresh lemon, sugar, soda", ru: "Свежий лимон, сахар, сода", kz: "Жаңа лимон, қант, сода" },
      "Strawberry syrup, lemon": { en: "Strawberry syrup, lemon", ru: "Клубничный сироп, лимон", kz: "Құлпынай шәрбаты, лимон" },
      "Raspberry, lemon, soda": { en: "Raspberry, lemon, soda", ru: "Малина, лимон, сода", kz: "Таңқурай, лимон, сода" },
      "Blueberry, lemon, soda": { en: "Blueberry, lemon, soda", ru: "Черника, лимон, сода", kz: "Көкжидек, лимон, сода" },
      "Mint, lemon, soda": { en: "Mint, lemon, soda", ru: "Мята, лимон, сода", kz: "Жалбыз, лимон, сода" },
      "Ginger, lemon, soda": { en: "Ginger, lemon, soda", ru: "Имбирь, лимон, сода", kz: "Зімбір, лимон, сода" },
      "Peach, lemon, soda": { en: "Peach, lemon, soda", ru: "Персик, лимон, сода", kz: "Шабдалы, лимон, сода" },
      "Mango, lemon, soda": { en: "Mango, lemon, soda", ru: "Манго, лимон, сода", kz: "Манго, лимон, сода" },
      "Chilled cola beverage": { en: "Chilled cola beverage", ru: "Охлаждённый напиток кола", kz: "Салқын кола сусыны" },
      "Orange-flavored soda": { en: "Orange-flavored soda", ru: "Апельсиновая газировка", kz: "Апельсин дәмді сода" },
      "Citrus soda": { en: "Citrus soda", ru: "Цитрусты сода", kz: "Цитрус содасы" },
      "Quinine tonic water": { en: "Quinine tonic water", ru: "Тоник с хинином", kz: "Хининді тоник суы" },
      "Chilled brewed coffee": { en: "Chilled brewed coffee", ru: "Охлаждённый заварной кофе", kz: "Салқындатылған қайнатылған кофе" },
      "100% apple juice": { en: "100% apple juice", ru: "100% яблочный сок", kz: "100% алма шырыны" },
      "Fresh orange juice": { en: "Fresh orange juice", ru: "Свежий апельсиновый сок", kz: "Жаңа апельсин шырыны" },
      "Vanilla ice cream, milk": { en: "Vanilla ice cream, milk", ru: "Ванильное мороженое, молоко", kz: "Ваниль балмұздақ, сүт" },
      "Chocolate ice cream, milk": { en: "Chocolate ice cream, milk", ru: "Шоколадное мороженое, молоко", kz: "Шоколад балмұздақ, сүт" },
      "Strawberries, ice cream, milk": { en: "Strawberries, ice cream, milk", ru: "Клубника, мороженое, молоко", kz: "Құлпынай, балмұздақ, сүт" },
      "Banana, ice cream, milk": { en: "Banana, ice cream, milk", ru: "Банан, мороженое, молоко", kz: "Банан, балмұздақ, сүт" },
      "Caramel sauce, milk": { en: "Caramel sauce, milk", ru: "Карамельный соус, молоко", kz: "Карамель соусы, сүт" },
      "Mixed berries, yogurt": { en: "Mixed berries, yogurt", ru: "Смесь ягод, йогурт", kz: "Аралас жидек, йогурт" },
      "Mango, pineapple, banana": { en: "Mango, pineapple, banana", ru: "Манго, ананас, банан", kz: "Манго, ананас, банан" },
      "Spinach, apple, banana": { en: "Spinach, apple, banana", ru: "Шпинат, яблоко, банан", kz: "Шпинат, алма, банан" },
      "Mango, banana, yogurt": { en: "Mango, banana, yogurt", ru: "Манго, банан, йогурт", kz: "Манго, банан, йогурт" },
      "Chilled peach tea": { en: "Chilled peach tea", ru: "Холодный персиковый чай", kz: "Салқын шабдалы шайы" },
      "Chilled lemon tea": { en: "Chilled lemon tea", ru: "Холодный лимонный чай", kz: "Салқын лимонды шай" },
      "Chilled raspberry tea": { en: "Chilled raspberry tea", ru: "Холодный малиновый чай", kz: "Салқын таңқурай шайы" },
      "Creamy classic cheesecake": { en: "Creamy classic cheesecake", ru: "Кремовый классический чизкейк", kz: "Кремді классикалық чизкейк" },
      "Layered honey cake": { en: "Layered honey cake", ru: "Слоёный медовик", kz: "Қабатты медовик" },
      "Rich chocolate sponge": { en: "Rich chocolate sponge", ru: "Насыщенный шоколадный бисквит", kz: "Қанық шоколадты бисквит" },
      "Spiced carrot layers": { en: "Spiced carrot layers", ru: "Пряные морковные коржи", kz: "Дәмді сәбіз қабаттары" },
      "Cocoa sponge, cream cheese": { en: "Cocoa sponge, cream cheese", ru: "Какао бисквит, крем-сыр", kz: "Какао бисквиті, крем-айран" },
      "Coffee-flavored Italian dessert": { en: "Coffee-flavored Italian dessert", ru: "Итальянский десерт со вкусом кофе", kz: "Кофе дәмді итальян десерті" },
      "Zesty lemon custard": { en: "Zesty lemon custard", ru: "Цитрусовый лимонный крем", kz: "Қышқылтым лимон кремі" },
      "Classic apple pie": { en: "Classic apple pie", ru: "Классический яблочный пирог", kz: "Классикалық алма бәліші" },
      "Layered pastry with nuts": { en: "Layered pastry with nuts", ru: "Слоёная выпечка с орехами", kz: "Жаңғақты қабатты тоқаш" },
      "Nutty sponge cake": { en: "Nutty sponge cake", ru: "Ореховый бисквит", kz: "Жаңғақты бисквит" },
      "Seasonal fruit tart": { en: "Seasonal fruit tart", ru: "Фруктовый тарт из сезонных фруктов", kz: "Маусымдық жеміс тарт" },
      "Тартылған ет, Жүзім жапырағы, Дәмдеуіштер": { en: "Minced meat, grape leaves, spices", ru: "Фарш, виноградные листья, специи", kz: "Тартылған ет, Жүзім жапырағы, Дәмдеуіштер" },
      "Жылқы еті, Картоп, Сәбіз, Қолдан жайылған қамыр, Бөдене жұмыртқасы, Көк пияз": { en: "Horse meat, potatoes, carrots, handmade dough, quail egg, green onion", ru: "Конина, картофель, морковь, домашнее тесто, перепелиное яйцо, зелёный лук", kz: "Жылқы еті, Картоп, Сәбіз, Қолдан жайылған қамыр, Бөдене жұмыртқасы, Көк пияз" },
      "Жылқы еті, Лағман қамыры, Сыр, Жұмыртқа, Дәмдеуіштер": { en: "Horse meat, lagman noodles, cheese, egg, spices", ru: "Конина, лапша лагман, сыр, яйцо, специи", kz: "Жылқы еті, Лағман қамыры, Сыр, Жұмыртқа, Дәмдеуіштер" },
      "Жылқы еті, Лағман қамыры, Сыр, Жұмыртқа, Кілегей, Дәмдеуіштер": { en: "Horse meat, lagman noodles, cheese, egg, cream, spices", ru: "Конина, лапша лагман, сыр, яйцо, сливки, специи", kz: "Жылқы еті, Лағман қамыры, Сыр, Жұмыртқа, Кілегей, Дәмдеуіштер" },
      "Қой еті, Картоп, Сәбіз, Көк пияз, Укроп": { en: "Lamb, potatoes, carrots, green onion, dill", ru: "Баранина, картофель, морковь, зелёный лук, укроп", kz: "Қой еті, Картоп, Сәбіз, Көк пияз, Укроп" },
      "Жылқы еті, Қазы, Тіл, Нохат": { en: "Horse meat, kazy, tongue, chickpeas", ru: "Конина, казы, язык, нут", kz: "Жылқы еті, Қазы, Тіл, Нохат" },
      "Картоп, Сәбіз, Брокколи, Түрлі түсті болгар бұрышы, Сарымсақ, Кабачок": { en: "Potatoes, carrots, broccoli, bell peppers, garlic, zucchini", ru: "Картофель, морковь, брокколи, болгарский перец, чеснок, кабачок", kz: "Картоп, Сәбіз, Брокколи, Түрлі түсті болгар бұрышы, Сарымсақ, Кабачок" },
      "Жылқы еті, Кеспе, Картоп, Сәбіз, Пияз, Қызанақ": { en: "Horse meat, noodles, potatoes, carrots, onion, tomato", ru: "Конина, лапша, картофель, морковь, лук, томат", kz: "Жылқы еті, Кеспе, Картоп, Сәбіз, Пияз, Қызанақ" },
      "Тураланған жылқы еті, Пияз, Көк пияз, Дәмдеуіштер": { en: "Minced horse meat, onion, green onion, spices", ru: "Фарш из конины, лук, зелёный лук, специи", kz: "Тураланған жылқы еті, Пияз, Көк пияз, Дәмдеуіштер" },
      "Қазы, Сыр": { en: "Kazy, cheese", ru: "Казы, сыр", kz: "Қазы, Сыр" },
      "Шұжық, Сыр": { en: "Sausage, cheese", ru: "Колбаса, сыр", kz: "Шұжық, Сыр" },
      "Қызанақ, Сыр": { en: "Tomato, cheese", ru: "Помидор, сыр", kz: "Қызанақ, Сыр" },
      "Тартылған ет, Сыр": { en: "Minced meat, cheese", ru: "Фарш, сыр", kz: "Тартылған ет, Сыр" },
      "Шұжық, Қызанақ, Тауық еті, Саңырауқұлақ, Сыр": { en: "Sausage, tomato, chicken, mushrooms, cheese", ru: "Колбаса, помидор, курица, грибы, сыр", kz: "Шұжық, Қызанақ, Тауық еті, Саңырауқұлақ, Сыр" },
      "Самса етпен 3 дана, Самса асқабақпен 3 дана, Чебуреки 2 дана": { en: "Meat samsa 3 pcs, pumpkin samsa 3 pcs, chebureki 2 pcs", ru: "Самса с мясом 3 шт, самса с тыквой 3 шт, чебуреки 2 шт", kz: "Самса етпен 3 дана, Самса асқабақпен 3 дана, Чебуреки 2 дана" },
      "Қаттама пиязбен, Қаттама шекермен, Өрме нан 2 дана, Бауырсақ 5 дана, Қуырылған түшпара 9 дана, Қара және ақ нан": { en: "Onion qatlama, sugar qatlama, woven bread 2 pcs, baursak 5 pcs, fried tushpara 9 pcs, black & white bread", ru: "Каттама с луком, каттама с сахаром, өрме нан 2 шт, бауырсақ 5 шт, жареная түшпара 9 шт, чёрный и белый хлеб", kz: "Қаттама пиязбен, Қаттама шекермен, Өрме нан 2 дана, Бауырсақ 5 дана, Қуырылған түшпара 9 дана, Қара және ақ нан" },
      "Қамыр, Жылқы еті, Жая, Қазы, Картоп, Сәбіз": { en: "Dough, horse meat, zhaya, kazy, potatoes, carrots", ru: "Тесто, конина, жая, казы, картофель, морковь", kz: "Қамыр, Жылқы еті, Жая, Қазы, Картоп, Сәбіз" },
      "Қамыр, Жылқы еті, Қабырға, Қазы, Картоп, Сәбіз": { en: "Dough, horse meat, ribs, kazy, potatoes, carrots", ru: "Тесто, конина, рёбра, казы, картофель, морковь", kz: "Қамыр, Жылқы еті, Қабырға, Қазы, Картоп, Сәбіз" },
      "Қой еті қабырғасымен, Картоп, Пияз": { en: "Lamb with ribs, potatoes, onion", ru: "Баранина с рёбрами, картофель, лук", kz: "Қой еті қабырғасымен, Картоп, Пияз" },
      "Асқабақ, Жылқы еті, Сыр, Кілегей": { en: "Pumpkin, horse meat, cheese, cream", ru: "Тыква, конина, сыр, сливки", kz: "Асқабақ, Жылқы еті, Сыр, Кілегей" }
    }
  };

  // Get current language from localStorage or default to 'en'
  let currentLang = localStorage.getItem('shipaLang') || 'en';

  // Translation function
  function t(key) {
    return translations[key]?.[currentLang] || translations[key]?.en || key;
  }

  // Update language switcher buttons (EN / RU / KZ)
  function updateLangSwitcher() {
    const buttons = document.querySelectorAll('.lang-switcher .lang-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Update all translatable elements
  function updateTranslations() {
    // Common elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      const translation = t(key);
      if (el.tagName === 'INPUT' && el.type === 'button') {
        el.value = translation;
      } else {
        el.textContent = translation;
      }
    });

    // Update WhatsApp links with localized message text
    document.querySelectorAll('[data-whatsapp]').forEach(el => {
      const phone = el.getAttribute('data-phone') || '77073541313';
      const message = t('whatsappBookMessage');
      const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      el.setAttribute('href', href);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Menu items
    document.querySelectorAll('[data-menu-item]').forEach(el => {
      const itemKey = el.getAttribute('data-menu-item');
      const translation = translations.menuItems[itemKey]?.[currentLang] || itemKey;
      el.textContent = translation;
    });

    // Number main food items 1–47 in the main menu tab
    const mainTitles = Array.from(document.querySelectorAll('#menu-main [data-menu-item]'));
    mainTitles.forEach((el, idx) => {
      const itemKey = el.getAttribute('data-menu-item');
      const translation = translations.menuItems[itemKey]?.[currentLang] || itemKey;
      const n = idx + 1;
      el.textContent = n <= 47 ? `${n}. ${translation}` : translation;
    });

    // Number bar items 1–58 in the bar tab
    const barTitles = Array.from(document.querySelectorAll('#menu-bar [data-menu-item]'));
    barTitles.forEach((el, idx) => {
      const itemKey = el.getAttribute('data-menu-item');
      const translation = translations.menuItems[itemKey]?.[currentLang] || itemKey;
      const n = idx + 1;
      el.textContent = n <= 58 ? `${n}. ${translation}` : translation;
    });

    // Number salads 1–14 in the salads tab
    const saladTitles = Array.from(document.querySelectorAll('#menu-desserts [data-menu-item]'));
    saladTitles.forEach((el, idx) => {
      const itemKey = el.getAttribute('data-menu-item');
      const translation = translations.menuItems[itemKey]?.[currentLang] || itemKey;
      const n = idx + 1;
      el.textContent = n <= 14 ? `${n}. ${translation}` : translation;
    });

    // Menu descriptions
    document.querySelectorAll('[data-menu-desc]').forEach(el => {
      const descKey = el.getAttribute('data-menu-desc');
      const translation = translations.menuDescriptions[descKey]?.[currentLang] || descKey;
      el.textContent = translation;
    });

    updateLangSwitcher();
  }

  // Language switching from button click
  function setLanguage(lang) {
    if (!['en', 'ru', 'kz'].includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('shipaLang', currentLang);
    updateTranslations();
  }

  // Page transition animation
  function initPageTransitions() {
    // Add transition class to body
    document.body.classList.add('page-transition-ready');

    // Intercept all internal links
    document.querySelectorAll('a[href$=".html"], a[href^="/"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if external or anchor link
        if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
          return;
        }

        e.preventDefault();
        
        // Fade out current page
        document.body.classList.add('page-exit');
        
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    });

    // Fade in on page load
    window.addEventListener('load', () => {
      document.body.classList.add('page-enter');
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initPageTransitions();
      updateTranslations();
      
      // Language buttons click handlers
      document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          setLanguage(lang);
        });
      });
    });
  } else {
    initPageTransitions();
    updateTranslations();
    
    document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }

  // Expose for external use
  window.ShipaApp = {
    setLanguage,
    t,
    currentLang: () => currentLang
  };
})();
