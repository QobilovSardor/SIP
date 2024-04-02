import { HeaderMenu, Home, Intro } from "./pages";
import { HeaderDefault } from "./pages/HeaderDefault";

const coreRoutes = [
  {
    path: "/",
    component: Intro,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/header-default",
    component: HeaderDefault,
  },
  {
    path: "/header-menu",
    component: HeaderMenu,
  },
];
const routes = [...coreRoutes];
export default routes;
