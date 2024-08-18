import React from "react";

const Filho = ({ presente }: string) => {
  return (
    <>
      <h1>Componente Filho</h1>
      <h1>Filho ganhou um {presente}</h1>
    </>
  );
};

export default Filho;
