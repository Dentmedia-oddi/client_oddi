import React from "react";
import { Link } from "react-router-dom";


function PrivacyPolicy({ redirectToCookies }) {
  

  return (
    <div className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            POLÍTICA DE PRIVACIDAD
          </p>
          <br />
          <p className="text-[#0076A5] font-regular">
            [ODDI]
            <br /> Política de Privacidad <br />
            <br /> Fecha de última actualización: [01/08/2023]
          </p>
          <br />
          <br />
          <p>
            Introducción <br />
            Bienvenido/a a oddi.es (&quot;Nosotros&quot;, &quot;Nuestro&quot; o
            &quot;Sitio&quot;). En ODDI, nos comprometemos a proteger y respetar
            tu privacidad y tus derechos de protección de datos. Esta política
            de privacidad describe cómo recopilamos, utilizamos, compartimos y
            protegemos la información personal que obtenemos a través de nuestro
            sitio web, de acuerdo con el Reglamento General de Protección de
            Datos (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD). <br />
            <br /> Al utilizar nuestro sitio web, estás aceptando las prácticas
            descritas en esta política de privacidad. Si no estás de acuerdo con
            esta política, por favor, no utilices nuestro sitio. <br />
            <br />
            Información que recopilamos: <br />
            <br /> 2.1 Información proporcionada por el usuario. <br />
            <br /> Cuando te registras en nuestro sitio, realizas una compra o
            nos contactas, podemos recopilar información personal, como tu
            nombre, dirección de correo electrónico, dirección postal, número de
            teléfono u otros datos relevantes necesarios para los servicios que
            ofrecemos. <br />
            <br /> 2.2 Información recopilada automáticamente. <br /> <br />
            Nuestro sitio web puede recopilar automáticamente cierta información
            cuando accedes a él, como tu dirección IP, tipo de navegador, idioma
            del navegador, páginas de referencia/salida y URLs, información
            sobre la fecha y hora de tu visita, y datos sobre cómo interactúas
            con nuestro sitio.
            <br />
            <br /> 2.3 Uso de cookies y tecnologías similares
            <br />
            <br /> Utilizamos cookies y tecnologías similares para recopilar
            información sobre tu actividad en nuestro sitio web.{" "}
            <strong>
              Puedes obtener más información sobre el uso de cookies en nuestra
            </strong>{" "}
            <button
               onClick={redirectToCookies}
              className="text-[#0076A5] font-bold underline"
            >
              [Política de Cookies]
            </button>
            <br />
            <br /> Uso de la información <br /> Utilizamos la información
            recopilada para los siguientes propósitos: <br />
            <ul className="mx-auto max-w-[1240px]">
              <li>Proporcionar y mejorar nuestros servicios y productos.</li>
              <li>
                Procesar tus pedidos y facilitar la comunicación sobre ellos.
              </li>
              <li>
                Responder a tus consultas y proporcionarte asistencia al
                cliente.
              </li>
              <li>
                Enviar información promocional o noticias relevantes sobre
                nuestros servicios, pero solo si has dado tu consentimiento para
                recibir dichas comunicaciones.{" "}
              </li>
              <li>
                Analizar el tráfico del sitio y mejorar su rendimiento y
                funcionalidad.
              </li>
              <li>
                Cumplir con nuestras obligaciones legales y resolver disputas.{" "}
              </li>
            </ul>
            <br />
            Base legal para el procesamiento de datos <br />
            El procesamiento de tus datos personales se llevará a cabo
            principalmente sobre la base de: <br />
            <ul className="mx-auto max-w-[1240px]">
              <li>
                El consentimiento que nos proporcionas al aceptar esta política
                de privacidad.
              </li>
              <li>
                La necesidad de procesar la información para cumplir con un
                contrato contigo.
              </li>
              <li>Cumplir con nuestras obligaciones legales.</li>
              <li>
                Nuestro interés legítimo en ofrecerte servicios y mejorar tu
                experiencia en nuestro sitio web.
              </li>
            </ul>
            <br />
            Compartir información
            <br /> Podemos compartir tu información personal con terceros en las
            siguientes circunstancias: <br />
            <ul className="mx-auto max-w-[1240px]">
              <li>
                Con proveedores de servicios que trabajen en nuestro nombre y
                nos ayuden a operar nuestro sitio y brindar servicios.
              </li>
              <li>
                Para cumplir con las leyes y regulaciones aplicables o responder
                a una solicitud legal válida, como una orden judicial.
              </li>
              <li>
                Con fines de marketing, siempre y cuando hayas dado tu
                consentimiento para recibir tales comunicaciones.
              </li>
              <li>
                En caso de una fusión, adquisición o venta de activos, donde tu
                información personal podría ser transferida como parte de esa
                transacción.
              </li>
            </ul>
            <br /> Seguridad de la información
            <br /> Tomamos medidas razonables para proteger la información
            personal que recopilamos y mantenemos. Utilizamos medidas de
            seguridad técnicas y organizativas apropiadas para proteger tus
            datos personales contra el acceso no autorizado, la divulgación, la
            alteración o la destrucción accidental o ilícita. <br />
            <br />
            Tus derechos <br />
            De acuerdo con el RGPD y la LOPDGDD, tienes los siguientes derechos
            sobre tus datos personales:
            <ul className="mx-auto max-w-[1240px] list-disc px-6">
              <li>
                {" "}
                Derecho de acceso: Puedes obtener información sobre los datos
                personales que tenemos sobre ti.
              </li>
              <li>
                Derecho de rectificación: Puedes corregir datos personales
                inexactos o incompletos.
              </li>
              <li>
                Derecho de supresión: Puedes solicitar la eliminación de tus
                datos personales, siempre que no existan motivos legales que nos
                obliguen a conservarlos.
              </li>
              <li>
                Derecho de limitación del tratamiento: Puedes solicitar la
                restricción del procesamiento de tus datos en ciertas
                circunstancias.
              </li>
              <li>
                Derecho de portabilidad: Puedes recibir los datos personales que
                nos has proporcionado en un formato estructurado, de uso común y
                lectura mecánica, y tienes el derecho de transmitir esos datos a
                otro responsable del tratamiento cuando sea técnicamente
                posible.
              </li>
              <li>
                Derecho de oposición: Puedes oponerte al procesamiento de tus
                datos personales en ciertos casos, incluido el marketing
                directo.
              </li>
              <li>
                Derecho de retirar el consentimiento: Si has dado tu
                consentimiento para el procesamiento de tus datos, puedes
                retirarlo en cualquier momento.
              </li>
            </ul>
            <br />
            Si deseas ejercer estos derechos, por favor contáctanos a través de
            los medios proporcionados al final de esta política. <br />
            <br />
            Periodo de retención de datos <br />
            Conservaremos tus datos personales durante el tiempo necesario para
            cumplir con los fines para los que fueron recopilados y para cumplir
            con nuestras obligaciones legales. Si ya no es necesario conservar
            tus datos personales, los eliminaremos de manera segura.
            <br />
            <br />
            Transferencias internacionales de datos
            <br /> Algunos de nuestros proveedores de servicios pueden estar
            ubicados fuera de la Unión Europea. En tales casos, tomaremos
            medidas para asegurarnos de que tus datos personales estén
            protegidos de acuerdo con las leyes de protección de datos
            aplicables. <br />
            <br />
            Enlaces a sitios de terceros <br />
            Nuestro sitio puede contener enlaces a sitios web de terceros. No
            somos responsables de las prácticas de privacidad de esos sitios y
            te recomendamos revisar sus políticas de privacidad antes de
            proporcionarles información personal. <br />
            <br />
            Cambios en esta política
            <br />
            Nos reservamos el derecho de modificar esta política de privacidad
            en cualquier momento. Cualquier cambio será publicado en esta
            página, y la fecha de la última actualización se revisará al
            principio del documento. <br />
            <br />
            Contáctanos <br />
            Si tienes alguna pregunta o inquietud acerca de esta política de
            privacidad o sobre cómo manejamos la información personal, por favor
            contáctanos a través de{" "}
            <a href="mailto:info@oddi.es" className="text-[#0076A5]">
              [info@oddi.es]
            </a>
            .
            <br />
            <br />
            Gracias por leer nuestra política de privacidad.
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

export default PrivacyPolicy;
