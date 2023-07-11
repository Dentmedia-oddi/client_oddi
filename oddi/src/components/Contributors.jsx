import React from "react";
import compluemprende from "../assets/logo-compluemprende-2-.jpg";
import dentmedia from "../assets/dentmedia.jpg";

function Contributors() {
  return (
    <div name="about" className="w-full bg-white py-12 px-4">
      <h3 className="text-[#0076A5] font-bold">COLABORADORES</h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
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
      </div>
    </div>
  );
}

export default Contributors;
