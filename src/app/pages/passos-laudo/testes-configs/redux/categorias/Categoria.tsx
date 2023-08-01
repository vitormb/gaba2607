import React from 'react';
import TestesList from '../testes/TestesList';
import { Categoria as CategoriaType } from '../categorias/categoriasSlice';

const Categoria: React.FC<{ categoria: CategoriaType }> = ({ categoria }) => {
  return (
    <div>
      <h1>{categoria.nome}</h1>
      <TestesList testesIds={categoria.testes} />
    </div>
  );
};

export default Categoria;