import React from "react";
import Tabs from "./Tabs";

function Policies() {
  const tabs = ["Política de privacidad", "Política de cookies", "Política de protección de datos"];

  return (
    <div className="max-w-[1240px] mx-auto">
      <h2 className="font-bold md:text-2xl sm:text-xl text-xl mb-4 text-white">Políticas</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Policies;
