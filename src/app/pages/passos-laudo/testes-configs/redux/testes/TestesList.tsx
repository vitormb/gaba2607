import React from 'react';
import { useSelector } from 'react-redux';
import { Teste as TesteType } from './testesSlice';
import Teste from '../testes/Teste';

interface TestesListProps {
  testesIds: string[];
}

const TestesList: React.FC<TestesListProps> = ({ testesIds }) => {
  const testes = useSelector((state: any) => state.testes.testes);
  console.log("Testes: ", testes); // Adicione esta linha

  return (
    <div>
      {testesIds.map((id) => {
        const teste = testes.find((teste: TesteType) => teste.id === id);
        return teste ? <Teste key={teste.id} teste={teste} /> : null;
      })}
    </div>
  );
};

export default TestesList;
