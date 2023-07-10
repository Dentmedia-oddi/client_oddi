import React from "react";
import aboutpic from "../assets/Deadline-pana.png";

function AboutOddi() {
  return (
    <div name="about" className="w-full bg-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 "
          src={aboutpic}
          alt="Picabout"
        />
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold">ACERCA DE ODDI</p>
          <br />
          <p>
            Consta de un servicio web de ventana flotante para entrada y
            transcripción de signos clínicos con plantillas estructuradas,
            interfaz optimizada en consulta, output en formato de texto
            compartible e integrable, y plantillas personalizadas adaptadas a
            exploraciones individuales. Agiliza la documentación clínica y
            mejora la atención médica. <br/> <br/> ¡Optimiza tus apuntes en la historia
            clínica dental con facilidad! Descubre cómo ahorrar tiempo y mejorar
            tus diagnósticos utilizando nuestras plantillas estructuradas
            personalizables con un simple clic. <br/> <br/>  Sabemos que en tu día a día te
            enfrentas a desafíos comunes en clínica como: <br/> <br/>   
          </p>
          <ul class="marker:text-[#0076A5] list-disc pl-5 space-y-3">
            <li>El procesamiento de signos y síntomas lleva mucho tiempo, al igual que la transcripción
            de la historia clínica según tu especialidad.</li>
            <li>A veces, se te escapan
            detalles cruciales en tus apuntes, lo que puede afectar la
            planificación del tratamiento.</li>
            <li>La duplicación de hallazgos en
            diferentes soportes se vuelve una tarea tediosa.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutOddi;
