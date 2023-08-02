// TestesList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import SubtestesList from '../subtestes/SubtestesList';

interface TestesListProps {
  testesIds: string[];
}

const TestesList: React.FC<TestesListProps> = ({ testesIds }) => {
  console.log('Renderizando TestesList com testesIds:', testesIds);
  const testes = useSelector((state: RootState) => state.testes.testes);

  return (
    <div>
      {testesIds.map((id) => {
        const teste = testes.find((teste) => teste.id === id);
        if (!teste) return null;

        return (
          <div key={teste.id}>Listagem de testes
            <h3>{teste.nome}</h3>
            <SubtestesList subtestesIds={teste.subtestes} />
          </div>
        );
      })}
    </div>
  );
};

export default TestesList;
