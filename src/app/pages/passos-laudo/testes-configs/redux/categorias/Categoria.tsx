import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Categoria as CategoriaType } from '../categorias/categoriasSlice';
import TestesList from '../testes/testesList';

const Categoria: React.FC<{ categoria: CategoriaType }> = ({ categoria }) => {
  const testes = useSelector((state: RootState) => state.testes.testes.filter(teste => teste.categoriaId === categoria.id));

  return (
    <div>Categoria nome
      <h1>{categoria.nome}</h1>
      <TestesList categoriaId={categoria.id} testes={testes} />
    </div>
  );
};

export default Categoria;