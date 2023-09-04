import React from "react";
import NotFound from "../assets/notFound.png";
import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div>
      <div name="notfound" className="w-full bg-white py-20 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <img className="w-[450px] mx-auto my-auto" src={NotFound} alt="Imagen de error 404" title="error 404" />
        </div>
        <div>
        <p className="text-[#0076A5] font-bold text-center md:text-xl sm:text-xl text-xl  md:py-2">
              Oops! Por aquí no está lo que buscas.
            </p>
        </div>
        <Link to="/" className="flex justify-end items-center pt-10 px-2">
          <button className="bg-white w-[100px] rounded-md font-medium ml-auto my-4 px-6 text-[#250E62]  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3]">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound404;
