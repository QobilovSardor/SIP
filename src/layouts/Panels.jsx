import { Main } from "./Main";
import { Text } from "@consta/uikit/Text";
import { NavbarLayout } from "./NavbarLayout";

// eslint-disable-next-line react/prop-types
export const Panels = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  navLayout,
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  hideHamburger,
  // eslint-disable-next-line react/prop-types
  showBtn,
  // eslint-disable-next-line react/prop-types
  noContent,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  openNav,
}) => {
  console.log(navLayout);
  return (
    <div className={`panels ${className}`}>
      {activeNav ? (
        <NavbarLayout
          openNav={activeNav}
          hideHamburger={true}
          activeNav={activeNav}
        />
      ) : null}
      {navLayout ? (
        <NavbarLayout
          openNav={activeNav}
          hideHamburger={hideHamburger}
          activeNav={activeNav}
        />
      ) : null}
      <div className="left-sidebar sidebar">
        {noContent ? null : (
          <Text view="secondary" size="s">
            Область для контента левой панели
          </Text>
        )}
      </div>
      <Main button={showBtn} />
      <div className="right-sidebar sidebar">
        {noContent ? null : (
          <Text view="secondary" size="s">
            Область для контента правой панели
          </Text>
        )}
      </div>
    </div>
  );
};
