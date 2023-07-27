import React, { FC, useState } from 'react';
import { Formik, Field, FieldArray, useFormikContext, useFormik } from 'formik';
import { ProgressBarra } from '../CadastroPacienteWizard';

const Passo7: FC = () => {
  let indexdata = 1;
  let indexteste = 1;
  const [testeSelecionado, setTesteSelecionado] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleCheckboxChange = (valor: any) => {
    if (selectedItems.includes(valor)) {
      setSelectedItems(selectedItems.filter((item) => item !== valor));
      //console.log('Estes foram os selecionados: ', selectedItems)
    } else {
      setSelectedItems([...selectedItems, valor]);
    }
  };


  /* Propriedades do acordeon */
  interface AccordionElementProps {
    icon: string;
    title: string;
    cogarea: string;
    friendlytitle: string;
    content: React.ReactNode;
  }

  const CreateAccordionElement: React.FC<AccordionElementProps> = ({
    icon,
    title,
    cogarea,
    friendlytitle,
    content
  }) => {
    const accordionKey = friendlytitle.replace(/\s+/g, '');

    let numeroAccordion = 0;

    var accordionId = `accordion_${indexdata++}`;
    return (
      <div className="accordion" id={accordionId}>
        <div className="col">
          <div className='card'>
            <div className='accordion-item col-12'>
              <h2 className='accordion-header'>
                <button
                  className={`accordion-button fs-4 fw-bold ${isExpanded[accordionKey] ? '' : 'collapsed'}`}
                  type='button'
                  onClick={() => setIsExpanded((prevState) => ({ ...prevState, [accordionKey]: !prevState[accordionKey] }))}
                  aria-expanded={isExpanded[accordionKey] ? 'true' : 'false'}
                  aria-controls={`kt_accordion_selecoes_body_${title}`}
                >
                  <i className={icon}></i>
                  <span className='ps-5'>{title}</span>
                </button>
              </h2>
              <div
                id={`kt_accordion_selecoes_body_${title}`}
                className={`accordion-collapse ${isExpanded[accordionKey] ? 'show' : 'collapse'}`}
                data-bs-parent={`#kt_accordion_selecoes_${title}`}
              >
                <div className={`accordion-collapse-${title} ${isExpanded[accordionKey] ? '' : 'collapsed'}`}>
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  /* Inicio das propriedades das Informações Clínicas
   Definição do elemento das checkbox
   */

  interface SubTestesProps {
    valor: any;        
    handleCheckboxChange: (valor: any) => void;    
    nomeDoTeste: string;
    idTeste: string;
    friendlytitle: string;
    descricao: string;
    faixaEtariaRecomendada: string;
    pontuacao: string;
    normas: string;
    interpretacao: string;
    referencias: string;
    administracao: string;
    tempoDeAplicacao: string;
    versoesAtualizacoes: string;
  }

  const SubTestesContent: FC<SubTestesProps> = ({ 
    valor,    
    nomeDoTeste,
    idTeste,
    friendlytitle,
    descricao,
    faixaEtariaRecomendada,
    pontuacao,
    normas,
    interpretacao,
    referencias,
    administracao,
    tempoDeAplicacao,
    versoesAtualizacoes,
  }) => {
    indexteste++;
    const isChecked = selectedItems.includes(valor);
    const valorIC = valor;

    const ProPFinal = {
      nomeDoTeste: valorIC      
    };
    //console.log('Prop final:', ProPFinal);

    return (
      <div className="col border-gray-200 border-bottom" data-bs-toggle="tooltip" data-bs-html="true" title="xxx">
        <label className="d-flex flex-stack py-6 px-10 cursor-pointer bg-hover-light-secondary" htmlFor={valor}>
          <span className="d-flex align-items-center me-2">
            <span className="symbol symbol-50px me-6">
              <span className="symbol-label bg-light-primary">
                <i className='bi bi-clipboard2-fill fs-1 text-primary'></i>
              </span>
            </span>
            <span className="d-flex flex-column">
              <span className="fw-bold fs-6">{valor}</span>
              <span className="fs-7 text-muted"></span>
            </span>
          </span>
          <span className="form-check form-check-custom form-check-solid">
            <input
              type="checkbox"
              id={valor}
              checked={isChecked}
              onChange={() => handleCheckboxChange(valor)}
            />
          </span>
        </label>
      </div>
    );
  };
  /* Fim das propriedades das Informações Clínicas */

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
                  valor='Bateria Fatorial de Personalidade'
                  idTeste=''
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='CAT- A - Teste de Apercepção Infantil'
                  valor='CAT- A - Teste de Apercepção Infantil'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Escalas Beck'
                  valor='Escalas Beck'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='HTP'
                  valor='HTP'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Inventário de habilidades sociais'
                  valor='Inventário de habilidades sociais'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Palográfico'
                  valor='Palográfico'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Pirâmides coloridas de Pfister'
                  valor='Pirâmides coloridas de Pfister'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Zulliger'
                  valor='Zulliger'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='FDT'
                  valor='FDT'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Neupsilin'
                  valor='Neupsilin'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste AC de Atenção Concentrada'
                  valor='Teste AC de Atenção Concentrada'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='D2R'
                  valor='D2R'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='BPA'
                  valor='BPA'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de cancelamento de sinos'
                  valor='Teste de cancelamento de sinos'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='TAVIS'
                  valor='TAVIS'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Manual da Escala de Tdah - versão para professores'
                  valor='Manual da Escala de Tdah - versão para professores'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Compreensão Leitora de Textos Descritivos'
                  valor='Teste de Compreensão Leitora de Textos Descritivos'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Habilidades e Conhecimento Pré-Alfabetização'
                  valor='Teste de Habilidades e Conhecimento Pré-Alfabetização'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='TENA'
                  valor='TENA'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Desempenho Escolar'
                  valor='Teste de Desempenho Escolar'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='CORUJA ESPECIALISTA'
                  valor='CORUJA ESPECIALISTA'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='TDE 2'
                  valor='TDE 2'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Escala de Maturidade Mental - COLUMBIA'
                  valor='Escala de Maturidade Mental - COLUMBIA'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Escala de Traços de Personalidade para Crianças'
                  valor='Escala de Traços de Personalidade para Crianças'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Figuras Complexas de Rey'
                  valor='Figuras Complexas de Rey'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='R-2 - Raven para crianças'
                  valor='R-2 - Raven para crianças'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='SON R'
                  valor='SON R'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste de Memória de Reconhecimento - TEM-R'
                  valor='Teste de Memória de Reconhecimento - TEM-R'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste não verbal de Inteligência Geral - BETA III'
                  valor='Teste não verbal de Inteligência Geral - BETA III'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='WAIS'
                  valor='WAIS'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='WASI'
                  valor='WASI'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='WISC 4'
                  valor='WISC 4'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='PERFIL SENSORIAL'
                  valor='PERFIL SENSORIAL'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Neupsilin'
                  valor='Neupsilin'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Teste Gestaltico Visomotor de Bender'
                  valor='Teste Gestaltico Visomotor de Bender'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='RAVLT'
                  valor='RAVLT'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='Sistema Multimídia de habilidades sociais de crianças'
                  valor='Sistema Multimídia de habilidades sociais de crianças'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
                />
                <SubTestesContent
                  handleCheckboxChange={handleCheckboxChange}
                  idTeste='SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças'
                  valor='SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças'
                  nomeDoTeste=''
                  friendlytitle=''
                  descricao=''
                  faixaEtariaRecomendada=''
                  pontuacao=''
                  normas=''
                  interpretacao=''
                  referencias=''
                  administracao=''
                  tempoDeAplicacao=''
                  versoesAtualizacoes=''
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
