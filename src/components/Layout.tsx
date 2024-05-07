import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import Routers from "../routers/Routers.tsx";
import React from "react";

const Layout: React.FC = () => {
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