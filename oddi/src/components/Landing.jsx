import React from "react";
import { useTypingEffect } from "../hooks/typingEffect";
//import Typed from "react-typed";

function Landing() {
  const text = useTypingEffect(
    "Plantillas estructuradas para agilizar, personalizar, optimizar y compartir, tus entradas medicas.",
    100
  );
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-3xl  md:py-2 ">ODDI</h1>
        <h3 className="md:text-4xl sm:text-2xl text-xl  md:py-2 ">Odonto Diagrama Digital</h3>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-xl text-xl font-Regular">{text}</p>
        </div>

        {/* <button className="bg-[#1DCAD3] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#250E62]">
          Iniciar prueba
        </button> */}
      </div>
    </div>
  );
}

export default Landing;
