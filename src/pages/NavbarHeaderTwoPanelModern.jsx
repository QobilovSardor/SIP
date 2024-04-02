import { Header, NavbarLayout } from "../layouts";
import { Panels } from "../layouts/Panels";

export const NavbarHeaderTwoPanelModern = () => {
  return (
    <>
      <div className="flex w-full modern-box">
        <div className="h-fix">
          <NavbarLayout openNav={true} hideHamburger={false} />
        </div>
        <div className="w-full">
          <Header searchHeader={true} removeLogo={true} />
          <div className="flex">
            <Panels navLayout={false} showBtn={true} hideHamburger={true} />
          </div>
        </div>
      </div>
    </>
  );
};
