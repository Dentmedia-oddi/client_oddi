import React, { useEffect } from "react";

import { useTypingText } from "../hooks/useTypingText";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { word } = useTypingText(
    ["Agiliza", "Personaliza", "Optimiza", "Comparte"],
    200,
    5
  );
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-3xl  md:py-2 font-Bold ">
          ODDI
        </h1>
        <h3 className=" text-[#0076A5] md:text-4xl sm:text-2xl text-xl  md:py-2">
          Odontología digital guiada
        </h3>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-xl text-xl font-Regular">
            Plantillas estructuradas para tus entradas médicas
          </p>
        </div>
        <p className=" text-[#1DCAD3] md:text-3xl sm:text-xl text-xl font-Regular ">
          {word}
        </p>
      </div>
    </div>
  );
}

export default Landing;
