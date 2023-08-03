import React, { useEffect } from "react";
import Tabs from "./Tabs";

function Policies() {
  const tabs = ["Privacidad", "Cookies", "Protección de datos", "Protección datos formularios", "Responsabilidad de enlaces"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto">
      <h2 className="font-bold md:text-2xl sm:text-xl text-xl mb-4 text-white">Políticas</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Policies;
