import React from "react";
import { Link } from "react-router-dom";

function DataResponsabilityPolicy() {
  return (
    <div className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            POLÍTICA DE RESPONSABILIDAD DE ENLACES
          </p>
          <br />
          <p className="text-[#0076A5] font-regular">
            [ODDI]
            <br />
            Política de Responsabilidad de Enlaces
            <br />
            <br />
            Fecha de última actualización: [01/08/2023]
          </p>
          <br />
          <br />
          <p>
            Introducción<br /> Bienvenido/a a oddi.es (&quot;Nosotros&quot;,
            &quot;Nuestro&quot; o &quot;Sitio&quot;). Esta política de
            responsabilidad de enlaces establece las condiciones bajo las cuales
            proporcionamos enlaces a otros sitios web y cómo nos desvinculamos
            de la responsabilidad por el contenido y las prácticas de privacidad
            de dichos sitios enlazados. Al acceder y utilizar nuestro sitio web,
            aceptas esta política de responsabilidad de enlaces en su totalidad.
            Si no estás de acuerdo con esta política, por favor, no utilices
            nuestro sitio web. <br /><br />Enlaces a Sitios Externos<br /> Oddi.es proporciona
            enlaces a otros sitios web que creemos que pueden ser de interés
            para nuestros usuarios. Sin embargo, estos enlaces a sitios externos
            están destinados únicamente a fines informativos y no constituyen un
            respaldo o recomendación de los productos, servicios o contenido
            ofrecido por estos sitios. <br /><br />Desvinculación de Responsabilidad<br /> A pesar
            de que hacemos todo lo posible por proporcionar enlaces a sitios de
            alta calidad y confianza, no tenemos control sobre el contenido y
            las prácticas de privacidad de los sitios enlazados. Por lo tanto,
            nos desvinculamos de cualquier responsabilidad por el contenido, la
            exactitud, la legalidad o la seguridad de los sitios web enlazados,
            así como de cualquier práctica de privacidad llevada a cabo por esos
            sitios. <br /><br />Navegación Segura<br /> Al hacer clic en cualquier enlace que te
            redirija a un sitio externo, debes ser consciente de que estás
            abandonando nuestro sitio web y accediendo a otro sitio sujeto a sus
            propios términos y políticas. Te recomendamos revisar las políticas
            de privacidad y términos de uso de los sitios enlazados para
            comprender cómo manejan tus datos personales y la información que
            recopilan. <br /><br />Información Actualizada <br />Hacemos esfuerzos razonables para
            asegurarnos de que los enlaces proporcionados en nuestro sitio web
            estén actualizados y sean válidos. Sin embargo, la naturaleza
            dinámica de la web puede hacer que algunos enlaces se vuelvan
            inactivos o que el contenido enlazado cambie sin previo aviso. En
            tales casos, no podemos garantizar la disponibilidad o la exactitud
            de los enlaces proporcionados. <br /><br />Cambios en esta Política <br />Nos
            reservamos el derecho de modificar esta política de responsabilidad
            de enlaces en cualquier momento. Cualquier cambio será publicado en
            esta página, y la fecha de la última actualización se revisará al
            principio del documento. <br /><br />Contacto <br />Si tienes alguna pregunta o
            inquietud acerca de nuestra política de responsabilidad de enlaces,
            por favor contáctanos a través de {" "}
            <a href="mailto:info@oddi.es" className="text-[#0076A5]">
            [info@oddi.es]
            </a>
            . <br /><br />Gracias por leer
            nuestra política de responsabilidad de enlaces.
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

export default DataResponsabilityPolicy;
