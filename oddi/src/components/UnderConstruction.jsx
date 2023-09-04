import React from "react";
import under from "../assets/Underconstruction.png";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div>
      <div name="construction" className="w-full bg-white py-20 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <img className="w-[450px] mx-auto" src={under} alt="Imagen de sitio en construccion" title="construccion" />
          <div className="flex flex-col justify-center">
            <p className="text-[#0076A5] font-bold text-center md:text-4xl sm:text-2xl text-xl  md:py-2">
              ¡PLANTILLA EN CONSTRUCCIÓN!
            </p>
            <br />
            <p className="text-center md:text-xl sm:text-xl text-xl font-Regular">
            Pronto podrás disfrutar de las plantillas para especialidades odontológicas. <br/> Deja {" "}
              <a
                href="/#interest-form"
                onClick={() => navigate("/#interest-form")}
                className="text-[#0076A5] font-bold underline"
              >
                aquí
              </a>
              {" "}tu email y accede a la prueba gratuita.
            </p>
          </div>
          
        </div>
        <Link to="/" className="flex justify-end items-center pt-10 px-2">
        <button className="bg-white w-[100px] rounded-md font-medium ml-auto my-4 px-6 text-[#250E62]  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3]">
          Volver
        </button>
      </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;
