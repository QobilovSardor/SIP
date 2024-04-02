import { Header, NavbarLayout } from "../layouts";
import { Panels } from "../layouts/Panels";

export const NavbarHeaderTwoPanel = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="h-fix">
          <NavbarLayout openNav={true} hideHamburger={false} />
        </div>
        <div className="w-full">
          <Header searchHeader={true} removeLogo={true} />
          <Panels showBtn={true} />
        </div>
      </div>
    </>
  );
};
