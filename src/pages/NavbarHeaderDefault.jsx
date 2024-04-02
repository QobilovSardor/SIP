import { Header, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const NavbarHeaderDefault = () => {
  return (
    <>
      <div className="flex w-full">
        <NavbarLayout openNav={false} hideHamburger={false} />
        <div className="w-full">
          <Header searchHeader={true} removeLogo={true} />
          <Main button={true} />
        </div>
      </div>
    </>
  );
};
