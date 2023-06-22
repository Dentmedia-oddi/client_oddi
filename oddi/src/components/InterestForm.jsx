import React from "react";

function InterestForm() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pb-4">
            ¿Te gustaría participar en nuestra <br/> prueba piloto?
          </h1>
          <p>Indicanos tu correo y te contactaremos.</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Ingresa tu correo electrónico"/>
                <button className="bg-[#1DCAD3] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[#250E62]">
          Enviar
        </button>
            </div>
        {/* <p>Nos preocupamos por la seguridad de tú información personal.  Por aquí nuestra <span className="text-[#1DCAD3]">Política de privacidad</span>.</p> */}
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
