// TesteItem.tsx
import React from 'react';
import { Teste } from './testesSlice'; // Importe a interface Teste do slice

interface TesteItemProps {
  teste: Teste;
}

const TesteItem: React.FC<TesteItemProps> = ({ teste }) => {
  return (
    <div>
      <h3>{teste.nome}</h3>
      {/* Aqui você pode adicionar mais detalhes sobre o teste, como uma lista de subtestes, etc. */}
    </div>
  );
};

export default TesteItem;