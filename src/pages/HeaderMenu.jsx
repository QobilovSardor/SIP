import { DefaultHeader, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";
import { Menu } from "../layouts/Menu";

export const HeaderMenu = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  handleToggleNav,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  navbarHidden,
}) => {
  return (
    <>
      <DefaultHeader handleToggleNav={handleToggleNav} />
      <div className="w-full">
        <Menu />
        <div className="w-full flex">
          <NavbarLayout
            hideHamburger={true}
            activeNav={activeNav}
            openNav={activeNav}
            navbarHidden={true}
          />
          <Main button={true} />
        </div>
      </div>
    </>
  );
};
