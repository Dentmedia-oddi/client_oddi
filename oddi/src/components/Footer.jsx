import React from "react";
//import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-2 grid lg:grid-cols-3 gap-6 text-white justify-center">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
        <p className="py-4">Odontología dígital guiada.</p>
        <div className="flex justify-between md:w-[25%] my-2">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between md:w-[75%] mt-2">
        {/* <div>
          <h6 className="font-medium text-[#0076A5]">Soporte</h6>
          <ul>
            <li className="py-2 text-sm">Documentación</li>
            <li className="py-2 text-sm">Guías</li>
            <li className="py-2 text-sm">Status del servicio</li>
          </ul>
        </div> */}
        <div>
          <h6 className="font-medium text-[#0076A5]">ODDI</h6>
          <ul>
            {/* <li className="py-2 text-sm">Blog de noticias</li> */}

            <Link to="about" smooth={true} duration={500}>
              Sobre ODDI
            </Link>

            <a href="/equipo">
              <li className="py-2 text-sm">Nuestro equipo</li>
            </a>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#0076A5]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Políticas de uso</li>
            <li className="py-2 text-sm">Políticas de privacidad</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
