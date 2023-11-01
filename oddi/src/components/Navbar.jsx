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
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white bg-[#250E62] ">
      <a href="/">
        <img
          src={Logo}
          alt="Logo de oddi"
          title="oddi"
          style={{ width: "100px" }}
        />
      </a>

      {isHomePage && (
        <ul className="hidden md:flex h-24">
          <li className="p-10">
            <a href="https://blog.oddi.es/">BLOG</a>
          </li>
          <li className="p-10">
            <a href="/equipo" className="p-10 mr-22px">
              EQUIPO
            </a>
          </li>

          <li className="p-0 ">
            <a  href="/construccion" onClick={handleCloseNav}>
              <button className="bg-[#250E62] border-white rounded-md my-6 px-4 py-3 text-white  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3] hover:text-[#250E62]">
                PROBAR
              </button>
            </a>
          </li>
        </ul>
      )}

      {/* mobile component */}
      {isHomePage && (
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      )}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-[#250E62] bg-[#250E62]  ease-in-out duration-500 "
        }
      >
        <img
          src={Logo}
          alt="Logo de oddi"
          title="oddi"
          style={{ width: "80px" }}
          className="m-4"
        />
        <ul className="pt-4">
          <li className="p-4 border-b">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={handleCloseNav}
            >
              SOBRE ODDI
            </Link>
          </li>
          <li className="p-4 border-b">
            <a href="/equipo">EQUIPO</a>
          </li>
          <li className="p-4 border-b">
            <a href="https://blog.oddi.es/">BLOG</a>
          </li>
          <li className="p-4">
            <a href="/construccion" onClick={handleCloseNav}>
              PROBAR
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
