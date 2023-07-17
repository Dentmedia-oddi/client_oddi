import React from "react";
import under from "../assets/Underconstruction.png";
import { useNavigate } from "react-router-dom";

function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div>
      <div name="about" className="w-full bg-white py-20 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <img className="w-[450px] mx-auto" src={under} alt="Picunder" />
          <div className="flex flex-col justify-center">
            <p className="text-[#0076A5] font-bold text-center">
              ¡PLANTILLA EN CONSTRUCCIÓN!
            </p>
            <br />
            <p className="text-center">
            Pronto podrás disfrutar de las plantillas para especialidades odontológicas. Deja {" "}
              <a
                href="/#interest-form"
                onClick={() => navigate("/#interest-form")}
                className="text-[#0076A5] font-bold underline"
              >
                aquí tu email 
              </a>
              {" "} y accede a la prueba gratuita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
