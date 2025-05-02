import { Tariff } from "../types/Tariff";

export const tariffs: Tariff[] = [
  {
    id: "express",
    title: "Экспресс",
    price: "от $8.5 / кг",
    description: [
      "5–9 дней",
      "Без ограничений по весу",
      "Полное отслеживание",
      "Доставка по всей РФ"
    ]
  },
  {
    id: "standard",
    title: "Обычная доставка",
    price: "от $5.0 / кг",
    description: [
      "12–20 дней",
      "Бюджетный вариант",
      "Сборные грузы",
      "Оформление документов"
    ]
  }
];
