import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseNav = () => {
    setNav(false);
  };

  const location = useLocation();

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img src={Logo} alt="Logo" style={{ width: "100px" }} />

      {isHomePage && (
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={handleCloseNav}
            >
              Sobre ODDI
            </Link>
          </li>
          <li className="p-4">
            <a
              href="/construccion"
              onClick={handleCloseNav}
            >
              Solicitar demo
            </a>
          </li>
        </ul>
      )}

      {/* mobile component */}
      {isHomePage && (
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>)}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-[#250E62] bg-[#250E62]  ease-in-out duration-500 "
        }
      >
        <img src={Logo} alt="Logo" style={{ width: "80px" }} className="m-4" />
        <ul className="pt-4">
          <li className="p-4 border-b">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={handleCloseNav}
            >
              Sobre ODDI
            </Link>
          </li>
          <li className="p-4">
            <a
              href="/construccion"
              onClick={handleCloseNav}
            >
              Solicitar demo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
