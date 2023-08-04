export const initialData = {
  categorias: [
    {
      id: 'categoria1',
      nome: 'Personalidades',
      testes: ['teste1']
    },    
  ],
  testes: [
    {
      id: 'teste1',
      nome: 'Desenho da Figura Humana',
      subtestes: ['subteste1'],
      categoriaId: ['categoria1'],
    },    
  ],
  subtestes: [
    {
      id: 'subteste1',
      nome: 'Nome do Subteste1',
      descricao: '',
      resultado: 0,
      testeId: 'teste1' // Adicione esta linha
    }
    
  ]
};
