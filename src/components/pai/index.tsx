import React from "react";
import Filho from "../filho";

const Pai = ({ presente, alteraPresente }) => {
  return (
    <>
      <h1>Componente Pai</h1>
      <Filho presente={presente} alteraPresente={alteraPresente} />
    </>
  );
};

export default Pai;
