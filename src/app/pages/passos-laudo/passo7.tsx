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
  const testCategories = {
    Personalidade: [
      'Bateria Fatorial de Personalidade',
      'CAT- A - Teste de Apercepção Infantil',
      'Escalas Beck',
      'HTP',
      'Inventário de habilidades sociais',
      'Palográfico',
      'Pirâmides coloridas de Pfister',
      'Zulliger',
    ],
    Atenção: [
      'Coleção AD e AS',
      'FDT',
      'Neupsilin',
      'Teste AC de Atenção Concentrada',
      'D2R',
      'BPA',
      'Teste de cancelamento de sinos',
      'TAVIS',
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
                <div key={test}>
                  <SubTestesContent
                    idTeste={test}
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
