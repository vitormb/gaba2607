import React from 'react';
import { Categoria as CategoriaType } from '../categorias/categoriasSlice';
import TestesList from '../testes/testesList';

const Categoria: React.FC<{ categoria: CategoriaType }> = ({ categoria }) => {
  return (
    <div>Categoria nome
      <h1>{categoria.nome}</h1>
      <TestesList categoriaId={categoria.id} />
    </div>
  );
};

export default Categoria;