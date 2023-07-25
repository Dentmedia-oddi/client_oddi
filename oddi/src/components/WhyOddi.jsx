import React from "react";
import MjPhoto from "../assets/mjPhotoColor.jpg";

function WhyOddi() {
  return (
    <div className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">¿POR QUÉ ODDI?</p>
          <br />

          <p>
            Sé que el tiempo es un recurso invaluable y cada minuto cuenta en la
            atención a nuestros pacientes. Es por eso que conformé un equipo
            dedicado a desarrollar soluciones que optimicen nuestros procesos
            con la historia clínica dental, permitiéndonos brindar una atención
            de calidad sin comprometer la información del diagnóstico o
            tratamiento. <br /> Me inspira la idea de un futuro donde las
            anotaciones sean generadas de manera sencilla y efectiva haciendo
            que los datos clínicos se transformen en cuestión de segundos.{" "}
            <br /> Visualizo una práctica dental unificada con los registros de
            salud del paciente donde los diagnósticos se reflejan de forma
            concluyente, brindando a nuestros pacientes la tranquilidad de
            recibir un tratamiento adecuado y transparente. <br /> ¡Es hora de
            marcar la diferencia y construir un futuro dental más eficiente,
            preciso y extraordinario!
          </p>
          <br />
          <p className="text-[#0076A5] font-regular text-right">
            Ma. Julia Fernández - DDS
          </p>
        </div>
        <img
          className="w-[320px] mx-auto my-4 float-right"
          src={MjPhoto}
          alt="MjPicColor"
        />
      </div>
    </div>
  );
}

export default WhyOddi;
