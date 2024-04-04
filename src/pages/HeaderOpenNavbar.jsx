import { Header, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const HeaderOpenNavbar = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  handleToggleNav,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  navbarHidden,
}) => {
  return (
    <>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        hamburgerLogo={true}
      />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          activeNav={activeNav}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <Main button={true} />
      </div>
    </>
  );
};
