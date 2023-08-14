import React from "react";
import { Link } from "react-scroll";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

function WhyOddi() {
  return (
    <div name="about" className="w-full bg-white py-6 px-4">
      <h5 className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl max-w-[1240px] mx-auto grid">
        ¿POR QUÉ ELEGIR ODDI?
      </h5>
      <br />
      <div className="max-w-[1150px] mx-auto grid">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="h-4 w-4 sm:h-10 sm:w-10 md:h-14 md:w-14">
              <img src={icon1} alt="_" className="h-full w-full mx-auto" />
            </div>
          </div>
          <div className="col-span-11">
            <p className="text-justify">
              Tendrás a tu disposición plantillas personalizadas adaptadas a las
              exploraciones específicas de tu especialidad, lo que te garantiza
              un registro preciso y ordenado de los hallazgos clínicos.
            </p>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <div className="h-4 w-4 sm:h-10 sm:w-10 md:h-14 md:w-14">
              <img src={icon2} alt="_" className="h-full w-full mx-auto" />
            </div>
          </div>
          <div className="col-span-11">
            <p className="text-justify">
              Diseñado para el uso en gabinete dental con una interfaz de
              entrada de datos optimizada. Con solo un clic, transformamos en
              tan solo 3 segundos todos tus hallazgos clínicos en un texto
              organizado que podrás copiar donde quieras.
            </p>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <div className="h-4 w-4 sm:h-10 sm:w-10 md:h-14 md:w-14">
              <img src={icon3} alt="_" className="h-full w-full mx-auto" />
            </div>
          </div>
          <div className="col-span-11">
            <p className="text-justify">
              Sabemos que tienes varias cosas que evaluar, podrás tomar apuntes
              y consultar otras pantallas simultáneamente, como radiografías,
              odontogramas o informes médicos, gracias a nuestra pantalla
              responsive de acceso rápido.
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="max-w-[1240px] mx-auto grid">
        <p className="text-justify">
          Simplifica tu flujo de trabajo, atiende más pacientes y conviértete en
          un líder de tu especialidad. Regístrate ahora y experimenta una
          aplicación web atractiva, sencilla y profesional para optimizar tus
          apuntes en la historia clínica dental. ¡Comienza hoy mismo tu
          transformación dental con ODDI!
          <br />
          <a href="/">
            <Link
              to="form"
              className="text-[#0076A5] underline"
              smooth={true}
              duration={500}
            >
              Regístrate ahora.
            </Link>
          </a>
        </p>
      </div>
    </div>
  );
}

export default WhyOddi;
