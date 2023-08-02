import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/TestesList';
import SubtestesModal from './subtestes/SubtestesModal';

function TestesScreen() {
  const [selectedTesteId, setSelectedTesteId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTesteSelect = (testeId) => {
    setSelectedTesteId(testeId);
  };

  const handleConfigureClick = () => {
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
      <h1>Categorias</h1>
      <CategoriasList onTesteSelect={handleTesteSelect} />
      {selectedTesteId && (
        <div>
          <h1>Teste selecionado</h1>
          <TestesList testeId={selectedTesteId} onConfigureClick={handleConfigureClick} />
        </div>
      )}
      {isModalOpen && (
        <SubtestesModal
          testeId={selectedTesteId}
          onClose={handleModalClose}
          onSubtesteUpdate={handleSubtesteUpdate}
        />
      )}
    </div>
  );
}

export default TestesScreen;