import { DefaultHeader, Main, NavbarLayout } from "../layouts";
export const OtherOverlayContent = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  handleToggleNav,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  navbarHidden,
}) => {
  return (
    <div className="other-overaly__content">
      <DefaultHeader handleToggleNav={handleToggleNav} />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          activeNav={activeNav}
          openNav={activeNav}
          navbarHidden={true}
          handleToggleNav={handleToggleNav}
        />
        <div className="flex-item">
          <Main noFull={true} />
          <Main noFull={true} button={true} className={"last-child"} />
        </div>
      </div>
    </div>
  );
};
