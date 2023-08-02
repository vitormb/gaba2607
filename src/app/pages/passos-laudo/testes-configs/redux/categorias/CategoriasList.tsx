// CategoriasList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TestesList from '../testes/TestesList';

const CategoriasList: React.FC = () => {
  const categorias = useSelector((state: RootState) => state.categorias.categorias);

  return (
    <div>
      {categorias.map((categoria) => (
        <div key={categoria.id}>Categoria lista
          <h2>{categoria.nome}</h2>
          <TestesList testesIds={categoria.testes} />
        </div>
      ))}
    </div>
  );
};

export default CategoriasList;
