import { NotFoundData } from "../components/NotFoundData"
import { Header, Main, NavbarLayout } from "../layouts"

export const NotFound = ({ activeNav, handleToggleNav }) => {
  return (
    <div>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        hamburgerLogo={true}
      />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          activeNav={activeNav}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <Main notFound={true} />
      </div>
    </div>
  )
}
