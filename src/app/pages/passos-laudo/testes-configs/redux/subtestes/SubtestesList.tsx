// SubtestesList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface SubtestesListProps {
  subtestesIds: string[];
}

const SubtestesList: React.FC<SubtestesListProps> = ({ subtestesIds }) => {
  const subtestes = useSelector((state: RootState) => state.subtestes.subtestes);
  
  return (
    <div>
      {subtestesIds.map((id) => {
        const subteste = subtestes.find((subteste) => subteste.id === id);
        if (!subteste) return null;

        return (
          <div key={subteste.id}>Listagem de subteste
            <h4>{subteste.nome}</h4>
            <p>{subteste.descricao}</p>
            <p>Pontuação: {subteste.resultado}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SubtestesList;