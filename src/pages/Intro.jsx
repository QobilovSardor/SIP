import { Link } from "react-router-dom";
import assets from "../assets";
import { Header } from "../layouts";
import { Text } from "@consta/uikit/Text";
import { Breadcrumbs } from "@consta/uikit/Breadcrumbs";

const pagesSimple = ["Приложение", "Лейауты"];

export const Intro = () => {
  return (
    <>
      <Header />

      <div className="intro">
        <Breadcrumbs
          size="xs"
          fitMode="scroll"
          items={pagesSimple}
          getItemLabel={(item) => item}
        />
        <h2 className="title">Стандарты по структуре страниц</h2>
        <div className="intro-box">
          <Link to="home" className="intro-card">
            <img src={assets.page01} alt="" />
            <Text size="s" view="secondary" className="page-info">
              0.1 Page
            </Text>
          </Link>
          <div className="intro-cards">
            <Link to="header-default" className="intro-card">
              <img src={assets.page1_1} alt="" />
              <Text size="s" view="secondary" className="page-info">
                1.1 Header Default
              </Text>
            </Link>
            <Link to="header-menu" className="intro-card">
              <img src={assets.page1_2} alt="" />
              <Text size="s" view="secondary" className="page-info">
                1.2 Header and Menu
              </Text>
            </Link>
            <Link to="header-two-panel" className="intro-card">
              <img src={assets.page1_3} alt="" />
              <Text size="s" view="secondary" className="page-info">
                1.3 Header and Two Panel
              </Text>
            </Link>
            <Link to="navbar" className="intro-card">
              <img src={assets.page1_4} alt="" />
              <Text size="s" view="secondary" className="page-info">
                2.1 Navbar Default
              </Text>
            </Link>
            <Link to="navbar-open" className="intro-card">
              <img src={assets.page1_6} alt="" />
              <Text size="s" view="secondary" className="page-info">
                2.2 Navbar Open
              </Text>
            </Link>
            <Link to="navbar-two-panel" className="intro-card">
              <img src={assets.page1_7} alt="" />
              <Text size="s" view="secondary" className="page-info">
              2.3 Navbar and Two Panel
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_1} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_2} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_3} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_4} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_6} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_6} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_1} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_2} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_3} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_4} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_6} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_6} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <Link to="" className="intro-card">
              <img src={assets.page1_6} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
