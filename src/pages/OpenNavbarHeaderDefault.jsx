import { Header, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const OpenNavbarHeaderDefault = () => {
  return (
    <>
      <div className="flex w-full">
        <NavbarLayout openNav={true} hideHamburger={false} />
        <div className="w-full">
          <Header searchHeader={true} removeLogo={true} />
          <Main button={true} />
        </div>
      </div>
    </>
  );
};
