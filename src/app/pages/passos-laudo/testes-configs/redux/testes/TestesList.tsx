// TestesList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TesteItem from './TesteItem';

interface TestesListProps {
  categoriaId: string;
}

const TestesList: React.FC<TestesListProps> = ({ categoriaId }) => {
  const testes = useSelector((state: RootState) => state.testes.testes.filter(teste => teste.categoriaId === categoriaId));

  return (
    <div>
      {testes.map((teste) => (
        <TesteItem key={teste.id} teste={teste} />
      ))}
    </div>
  );
};

export default TestesList;
