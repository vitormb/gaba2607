import React, { FC, useState } from 'react';
import { Formik, Field, FieldArray, useFormikContext, useFormik } from 'formik';
import { ProgressBarra } from '../CadastroPacienteWizard';
import {CreateAccordionElement} from './testes-configs/teste-base/CreateAccordionElement';
import {SubTestesContent} from './testes-configs/teste-base/SubTestesContent';

const Passo7: FC = () => {   
  const [testeSelecionado, setTesteSelecionado] = useState<any>(null);  
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const handleCheckboxChange = (valor: any) => {
    if (selectedItems.includes(valor)) {
      setSelectedItems(selectedItems.filter((item) => item !== valor));
      //console.log('Estes foram os selecionados: ', selectedItems)
    } else {
      setSelectedItems([...selectedItems, valor]);
    }
  };

  const TestesSelecionados: React.FC = (PropFinal) => {
    return (
      <div>
        <h2 className='text-primary px-4'>Testes selecionados:</h2>
        <div className="table-responsive">
          <table className="table table-striped gy-4 gs-4">
            <thead>
              <tr className="fw-semibold fs-6 text-gray-700 border-bottom border-gray-200">
                <th style={{ width: '50%' }}>Nome do Teste</th>
                <th style={{ width: '40%' }}>Progresso</th>
                <th style={{ width: '10%' }}>Configurar</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item, index) => (
                <tr key={index}>
                  <td className='align-middle'>{item}</td>
                  <td className='align-middle'>
                    <div className='progress w-100px w-xl-150px w-xxl-300px h-20px bg-light-success'>
                      <div
                        className='progress-bar rounded bg-success fs-7 fw-bold'
                        role='progressbar'
                        style={{ width: '0%' }}
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        0%
                      </div>
                    </div>
                  </td>
                  <td className='align-middle text-center d-flex'>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleConfigureTest({
                        nomeDoTeste: item,
                        idTeste: 'ID',
                        friendlytitle: '',
                        descricao: '',
                        faixaEtariaRecomendada: '',
                        pontuacao: '',
                        normas: '',
                        interpretacao: '',
                        referencias: '',
                        administracao: '',
                        tempoDeAplicacao: '',
                        versoesAtualizacoes: ''
                      })}
                    >
                      Configurar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  const handleConfigureTest = (item: any) => {
    //console.log(item);
  };
  return (
    <div className='container-flex'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-puzzle-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Testes
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Selecione a categoria do teste realizado, em seguida, selecione as variações (se aplicável). Depois, basta configurar os testes escolhidos.
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
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Personalidade'
            friendlytitle='Personalidade'
            cogarea='Personalidade'
            content={
              <div>
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}       
                  idTeste='Bateria Fatorial de Personalidade'
                  valor='Bateria Fatorial de Personalidade'
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='CAT- A - Teste de Apercepção Infantil'
                  valor='CAT- A - Teste de Apercepção Infantil'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Escalas Beck'
                  valor='Escalas Beck'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='HTP'
                  valor='HTP'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Inventário de habilidades sociais'
                  valor='Inventário de habilidades sociais'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Palográfico'
                  valor='Palográfico'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Pirâmides coloridas de Pfister'
                  valor='Pirâmides coloridas de Pfister'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Zulliger'
                  valor='Zulliger'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Atenção'
            friendlytitle='atencao'
            cogarea='Atenção'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Coleção AD e AS'
                  valor='Coleção AD e AS'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='FDT'
                  valor='FDT'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Neupsilin'
                  valor='Neupsilin'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste AC de Atenção Concentrada'
                  valor='Teste AC de Atenção Concentrada'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='D2R'
                  valor='D2R'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='BPA'
                  valor='BPA'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de cancelamento de sinos'
                  valor='Teste de cancelamento de sinos'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='TAVIS'
                  valor='TAVIS'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Linguagem'
            friendlytitle='linguagem'
            cogarea='Linguagem'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Confias'
                  valor='Confias'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Manual da Escala de Tdah - versão para professores'
                  valor='Manual da Escala de Tdah - versão para professores'
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Compreensão Leitora de Textos Descritivos'
                  valor='Teste de Compreensão Leitora de Textos Descritivos'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Habilidades e Conhecimento Pré-Alfabetização'
                  valor='Teste de Habilidades e Conhecimento Pré-Alfabetização'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='TENA'
                  valor='TENA'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Habilidades acadêmicas'
            friendlytitle='habilidadeacademica'
            cogarea='Habilidades acadêmicas'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='CORUJA PRO-MAT'
                  valor='CORUJA PRO-MAT'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Desempenho Escolar'
                  valor='Teste de Desempenho Escolar'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='CORUJA ESPECIALISTA'
                  valor='CORUJA ESPECIALISTA'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='TDE 2'
                  valor='TDE 2'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Quociente Intelectual'
            friendlytitle='quocienteIntelectual'
            cogarea='Quociente Intelectual'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Desenho da Figura Humana'
                  valor='Desenho da Figura Humana'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Escala de Maturidade Mental - COLUMBIA'
                  valor='Escala de Maturidade Mental - COLUMBIA'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Escala de Traços de Personalidade para Crianças'
                  valor='Escala de Traços de Personalidade para Crianças'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Figuras Complexas de Rey'
                  valor='Figuras Complexas de Rey'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='R-2 - Raven para crianças'
                  valor='R-2 - Raven para crianças'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='SON R'
                  valor='SON R'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Memória de Reconhecimento - TEM-R'
                  valor='Teste de Memória de Reconhecimento - TEM-R'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste não verbal de Inteligência Geral - BETA III'
                  valor='Teste não verbal de Inteligência Geral - BETA III'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='WAIS'
                  valor='WAIS'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='WASI'
                  valor='WASI'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='WISC 4'
                  valor='WISC 4'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Psicopatologia'
            friendlytitle='psicopatologia'
            cogarea='Psicopatologia'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Manual do Inventário de Sintomas de Stress para Adultos de Lipp - ISSL'
                  valor='Manual do Inventário de Sintomas de Stress para Adultos de Lipp - ISSL'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='PERFIL SENSORIAL'
                  valor='PERFIL SENSORIAL'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Percepção Visual e memória'
            friendlytitle='percepcaoVisualeMemoria'
            cogarea='Percepção Visual e memória'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Figuras Complexas de Rey'
                  valor='Figuras Complexas de Rey'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Neupsilin'
                  valor='Neupsilin'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste Gestaltico Visomotor de Bender'
                  valor='Teste Gestaltico Visomotor de Bender'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='RAVLT'
                  valor='RAVLT'                  
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Habilidades sociais'
            friendlytitle='habilidadesSociais'
            cogarea='Habilidades sociais'
            content={
              <div className="card shadow-sm parent-hover">
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Inventário de habilidades sociais'
                  valor='Inventário de habilidades sociais'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Sistema Multimídia de habilidades sociais de crianças'
                  valor='Sistema Multimídia de habilidades sociais de crianças'                  
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças'
                  valor='SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças'                  
                />
              </div>
            }
          />
        </div>
      </div>
      <div className='separator my-10'></div>
      <TestesSelecionados />
    </div>
  )
}
export { Passo7 }