import assets from "../assets";
import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconRing } from "@consta/icons/IconRing";
import { IconBento } from "@consta/icons/IconBento";
import { useState } from "react";
import { User } from "@consta/uikit/User";
import { useLocation } from "react-router-dom";

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

// eslint-disable-next-line react/prop-types, no-unused-vars
export const DefaultHeader = ({ hideHamburger }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation().pathname;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {hideHamburger ? null : (
            <Button
              view="clear"
              size="xs"
              onlyIcon
              iconLeft={IconHamburger}
              className="hamburger-menu"
            />
          )}
          <a className="logo-box" href="#!">
            <div className="logo">
              <img src={assets.logo} alt="logo" width="10" height="11" />
            </div>
            <p>Приложение</p>
          </a>
          <div className={`${location === "/" ? "hidden " : ""}line`}></div>
          <div
            className={`${
              location === "/" ? "hidden " : ""
            } header-breadcrumbs`}
          >
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
        </div>
        <div className={`${location === "/" ? "hidden " : ""} header-right`}>
          <div>
            <Button view="clear" size="xs" onlyIcon iconLeft={IconRing} />
            <Button
              view="clear"
              size="xs"
              onlyIcon
              iconLeft={IconSearchStroked}
            />
            <Button view="clear" size="xs" onlyIcon iconLeft={IconBento} />
          </div>
          <User avatarUrl={assets.avatar} name="Имя Фамилия" />
        </div>
      </div>
    </header>
  );
};
