// import { NavbarLayout } from "../layouts";
import { Panels } from "../layouts/Panels";

export const NavbarTwoPanel = () => {
  return (
    <div className="flex">
      {/* <NavbarLayout openNav={true} /> */}
      <Panels navLayout={true} className="h-full" />
    </div>
  );
};
