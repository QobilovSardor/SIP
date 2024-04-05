import { Link } from "react-router-dom";
import { DefaultHeader } from "../layouts";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { NavbarLayout } from "../layouts";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const OtherBlockContainer = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  handleToggleNav,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  navbarHidden,
}) => {
  return (
    <div className="max-h-full mb-8">
      {/* <ResirerComp /> */}
      <DefaultHeader handleToggleNav={handleToggleNav} />
      <div className="flex">
        {activeNav ? (
          <NavbarLayout
            hideHamburger={true}
            activeNav={activeNav}
            openNav={activeNav}
            navbarHidden={true}
            handleToggleNav={handleToggleNav}
          />
        ) : null}

        <div className="other-block__container">
          <PanelGroup>
            <Panel defaultSize={15} className="other-top__panel">
              <div className="top-content">
                <div className="w-full">
                  <PanelGroup className="gap-8" direction="horizontal">
                    <Panel defaultSize={14} className="top-content__left">
                      <div className=" content-box">
                        <Text view="secondary" size="s">
                          Область для контента
                        </Text>
                      </div>
                    </Panel>
                    <PanelResizeHandle />

                    <Panel className="top-content__right">
                      <div className=" content-box">
                        <Text view="secondary" size="s">
                          Область для контента
                        </Text>
                      </div>
                    </Panel>
                  </PanelGroup>
                </div>
              </div>
            </Panel>
            <PanelResizeHandle />
            <Panel className="other-bottom__panel">
              <div className="bottom-content content-box">
                <div>
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
            </Panel>
          </PanelGroup>
        </div>
      </div>
    </div>
  );
};
