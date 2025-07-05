const games = [
  {
    "name": "Arkham Horror (2nd Edition)",
    "genre": "Ужасы",
    "setting": "Лавкрафт, Аркхэм 1920-е",
    "playtime": "120–240 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Кооператив",
      "Броски кубиков",
      "Расследование"
    ],
    "players": "2–8",
    "image": ""
  },
  {
    "name": "Eldritch Horror",
    "genre": "Приключение",
    "setting": "Лавкрафт, глобальный",
    "playtime": "120–240 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Путешествия",
      "Сюжет",
      "Проверки навыков"
    ],
    "players": "1–8",
    "image": ""
  },
  {
    "name": "Munchkin",
    "genre": "Юмор",
    "setting": "Фэнтези пародия",
    "playtime": "60–150 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Саботаж",
      "Бои"
    ],
    "players": "3–6",
    "image": ""
  },
  {
    "name": "Zombicide",
    "genre": "Экшен",
    "setting": "Современные зомби",
    "playtime": "60–180 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Миниатюры",
      "Сценарии"
    ],
    "players": "1–6",
    "image": ""
  },
  {
    "name": "Catan",
    "genre": "Стратегия",
    "setting": "Остров колонизаторов",
    "playtime": "60–90 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Торговля",
      "Броски кубиков",
      "Постройка"
    ],
    "players": "3–4",
    "image": ""
  },
  {
    "name": "Mansions of Madness",
    "genre": "Ужасы",
    "setting": "Аркхэм, особняки",
    "playtime": "120–180 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Кооператив",
      "Сюжет",
      "Приложение"
    ],
    "players": "1–5",
    "image": ""
  },
  {
    "name": "Uno",
    "genre": "Семейная",
    "setting": "Абстрактная",
    "playtime": "15–30 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Отмена действий",
      "Цветовая логика"
    ],
    "players": "2–10",
    "image": ""
  },
  {
    "name": "Runebound",
    "genre": "Приключение",
    "setting": "Фэнтези мир Терринот",
    "playtime": "120–180 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Соло/Кооператив",
      "Сюжет",
      "Развитие персонажа"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Small World",
    "genre": "Стратегия",
    "setting": "Фэнтези мир",
    "playtime": "40–80 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Контроль территорий",
      "Смена рас",
      "Победные очки"
    ],
    "players": "2–5",
    "image": ""
  },
  {
    "name": "Evolution",
    "genre": "Научная фантастика",
    "setting": "Природная эволюция",
    "playtime": "60–90 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Развитие существ",
      "Карточная игра",
      "Адаптация"
    ],
    "players": "2–6",
    "image": ""
  },
  {
    "name": "Манчкин Ктулху",
    "genre": "Юмор",
    "setting": "Фэнтези, Лавкрафт",
    "playtime": "60–120 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Саботаж",
      "Бои"
    ],
    "players": "3–6",
    "image": ""
  },
  {
    "name": "Русский Манчкин",
    "genre": "Юмор",
    "setting": "Фэнтези пародия",
    "playtime": "60–120 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Саботаж",
      "Бои"
    ],
    "players": "3–6",
    "image": ""
  },
  {
    "name": "Манчкин Стимпанк",
    "genre": "Юмор",
    "setting": "Стимпанк пародия",
    "playtime": "60–120 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Саботаж",
      "Бои"
    ],
    "players": "3–6",
    "image": ""
  },
  {
    "name": "Манчкин Зомби",
    "genre": "Юмор",
    "setting": "Зомби апокалипсис пародия",
    "playtime": "60–120 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Саботаж",
      "Бои"
    ],
    "players": "3–6",
    "image": ""
  },
  {
    "name": "Талисман",
    "genre": "Приключение",
    "setting": "Фэнтези мир",
    "playtime": "90–180 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Сюжет",
      "Броски кубиков",
      "Развитие персонажа"
    ],
    "players": "2–6",
    "image": ""
  },
  {
    "name": "Ужас Аркхэма: Карточная игра",
    "genre": "Ужасы",
    "setting": "Лавкрафт, Аркхэм",
    "playtime": "60–120 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Кооператив",
      "Карточная игра",
      "Сюжет"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Ведьмак: Настольная игра",
    "genre": "Приключение",
    "setting": "Мир Ведьмака",
    "playtime": "90–150 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Сюжет",
      "Развитие персонажа",
      "Путешествия"
    ],
    "players": "2–5",
    "image": ""
  },
  {
    "name": "Знак Древних",
    "genre": "Ужасы",
    "setting": "Лавкрафт, музей",
    "playtime": "60–120 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Броски кубиков",
      "Карточная игра"
    ],
    "players": "1–8",
    "image": ""
  },
  {
    "name": "Зомбицид (2е издание)",
    "genre": "Экшен",
    "setting": "Современные зомби",
    "playtime": "60–180 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Миниатюры",
      "Сценарии"
    ],
    "players": "1–6",
    "image": ""
  },
  {
    "name": "Осквернённый Грааль",
    "genre": "Приключение",
    "setting": "Тёмное фэнтези",
    "playtime": "90–180 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Сюжет",
      "Развитие персонажа",
      "Исследование"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Fallout",
    "genre": "Приключение",
    "setting": "Постапокалипсис, Wasteland",
    "playtime": "120–180 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Исследование",
      "Развитие персонажа",
      "Сюжет"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Мёртвый сезон",
    "genre": "Ужасы",
    "setting": "Зомби апокалипсис",
    "playtime": "90–120 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Скрытые роли",
      "Сюжет"
    ],
    "players": "2–5",
    "image": ""
  },
  {
    "name": "Зомби в доме",
    "genre": "Экшен",
    "setting": "Дом, зомби апокалипсис",
    "playtime": "30–60 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Кооператив",
      "Миниатюры",
      "Сценарии"
    ],
    "players": "2–4",
    "image": ""
  },
  {
    "name": "Bloodborne",
    "genre": "Ужасы",
    "setting": "Готика, кошмары",
    "playtime": "60–90 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Миниатюры",
      "Бои"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Это моя война",
    "genre": "Драма",
    "setting": "Гражданская война",
    "playtime": "45–120 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Кооператив",
      "Выживание",
      "Сюжет"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Андор",
    "genre": "Приключение",
    "setting": "Фэнтези королевство",
    "playtime": "60–90 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Сюжет",
      "Сценарии"
    ],
    "players": "2–4",
    "image": ""
  },
  {
    "name": "Descent: Странствия во тьме",
    "genre": "Приключение",
    "setting": "Фэнтези, подземелья",
    "playtime": "120–240 мин",
    "difficulty": "Сложная",
    "mechanics": [
      "Миниатюры",
      "Кампания",
      "Сюжет"
    ],
    "players": "2–5",
    "image": ""
  },
  {
    "name": "Властелин колец: Странствия в Средиземье",
    "genre": "Приключение",
    "setting": "Мир Толкина",
    "playtime": "60–120 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Кооператив",
      "Приложение",
      "Сюжет"
    ],
    "players": "1–5",
    "image": ""
  },
  {
    "name": "Зона Тайны: Чернобыль",
    "genre": "Ужасы",
    "setting": "Сталкер, зона отчуждения",
    "playtime": "90–150 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Исследование",
      "Выживание",
      "Сюжет"
    ],
    "players": "1–4",
    "image": ""
  },
  {
    "name": "Метро 2033",
    "genre": "Постапокалипсис",
    "setting": "Московское метро",
    "playtime": "60–120 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Контроль территорий",
      "Сюжет",
      "Развитие"
    ],
    "players": "2–4",
    "image": ""
  },
  {
    "name": "Герои Меча и Магии III",
    "genre": "Фэнтези",
    "setting": "Эрафия, классика ПК",
    "playtime": "120–180 мин",
    "difficulty": "Средняя",
    "mechanics": [
      "Развитие героев",
      "Тактика",
      "Сражения"
    ],
    "players": "2–4",
    "image": ""
  },
  {
    "name": "Эпичные схватки боевых магов",
    "genre": "Юмор",
    "setting": "Фэнтези арена",
    "playtime": "30–60 мин",
    "difficulty": "Простая",
    "mechanics": [
      "Карточная игра",
      "Бои",
      "Урон по области"
    ],
    "players": "2–6",
    "image": ""
  }
];

export default games;
