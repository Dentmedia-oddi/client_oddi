import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-2 grid lg:grid-cols-3 gap-6 text-white justify-center">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }}  />
        <p className="py-2">Odontología dígital guiada.</p>
        <div className="flex justify-between md:w-[25%] my-2">
          <a
            href="https://www.instagram.com/oddi.pro/?igshid=Y2I2MzMwZWM3ZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between md:w-[75%] mt-2">
        <div>
          <h6 className="px-2  font-medium text-[#0076A5]">ODDI</h6>
          <ul>
            <Link to="about" smooth={true} duration={500} >
            <li className="py-2 px-2 text-sm">Sobre ODDI</li>
            </Link>

            <a href="/equipo">
              <li className="py-2 px-2 text-sm">Nuestro equipo</li>
            </a>

            <a href="https://blog.oddi.es/">
              <li className="py-2 px-2 text-sm">Blog</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className=" px-2 font-medium text-[#0076A5]">Legal</h6>
          <ul>
            <li className="py-2 px-2 text-sm">Políticas de uso</li>
            <li className="py-2 px-2 text-sm">Políticas de privacidad</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
