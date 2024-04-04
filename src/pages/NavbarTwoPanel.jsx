// import { NavbarLayout } from "../layouts";
import { Panels } from "../layouts/Panels";

export const NavbarTwoPanel = () => {
  return (
    <div className="flex navbar-two__panel">
      <Panels navLayout={true} showBtn={true} className="h-full" />
    </div>
  );
};
