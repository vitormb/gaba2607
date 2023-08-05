export const initialData = {
  categorias: [
    {
      id: 'categoria1',
      nome: 'Personalidades',
      testes: ['teste1', 'teste2']
    },
    {
      id: 'categoria2',
      nome: 'Atenção',
      testes: ['teste3', 'teste4']
    },
  ],
  testes: [
    {
      id: 'teste1',
      nome: 'Desenho da Figura Humana',
      subtestes: ['subteste1', 'subteste2'],
      categoriaId: 'categoria1'
    },
    {
      id: 'teste2',
      nome: 'Teste de Personalidade',
      subtestes: ['subteste3', 'subteste4'],
      categoriaId: 'categoria1'
    },
    {
      id: 'teste3',
      nome: 'Teste de Atenção Concentrada',
      subtestes: ['subteste5', 'subteste6'],
      categoriaId: 'categoria2'
    },
    {
      id: 'teste4',
      nome: 'Teste de Atenção Difusa',
      subtestes: ['subteste7', 'subteste8'],
      categoriaId: 'categoria2'
    },
  ],
  subtestes: [
    {
      id: 'subteste1',
      nome: 'Subteste 1',
      descricao: 'Descrição do Subteste 1',
      resultado: 0,
      testeId: 'teste1'
    },
    {
      id: 'subteste2',
      nome: 'Subteste 2',
      descricao: 'Descrição do Subteste 2',
      resultado: 0,
      testeId: 'teste1'
    },
    {
      id: 'subteste3',
      nome: 'Subteste 3',
      descricao: 'Descrição do Subteste 3',
      resultado: 0,
      testeId: 'teste2'
    },
    {
      id: 'subteste4',
      nome: 'Subteste 4',
      descricao: 'Descrição do Subteste 4',
      resultado: 0,
      testeId: 'teste2'
    },
    {
      id: 'subteste5',
      nome: 'Subteste 5',
      descricao: 'Descrição do Subteste 5',
      resultado: 0,
      testeId: 'teste3'
    },
    {
      id: 'subteste6',
      nome: 'Subteste 6',
      descricao: 'Descrição do Subteste 6',
      resultado: 0,
      testeId: 'teste3'
    },
    {
      id: 'subteste7',
      nome: 'Subteste 7',
      descricao: 'Descrição do Subteste 7',
      resultado: 0,
      testeId: 'teste4'
    },
    {
      id: 'subteste8',
      nome: 'Subteste 8',
      descricao: 'Descrição do Subteste 8',
      resultado: 0,
      testeId: 'teste4'
    },
  ]
};
