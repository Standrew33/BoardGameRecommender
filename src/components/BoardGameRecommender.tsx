import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const games = [
  // ... предыдущие игры ...
  {
    name: "Munchkin Steampunk",
    genre: "Юмор",
    setting: "Стимпанк-пародия",
    playtime: "60–90 мин",
    difficulty: "Простая",
    mechanics: ["Карточная игра", "Саботаж", "Предметы"],
    players: "3–6",
    image: ""
  },
  {
    name: "Zombicide (2nd Edition)",
    genre: "Экшен",
    setting: "Современные зомби",
    playtime: "60–180 мин",
    difficulty: "Средняя",
    mechanics: ["Кооператив", "Миниатюры", "Миссии", "Прогресс персонажа"],
    players: "1–6",
    image: ""
  },
  {
    name: "Arkham Horror: The Card Game",
    genre: "Ужасы",
    setting: "Лавкрафт, Аркхэм, расследование",
    playtime: "60–120 мин",
    difficulty: "Сложная",
    mechanics: ["Кампания", "Колоды игроков", "Кооператив", "Сюжет"],
    players: "1–4",
    image: ""
  }
  // и другие игры...
];

// отображение в карточке игры
<CardContent className="p-4 space-y-2">
  {game.image && (
    <img src={game.image} alt={game.name} className="w-full h-40 object-cover rounded-lg" />
  )}
  <h2 className="text-xl font-semibold">🎮 {game.name}</h2>
  <p>📚 Жанр: {game.genre}</p>
  <p>🌍 Сеттинг: {game.setting}</p>
  <p>⏱ Время: {game.playtime}</p>
  <p>🧠 Сложность: {game.difficulty}</p>
  <p>👥 Игроков: {game.players}</p>
  <p>⚙️ Механики: {game.mechanics.join(", ")}</p>
</CardContent>
