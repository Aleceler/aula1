import React from "react";
import Filho from "../filho";

const Pai = ({ presente }: string) => {
  return (
    <>
      <h1>Componente Pai</h1>
      <Filho presente={presente} />
    </>
  );
};

export default Pai;
