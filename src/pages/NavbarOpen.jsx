import { NavbarLayout } from "../layouts";
import { Main } from "../layouts/Main";

export const NavbarOpen = () => {
  return (
    <div className="flex navbar-screen">
      <NavbarLayout openNav={true} />
      <Main button={true} className="h-full" />
    </div>
  );
};
