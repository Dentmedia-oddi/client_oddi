import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img src={Logo} alt="Logo" style={{ width: "100px" }} />

      <ul className="hidden md:flex">
        <li className="p-4">Sobre ODDI</li>
        <li className="p-4">Prueba</li>
      </ul>

      {/* mobile component */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/>  : <AiOutlineMenu size={20}/>}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-[#250E62] bg-[#250E62]  ease-in-out duration-500 "
            : "ease-in-out duration-500 fixed left-[100%] "
        }
      >
        <img src={Logo} alt='Logo' style={{ width: "80px" }} className='m-4'/>
        <ul className="pt-4">
          <li className="p-4 border-b">Sobre ODDI</li>
          <li className="p-4 border-b">Prueba</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
