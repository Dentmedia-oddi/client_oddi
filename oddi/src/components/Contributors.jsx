import React from "react";
import compluemprende from "../assets/logo-compluemprende-2-.jpg";


function Contributors() {
  return (
    <div className="w-full py-12 bg-white px-4 text-[#0076A5]">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h3 className="md:text-xl sm:text-xl text-xl font-bold pb-4">
            Colaboradores:
          </h3>
          
          <a
            href="https://www.ucm.es/compluemprende"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={compluemprende}
              alt="complulogo"
              style={{ width: "200px" }}
            />
          </a>

          
        </div>
      </div>
    </div>
  );
}

export default Contributors;
