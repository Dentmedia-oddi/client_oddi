import React, { useRef } from "react";
import { Link } from "react-router-dom";

const getForm = "https://getform.io/f/d06f2036-e491-45dc-87ea-b8fdbdb6f786";

function InterestForm() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    setTimeout(() => {
      formRef.current.reset();
    }, 500);
    formRef.current.submit();
  };

  return (
    <div name="form" className="w-full py-8 text-white px-2">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-2xl sm:text-xl text-xl font-bold pb-4">
            ¿QUIERES SABER MAS?
          </h1>
          <p>
            Escribenos y con gusto aclararemos cualquier inquietud que tengas.
          </p>
        </div>
        <div className="my-2">
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-between w-full">
            <form
              ref={formRef}
              method="POST"
              action={getForm}
              onSubmit={handleSubmit}
            >
              <input
                className="p-3 my-2 w-[320px] flex  rounded-md text-black"
                type="text"
                placeholder="Indicanos tu nombre y apellido"
                name="name"
              />
              <input
                className="p-3 my-2 w-[320px] flex  rounded-md text-black"
                type="email"
                placeholder="Tu correo electrónico"
                name="email"
              />
              <input
                className="p-3 my-2 w-[320px] flex  rounded-md text-black"
                type="text"
                placeholder="Tu especialidad"
                name="subject"
              />
              <textarea
                className="p-3 my-2 w-[320px] flex  rounded-md text-black"
                type="message"
                rows="10"
                placeholder="Ingresa tu mensaje"
                name="message"
              />
        <p className="text-sm text-justify   w-[320px]">
          Nos preocupamos por la seguridad de tu información personal. Por aquí
          nuestra{" "}
          <Link to="politicas" className="text-[#0076A5] font-bold underline">
            Política de privacidad
          </Link>
        </p>
              <button className="bg-[#250E62] w-[100px] rounded-md font-medium ml-auto my-4 px-6 text-white  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3] hover:text-[#250E62]">
                Enviar
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InterestForm;
