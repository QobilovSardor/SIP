import { Main } from "./Main";
import { Text } from "@consta/uikit/Text";
import { NavbarLayout } from "./NavbarLayout";

// eslint-disable-next-line react/prop-types
export const Panels = ({ navLayout, className }) => {
  return (
    <div className={`panels ${className}`}>
      {navLayout ? <NavbarLayout openNav={navLayout} /> : null}
      <div className="left-sidebar sidebar">
        <Text view="secondary" size="s">
          Область для контента левой панели
        </Text>
      </div>
      <Main button={navLayout} />
      <div className="right-sidebar sidebar">
        <Text view="secondary" size="s">
          Область для контента правой панели
        </Text>
      </div>
    </div>
  );
};
