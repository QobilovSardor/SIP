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
  NavbarHeaderModern,
  NavbarHeaderTwoPanel,
  NavbarHeaderTwoPanelModern,
  NavbarOpen,
  NavbarTwoPanel,
  OpenNavbarHeaderDefault,
  OpenNavbarHeaderModern,
  OpenPanelOrModal,
  OtherBlockContainer,
  OtherFixedWidth,
  OtherOverlayContent,
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
  {
    path: "/navbar-header-default-open",
    component: OpenNavbarHeaderDefault,
  },
  {
    path: "/navbar-header-two-panel",
    component: NavbarHeaderTwoPanel,
  },
  {
    path: "/navbar-header-modern",
    component: NavbarHeaderModern,
  },
  {
    path: "/open-navbar-header-modern",
    component: OpenNavbarHeaderModern,
  },
  {
    path: "navbar-header-two-panel-modern",
    component: NavbarHeaderTwoPanelModern,
  },
  {
    path: "other-fixed-width",
    component: OtherFixedWidth,
  },
  {
    path: "other-overlay-content",
    component: OtherOverlayContent,
  },
  {
    path: "other-block-container",
    component: OtherBlockContainer,
  },
  {
    path: "open-panel-or-modal",
    component: OpenPanelOrModal,
  },
];
const routes = [...coreRoutes];
export default routes;
