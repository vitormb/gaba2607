import React from 'react';
import { useSelector } from 'react-redux';
import Categoria from './Categoria';
import { Categoria as CategoriaType } from './categoriasSlice';

const CategoriasList: React.FC = () => {
  const categorias = useSelector((state: any) => state.categorias.categorias);

  return (
    <div>
      {categorias.map((categoria: CategoriaType) => (
        <Categoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
};

export default CategoriasList;
