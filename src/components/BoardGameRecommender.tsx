import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { Progress } from "../ui/progress";

import games from "../data/games";

export default function BoardGameRecommender() {
  const [step, setStep] = useState(0);
  const [genre, setGenre] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [playtime, setPlaytime] = useState("");
  const [mechanic, setMechanic] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (step === steps.length) handleSearch();
  }, [step]);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(0, s - 1));
  const reset = () => {
    setStep(0);
    setGenre("");
    setDifficulty("");
    setPlaytime("");
    setMechanic("");
    setResults([]);
  };

  const handleSearch = () => {
    const filtered = games.filter(
      (game) =>
        (!genre || game.genre === genre) &&
        (!difficulty || game.difficulty === difficulty) &&
        (!playtime || game.playtime.includes(playtime)) &&
        (!mechanic || game.mechanics.includes(mechanic)) &&
        parseInt(game.players.split("–")[1]) >= 4
    );
    setResults(filtered);
  };

  const steps = [
    {
      question: "🎭 Какой жанр предпочитаете?",
      value: genre,
      onChange: (value) => { setGenre(value); nextStep(); },
      options: ["Ужасы", "Приключение", "Юмор", "Экшен", "Стратегия", "Семейная", "Научная фантастика"]
    },
    {
      question: "🧠 Насколько сложные правила?",
      value: difficulty,
      onChange: (value) => { setDifficulty(value); nextStep(); },
      options: ["Простая", "Средняя", "Сложная"]
    },
    {
      question: "⏳ Сколько есть времени на игру?",
      value: playtime,
      onChange: (value) => { setPlaytime(value); nextStep(); },
      options: ["15", "30", "60", "90", "120"]
    },
    {
      question: "⚙️ Какую механику предпочитаете?",
      value: mechanic,
      onChange: (value) => { setMechanic(value); nextStep(); },
      options: ["Кооператив", "Миниатюры", "Броски кубиков", "Карточная игра", "Саботаж", "Постройка", "Путешествия", "Сюжет", "Скрытые роли", "Экономика", "Контроль территорий"]
    }
  ];

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">🎲 Квиз: выбери настолку</h1>

      <Progress value={(step / steps.length) * 100} className="h-2" />

      <div className="flex justify-between items-center">
        {step > 0 && <Button onClick={prevStep} variant="outline">⬅️ Назад</Button>}
        <span className="text-muted-foreground text-sm">Шаг {Math.min(step + 1, steps.length)} из {steps.length}</span>
      </div>

      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-2 text-lg">{steps[step].question}</p>
            <select
                className="border p-2 rounded w-full"
                value={steps[step].value}
                onChange={(e) => steps[step].onChange(e.target.value)}
            >
              <option value="">Выберите вариант</option>
              {steps[step].options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
              ))}
            </select>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="text-center">
              <Button variant="outline" onClick={reset}>🔄 Начать заново</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((game) => (
                <Card key={game.name} className="rounded-2xl shadow">
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
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
