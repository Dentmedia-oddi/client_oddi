import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const getForm = "https://getform.io/f/d06f2036-e491-45dc-87ea-b8fdbdb6f786";

function InterestForm() {
  const formRef = useRef(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCheckboxChange = (element) => {
    setIsCheckboxChecked(element.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Avoids to send the form

    if (!isCheckboxChecked) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false); // hide the alert if the form is send correctly
    setTimeout(() => {
      formRef.current.reset();
    }, 500);
    formRef.current.submit(); // send the form
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
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
                <input
                  type="checkbox"
                  name="aproved"
                  onChange={handleCheckboxChange}
                  checked={isCheckboxChecked}
                />{" "}
                Por favor, asegúrate de marcar la casilla para aceptar nuestras{" "}
                <Link
                  to="politicas"
                  className="text-[#0076A5] font-bold underline"
                >
                  Políticas de privacidad
                </Link>{" "}
                para que puedas enviar el formulario ¡Gracias!
              </p>
              <button
                className="bg-[#250E62] w-[100px] rounded-md font-medium ml-auto my-4 px-6 text-white  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3] hover:text-[#250E62]"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* checkbox alert */}
      {showAlert && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-[#EEEDED] text-[#250E62] px-4 py-3 rounded relative">
            <button
              className="absolute top-0 right-0 px-3 py-1"
              onClick={handleCloseAlert}
            >
              <strong>x</strong>
            </button>
            <strong className="font-bold">¡ATENCIÓN!</strong>
            <br />
            <span className="block sm:inline">
              Por favor, marca la casilla de Políticas de Privacidad para enviar
              el formulario.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default InterestForm;
