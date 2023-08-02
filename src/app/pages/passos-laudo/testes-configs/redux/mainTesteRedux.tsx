import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/TestesList';
import SubtestesModal from './subtestes/subtestesModal';

function TestesScreen() {
const [selectedSubtesteId, setSelectedSubtesteId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

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

  const handleSubtesteUpdate = (subtesteId, newScore) => {
    dispatch(updateSubteste({ id: subtesteId, changes: { resultado: newScore } }));
    setIsModalOpen(false);
  };

  
  return (
    <div>
    <CategoriasList />
        {isModalOpen && (
        <SubtestesModal testeId={selectedSubtesteId} onClose={handleModalClose} onSubtesteUpdate={handleSubtesteUpdate} />
        )}
    </div>
  );
}

export default TestesScreen;