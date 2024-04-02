import { Main } from "./Main";
import { Text } from "@consta/uikit/Text";
import { NavbarLayout } from "./NavbarLayout";

// eslint-disable-next-line react/prop-types
export const Panels = ({
  // eslint-disable-next-line react/prop-types
  navLayout,
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  hideHamburger,
  // eslint-disable-next-line react/prop-types
  showBtn,
  // eslint-disable-next-line react/prop-types
  noContent,
}) => {
  console.log(hideHamburger);
  return (
    <div className={`panels ${className}`}>
      {navLayout ? (
        <NavbarLayout hideHamburger={hideHamburger} openNav={navLayout} />
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
