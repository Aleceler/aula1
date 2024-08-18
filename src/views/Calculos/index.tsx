import React from "react";
import { Multiplicacao, Adicao, Subtracao } from "../../components/math";

const Calculos = () => {
  return (
    <>
      <h1>{Multiplicacao(3, 2)}</h1>
      <h1>{Adicao(3, 2)}</h1>
      <h1>{Subtracao(3, 2)}</h1>
    </>
  );
};

export default Calculos;
