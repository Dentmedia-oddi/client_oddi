import React from "react";
import aboutpic from "../assets/dientes3d.jpg";

function AboutOddi() {
  return (
    <div className="w-full bg-white py-24 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 "
          src={aboutpic}
          alt="Picabout"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#0076A5] font-bold">
            ACERCA DE ODDI
          </p>
          <br/>
          
          <p>
            Consta de un servicio web de ventana flotante para entrada y transcripción de
            signos clínicos con plantillas estructuradas, interfaz optimizada en
            consulta, output en formato de texto compartible e integrable, y
            plantillas personalizadas adaptadas a exploraciones individuales.
            Agiliza la documentación clínica y mejora la atención médica.
            <br/>
            <br/>
            ¿Deseas conocer más sobre este proyecto?
          </p>
          <button className="bg-[#454142] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
            Ingresa por aquí
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutOddi;
