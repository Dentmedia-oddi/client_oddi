import React from "react";
import { Link } from "react-scroll";


function WhyOddi() {
  return (
    <div name="about" className="w-full bg-white py-6 px-4">
      
          <div className="max-w-[1240px] mx-auto grid ">
            <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl ">
              ¿POR QUÉ ELEGIR ODDI?
            </p>
            <br />
            <ul class="marker:text-[#0076A5] list-disc pl-5 space-y-3 text-justify">
              <li>
                Tendrás a tu disposición plantillas personalizadas adaptadas a
                las exploraciones específicas de tu especialidad, lo que te
                garantiza un registro preciso y ordenado de los hallazgos
                clínicos.
              </li>
              <li>
                Diseñado para el uso en gabinete dental con una interfaz de
                entrada de datos optimizada. Con solo un clic, transformamos en
                tan solo 3 segundos todos tus hallazgos clínicos en un texto
                organizado que podrás copiar donde quieras.
              </li>
              <li>
                Sabemos que tienes varias cosas que evaluar, podrás tomar
                apuntes y consultar otras pantallas simultáneamente, como
                radiografías, odontogramas o informes médicos, gracias a nuestra
                pantalla responsive de acceso rápido.
              </li>
            </ul>
            <br />
            <p className="text-justify">
              Simplifica tu flujo de trabajo, atiende más pacientes y
              conviértete en un líder de tu especialidad. Regístrate ahora y
              experimenta una aplicación web atractiva, sencilla y profesional
              para optimizar tus apuntes en la historia clínica dental.
              ¡Comienza hoy mismo tu transformación dental con ODDI!
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
