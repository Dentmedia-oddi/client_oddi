import React from "react";
import aboutpic from "../assets/Deadline-pana.png";

function AboutOddi() {
  return (
    <div name="about" className="w-full bg-white  px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[380px] mx-auto my-4 py-6"
          src={aboutpic}
          alt="Imagen demostrativa sobre tiempo"
          title="Imagen ilustrativa"
        />
        <div className="flex flex-col justify-center text-justify ">
          <h3 className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            ACERCA DE ODDI
          </h3>
          <br />
          <p>
            ¡Optimiza tus apuntes en la historia clínica dental con facilidad!
            Descubre cómo ahorrar tiempo y mejorar tus hallazgos utilizando
            nuestras plantillas estructuradas para especialidades dentales.{" "}
            <br />
            <br /> Te ofrecemos una solución simple e intuitiva para agilizar el
            procesamiento de signos y síntomas garantizando una captura precisa
            y exhaustiva de la información relevante para la planificación del
            tratamiento. <br />
            <br /> Sin instalaciones complejas y generación de entrada médica en
            un clic. <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutOddi;
