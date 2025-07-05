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
    "image": "https://cf.geekdo-images.com/9cJf4kd_HZQo6NunfJlo9w__imagepage/img/4fGg2gHz6qyElFGShhz5LOUjxuU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic175966.jpg"
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
    "image": "https://cf.geekdo-images.com/oxdsZKIX5_3ovDo38EIaeg__imagepage/img/ier4keS2lwgi6bIJKhSDIKVDBmA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1872452.jpg"
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
    "image": "https://cf.geekdo-images.com/J-ts3MW0UhDzs621TR6cog__imagepage/img/HJAhCcz8QJbVAYYQI71uYLsKkRM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1871016.jpg"
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
    "image": "https://cf.geekdo-images.com/ZqjfzvtaTIT5FYp1D2CfKw__imagepage/img/2TYuxSAUY8qpo066xG15mrxw_X4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1196191.jpg"
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
    "image": "https://cf.geekdo-images.com/IfUVNbebRWbtQ_SlGxG6ZQ__imagepage/img/FuA0ksBonA5Rmh6j0bb2GVEx5TM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8177684.jpg"
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
    "image": "https://cf.geekdo-images.com/LIooA9bTdjnE9qmhjL-UFw__imagepage/img/nhF-Ys7IOrSMNwJVZSjMV2iVjXo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3118622.jpg"
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
    "image": "https://cf.geekdo-images.com/-DHiHBBSnvaLu0Do8CIykQ__imagepage/img/597k5SluqBtv5Jy2M8mz70yGhkw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8204165.jpg"
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
    "image": "https://cf.geekdo-images.com/Zo4slt6oCCOFamxoR1ExcQ__imagepage/img/_hcTFNnN_csT_aknezns2DgZ6GE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2625790.jpg"
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
    "image": "https://cf.geekdo-images.com/aoPM07XzoceB-RydLh08zA__imagepage/img/lHmv0ddOrUvpiLcPeQbZdT5yCEA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic428828.jpg"
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
    "image": "https://cf.geekdo-images.com/uTx4IxFHBHWHd5E7UU3cww__imagepage/img/VNN2DTMnTzbtLqXkZdfwD6spWSY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1048340.jpg"
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
    "image": "https://cf.geekdo-images.com/xFlGGfyoP4Pb-nYKxJTi7A__imagepage/img/hAIjs1UXrdCPE1YFi2E9_PtAyIM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic162995.jpg"
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
    "image": "https://cf.geekdo-images.com/11uTs850tX9glAbN9BSVZw__imagepage/img/VypknlPK1SHXeW7JiWR8L4BgT7c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6388826.png"
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
    "image": "https://cf.geekdo-images.com/rtbsBA5VZSrrv8xQhGoZwg__imagepage/img/PCrOWe4GXwUSWtSaOJmo5rZ4grk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2723941.jpg"
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
    "image": "https://cf.geekdo-images.com/Vy2f9X76jdpb5BEkSyen5Q__imagepage/img/ZSvIHKdNMy7Wpd_EpzKGPecAAFc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic871528.jpg"
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
    "image": "https://cf.geekdo-images.com/PxQnAcYv74J-dJW_s6CHMA__imagepage/img/rwxcLJ4bCAki5QEi7f4wSlOO_hA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic332870.jpg"
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
    "image": "https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__imagepage/img/tgpLRvv6AIsClnegErNpAoieeMo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3122349.jpg"
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
    "image": "https://cf.geekdo-images.com/tQVVSXcmYLvAoI28cp-2Tg__imagepage/img/Ae4JnD9lJKAeCDZrLLiaAqB7yzk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5974859.jpg"
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
    "image": "https://cf.geekdo-images.com/wNCSCl961fMzDUhwetfjTg__imagepage/img/bRWoVGkuz5VX26J7kuMHLW22kLQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1236119.jpg"
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
    "image": "https://cf.geekdo-images.com/81AiTz4hp4TlnzeCMqQMAw__imagepage/img/RuczD90TmVP6o38-MhJPr45vHGU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6091316.jpg"
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
    "image": "https://cf.geekdo-images.com/aAwBzPzta4joKfFZt05hCw__imagepage/img/VTB2LcmXNC4XPpCOVfkfa4qO0cY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4385726.jpg"
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
    "image": "https://cf.geekdo-images.com/9gjrMWDqLCBb-G0AYbKuSQ__imagepage/img/ecf4qAJy79pCFqBw5vlfoOOF7AU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3728149.jpg"
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
    "image": "https://cf.geekdo-images.com/g4mV4BH-ZrhMUVgil-yV1A__imagepage/img/CJ6erNGmKfFGhR6ZbxXbBI7XaoE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3016500.jpg"
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
    "image": "https://cf.geekdo-images.com/IKaWUOw58Gt-eiO3EP4ImA__imagepage/img/Gq3FnwxuRVngdCNFIx0TYNA4NoQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8623593.jpg"
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
    "image": "https://cf.geekdo-images.com/clKFvn2bUUPbY62eSmc-ig__imagepage/img/dtZczndlVT0nOsFceQbM0yeAGVo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4757839.png"
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
    "image": "https://cf.geekdo-images.com/gQOQW7p1RWHzY54Lrs-_pA__imagepage/img/oqafX3UqrqNZz5215t4FEuIQm0E=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3315915.jpg"
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
    "image": "https://cf.geekdo-images.com/IO8_BYKeofnWy8DIjo2RRg__imagepage/img/LGfb7sWZUuLEeVIZZpi0VAYPP00=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2606106.jpg"
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
    "image": "https://cf.geekdo-images.com/ZN2rpiJ19lg5DZk_iYMMkQ__imagepage/img/9DVyWz-oAcvSCxv9cS_3girM9gU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1180640.jpg"
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
    "image": "https://cf.geekdo-images.com/1XA2-niwTBa0HEB7hOz3Dw__imagepage/img/dniEqT1lS-wh6hmCijPi3PQCwWs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4530974.jpg"
  },
  {
    "name": "Зона: Тайны Чернобыля",
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
    "image": "https://cf.geekdo-images.com/z1ESt-0eluaKoVhizEv5Wg__imagepage/img/J7ToYMdfVH46Hf5ZpF5erIsQ8nE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4841453.jpg"
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
    "image": "https://cf.geekdo-images.com/MItQnGL0m4GIjsHH0nWZ9A__imagepage/img/u6TuvI3k6ZC6JcWtfCedpdTrhJc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1143735.jpg"
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
    "image": "https://cf.geekdo-images.com/oI8jrUmwBtlWyCiIuYH6YQ__imagepage/img/THUbZkNHlFCieiYm8I9iwFp0US8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8107311.jpg"
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
    "image": "https://cf.geekdo-images.com/Da8TXGBq3UjKINgTRIZY9A__imagepage/img/RHaGhriDSnGO1KwYugXqWJevDRE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1170265.jpg"
  }
];

export default games;
