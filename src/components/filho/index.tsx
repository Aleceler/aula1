import React, { useState } from "react";

const Filho = ({ presente, alteraPresente }) => {
  const [inputValue, setInputValue] = useState(presente);

  return (
    <>
      <h1>Componente Filho</h1>
      <h1>Filho ganhou um {presente}</h1>
      <input
        style={{ height: "30px", width: "220px" }}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Insira o nome do presente aqui"
      />
      <button
        onClick={() => {
          alteraPresente(inputValue);
        }}
      >
        Alterar presente
      </button>
    </>
  );
};

export default Filho;
