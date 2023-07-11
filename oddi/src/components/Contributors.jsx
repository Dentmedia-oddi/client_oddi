import React from "react";
import compluemprende from "../assets/logo-compluemprende-2-.jpg";

function Contributors() {
  return (
    <div name="about" className="w-full bg-white py-12 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h3 className="text-[#0076A5] font-bold">COLABORADORES</h3>
          <a
            href="https://www.ucm.es/compluemprende"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={compluemprende}
              alt="complulogo"
              style={{ width: "200px" }}
              className="py-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
