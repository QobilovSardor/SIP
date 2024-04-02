import { DefaultHeader } from "../layouts";
import { Panels } from "../layouts/Panels";

export const OtherFixedWidth = () => {
  return (
    <div className="other-fix__width">
      <DefaultHeader hideHamburger={true} />
      <div className="flex">
        <Panels noContent={true} showBtn={true} />
      </div>
    </div>
  );
};
