import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white justify-center">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
        <p className="py-4">Odonto Diagrama Digital</p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#0076A5]">Soporte</h6>
          <ul>
            <li className="py-2 text-sm">Documentación</li>
            <li className="py-2 text-sm">Guías</li>
            <li className="py-2 text-sm">Status del servicio</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#0076A5]">Empresa</h6>
          <ul>
            <li className="py-2 text-sm">Blog de noticias</li>
            <li className="py-2 text-sm">Contacto</li>
            <li className="py-2 text-sm">Nuestro equipo</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#0076A5]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Políticas de uso</li>
            <li className="py-2 text-sm">Políticas de privacidad</li>
            <li className="py-2 text-sm">Descargo de responsabilidad</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Footer;
