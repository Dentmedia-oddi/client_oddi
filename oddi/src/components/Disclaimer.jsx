import React from "react";
import { Link } from "react-router-dom";

function Disclaimer() {
  return (
    <div className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            DISCLAIMER
          </p>
          <br />
          <br />
          <p>
            Los usuarios reconocen por la presente que las herramientas en línea
            listadas en www.oddi.es no están certificadas como "dispositivos
            médicos" y que los usuarios solo tienen derecho a acceder al "estado
            actual" tal como se publica en línea. Los usuarios utilizan estas
            herramientas en línea bajo su propia responsabilidad y riesgo.
            Ninguna de estas herramientas guarda los datos ingresados en sus
            formularios en línea. <br />
            <br />
            Los autores de www.oddi.es no ofrecen garantías sobre el uso de sus
            herramientas para un propósito específico. Los autores no se hacen
            responsables de los daños resultantes del uso de estas herramientas
            en línea de forma privada o en la práctica médica. <br />
            <br />
            Los autores agradecen cualquier comentario sobre sus herramientas en
            línea. Sin embargo, los autores no están obligados a proporcionar
            ningún tipo de soporte técnico, médico u otro tipo de soporte.
            <br />
            <br />
            Este descargo de responsabilidad se rige por la legislación de la
            Unión Europea, específicamente en España. Al utilizar nuestro sitio
            web y sus herramientas, aceptas este descargo de responsabilidad en
            su totalidad. Si no estás de acuerdo con este descargo de
            responsabilidad, por favor no utilices nuestro sitio web ni las
            herramientas en línea.
            <br />
            <br /> Los autores se esfuerzan por mantener la exactitud y
            actualidad de la información proporcionada en www.oddi.es, pero no
            se hacen responsables de posibles errores u omisiones en el
            contenido.
            <br />
            <br /> El contenido de www.oddi.es y sus herramientas en línea se
            proporciona con fines informativos y no pretende reemplazar el
            asesoramiento médico profesional. Si tienes preguntas o inquietudes
            médicas, te recomendamos que consultes a un profesional de la salud
            calificado. <br />
            <br />
            El uso de las herramientas en línea y la información proporcionada
            en www.oddi.es están sujetos a cambios y actualizaciones sin previo
            aviso. <br />
            <br />
            Si tienes alguna pregunta o inquietud sobre este descargo de
            responsabilidad o el uso de nuestras herramientas en línea, por
            favor contáctanos a través de{" "}
            <a href="mailto:info@oddi.es" className="text-[#0076A5]">
              [info@oddi.es]
            </a>
            . <br />
            <br />
            Gracias por leer nuestro disclaimer.
          </p>
          <br />
          <p className="text-[#0076A5] font-bold italic text-right">
            ODDI - Simplifying records
          </p>
          <br />
        </div>
      </div>

      <br />
      <Link to="/">
        <button className="bg-white w-[100px] rounded-md font-medium ml-auto my-4 px-6 text-[#250E62]  group border-2 flex items-center hover:bg-[#1DCAD3] hover:border-[#1DCAD3]">
          Volver
        </button>
      </Link>
    </div>
  );
}

export default Disclaimer;
