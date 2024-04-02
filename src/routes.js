import {
  HeaderMenu,
  HeaderTwoPanel,
  Home,
  Intro,
  NavbarDefault,
  NavbarOpen,
  NavbarTwoPanel,
} from "./pages";
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
  {
    path: "/header-two-panel",
    component: HeaderTwoPanel,
  },
  {
    path: "/navbar",
    component: NavbarDefault,
  },
  {
    path: "/navbar-open",
    component: NavbarOpen,
  },
  {
    path: "/navbar-two-panel",
    component: NavbarTwoPanel,
  },
];
const routes = [...coreRoutes];
export default routes;
