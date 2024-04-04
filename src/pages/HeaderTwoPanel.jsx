import { DefaultHeader } from "../layouts";
import { Panels } from "../layouts/Panels";

export const HeaderTwoPanel = ({
  // eslint-disable-next-line react/prop-types
  activeNav,
  // eslint-disable-next-line react/prop-types
  handleToggleNav,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  navbarHidden,
}) => {
  return (
    <>
      <DefaultHeader handleToggleNav={handleToggleNav} />
      <div className="flex">
        <Panels showBtn={true} activeNav={activeNav} handleToggleNav={handleToggleNav} navbarHidden={true} />
      </div>
    </>
  );
};
