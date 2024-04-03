import { IconPanelLeft } from "@consta/icons/IconPanelLeft";
import { IconPanelRight } from "@consta/icons/IconPanelRight";
import { IconPanelBottom } from "@consta/icons/IconPanelBottom";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconQuestion } from "@consta/icons/IconQuestion";
import { IconClose } from "@consta/icons/IconClose";
import { Button } from "@consta/uikit/Button";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { Link } from "react-router-dom";
import { Text } from "@consta/uikit/Text";
import { Resizable } from "re-resizable";

export const ResizePage = () => {
  return (
    <div className="resize-page">
      <div className="resize-top">
        <div className="left-sidebar">
          <Resizable
            className="resize-box"
            defaultSize={{
              minW: "320px",
            }}
          >
            <div className="sidebar-box">
              <div className="header-sidebar">
                <Text as="p" size="l" view="primary" weight="semibold">
                  Панель
                </Text>
                <Button
                  size="xs"
                  view="ghost"
                  width="default"
                  onlyIcon
                  iconLeft={IconClose}
                />
              </div>
              <div className="sidebar-body">
                <Text as="p" size="xs" view="secondary">
                  Область для контента
                </Text>
              </div>
              <div className="modal-footer">
                <Button
                  size="xs"
                  view="ghost"
                  width="default"
                  onlyIcon
                  iconLeft={IconQuestion}
                />
                <div>
                  <Button label="Кнопка" size="xs" view="secondary" />
                  <Button
                    label="Кнопка"
                    size="xs"
                    view="ghost"
                    className={cnMixSpace({ mL: "xs" })}
                  />
                </div>
              </div>
            </div>
          </Resizable>
        </div>
        <div className="midle-sidebar">
          <div className="btns">
            <Button
              label="Левая панель"
              iconLeft={IconPanelLeft}
              size="xs"
              view="ghost"
            />
            <Button
              label="Правая панель"
              iconRight={IconPanelRight}
              size="xs"
              view="ghost"
            />
            <Button
              label="Нижняя панель"
              iconLeft={IconPanelBottom}
              size="xs"
              view="ghost"
            />
            <Button
              label="Левый сайдбар"
              iconLeft={IconHamburger}
              size="xs"
              view="ghost"
            />
            <Button
              label="Правый сайдбар"
              iconLeft={IconHamburger}
              size="xs"
              view="ghost"
            />
            <Button label="Модальное окно 1" size="xs" view="ghost" />
            <Button label="Модальное окно 2" size="xs" view="ghost" />
          </div>
          <Link to="/" className="main-link">
            <Button
              label="Вернуться назад"
              size="xs"
              view="secondary"
              className={cnMixSpace({ mT: "s" })}
            />
          </Link>
        </div>
        <div className="right-sidebar">
          <Resizable
            className="resize-box"
            defaultSize={{
              minW: "320px",
            }}
          >
            <div className="sidebar-box">
              <div className="header-sidebar">
                <Text as="p" size="l" view="primary" weight="semibold">
                  Панель
                </Text>
                <Button
                  size="xs"
                  view="ghost"
                  width="default"
                  onlyIcon
                  iconLeft={IconClose}
                />
              </div>
              <div className="sidebar-body">
                <Text as="p" size="xs" view="secondary">
                  Область для контента
                </Text>
              </div>
              <div className="modal-footer">
                <Button
                  size="xs"
                  view="ghost"
                  width="default"
                  onlyIcon
                  iconLeft={IconQuestion}
                />
                <div>
                  <Button label="Кнопка" size="xs" view="secondary" />
                  <Button
                    label="Кнопка"
                    size="xs"
                    view="ghost"
                    className={cnMixSpace({ mL: "xs" })}
                  />
                </div>
              </div>
            </div>
          </Resizable>
        </div>
      </div>
      <div className="resize-bottom">
        <Resizable
          className="resize-bottom__box"
          handleClasses={{
            top: "pointer-events-none",
            bottom: "pointer-events-none",
            left: "pointer-events-none",
            topRight: "pointer-events-none",
            bottomRight: "pointer-events-none",
            bottomLeft: "pointer-events-none",
            topLeft: "pointer-events-none",
          }}
        >
          <div className="sidebar-box">
            <div className="header-sidebar">
              <Text as="p" size="l" view="primary" weight="semibold">
                Панель
              </Text>
              <Button
                size="xs"
                view="ghost"
                width="default"
                onlyIcon
                iconLeft={IconClose}
              />
            </div>
            <div className="sidebar-body">
              <Text as="p" size="xs" view="secondary">
                Область для контента
              </Text>
            </div>
            <div className="modal-footer">
              <Button
                size="xs"
                view="ghost"
                width="default"
                onlyIcon
                iconLeft={IconQuestion}
              />
              <div>
                <Button label="Кнопка" size="xs" view="secondary" />
                <Button
                  label="Кнопка"
                  size="xs"
                  view="ghost"
                  className={cnMixSpace({ mL: "xs" })}
                />
              </div>
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  );
};
