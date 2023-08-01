import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoria } from './categorias/categoriasSlice';
import { addTeste } from './testes/testesSlice';
import { addSubteste } from './subtestes/subtestesSlice';
import CategoriasList from './categorias/CategoriasList';

function TesteRedux() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Adiciona a categoria
    const categoriaId = 'categoria1';
    dispatch(addCategoria({ id: categoriaId, nome: 'Quociente Intelectual', testes: [] }));

    // Adiciona o teste
    const testeId = 'teste1';
    dispatch(addTeste({ id: testeId, nome: 'WISC IV', subtestes: [] }));

    // Adiciona os subtestes
    const subtestesNomes = ['Semelhanças', 'Vocabulário', 'Compreensão', 'Informação', 'Raciocínio com Palavras', 'Cubos', 'Conceitos Figurativos', 'Raciocínio Matricial', 'Completar Figuras', 'Dígitos', 'Sequência de Números e Letras', 'Aritmética', 'Código', 'Procurar Símbolos', 'Cancelamento'];
    subtestesNomes.forEach((nome, index) => {
      const subtesteId = `subteste${index + 1}`;
      dispatch(addSubteste({ id: subtesteId, nome, resultado: 0 }));
    });
  }, [dispatch]);

  return (
    <div>
      <CategoriasList />
    </div>
  );
}

 export default TesteRedux;