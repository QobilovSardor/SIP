import { DefaultHeader } from "../layouts";
import { Main } from "../layouts/Main";
import { Menu } from "../layouts/Menu";

export const HeaderMenu = () => {
  return (
    <>
      <DefaultHeader />
      <Menu />
      <Main button={true} />
    </>
  );
};
