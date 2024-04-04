import { Link } from "react-router-dom";
import { DefaultHeader } from "../layouts";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { cnMixSpace } from "@consta/uikit/MixSpace";
import { Resizable } from "re-resizable";
import { NavbarLayout } from "../layouts";

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
          <div className="top-content">
            <div className="top-content__left content-box">
              <Text view="secondary" size="s">
                Область для контента
              </Text>
            </div>
            <Resizable
              defaultSize={{
                width: "1575px",
              }}
              className="resizer-right content-box"
            >
              <div className="top-content__right">
                <Text view="secondary" size="s">
                  Область для контента
                </Text>
              </div>
            </Resizable>
          </div>
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
        </div>
      </div>
    </div>
  );
};
