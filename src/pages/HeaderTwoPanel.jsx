import { DefaultHeader } from "../layouts";
// import { Main } from "../layouts/Main";
import { Panels } from "../layouts/Panels";

export const HeaderTwoPanel = () => {
  return (
    <>
      <DefaultHeader />
      <Panels showBtn={true} />
    </>
  );
};
