import React, { useState } from "react";
import Pai from "../pai";

const Avo = () => {
  const [presente, setPresente] = useState("pc gamer");

  return (
    <>
      <h1>Componente Avo</h1>
      <Pai presente={presente} />
    </>
  );
};

export default Avo;
