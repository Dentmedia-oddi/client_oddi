import React, { useEffect } from "react";
import mj from "../assets/mj.jpg";
import gaby from "../assets/gaby.jpg";
import norkys from "../assets/nor.jpg";
import franco from "../assets/franco.jpg";
import alex from "../assets/alex.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function TheTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-white py-9 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-1">
        <div className="flex flex-col justify-center text-justify">
          <p className="text-[#0076A5] font-bold">NUESTRO EQUIPO</p>
          <br />
          <p className="text-[#0076A5] font-regular">
            Simplificar los registros y transformar la atención dental.
          </p>

          <p>
            Sabemos que la eficiencia, precisión y calidad son fundamentales
            para brindar una atención excepcional a nuestros pacientes. En el
            campo de la odontología, hemos visto avances en la optimización del
            tiempo de trabajo en boca, pero ¿qué pasa con el tedioso proceso de
            registrar y documentar los tratamientos en la historia clínica?{" "}
            <br /> En ODDI, nuestro objetivo es simplificar los registros y
            revolucionar la forma en que los especialistas dentales documentan
            su trabajo, liderando el desarrollo de soluciones que optimicen los
            flujos y maximicen la eficiencia en la atención dental. Estamos
            comprometidos en brindar a los profesionales las herramientas
            necesarias para que alcancen su máximo potencial y ofrezcan una
            atención de calidad. <br />
            Queremos liberar a los especialistas dentales de la carga del
            trabajo administrativo y permitirles enfocarse en lo que mejor saben
            hacer: brindar una atención excepcional a sus pacientes.
          </p>
          <br />
          <p className="text-[#0076A5] font-regular">
            ODDI - Simplifying records
          </p>
          <br />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4">
        <div>
          <img className="w-[150px] mx-auto my-4" src={mj} alt="mjpicbw" />
          <p className="text-[#0076A5] font-regular text-center">
            Ma. Julia Fernández
          </p>
          <p className="text-[#0076A5] font-regular text-center">
            DDS | Mtr. Innovación en Salud digital
          </p>
          <div className="flex justify-center">
            <Link
              to="https://www.linkedin.com/in/mjfbalice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              to="https://github.com/Mjuliafb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} />
            </Link>
          </div>
        </div>

        <div>
          <img className="w-[150px] mx-auto my-4" src={gaby} alt="gabypicbw" />
          <p className="text-[#0076A5] font-regular text-center">
            Gabriela Acevedo
          </p>
          <p className="text-[#0076A5] font-regular text-center">
            Frontend developer | Senior Customer Success Specialist
          </p>
          <div className="flex justify-center">
            <Link
              to="https://www.linkedin.com/in/gabriela-acevedo-borrero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              to="https://github.com/gabydesi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} />
            </Link>
          </div>
        </div>

        <div>
          <img className="w-[150px] mx-auto my-4" src={norkys} alt="norpicbw" />
          <p className="text-[#0076A5] font-regular text-center">
            Norkys Gonzalez
          </p>
          <p className="text-[#0076A5] font-regular text-center">
            Full Stack Developer | Backend Python y Flask
          </p>
          <div className="flex justify-center">
            <Link
              to="https://www.linkedin.com/in/norkys-gonz%C3%A1lez-178981185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              to="https://github.com/Norkysgc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} />
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-[150px] mx-auto my-4"
            src={franco}
            alt="franpicbw"
          />
          <p className="text-[#0076A5] font-regular text-center">
            Franco Andres Diaz
          </p>
          <p className="text-[#0076A5] font-regular text-center">
            Frontend developer | UX & UI Designer
          </p>
          <div className="flex justify-center">
            <Link
              to="https://www.linkedin.com/in/franco-andres-diaz-7b3ba184/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              to="https://github.com/franad23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} />
            </Link>
          </div>
        </div>
        <div>
          <img className="w-[150px] mx-auto my-4" src={alex} alt="alexpicbw" />
          <p className="text-[#0076A5] font-regular text-center">
            Alexander Milano
          </p>
          <p className="text-[#0076A5] font-regular text-center">
            Software Architect
          </p>
          <div className="flex justify-center">
            <Link
              to="https://www.linkedin.com/in/alexmilano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              to="https://github.com/alexmilano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare size={30} />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <Link to="/">
        <button className="bg-[#1DCAD3] w-[100px] rounded-md font-medium ml-auto my-6 px-6 py-3 text-[#250E62]">
          Volver
        </button>
      </Link>
    </div>
  );
}

export default TheTeam;
