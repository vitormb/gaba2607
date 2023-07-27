import React, { FC, useState, useEffect, useRef } from 'react';
import { Formik, Field, useFormikContext, FormikValues } from 'formik';
import { ProgressBarra } from '../CadastroPacienteWizard';
import ModalBase from './testes-wizard/modal-base';

const Passo7: FC = () => {
  const [newtitleAC, setnewtitleAC] = useState('');

  /* Propriedades do acordeon */
  interface AccordionElementProps {
    icon: string;
    title: string;
    friendlytitle: string;
    content: React.ReactNode;
  }

  const CreateAccordionElement: React.FC<AccordionElementProps> = ({
    icon,
    title,
    friendlytitle,
    content,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [indexdata, setIndexData] = useState(0);
    let numeroAccordion = 0;

    const toggleAccordion = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsExpanded(!isExpanded);
      const index = Number(event.currentTarget.getAttribute('data-index'));
      var numeroAccordion = indexdata;
      console.log(`Acordeão ${indexdata} foi expandido ou contraído.`);
    };

    useEffect(() => {
      setIndexData((prevIndex) => prevIndex + 1);
    }, []);

    return (
      <div className="accordion">
        <div className="col">
          <div className='card'>
            <div className='accordion-item col-12'>
              <h2 className='accordion-header'>
                <button
                  className={`accordion-button fs-4 fw-bold ${isExpanded ? '' : 'collapsed'}`}
                  type='button'
                  onClick={toggleAccordion}
                  aria-expanded={isExpanded ? 'true' : 'false'}
                  aria-controls={`kt_accordion_selecoes_body_${title}`}
                >
                  <i className={icon}></i>
                  <span className='ps-5'>{title}</span>
                </button>
              </h2>
              <div
                id={`kt_accordion_selecoes_body_${title}`}
                className={`accordion-collapse ${isExpanded ? 'show' : 'collapse'}`}
                data-bs-parent={`#kt_accordion_selecoes_${title}`}
              >
                <div className={`accordion-collapse-${title} ${isExpanded ? '' : 'collapsed'}`}>
                  {content}
                </div>
                <ModalBase                   
                  nomeDoTeste={title}
                  idModal={numeroAccordion}
                  friendlytitle={friendlytitle}
                  descricao="Descrição"
                  faixaEtariaRecomendada="Faixa etária"                  
                  pontuacao="pontuacao"
                  normas="normas"
                  interpretacao="interpretacoes"                  
                  referencias="Referencias"
                  administracao="administração"
                  tempoDeAplicacao="tempo de aplicação"
                  versoesAtualizacoes="versoes"
                />
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
  let countIDinfoClinicas: number = 1;
  interface SubTestesProps {
    valor: string;
    info: string;
    idbase: React.ReactNode | null;
  }
  const SubTestesContent: FC<SubTestesProps> = ({ valor, idbase, info }) => {
    const { setFieldValue } = useFormikContext(); // Obtém a função setFieldValue do Formik
    const idInformacoesClinicas: number = countIDinfoClinicas;
    const ICtag: string = `infoClinica${countIDinfoClinicas}`;
    const valorIC = valor;
    const SetBase = idbase;
    countIDinfoClinicas++;

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked; // Verifica se o checkbox está marcado ou não

      setFieldValue(ICtag, isChecked); // Atualiza o valor do campo correspondente no Formik
    };

    return (
      <div className="mb-4 col-3" data-bs-toggle="tooltip" data-bs-html="true" title="xxx" >
        <div className="form-check form-check-custom form-check-solid form-check-lg">
          <input name={valorIC} className="form-check-input border border-primary border-opacity-50" type="checkbox" id={valorIC} />
          <label className="form-check-label text-gray-800" htmlFor={valorIC}>
            {valorIC}
          </label>
        </div>
      </div>
    );
  };
  /* Fim das propriedades das Informações Clínicas */


  return (
    <div className='container'>
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
        {/* Elemento do Modal e Wizard */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Aprendizagem'
            friendlytitle='aprendizagem'
            content={
              <div className="card shadow-sm parent-hover">                
                <div className='d-flex px-10 py-2 d-flex'>
                  <div role={newtitleAC} aria-labelledby={newtitleAC}>                  
                    <SubTestesContent
                      idbase='confias'
                      valor='CONFIAS'
                      info='Consciência fonológica instrumento de avaliação sequencial'
                    />
                    <SubTestesContent
                      idbase='wisciv'
                      valor='WISC-IV'
                      info='Escala de Inteligência para Crianças de Wechsler - IV'
                    />
                    <SubTestesContent
                      idbase='waisiii'
                      valor='WAIS III'
                      info='Escala Wechsler de Inteligência para adultos'
                    />
                    <SubTestesContent
                      idbase='neupsilin'
                      valor='Neupsilin'
                      info='Instrumento de Avaliação Neuropsicológica Breve Infantil'
                    />
                    <SubTestesContent
                      idbase='nepsy'
                      valor='NEPSY'
                      info='Nepsy-ll'
                    />
                    <SubTestesContent
                      idbase='nps'
                      valor='NPS'
                      info='Neupsilin - Adulto'
                    />
                    <SubTestesContent
                      idbase='prolecser'
                      valor='PROLEC-SE-R'
                      info='Prova de avaliação dos processos de leitura - ensino fundamental II e médio'
                    />
                    <SubTestesContent
                      idbase='prolec'
                      valor='PROLEC'
                      info='Provas de Avaliação dos Processos da Leitura'
                    />
                    <SubTestesContent
                      idbase='tdeii'
                      valor='TDE-II'
                      info='Teste de Desempenho Escolar II'
                    />
                    <SubTestesContent                      
                      idbase='thcp'
                      valor='THCP'
                      info='Teste de Habilidades e Conhecimentos pré-alfabetização'
                    />
                  </div>
                </div>                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Funções Executivas'
            friendlytitle='funcoesExecutivas'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div role={newtitleAC} aria-labelledby={newtitleAC}>
                    <SubTestesContent
                      info=''
                      idbase='wisciv'
                      valor='WISC-IV'
                    />
                    <SubTestesContent
                      info=''
                      idbase='waisiii'
                      valor='WAIS III'
                    />
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Memória'
            friendlytitle='memoria'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div role={newtitleAC} aria-labelledby={newtitleAC}>
                    <SubTestesContent
                      info=''
                      idbase='wisciv'
                      valor='WISC-IV'
                    />
                    <SubTestesContent
                      info=''
                      idbase='waisiii'
                      valor='WAIS III'
                    />
                  </div>
                </div>                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Praxias'
            friendlytitle='praxias'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Atenção'
            friendlytitle='atencao'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Habilidades Sociais'
            friendlytitle='habilidadesSociais'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Orientação'
            friendlytitle='orientacao'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Processamento Sensorial'
            friendlytitle='processamentoSensorial'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Cognição Social'
            friendlytitle='cognicaoSocial'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Inteligência'
            friendlytitle='inteligencia'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Percepção Visual'
            friendlytitle='percepcaoVisual'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Psicomotricidade'
            friendlytitle='psicomotricidade'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Comportamento Adaptativo'
            friendlytitle='comportamentoAdaptativo'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Linguagem'
            friendlytitle='linguagem'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Personalidade'
            friendlytitle='personalidade'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Psicopatologia'
            friendlytitle='psicopatologia'
            content={
              <div className="card shadow-sm parent-hover">
                <div className='d-flex px-10 py-2 d-flex'>
                  <div className="list-group list-group-flush">

                    <div role={newtitleAC} aria-labelledby={newtitleAC}>
                      <SubTestesContent
                        info=''
                        idbase='wisciv'
                        valor='WISC-IV'
                      />
                      <SubTestesContent
                        info=''
                        idbase='waisiii'
                        valor='WAIS III'
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            }
          />
        </div>

      </div>
      <pre>
        Aprendizagem: nomeDoTeste
        info: descricao
        Faixa etária: faixaEtariaRecomendada
        testes-configuracoes: configs[]
        Listagem de itens: subtestesItens
        pontuacao: Pontuação
      </pre>
    </div>

  )
}

export { Passo7 }