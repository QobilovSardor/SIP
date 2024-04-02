import { Header, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const HeaderOpenNavbar = () => {
  return (
    <>
      <Header searchHeader={true} />
      <div className="flex">
        <NavbarLayout openNav={true} hideHamburger={true} />
        <Main button={true} />
      </div>
    </>
  );
};
