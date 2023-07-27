import React from 'react';

type SetupDosTestesProps = {
  children: React.ReactNode;
  idTeste: string;
  nomeDoTeste: string;
  friendlytitle: string;
  descricao: string;
  faixaEtariaRecomendada: string;
};

const SetupDosTestes: React.FC<SetupDosTestesProps> = ({
  children,
  idTeste,
  nomeDoTeste,
  friendlytitle,
  descricao,
  faixaEtariaRecomendada,
}) => {
  // Aqui você pode fazer qualquer manipulação necessária com os valores recebidos

  return <div>{children}</div>;
};

type TestesProps = {
  children: React.ReactNode;
};

const Testes: React.FC<TestesProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { SetupDosTestes, Testes };
