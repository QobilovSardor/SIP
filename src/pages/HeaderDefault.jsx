import { DefaultHeader, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

// eslint-disable-next-line react/prop-types
export const HeaderDefault = ({
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
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          handleToggleNav={handleToggleNav}
          activeNav={activeNav}
          openNav={activeNav}
          navbarHidden={true}
        />
        <Main button={true} />
      </div>
    </>
  );
};
