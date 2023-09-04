import React from "react";
import MjPhoto from "../assets/mjPhotoColor.jpg";

function Future() {
  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            EL FUTURO DE LA PRÁCTICA DENTAL
          </p>
          <br />

          <p>
            El tiempo es un recurso invaluable y cada minuto es importante
            cuando hablamos de la atención a nuestros pacientes. <br/><br/> Me inspira la
            idea de un futuro donde las entradas médicas sean generadas de
            manera sencilla y efectiva transformando los datos clínicos en
            cuestión de segundos. <br/><br/> Visualizo una práctica dental unificada con
            los registros de salud del paciente donde los hallazgos se reflejan
            de forma concluyente, brindando a nuestros pacientes la tranquilidad
            de recibir un tratamiento adecuado y transparente. <br/><br/> ¿Has calculado
            cuánto tiempo te toma a diario rellenar todas las visitas?
          </p>
          <br />
          <p className="text-[#0076A5] font-bold italic text-right">
            Ma. Julia Fernández - DDS
          </p>
        </div>
        <img
          className="w-[280px] mx-auto my-4 float-right"
          src={MjPhoto}
          alt="Imagen de creador de la herramienta"
          title="Creador de ODDI"
        />
      </div>
    </div>
  );
}

export default Future;