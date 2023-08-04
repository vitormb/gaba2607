export const initialData = {
  categorias: [
    {
      id: 'categoria1',
      nome: 'Personalidades',
      testes: [
        {
          id: 'teste1',
          nome: 'Desenho da Figura Humana',
          subtestes: [
            {
              id: 'subteste1',
              nome: 'Nome do Subteste1',
              descricao: '',
              resultado: 0,
            }
          ]
        }
      ]
    },
    {
      id: 'categoria2',
      nome: 'Atenção',
      testes: []
    },
    {
      id: 'categoria3',
      nome: 'Quociente Intelectual',
      testes: []
    },
  ]
};
