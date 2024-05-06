import Navbar from "./Navbar.js";
import Footer from "./Footer.jsx";
import Routers from "../routers/Routers.js";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout