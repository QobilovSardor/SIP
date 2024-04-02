import { useState } from "react";

const items = [
  "Главная",
  "Дашборд",
  "Проекты",
  "Контент",
  "Визуализатор",
  "Процессы",
  "Справочник",
  "Дерево",
  "Формы",
  "Сервис",
  "Лейауты",
];

export const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="menu">
      <div className="nav-list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a
                className={index === activeIndex ? "active" : ""}
                href="#!"
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
