// import { NavbarLayout } from "../layouts";
import { Panels } from "../layouts/Panels";

export const NavbarTwoPanel = () => {
  return (
    <div className="flex">
      <Panels navLayout={true} showBtn={true} className="h-full" />
    </div>
  );
};
