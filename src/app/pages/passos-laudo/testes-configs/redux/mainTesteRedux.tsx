import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/TestesList';
import { SubtestesModal } from './subtestes/subtestesModal';
import { updateSubteste } from './subtestes/subtestesSlice';
import { RootState } from './store'; 

function TestesScreen() {
  const [selectedTesteId, setSelectedTesteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const selectedTestes = useSelector((state: RootState) => state.testes.selectedTestes); // selecione o array de testes selecionados do estado Redux

  useEffect(() => {
    if (selectedTestes.length > 0) {
      const lastSelectedTesteId = selectedTestes[selectedTestes.length - 1];
      setSelectedTesteId(lastSelectedTesteId);
      setIsModalOpen(true);
    }
  }, [selectedTestes]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubtesteUpdate = (subtesteId: string, newScore: number) => {
    dispatch(updateSubteste({ id: subtesteId, changes: { resultado: newScore } }));
  };

  return (
    <div>
      <h1>Categorias</h1>
      <CategoriasList />
      {isModalOpen && selectedTesteId && (
        <SubtestesModal testeId={selectedTesteId} onClose={handleModalClose} onSubtesteUpdate={handleSubtesteUpdate} />
      )}
    </div>
  );
}

export default TestesScreen;