import React from "react";


function InterestForm() {
  
  return (
    <div name="form" className="w-full py-8 text-white px-2">
      <div className="max-w-[1240px] mx-auto grid">
        <div className="lg:col-span-2 my-2">
          <h4 className="md:text-2xl sm:text-xl text-xl font-bold pb-4">
            ¿QUIERES SABER MAS?
          </h4>
          <p className="md:text-xl sm:text-xl text-xl pb-4">
            Escribenos a {" "}
            <a href="mailto:info@oddi.es" className="text-[#0076A5] font-bold">
              info@oddi.es
            </a>
            {" "} y con gusto aclararemos cualquier inquietud que tengas.
          </p>
        </div>
        
      </div>
      
    </div>
  );
}

export default InterestForm;
