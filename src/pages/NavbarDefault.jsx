import { NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const NavbarDefault = () => {
  return (
    <div className="flex navbar-screen">
      <NavbarLayout />
      <Main button={true} className="h-full" />
    </div>
  );
};
