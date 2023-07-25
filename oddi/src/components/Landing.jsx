import React, { useEffect } from "react";
import { useTypingText } from "../hooks/useTypingText";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

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
    <div className="text-white pt-24">
      <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <h1 className="md:text-7xl sm:text-6xl text-3xl  md:py-2 font-bold ">
          ODDI
        </h1>
        <h3 className=" text-[#0076A5] md:text-4xl sm:text-2xl text-xl  md:py-2">
          Odontología digital guiada
        </h3>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-xl text-xl font-regular">
            Plantillas estructuradas para tus entradas médicas
          </p>
        </div>
        <p className=" text-[#1DCAD3] md:text-3xl sm:text-xl text-xl font-regular ">
          {word}
        </p>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex justify-end items-center pt-32 px-2"
        >
          <button className="bg-[#250E62] border-white rounded-md font-medium my-6 px-4 py-3 text-white  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3]">
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
