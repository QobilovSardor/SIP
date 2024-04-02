import { Header } from "../layouts";
import { Panels } from "../layouts/Panels";

export const HeaderNavbarTwoPanel = () => {
  return (
    <>
      <Header searchHeader={true} />
      <div className="flex">
        <Panels navLayout={true} hideHamburger={true} />
      </div>
    </>
  );
};
