import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/TestesList';
import { SubtestesModal } from './subtestes/subtestesModal';
import { updateSubteste } from './subtestes/subtestesSlice';
import { Categoria as CategoriaType } from './categorias/categoriasSlice';
import store from './store'; // ajuste o caminho do import para o seu arquivo de store

type RootState = ReturnType<typeof store.getState>;

function TestesScreen() {
  const [selectedSubtesteId, setSelectedSubtesteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubtesteUpdate = (subtesteId: string, newScore: number) => {
    dispatch(updateSubteste({ id: subtesteId, changes: { resultado: newScore } }));
  };

  // Aqui estamos acessando o estado do Redux
  const categoriasState = useSelector((state: RootState) => state.categorias);
  const categorias = categoriasState.categorias; // se 'categorias' é uma propriedade do estado
  const testes = useSelector((state: RootState) => state.testes);
  const subtestes = useSelector((state: RootState) => state.subtestes);

  console.log('categoriasState', categoriasState);
  console.log('categorias', categorias);
  console.log('testes', testes);
  console.log('subtestes', subtestes);
  return (
    <div>
      <h1>Categorias</h1>
      {categorias.map((categoria: CategoriaType) => (
        <div key={categoria.id}>
          <h2>{categoria.nome}</h2>
          <TestesList testesIds={categoria.testes} />
        </div>
      ))}
      {isModalOpen && selectedSubtesteId && (
        <SubtestesModal testeId={selectedSubtesteId} onClose={handleModalClose} onSubtesteUpdate={handleSubtesteUpdate} />
      )}
    </div>
  );
}

export default TestesScreen;