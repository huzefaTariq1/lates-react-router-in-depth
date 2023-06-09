import { NavLink ,Outlet} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function Layout() {
  return (
    <div className="root-layout">
     <header>
        <nav>
            <h1>Latest React Router</h1>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="products" >Products</NavLink>
        </nav>
        <Breadcrumbs/>
     </header>
     <main>
        <Outlet/>
     </main>
  </div>
  )
}

export default Layout