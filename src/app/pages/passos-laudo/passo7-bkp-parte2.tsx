import React, {FC, useState} from 'react'
import {ProgressBarra} from '../CadastroPacienteWizard'
import {CreateAccordionElement} from './testes-configs/teste-base/CreateAccordionElement'
import {TestesSelecionados} from './testes-configs/teste-base/TestesSelecionados'
import {SubTestesContent} from './testes-configs/teste-base/SubTestesContent'

import {ModalTestesSelecionados} from './testes-configs/teste-base/ModalTestesSelecionados'



type ValorType = {
  nomeDoSubTeste: string
  friendlyTitle: string
  descricao: string
  faixaEtariaRecomendada: string
  pontuacao: number
  pontuacaoBase: number
  normas: string
  interpretacao: string
  indices: string
}

const Passo7bkp: FC = () => {
  const [selectedItems, setSelectedItems] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)  
  const [currentTest, setCurrentTest] = useState(null);
  const [selectedTest, setSelectedTest] = useState<ValorType | null>({
    nomeDoSubTeste: '',
    friendlyTitle: '',
    descricao: '',
    faixaEtariaRecomendada: '',
    pontuacao: 0,
    pontuacaoBase: 0,
    normas: '',
    interpretacao: '',
    indices: '',
  });
  // Estrutura de dados que agrupa os subtestes por categoria
  const handleConfigureTest = (test:any) => {
    setCurrentTest(test);
    setSelectedTest(test);
  };

  const defaultTestValues = {
    pontuacao: 10,
    pontuacaoBase: 10,
    normas: '',
    interpretacao: '',
    indices: '',
  };

  const testCategories = {
    Personalidade: [
      {
        nomeDoSubTeste: 'Bateria Fatorial de Personalidade',
        friendlyTitle: 'BateriaFatorialDePersonalidade',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'CAT- A - Teste de Apercepção Infantil',
        friendlyTitle: 'CATA-TesteDeApercepcaoInfantil',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Escalas Beck',
        friendlyTitle: 'EscalasBeck',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'HTP',
        friendlyTitle: 'HTP',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Inventário de habilidades sociais',
        friendlyTitle: 'InventarioDeHabilidadesSociais',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Palográfico',
        friendlyTitle: 'Palografico',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Pirâmides coloridas de Pfister',
        friendlyTitle: 'PiramidesColoridasDePfister',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Zulliger',
        friendlyTitle: 'Zulliger',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
    ],
    Atenção: [
      {
        nomeDoSubTeste: 'Coleção AD e AS',
        friendlyTitle: 'ColecaoADeAS',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'FDT',
        friendlyTitle: 'FDT',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Neupsilin',
        friendlyTitle: 'Neupsilin',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste AC de Atenção Concentrada',
        friendlyTitle: 'TesteACDeAtencaoConcentrada',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'D2R',
        friendlyTitle: 'D2R',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'BPA',
        friendlyTitle: 'BPA',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste de cancelamento de sinos',
        friendlyTitle: 'TesteDeCancelamentoDeSinos',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'TAVIS',
        friendlyTitle: 'TAVIS',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
    ],
    Linguagem: [
      {
        nomeDoSubTeste: 'Confias',
        friendlyTitle: 'Confias',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Manual da Escala de Tdah - versão para professores',
        friendlyTitle: 'ManualDaEscalaDeTdahVersaoParaProfessores',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste de Compreensão Leitora de Textos Descritivos',
        friendlyTitle: 'TesteDeCompreensaoLeitoraDeTextosDescritivos',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste de Habilidades e Conhecimento Pré-Alfabetização',
        friendlyTitle: 'TesteDeHabilidadesEConhecimentoPreAlfabetizacao',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'TENA',
        friendlyTitle: 'TENA',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
    ],
    'Habilidades acadêmicas': [
      {
        nomeDoSubTeste: 'CORUJA PRO-MAT',
        friendlyTitle: 'CORUJA PRO-MAT',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste de Desempenho Escolar',
        friendlyTitle: 'TesteDeDesempenhoEscolar',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'CORUJA ESPECIALISTA',
        friendlyTitle: 'CORUJA ESPECIALISTA',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'TDE 2',
        friendlyTitle: 'TDE 2',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },      
    ],
    'Quociente Intelectual': [
      {
        nomeDoSubTeste: 'Desenho da Figura Humana',
        friendlyTitle: 'DesenhoDaFiguraHumana',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Escala de Maturidade Mental - COLUMBIA',
        friendlyTitle: 'EscalaDeMaturidadeMentalCOLUMBIA',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Escala de Traços de Personalidade para Crianças',
        friendlyTitle: 'EscalaDeTraçosDePersonalidadeParaCriancas',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Figuras Complexas de Rey',
        friendlyTitle: 'Figuras Complexas de Rey',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'SON R',
        friendlyTitle: 'SONR',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste de Memória de Reconhecimento - TEM-R',
        friendlyTitle: 'TesteDeMemóriaDeReconhecimento-TEM-R',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste não verbal de Inteligência Geral - BETA III',
        friendlyTitle: 'TesteNaoVerbalDeInteligenciaGeral-BETAIII',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'WAIS',
        friendlyTitle: 'WAIS',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'WASI',
        friendlyTitle: 'WASI',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'WISC 4',
        friendlyTitle: 'WISC4',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },     
    ],
    Psicopatologia: [
      {
        nomeDoSubTeste: 'Manual do Inventário de Sintomas de Stress para Adultos de Lipp - ISSL',
        friendlyTitle: 'ManualDoInventárioDeSintomasDeStressParaAdultosDeLippISSL',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'PERFIL SENSORIAL',
        friendlyTitle: 'PerfilSensorial',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
    ],
    'Percepção Visual e memória': [
      {
        nomeDoSubTeste: 'Figuras Complexas de Rey',
        friendlyTitle: 'FigurasComplexasDeRey',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Neupsilin',
        friendlyTitle: 'Neupsilin',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Teste Gestaltico Visomotor de Bender',
        friendlyTitle: 'TesteGestalticoVisomotorDeBender',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'RAVLT',
        friendlyTitle: 'RAVLT',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
    ],
    'Habilidades sociais': [
      {
        nomeDoSubTeste: 'Inventário de habilidades sociais',
        friendlyTitle: 'InventarioDeHabilidadesSociais',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'Sistema Multimídia de habilidades sociais de crianças',
        friendlyTitle: 'SistemaMultimidiaDeHabilidadesSociaisDeCriancas',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
      {
        nomeDoSubTeste: 'SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças',
        friendlyTitle: 'SSRS',
        descricao: 'Descrição do teste',
        faixaEtariaRecomendada: '18-60',
        ...defaultTestValues,
      },
    ],
  }

  return (
    <div className='container-flex'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i
            className='bi bi-puzzle-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Testes
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Selecione a categoria do teste realizado, em seguida, selecione as variações (se
          aplicável). Depois, basta configurar os testes escolhidos.
        </div>
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-2'
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='36%'
        />
      </div>
      <div className='row justify-content-start'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {Object.entries(testCategories).map(([category, tests]) => (
            <CreateAccordionElement
              key={category}
              icon='bi bi-book-fill fs-2'
              title={category}
              cogarea={category}
              friendlytitle={category}
              content={tests.map((test) => {
                if (typeof test === 'object') {
                  return (
                    <div key={test.nomeDoSubTeste}>
                      <SubTestesContent
                        idTeste={test.nomeDoSubTeste}
                        valor={test}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                        handleConfigureTest={(item) => {
                          setSelectedTest(item)
                          setIsModalOpen(true)
                        }}
                      />                 
                    </div>
                  )
                }
              })}
            />
          ))}
        </div>
      </div>
      <div className='separator my-10'></div>
      
      <TestesSelecionados
        selectedItems={selectedItems}
        valor={selectedItems}
        handleConfigureTest={handleConfigureTest}        
      />     
      <ModalTestesSelecionados selectedItems={selectedItems} test={currentTest} />
    </div>
  )
}
export {Passo7bkp}
