import assets from "../assets";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconRing } from "@consta/icons/IconRing";
import { IconBento } from "@consta/icons/IconBento";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconBackward } from "@consta/icons/IconBackward";
import { Breadcrumbs } from "@consta/uikit/Breadcrumbs";
import { Badge } from "@consta/uikit/Badge";
import { Text } from "@consta/uikit/Text";
import { Tag } from "@consta/uikit/Tag";
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
const pagesSimple = ["Главная", "Раздел", "Страница"];

// eslint-disable-next-line react/prop-types
export const Header = ({ searchHeader }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation().pathname;

  return (
    <header className="header">
      <div className="header-left">
        <a className="logo-box" href="#!">
          <div className="logo">
            <img src={assets.logo} alt="logo" width="10" height="11" />
          </div>
          <p>Приложение</p>
        </a>
        <div className={`${location === "/" ? "hidden " : ""}search-box`}>
          <TextField className="search-input" size="xs" iconSize="xs" />
          <IconSearchStroked className="search-icon" />
        </div>
        {searchHeader ? null : (
          <>
            <div className={`${location === "/" ? "hidden " : ""}line`}></div>
            <div
              className={`${
                location === "/" ? "hidden " : ""
              } header-breadcrumbs`}
            >
              <Button
                label="Назад"
                size="xs"
                view="ghost"
                iconLeft={IconBackward}
              />
              <Breadcrumbs
                size="xs"
                fitMode="scroll"
                items={pagesSimple}
                getItemLabel={(item) => item}
              />
              <Badge size="xs" status="system" label="черновик" />
              <Text size="xs" view="secondary">
                20.01.2023
              </Text>
              <Tag className="header-dropdown" icon={IconKebab} size="xs" />
              <div className="line mx-8"></div>
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
          </>
        )}
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
        <User
          avatarUrl="https://i.ibb.co/K2R8Lqb/Rectangle-1496.png"
          name="Имя Фамилия"
        />
      </div>
    </header>
  );
};
