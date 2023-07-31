import React, {FC, useState} from 'react'
import {ProgressBarra} from '../CadastroPacienteWizard'
import {CreateAccordionElement} from './testes-configs/teste-base/CreateAccordionElement'
import {TestesSelecionados} from './testes-configs/teste-base/TestesSelecionados'
import {SubTestesContent} from './testes-configs/teste-base/SubTestesContent'

import {ModalTestesSelecionados} from './testes-configs/teste-base/ModalTestesSelecionados'

const Passo7: FC = () => {
  const [selectedItems, setSelectedItems] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTest, setSelectedTest] = useState(null)
  const [currentTest, setCurrentTest] = useState(null);
  const [selectedTests, setSelectedTests] = useState([]);
  // Estrutura de dados que agrupa os subtestes por categoria
  const handleConfigureTest = (test:any) => {
    setCurrentTest(test);
    setSelectedTests(test);
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
      'Confias',
      'Manual da Escala de Tdah - versão para professores',
      'Teste de Compreensão Leitora de Textos Descritivos',
      'Teste de Habilidades e Conhecimento Pré-Alfabetização',
      'TENA',
    ],
    'Habilidades acadêmicas': [
      'CORUJA PRO-MAT',
      'Teste de Desempenho Escolar',
      'CORUJA ESPECIALISTA',
      'TDE 2',
    ],
    'Quociente Intelectual': [
      'Desenho da Figura Humana',
      'Escala de Maturidade Mental - COLUMBIA',
      'Escala de Traços de Personalidade para Crianças',
      'Figuras Complexas de Rey',
      'R-2 - Raven para crianças',
      'SON R',
      'Teste de Memória de Reconhecimento - TEM-R',
      'Teste não verbal de Inteligência Geral - BETA III',
      'WAIS',
      'WASI',
      'WISC 4',
    ],
    Psicopatologia: [
      'Manual do Inventário de Sintomas de Stress para Adultos de Lipp - ISSL',
      'PERFIL SENSORIAL',
    ],
    'Percepção Visual e memória': [
      'Figuras Complexas de Rey',
      'Neupsilin',
      'Teste Gestaltico Visomotor de Bender',
      'RAVLT',
    ],
    'Habilidades sociais': [
      'Inventário de habilidades sociais',
      'Sistema Multimídia de habilidades sociais de crianças',
      'SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças',
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
              content={tests.map((test) => (
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
              ))}
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
export {Passo7}
