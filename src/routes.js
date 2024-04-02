import {
  HeaderMenu,
  HeaderNavbar,
  HeaderNavbarTwoPanel,
  HeaderOpenNavbar,
  HeaderTwoPanel,
  Home,
  Intro,
  NavbarDefault,
  NavbarHeaderDefault,
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
  {
    path: "/header-navbar",
    component: HeaderNavbar,
  },
  {
    path: "/header-open-navbar",
    component: HeaderOpenNavbar,
  },
  {
    path: "/header-navbar-two-panel",
    component: HeaderNavbarTwoPanel,
  },
  {
    path: "/navbar-header-default",
    component: NavbarHeaderDefault,
  },
];
const routes = [...coreRoutes];
export default routes;
