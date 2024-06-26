import assets from "../assets";
import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconRing } from "@consta/icons/IconRing";
import { IconBento } from "@consta/icons/IconBento";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconBackward } from "@consta/icons/IconBackward";
import { Breadcrumbs } from "@consta/uikit/Breadcrumbs";
import { Badge } from "@consta/uikit/Badge";
import { Text } from "@consta/uikit/Text";
import { useState } from "react";
import { User } from "@consta/uikit/User";
import { useLocation } from "react-router-dom";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconStorage } from '@consta/icons/IconStorage';
import { IconFolders } from "@consta/icons/IconFolders";

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


export const Header = ({
  searchHeader,
  removeLogo,
  hamburgerLogo,
  handleToggleNav,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation().pathname;
  const clicker = () => {
    handleToggleNav();
  };
  return (
    <header className="header">
      <div className="header-left">
        {hamburgerLogo ? (
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconHamburger}
            className="hamburger-menu"
            onClick={clicker}
          />
        ) : null}
        {removeLogo ? null : (
          <a className="logo-box" href="#!">
            <div className="logo">
              <img src={assets.headerLogo} alt="header-logo" width="10" height="11" />
            </div>
            <p>Geoapp</p>
          </a>
        )}
        <div className={`${location === "/" ? "hidden " : ""}search-box`}>
          <div className="search-box">
            <input type="text" placeholder="Поиск" />
            <IconSearchStroked className="search-icon" />
          </div>
        </div>
        {searchHeader ? null : (
          <>
            <div className="line"></div>
            <div
              className={`${location === "/" ? "hidden " : ""
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
                fitMode=""
                items={pagesSimple}
                getItemLabel={(item) => item}
              />
              <Badge size="xs" status="system" label="черновик" />
              <Text size="xs" view="secondary">
                20.01.2023
              </Text>
              <Button onlyIcon view="cencle" iconLeft={IconKebab} size="xs" />
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
      {removeLogo ? (
        <Button label="Настройки" size="xs" view="ghost" />
      ) : (
        <div className={`${location === "/" ? "hidden " : ""} header-right`}>
          <div>
            <Button view="clear" size="xs" onlyIcon iconLeft={IconFolders}
            />
            <Button view="clear" size="xs" onlyIcon iconLeft={IconRing} />
            <Button view="clear" size="xs" onlyIcon iconLeft={IconStorage} />
          </div>
          <User avatarUrl={assets.avatar} />
        </div>
      )}
    </header>
  );
};
