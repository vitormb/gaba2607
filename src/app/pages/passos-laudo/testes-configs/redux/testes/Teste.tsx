import React from 'react';
import SubtestesList from '../subtestes/SubtestesList';
import { Teste as TesteType } from './testesSlice';

const Teste: React.FC<{ teste: TesteType }> = ({ teste }) => {
  return (
    <div>
      <h2>{teste.nome}</h2>
      <SubtestesList subtestesIds={teste.subtestes} />
    </div>
  );
};

export default Teste;
