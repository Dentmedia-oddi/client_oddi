import React from "react";
import compluemprende from "../assets/logo-compluemprende-2-.jpg";
import dentmedia from "../assets/dentmedia.jpg";
import aeclinica from "../assets/aeclinicadental.png"


function Contributors() {
  return (
    <div name="about" className="w-full bg-white py-12 px-2">
      <h3 className="text-[#0076A5] font-bold max-w-[1240px] mx-auto md:text-2xl sm:text-xl text-xl">COLABORADORES</h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
        <div className="flex  justify-center">
          <a
            href="https://www.ucm.es/compluemprende"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={compluemprende}
              alt="complulogo"
              style={{ width: "225px" }}
              className="py-6"
            />
          </a>
        </div>
        <div className="flex  justify-center">
          <a
            href="https://instagram.com/dent_media?igshid=Y2I2MzMwZWM3ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dentmedia}
              alt="dentmedialogo"
              style={{ width: "250px" }}
              className="py-6"
            />
          </a>
        </div>
        <div className="flex  justify-center">
          <a
            href="https://www.aeclinicadental.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={aeclinica}
              alt="dentmedialogo"
              style={{ width: "130px" }}
              className="py-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
