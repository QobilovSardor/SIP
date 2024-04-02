import { useState } from "react";
import { IconPanelLeft } from "@consta/icons/IconPanelLeft";
import { IconPanelRight } from "@consta/icons/IconPanelRight";
import { IconPanelBottom } from "@consta/icons/IconPanelBottom";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconQuestion } from "@consta/icons/IconQuestion";
import { IconClose } from "@consta/icons/IconClose";
import { Button } from "@consta/uikit/Button";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { Link } from "react-router-dom";
import { Sidebar } from "@consta/uikit/Sidebar";
import { Modal } from "@consta/uikit/Modal";
import { Text } from "@consta/uikit/Text";

export const OpenPanelOrModal = () => {
  const [sidebarConfig, setSidebarConfig] = useState({
    position: null,
    isOpen: false,
  });
  const [modalConfig, setModalConfig] = useState({ isOpen: false, size: "sm" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarOpenRight, setIsSidebarOpenRight] = useState(false);
  const [isSidebarOpenBottom, setIsSidebarOpenBottom] = useState(false);

  const openSidebar = (position) =>
    setSidebarConfig({ position, isOpen: true });
  const closeSidebar = () =>
    setSidebarConfig({ ...sidebarConfig, isOpen: false });

  const openModal = (size) => setModalConfig({ isOpen: true, size });
  const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  const getSidebarClass = (position) => {
    switch (position) {
      case "left":
        return "left-sidebar";
      case "right":
        return "right-sidebar";
      default:
        return "";
    }
  };

  return (
    <div className="other-panel">
      <div className="btns">
        <Button
          label="Левая панель"
          iconLeft={IconPanelLeft}
          size="xs"
          view="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <Button
          label="Правая панель"
          iconRight={IconPanelRight}
          size="xs"
          view="ghost"
          onClick={() => setIsSidebarOpenRight(!isSidebarOpenRight)}
        />
        <Button
          label="Нижняя панель"
          iconLeft={IconPanelBottom}
          size="xs"
          view="ghost"
          onClick={() => setIsSidebarOpenBottom(!isSidebarOpenBottom)}
        />
        <Button
          label="Левый сайдбар"
          iconLeft={IconHamburger}
          size="xs"
          view="ghost"
          onClick={() => openSidebar("left")}
        />
        <Button
          label="Правый сайдбар"
          iconLeft={IconHamburger}
          size="xs"
          view="ghost"
          onClick={() => openSidebar("right")}
        />
        <Button
          label="Модальное окно 1"
          size="xs"
          view="ghost"
          onClick={() => openModal("sm")}
        />
        <Button
          label="Модальное окно 2"
          size="xs"
          view="ghost"
          onClick={() => openModal("lg")}
        />
      </div>
      <Link to="/" className="main-link">
        <Button
          label="Вернуться назад"
          size="xs"
          view="secondary"
          className={cnMixSpace({ mT: "s" })}
        />
      </Link>

      <Sidebar
        className={`sidebar ${getSidebarClass(sidebarConfig.position)}`}
        isOpen={sidebarConfig.isOpen}
        position={sidebarConfig.position}
        size="l"
        onClickOutside={closeSidebar}
        onEsc={closeSidebar}
      >
        <div className="header-sidebar">
          <Text as="p" size="l" view="primary" weight="semibold">
            {sidebarConfig.position === "left"
              ? "Левый сайдбар"
              : sidebarConfig.position === "right"
              ? "Правый сайдбар"
              : "Нижняя панель"}
          </Text>
          <Button
            size="xs"
            view="ghost"
            width="default"
            onlyIcon
            iconLeft={IconClose}
            onClick={closeSidebar}
          />
        </div>
        <Sidebar.Content className="sidebar-content">
          <Text as="p" size="xs" view="secondary">
            Область для контента
          </Text>
        </Sidebar.Content>
      </Sidebar>

      <Sidebar
        className={`sidebar no-shadow`}
        isOpen={isSidebarOpen}
        onClickOutside={() => setIsSidebarOpen(false)}
        onEsc={() => setIsSidebarOpen(false)}
        size="l"
        position="left"
        hasOverlay={false}
      >
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
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <Sidebar.Content className="sidebar-content">
          <Text as="p" size="xs" view="secondary">
            Область для контента
          </Text>
        </Sidebar.Content>
      </Sidebar>

      <Sidebar
        className={`sidebar no-shadow`}
        isOpen={isSidebarOpenRight}
        onClickOutside={() => setIsSidebarOpenRight(false)}
        onEsc={() => setIsSidebarOpenRight(false)}
        size="l"
        position="right"
        hasOverlay={false}
      >
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
            onClick={() => setIsSidebarOpenRight(false)}
          />
        </div>
        <Sidebar.Content className="sidebar-content">
          <Text as="p" size="xs" view="secondary">
            Область для контента
          </Text>
        </Sidebar.Content>
      </Sidebar>

      <Sidebar
        className={`sidebar no-shadow bottom-sidebar`}
        isOpen={isSidebarOpenBottom}
        onClickOutside={() => setIsSidebarOpenBottom(false)}
        onEsc={() => setIsSidebarOpenBottom(false)}
        size="l"
        position="bottom"
        hasOverlay={false}
      >
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
            onClick={() => setIsSidebarOpenBottom(false)}
          />
        </div>
        <Sidebar.Content className="sidebar-content">
          <Text as="p" size="xs" view="secondary">
            Область для контента
          </Text>
        </Sidebar.Content>
      </Sidebar>

      <Modal
        isOpen={modalConfig.isOpen}
        hasOverlay
        onClickOutside={closeModal}
        onEsc={closeModal}
        className={`modal-${modalConfig.size} modal`}
      >
        <div className="modal-header">
          <Text as="p">Модальное окно</Text>
          <Button
            size="xs"
            view="ghost"
            width="default"
            onlyIcon
            iconLeft={IconClose}
            onClick={closeModal}
          />
        </div>
        <div className="modal-body">
          <Text as="p" size="s" view="secondary">
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
            onClick={closeModal}
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
      </Modal>
    </div>
  );
};
