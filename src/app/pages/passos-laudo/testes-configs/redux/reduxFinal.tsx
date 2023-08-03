import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/testesList';
import { SubtestesModal } from './subtestes/subtestesModal';
import { initializeCategorias } from './categorias/categoriasSlice';
import { initializeTestes } from './testes/testesSlice';
import { initializeSubtestes, updateSubteste } from './subtestes/subtestesSlice';
import { RootState } from './store'; 
import { initialData } from './data/initialData';

function TestesScreen() {
  const [selectedTesteId, setSelectedTesteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const selectedTestes = useSelector((state: RootState) => state.testes.selectedTestes);

  useEffect(() => {
    dispatch(initializeCategorias(initialData.categorias));
    dispatch(initializeTestes(initialData.testes));
    dispatch(initializeSubtestes(initialData.subtestes));
  }, [dispatch]);

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