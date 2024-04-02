import { Header, NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const OpenNavbarHeaderModern = () => {
  return (
    <>
      <div className="flex w-full modern-box">
        <div className="h-fix">
          <NavbarLayout openNav={true} hideHamburger={false} />
        </div>
        <div className="w-full">
          <Header searchHeader={true} removeLogo={true} />
          <Main button={true} />
        </div>
      </div>
    </>
  );
};
