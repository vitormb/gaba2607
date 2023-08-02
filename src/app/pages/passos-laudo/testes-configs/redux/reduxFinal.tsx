import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { batch } from 'react-redux';
import CategoriasList from './categorias/CategoriasList';
import TestesList from './testes/TestesList';
import { SubtestesModal } from './subtestes/subtestesModal';
import { addCategoria, addTesteToCategoria } from './categorias/categoriasSlice';
import { addTeste, updateTeste, selectTeste } from './testes/testesSlice';
import { addSubteste, updateSubteste } from './subtestes/subtestesSlice';
import { RootState } from './store'; 

function TestesScreen() {
  const [selectedTesteId, setSelectedTesteId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const selectedTestes = useSelector((state: RootState) => state.testes.selectedTestes);
  const categoriasState = useSelector((state: RootState) => state.categorias); // mova esta linha para fora do useEffect

  useEffect(() => {
    
    batch(() => {
      // Adiciona a categoria
      const categoriaId = 'categoria1';
      dispatch(addCategoria({ id: categoriaId, nome: 'Quociente Intelectual', testes: [] }));
      console.log('Categoria atualizada:', categoriaId);
      // Adiciona o teste
      const testeId = 'teste1';
      dispatch(addTeste({ id: testeId, nome: 'WISC IV', subtestes: [], categoriaId }));
      console.log('Teste adicionado:', testeId);

      // Adiciona o teste à categoria
      dispatch(addTesteToCategoria({ categoriaId, testeId }));

      // Adiciona os subtestes
      const subtestesNomes = [
        'Semelhanças',
        'Vocabulário',
        'Compreensão',
        'Informação',
        'Raciocínio com Palavras',
        'Cubos',
        'Conceitos Figurativos',
        'Raciocínio Matricial',
        'Completar Figuras',
        'Dígitos',
        'Sequência de Números e Letras',
        'Aritmética',
        'Código',
        'Procurar Símbolos',
        'Cancelamento',
      ];

      const subtestesIds = subtestesNomes.map((nome, index) => {
        const subtesteId = `subteste${index + 1}`;
        dispatch(addSubteste({ id: subtesteId, nome, descricao:'', resultado: 0, testeId }));
        return subtesteId;
      });

      // Atualiza o teste com os IDs dos subtestes
      dispatch(updateTeste({ id: testeId, changes: { subtestes: subtestesIds } }));      
    });
      
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