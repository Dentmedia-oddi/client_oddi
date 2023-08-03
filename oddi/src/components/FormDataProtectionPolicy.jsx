import React from "react";
import { Link } from "react-router-dom";

function FormDataProtectionPolicy({redirectToPrivacyPolicy}) {
  return (
    <div className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            POLÍTICA PROTECCIÓN DE DATOS FORMULARIOS
          </p>
        <div className="flex flex-col justify-center text-justify">
          <br />
          <p className="text-[#0076A5] font-regular">
            [ODDI] Política de Protección de Datos Personales para
            Plantillas/Formularios médicos
            <br />
            <br />
            Fecha de última actualización: [01/08/2023]
          </p>
          <br />
          <br />
          <p>
            Introducción <br />
            En [ODDI], proporcionamos una plantilla de resumen de hallazgos
            clínicos (&quot;la Plantilla&quot;) que permite a los usuarios
            agregar información personal, incluidos nombres, correos
            electrónicos, especialidades y otros datos relevantes (&quot;Datos
            Personales&quot;) con el único propósito de generar un resumen
            personalizado. <strong>Es importante destacar que esta Plantilla no almacena
            los Datos Personales y solo los procesa temporalmente para permitir
            a los usuarios copiar toda esa información en otro sitio.</strong> Esta
            política de protección de datos personales complementa nuestra{" "}
            <button
               onClick={redirectToPrivacyPolicy}
              className="text-[#0076A5] font-bold underline"
            >
              política de privacidad
            </button>
            {" "} y describe cómo se manejan los
            Datos Personales en la Plantilla de acuerdo con las leyes y
            regulaciones de la Unión Europea, en particular el Reglamento
            General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de
            Protección de Datos Personales y garantía de los derechos digitales
            (LOPDGDD) en España. <br />
            <br /> Responsable del Tratamiento de Datos Personales
            <br />
            [ODDI] actúa como el Responsable del Tratamiento de los Datos
            Personales procesados en la Plantilla. Nuestra información de
            contacto es la siguiente: <br />
            <br />
            [ODDI]
            <br /> [info@oddi.es] <br />
            [Madrid, España]
            <br />
            <br />
            Procesamiento de Datos Personales <br />
            La Plantilla permite a los usuarios agregar Datos Personales de
            manera voluntaria para generar un resumen personalizado. Es
            importante destacar que no almacenamos los Datos Personales en la
            Plantilla. Solo se procesan temporalmente para permitir a los
            usuarios copiar toda esa información y pegarla en otro sitio de su
            elección. <br />
            <br />
            Propósito del Tratamiento de Datos Personales <br />
            El único propósito del procesamiento de Datos Personales en la
            Plantilla es generar un resumen personalizado, que luego se puede
            copiar y pegar en otro sitio de elección del usuario. No utilizamos
            los Datos Personales para ningún otro fin, ni los compartimos con
            terceros. <br />
            <br />
            Responsabilidad del Especialista <br />
            En el caso de que un usuario de la Plantilla sea un especialista que
            recopila Datos Personales de sus pacientes, es importante destacar
            que dicho especialista es el único responsable de la gestión y
            tratamiento de los Datos Personales de sus pacientes de acuerdo con
            las leyes y regulaciones aplicables. La Plantilla solo se
            proporciona como una herramienta de resumen, y la responsabilidad de
            cumplir con las obligaciones legales y éticas relacionadas con la
            protección de datos de los pacientes recae totalmente en el
            especialista. <br />
            <br />
            Base Legal para el Tratamiento de Datos Personales <br />
            El procesamiento de Datos Personales en la Plantilla se basa en el
            consentimiento expreso que los usuarios otorgan al agregar
            voluntariamente sus Datos Personales o de sus pacientes en la
            Plantilla con el único propósito de generar un resumen
            personalizado. <br />
            <br />
            Seguridad de los Datos Personales <br />
            Nos tomamos en serio la seguridad de los Datos Personales y hemos
            implementado medidas técnicas y organizativas para protegerlos
            contra el acceso no autorizado, la divulgación, la alteración o la
            destrucción accidental o ilícita. Sin embargo, es importante tener
            en cuenta que, debido a la naturaleza temporal del procesamiento, no
            podemos garantizar la seguridad total de los Datos Personales una
            vez que el usuario los copia y pega en otro sitio. <br />
            <br />
            Derechos de los Usuarios
            <br /> Los usuarios tienen los derechos establecidos en el RGPD y la
            LOPDGDD con respecto a sus Datos Personales procesados en la
            Plantilla. Esto incluye el derecho de acceso, rectificación,
            supresión, limitación del tratamiento, portabilidad y oposición al
            procesamiento. Si un usuario desea ejercer cualquiera de estos
            derechos, puede hacerlo copiando y eliminando los Datos Personales
            de la Plantilla o contactandonos a través de los medios
            proporcionados al final de esta política. <br />
            <br />
            Cambios en esta Política <br />
            Nos reservamos el derecho de modificar esta política de protección
            de datos personales en cualquier momento. Cualquier cambio será
            publicado en esta página, y la fecha de la última actualización se
            revisará al principio del documento. <br />
            <br />
            Contacto <br />
            Si tienes alguna pregunta o inquietud acerca de nuestra política de
            protección de datos personales o sobre cómo manejamos la información
            personal en la Plantilla, por favor contáctanos a través de{" "}
            <a href="mailto:info@oddi.es" className="text-[#0076A5]">
              [info@oddi.es]
            </a>
            . <br />
            <br />
            Gracias por leer nuestra política de protección de datos personales
            para la Plantilla/Formularios médicos.
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

export default FormDataProtectionPolicy;
