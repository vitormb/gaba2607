import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { batch } from 'react-redux';
import { addCategoria } from './categorias/categoriasSlice';
import { addTeste, updateTeste } from './testes/testesSlice';
import { addSubteste } from './subtestes/subtestesSlice';
import CategoriasList from './categorias/CategoriasList';

function TesteRedux() {
  const dispatch = useDispatch();
  console.log('despacho', dispatch);
  useEffect(() => {
    batch(() => {
      // Adiciona a categoria
      const categoriaId = 'categoria1';
      dispatch(addCategoria({ id: categoriaId, nome: 'Quociente Intelectual', testes: [] }));

      // Adiciona o teste
      const testeId = 'teste1';
      dispatch(addTeste({ id: testeId, nome: 'WISC IV', subtestes: [], categoriaId }));

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

      // Adiciona a segunda categoria
      const categoriaId2 = 'categoria2';
      dispatch(addCategoria({ id: categoriaId2, nome: 'Outra Categoria', testes: [] }));

      // Adiciona o segundo teste
      const testeId2 = 'teste2';
      dispatch(addTeste({ id: testeId2, nome: 'Outro Teste', subtestes: [], categoriaId: categoriaId2 }));

      // Adiciona os subtestes para o segundo teste
      const subtestesNomes2 = ['Subteste 1', 'Subteste 2', 'Subteste 3'];
      const subtestesIds2 = subtestesNomes2.map((nome, index) => {
        const subtesteId = `subteste2_${index + 1}`;
        dispatch(addSubteste({ id: subtesteId, nome, descricao:'', resultado: 0, testeId: testeId2 }));
        return subtesteId;
      });

      // Atualiza o segundo teste com os IDs dos subtestes
      dispatch(updateTeste({ id: testeId2, changes: { subtestes: subtestesIds2 } }));
    });
  }, [dispatch]);

  return (
    <div>
      {' '}
      Este é o testeReduxx
      <CategoriasList />
    </div>
  ); 
}

export default TesteRedux;