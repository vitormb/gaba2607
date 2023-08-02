import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/TestesList';
import { SubtestesModal } from './subtestes/subtestesModal';
import { updateSubteste } from './subtestes/subtestesSlice';

function TestesScreen() {
const [selectedSubtesteId, setSelectedSubtesteId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubtesteSelect = (id: string) => {
    setSelectedSubtesteId(id);
  };

  const handleConfigureClick = (id: string) => {
    setSelectedSubtesteId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubtesteUpdate = (subtesteId: string, newScore: number) => {
    dispatch(updateSubteste({ id: subtesteId, changes: { resultado: newScore } }));
    setIsModalOpen(false);
  };

  
  return (
    <div>
    <CategoriasList />
       {isModalOpen && selectedSubtesteId && (
        <SubtestesModal testeId={selectedSubtesteId} onClose={handleModalClose} onSubtesteUpdate={handleSubtesteUpdate} />
        )}
    </div>
  );
}

export default TestesScreen;