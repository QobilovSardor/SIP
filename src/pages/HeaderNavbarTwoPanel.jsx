import { Header, NavbarLayout } from "../layouts";
import { Panels } from "../layouts/Panels";

export const HeaderNavbarTwoPanel = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  handleToggleNav,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  navbarHidden,
}) => {
  return (
    <div className="logo-box_12">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        hamburgerLogo={true}
      />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          handleToggleNav={handleToggleNav}
          activeNav={activeNav}
          openNav={activeNav}
          navbarHidden={false}
        />
        <Panels
          navLayout={false}
          // activeNav={false}
          showBtn={true}
          hideHamburger={true}
        />
      </div>
    </div>
  );
};
