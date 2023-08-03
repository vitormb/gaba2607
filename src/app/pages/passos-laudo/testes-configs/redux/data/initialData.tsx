export const initialData = {
    categorias: [
      {
        id: 'categoria1',
        nome: 'Personalidade',
        testes: ['teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6', 'teste7', 'teste8']
      },
      {
        id: 'categoria2',
        nome: 'Atenção',
        testes: ['teste9', 'teste10', 'teste11', 'teste12', 'teste13', 'teste14', 'teste15', 'teste16']
      },
      {
        id: 'categoria3',
        nome: 'Quociente Intelectual',
        testes: ['teste17', 'teste18', 'teste19', 'teste20', 'teste21', 'teste22', 'teste23', 'teste24', 'teste25', 'teste26']
      },
    ],
    testes: [
      // ... testes das categorias 'Personalidade' e 'Atenção' ...
      {
        id: 'teste17',
        nome: 'Desenho da Figura Humana',
        subtestes: ['subteste17', 'subteste18'],
        categoriaId: 'categoria3'
      },
      {
        id: 'teste18',
        nome: 'Escala de Maturidade Mental - COLUMBIA',
        subtestes: ['subteste19', 'subteste20'],
        categoriaId: 'categoria3'
      },
      // ... restante dos testes da categoria 'Quociente Intelectual' ...
    ],
    subtestes: [
      // ... subtestes dos testes das categorias 'Personalidade' e 'Atenção' ...
      {
        id: 'subteste17',
        nome: 'Nome do Subteste17',
        descricao: '',
        resultado: 0,
        testeId: 'teste17'
      },
      {
        id: 'subteste18',
        nome: 'Nome do Subteste18',
        descricao: '',
        resultado: 0,
        testeId: 'teste17'
      },
      {
        id: 'subteste19',
        nome: 'Nome do Subteste19',
        descricao: '',
        resultado: 0,
        testeId: 'teste18'
      },
      {
        id: 'subteste20',
        nome: 'Nome do Subteste20',
        descricao: '',
        resultado: 0,
        testeId: 'teste18'
      },
      // ... adicione mais subtestes conforme necessário ...
    ]
  };  