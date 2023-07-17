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
          <div className="flex flex-col justify-center text-justify">
            <p className="text-[#0076A5] font-bold text-center">
              ¡PLANTILLA EN CONSTRUCCIÓN!
            </p>
            <br />
            <p>
              Gracias por tu interés. Estamos trabajando arduamente en la
              creación de nuestra plantilla, por el momento iniciaremos con un
              modelo para endodoncistas. <br /> Sabemos lo importante que es
              para ti tener acceso al demo. Por ello, te invitamos a que nos contactes a
              través de nuestro{" "}
              <a
                href="/#interest-form"
                onClick={() => navigate("/#interest-form")}
                className="text-[#0076A5] underline"
              >
                formulario de contacto
              </a>
              . De esta manera, podremos mantenerte informado(a) y notificarte
              tan pronto como la plantilla esté lista para su uso. Agradecemos
              tu paciencia y comprensión mientras finalizamos este proceso. No
              dudes en ponerte en contacto con nosotros si tienes alguna
              pregunta adicional o si necesitas información adicional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
