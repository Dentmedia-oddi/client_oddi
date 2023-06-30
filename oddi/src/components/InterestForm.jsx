import React from "react";

function InterestForm() {
  return  (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pb-4">
            ¿Tienes dudas respecto a ODDI?
          </h1>
          <p>Escribenos y con gusto aclararemos cualquier inquietud que tengas.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-between w-full">
            <form>
            <input
              className="p-3 my-2 w-[400px] flex  rounded-md text-black"
              type="text"
              placeholder="Ingresa tu nombre y apellido"
            />
              <input
                className="p-3 my-2 w-[400px] flex  rounded-md text-black"
                type="email"
                placeholder="Ingresa tu correo electrónico"
              />
              <textarea
              className="p-3 my-2 w-[400px] flex  rounded-md text-black"
              type="message"
              rows="10"
              placeholder="Ingresa tu mensaje"
              />
              <button className="bg-[#1DCAD3] w-[100px] rounded-md font-medium ml-auto my-6 px-6 py-3 text-[#250E62]">
                Enviar
              </button>
            </form>
          </div>
          {/* <p>Nos preocupamos por la seguridad de tú información personal.  Por aquí nuestra <span className="text-[#1DCAD3]">Política de privacidad</span>.</p> */}
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
