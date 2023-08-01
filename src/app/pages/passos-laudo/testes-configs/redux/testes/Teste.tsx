import React from 'react';

const Teste: React.FC<{ teste: any }> = ({ teste }) => {
  return <div>{teste.nome}</div>;
};

export default Teste;