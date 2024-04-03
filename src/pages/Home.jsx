import { Breadcrumbs } from "@consta/uikit/Breadcrumbs";
import { Header } from "../layouts";
import { Menu } from "../layouts/Menu";
import { Badge } from "@consta/uikit/Badge";
import { Button } from "@consta/uikit/Button";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconEdit } from "@consta/icons/IconEdit";
import { IconSettings } from "@consta/icons/IconSettings";
import { IconBackward } from "@consta/icons/IconBackward";
import { Text } from "@consta/uikit/Text";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { useState } from "react";
import { Tabs } from "@consta/uikit/Tabs";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { Link } from "react-router-dom";

const items = ["Газ", "Газ 2", "Газ 3"];
const itemsTab = ["Информация", "Документы", "Статистика"];

const pagesSimple = ["Главная", "Раздел", "Страница"];
export const Home = () => {
  const [value, setValue] = useState(itemsTab[0]);
  const getItemLabel = (label) => label;

  return (
    <div className="home">
      <Header />
      <Menu menuRight={true} />
      <div className="home-container">
        <div className="">
          <div className="nav-bottom">
            <div className={`header-breadcrumbs pl-0`}>
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
            </div>
            <Button label="Кнопка" view="ghost" size="xs" />
            <div className="line"></div>
            <Button onlyIcon view="ghost" size="xs" iconLeft={IconSettings} />
            <Button onlyIcon view="ghost" size="xs" iconLeft={IconKebab} />
          </div>
        </div>
        <div className="flex px-16">
          <h1 className="title">Подготовка документов №207</h1>
          <div className="btns">
            <Button label="Кнопка" view="ghost" size="s" />
            <div className="line"></div>
            <Button onlyIcon view="ghost" size="s" iconLeft={IconSettings} />
            <Button onlyIcon view="ghost" size="s" iconLeft={IconSettings} />
          </div>
        </div>
        <div className="flex px-16 my-16">
          <h3>Подготовка документов №207</h3>
          <div className="btns">
            <Button label="Кнопка" view="ghost" size="xs" />
            <div className="line"></div>
            <Button onlyIcon view="ghost" size="xs" iconLeft={IconSettings} />
            <Button onlyIcon view="ghost" size="xs" iconLeft={IconKebab} />
          </div>
        </div>
        <Text view="secondary" className="home-info px-16">
          Место для вывода очень-очень длинного описания и дополнительной
          информации. Повторим и покажем на две строки, место <br /> для вывода
          длинного описания и дополнительной информации
        </Text>
        <div className="line full px-16"></div>
        <div className="content-box px-16">
          <Text size="xs" view="secondary">
            Картинка или контент
          </Text>
        </div>
        <div className="search-btns">
          <div>
            <div className="toolbar flex">
              <ChoiceGroup
                value={value}
                onChange={setValue}
                items={items}
                getItemLabel={(item) => item}
                multiple={false}
                name="ChoiceGroupExampleTextOverflow"
                size="xs"
                view="secondary"
                truncate
              />
              <div className="search-box">
                <input type="text" placeholder="Поиск" />
                <IconSearchStroked className="search-icon" />
              </div>
            </div>
            <div className="btns">
              <Button label="Важная кнопка" view="primary" size="xs" />
              <Button label="Кнопка" view="ghost" size="xs" />
              <Button view="ghost" iconLeft={IconEdit} onlyIcon size="xs" />
              <div className="line"></div>
              <Button view="ghost" iconLeft={IconTrash} onlyIcon size="xs" />
            </div>
          </div>
          <div className="flex">
            <Button label="Кнопка" view="secondary" size="xs" />
            <Button label="Кнопка" view="ghost" size="xs" />
            <div className="line"></div>
            <Button onlyIcon view="ghost" size="xs" iconLeft={IconSettings} />
            <Button onlyIcon view="ghost" size="xs" iconLeft={IconKebab} />
          </div>
        </div>
        <div className="tabs">
          <Tabs
            value={value}
            onChange={setValue}
            items={itemsTab}
            getItemLabel={getItemLabel}
            size="xs"
          />
        </div>
      </div>
      <div className="bottom-main">
        <Text view="secondary" size="s">
          Область для контента
        </Text>
        <Link to="/" className="main-link">
          <Button
            label="Вернуться назад"
            size="xs"
            view="secondary"
            className={cnMixSpace({
              mT: "s",
            })}
          />
        </Link>
      </div>
    </div>
  );
};
