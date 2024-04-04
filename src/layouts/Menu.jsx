import { Button } from "@consta/uikit/Button";
import { useState } from "react";
import { IconAdd } from "@consta/icons/IconAdd";
import { IconRevert } from "@consta/icons/IconRevert";
import { IconShare } from "@consta/icons/IconShare";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconAlert } from "@consta/icons/IconAlert";
import { IconUpload } from "@consta/icons/IconUpload";
import { IconExpand } from "@consta/icons/IconExpand";
import { Text } from "@consta/uikit/Text";
import { Badge } from "@consta/uikit/Badge";

const items = [
  "Общая",
  "Информация",
  "Файлы",
  "Команда",
  "История",
  "Комментарии",
];

// eslint-disable-next-line react/prop-types
export const Menu = ({ menuRight }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="menu">
      <div className="menu-left">
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
        {menuRight ? (
          <div className="btns">
            <Button
              label="Добавить"
              size="xs"
              view="primary"
              iconLeft={IconAdd}
            />
            <Button
              label="Обновить"
              size="xs"
              view="secondary"
              iconLeft={IconRevert}
            />
            <Button
              label="Поделиться"
              size="xs"
              view="ghost"
              iconLeft={IconShare}
            />
            <div className="line"></div>
            <Button
              label="Удалить"
              size="xs"
              view="clear"
              iconLeft={IconTrash}
            />
          </div>
        ) : null}
      </div>
      {menuRight ? (
        <div className="menu-right">
          <Text size="s" view="secondary">
            Информационный текст
          </Text>
          {/* <Button
            className="toolbar"
            iconLeft={IconAllDone}
            label="Новый"
            iconRight={IconAlert}
            view="primary"
            size="xs"
          /> */}
          <Badge
            iconLeft={IconAllDone}
            iconRight={IconAlert}
            status="normal"
            label="Новый"
            size="xs"
          />
          <div className="line"></div>
          <Button
            size="xs"
            label="Загрузить"
            view="ghost"
            iconLeft={IconUpload}
          />
          <Button
            size="xs"
            label="Развернуть"
            view="cencled"
            iconLeft={IconExpand}
          />
        </div>
      ) : null}
    </div>
  );
};
