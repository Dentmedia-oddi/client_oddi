import React, { useRef } from "react";

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
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pb-4">
            ¿Quieres saber más?
          </h1>
          <p>
            Escribenos y con gusto aclararemos cualquier inquietud que tengas.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-between w-full">
            <form
              ref={formRef}
              method="POST"
              action={getForm}
              onSubmit={handleSubmit}
            >
              <input
                className="p-3 my-2 w-[400px] flex  rounded-md text-black"
                type="text"
                placeholder="Indicanos tu nombre y apellido"
                name='name'
              />
              <input
                className="p-3 my-2 w-[400px] flex  rounded-md text-black"
                type="email"
                placeholder="Tu correo electrónico"
                name='email'
              />
              <input
                className="p-3 my-2 w-[400px] flex  rounded-md text-black"
                type="text"
                placeholder="Tu especialidad"
                name='subject'
              />
              <textarea
                className="p-3 my-2 w-[400px] flex  rounded-md text-black"
                type="message"
                rows="10"
                placeholder="Ingresa tu mensaje"
                name='message'
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
