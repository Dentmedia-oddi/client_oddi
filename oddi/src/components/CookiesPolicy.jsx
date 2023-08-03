import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function CookiesPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div name="cookies" id="1" className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
          <p className="text-[#0076A5] font-bold md:text-2xl sm:text-xl text-xl">
            POLÍTICA DE COOKIES
          </p>
        <div className="flex flex-col justify-center text-justify">
          <br />
          <p className="text-[#0076A5] font-regular">
            [ODDI]
            <br />
            Política de Cookies
            <br />
            <br />
            Fecha de última actualización: [01/08/2023]
          </p>
          <br />
          <br />
          <p>
            Introducción <br /> Bienvenido/a a oddi.es (&quot;Nosotros&quot;,
            &quot;Nuestro&quot; o &quot;Sitio&quot;). Esta política de cookies
            explica cómo utilizamos cookies y tecnologías similares en nuestro
            sitio web de acuerdo con la legislación de la Unión Europea, en
            particular el Reglamento General de Protección de Datos (RGPD) y la
            Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de
            los derechos digitales (LOPDGDD). <br />
            <br /> ¿Qué son las cookies? <br />
            <br /> Las cookies son pequeños archivos de texto que se almacenan
            en tu dispositivo (ordenador, teléfono móvil o tableta) cuando
            visitas nuestro sitio web. Estas cookies nos ayudan a mejorar la
            funcionalidad y el rendimiento de nuestro sitio web, a personalizar
            tu experiencia de usuario y a proporcionarte contenido y anuncios
            relevantes. <br />
            <br />
            Tipos de cookies que utilizamos <br />
            3.1 Cookies esenciales <br />
            <br />
            Estas cookies son necesarias para que nuestro sitio web funcione
            correctamente. Nos permiten autenticar usuarios, mantener sesiones
            de usuario activas, y garantizar la seguridad del sitio. <br />
            <br />
            3.2 Cookies de rendimiento Utilizamos cookies de rendimiento para
            recopilar información sobre cómo interactúas con nuestro sitio web,
            incluyendo las páginas que visitas con más frecuencia y si
            experimentas algún error. Estas cookies nos ayudan a mejorar el
            rendimiento de nuestro sitio y a ofrecerte una mejor experiencia de
            usuario. <br />
            <br />
            3.3 Cookies de funcionalidad Las cookies de funcionalidad nos
            permiten recordar tus preferencias y elecciones (como tu idioma
            preferido) para mejorar tu experiencia en nuestro sitio web. <br />
            <br />
            3.4 Cookies de marketing y publicidad Utilizamos cookies de
            marketing y publicidad para mostrarte anuncios y contenido
            personalizado que creemos que puede ser relevante para ti, según tu
            historial de navegación y comportamiento en nuestro sitio web.{" "}
            <br />
            <br /> Consentimiento para el uso de cookies <br />
            Al visitar nuestro sitio web, te presentaremos una ventana emergente
            informándote sobre el uso de cookies y solicitando tu consentimiento
            para su uso. Si aceptas el uso de cookies, continuaremos utilizando
            las cookies de acuerdo con esta política. Puedes retirar tu
            consentimiento en cualquier momento, eliminando las cookies
            almacenadas en tu dispositivo y ajustando la configuración de tu
            navegador para bloquear futuras cookies. <br />
            <br />
            Gestión de cookies <br />
            Puedes configurar tu navegador para que rechace todas las cookies o
            para que te avise cuando se envíen cookies a tu dispositivo. Ten en
            cuenta que si bloqueas las cookies, es posible que algunas partes de
            nuestro sitio web no funcionen correctamente.
            <br />
            <br />
            Si deseas eliminar las cookies almacenadas en tu dispositivo,
            consulta las instrucciones de tu navegador o visita el sitio web de
            ayuda de tu navegador.
            <br />
            <br /> Cambios en esta política de cookies <br />
            Nos reservamos el derecho de modificar esta política de cookies en
            cualquier momento. Cualquier cambio será publicado en esta página, y
            la fecha de la última actualización se revisará al principio del
            documento. <br />
            <br />
            Contáctanos <br />
            Si tienes alguna pregunta o inquietud acerca de esta política de
            cookies, por favor contáctanos a través de{" "}
            <a href="mailto:info@oddi.es" className="text-[#0076A5]">
              [info@oddi.es]
            </a>
            . <br />
            <br />
            Gracias por leer nuestra política de cookies.
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

export default CookiesPolicy;
