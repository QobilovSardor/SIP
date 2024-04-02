import { Header, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const HeaderNavbar = () => {
  return (
    <>
      <Header searchHeader={true} />
      <div className="flex">
        <NavbarLayout hideHamburger={true} />
        <Main button={true} />
      </div>
    </>
  );
};
