import React, { FC, useState, useEffect, useRef } from 'react';
import { Formik, Field, ErrorMessage, useFormikContext, FormikValues } from 'formik';
import { ProgressBarra } from '../CadastroPacienteWizard'
/* CK Editor config */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export interface CKEditorFieldProps {
  label: string;
  name: string;
  onEditorChange: (value: string) => void;
}
const Passo6: FC = () => {
  const [accordionState, setAccordionState] = useState<boolean[]>([]); // Estado para controlar a expansão de cada acordeão
  const [editorContent, setEditorContent] = useState('');

  /* CK Editor start */
  const [descricaoSelecionada, setDescricaoSelecionada] = useState('');
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.currentTarget.value;
    const isCheckbox = event.currentTarget.checked;
    
    if (isCheckbox) {
      // Atualiza o estado da checkbox para "checked"
      event.currentTarget.setAttribute('checked', 'checked');
    } else {
      // Remove o atributo "checked" caso a checkbox não esteja marcada
      event.currentTarget.removeAttribute('checked');
    }

    if (event.currentTarget.checked) {
      setDescricaoSelecionada(descricaoSelecionada + '\n' + selectedValue);
    } else {
      setDescricaoSelecionada(descricaoSelecionada.replace('\n' + selectedValue, ''));
    }
  }; 

  /* Propriedades do acordeon */
  let countAcordeao: number = 1;

  interface AccordionElementProps {
    icon: string;
    title: string;
    content: React.ReactNode;
  }

  const CreateAccordionElement: React.FC<AccordionElementProps> = ({
    icon,
    title,
    content,
  }) => {

    const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar a expansão do acordeão
    const accordionHeaderId: string = `kt_accordion_selecoes_header_${countAcordeao}`;
    const accordionBoddy: string = `kt_accordion_selecoes_body_${countAcordeao}`;
    const icone: string = `${icon}`;
    countAcordeao++;

    const toggleAccordion = () => {
      setIsExpanded(!isExpanded); // Inverte o estado de expansão ao clicar no botão    
    };

    return (
      <div className='accordion-item col-12'>
        <h2 className='accordion-header' id={accordionHeaderId}>
          <button
            className={`accordion-button fs-4 fw-bold ${isExpanded ? '' : 'collapsed'}`}
            type='button'
            onClick={toggleAccordion} // Adiciona a função de clique para controlar a expansão
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-controls={accordionBoddy}
          >
            <i className={icone}></i>
            {title}
          </button>
        </h2>
        <div
          id={accordionBoddy}
          className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
          aria-labelledby={accordionHeaderId}
          data-bs-parent='#kt_accordion_selecoes'
        >
          <div className='accordion-body'>{content}</div>
        </div>
      </div>
    );
  };

  /* Inicio das propriedades das Informações Clínicas
  Definição do elemento das checkbox
  */
  let countIDinfoClinicas: number = 1;
  interface InformacoesClinicasProps {
    value: string;
    content: React.ReactNode | null;
  }
   const InformacoesClinicas: FC<InformacoesClinicasProps> = ({ value, content }) => {
    const idInformacoesClinicas: number = countIDinfoClinicas;
    const ICtag: string = `infoClinica${countIDinfoClinicas}`;
    const valorIC = value;
    countIDinfoClinicas++;

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const updatedContent = `${editorContent}${valorIC}\n`; // Adiciona o valor selecionado como uma nova linha no conteúdo atual do CKEditor
      setEditorContent(updatedContent);
    };
    
    return (
      <div className="mb-4 col-3">
        <div className="form-check form-check-custom form-check-solid form-check-lg">
          <input className="form-check-input border border-primary border-opacity-50" type="checkbox" value="" id={ICtag} />
          <label className="form-check-label text-gray-800" htmlFor={ICtag}>
            {valorIC}
          </label>
        </div>
      </div>
    );
  };
  /* Fim das propriedades das Informações Clínicas */


  const handleEditorChange = () => {
    // Função de manipulação de alteração vazia
  };
  const editorRef = useRef<any>(null);
  const { values, handleChange, setFieldValue } = useFormikContext<FormikValues>();
  useEffect(() => {
    // Atualiza o conteúdo do CKEditor com a nova seleção
    if (editorRef.current) {
      editorRef.current.setData(`<p>${descricaoSelecionada}</p>`);
    }
  }, [descricaoSelecionada]);

  return (
    <div className='container-fluid'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-chat-dots ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Cadastrar novo Paciente'
          ></i>
          Atitude do paciente
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
        Apresentação do paciente ao longo da avaliação
        </div>
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-xl-8 '
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='30%'
        />
      </div>
      <div className='row justify-content-start'>

        <div className='accordion' id='kt_accordion_selecoes'>
          <CreateAccordionElement
            icon='bi bi-emoji-smile-fill fs-2x me-5'
            title='Afetos do paciente'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Afeto congruente com o humor'
                />

                <InformacoesClinicas
                  content={null}
                  value='Afeto hipermodulado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Afeto hipomodulado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Afeto inadequado, inapropriado ou incongruente'
                />

                <InformacoesClinicas
                  content={null}
                  value='Afeto incongruente com o humor'
                />

                <InformacoesClinicas
                  content={null}
                  value='Afeto plano'
                />

                <InformacoesClinicas
                  content={null}
                  value='Embotado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Incontinência emocional'
                />

                <InformacoesClinicas
                  content={null}
                  value='Indiferença afetiva, apatia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Labilidade afetiva'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-palette-fill fs-2x me-5'
            title='Aparência'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Aparência adequada'
                />
                <InformacoesClinicas
                  content={null}
                  value='Aparência inadequada'
                />
                <InformacoesClinicas
                  content={null}
                  value='Aparência pouco adequada'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-eye-fill fs-2x me-5'
            title='Atenção'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Aprosexia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desatenção'
                />

                <InformacoesClinicas
                  content={null}
                  value='Distratibilidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hiperalerta'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hiperprosexia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipertenacidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipervigilância'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipoprosexia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipotenacidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipovigilância'
                />

                <InformacoesClinicas
                  content={null}
                  value='Normoprosexia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Normotenaz'
                />

                <InformacoesClinicas
                  content={null}
                  value='Normovigil'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-binoculars-fill fs-2x me-5'
            title='Atenção compartilhada'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Limitação na atenção compartilhada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Preservação da atenção compartilhada'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-heart-fill fs-2x me-5'
            title='Capacidade empática'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Limitação na empatia afetiva'
                />
                <InformacoesClinicas
                  content={null}
                  value='Limitação na empatia cognitiva'
                />
                <InformacoesClinicas
                  content={null}
                  value='Preservação da empatia cognitiva'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-compass-fill fs-2x me-5'
            title='Conduta'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Afetada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amaneirada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Arrogante'
                />

                <InformacoesClinicas
                  content={null}
                  value='Colaborativo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Confusa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desconfiada ou Suspicaz'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desinibida'
                />

                <InformacoesClinicas
                  content={null}
                  value='Disposta'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dissimuladora'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dramática ou Teatral'
                />

                <InformacoesClinicas
                  content={null}
                  value='Esquiva'
                />

                <InformacoesClinicas
                  content={null}
                  value='Evasiva'
                />

                <InformacoesClinicas
                  content={null}
                  value='Excitada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Excessivamente ativa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Expansiva'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gliscróide ou Grudenta'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hostil'
                />

                <InformacoesClinicas
                  content={null}
                  value='Indiferente'
                />

                <InformacoesClinicas
                  content={null}
                  value='Inibida ou Contida'
                />

                <InformacoesClinicas
                  content={null}
                  value='Irônica'
                />

                <InformacoesClinicas
                  content={null}
                  value='Lamuriosa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Manipuladora'
                />

                <InformacoesClinicas
                  content={null}
                  value='Não cooperativo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Oposicionista'
                />

                <InformacoesClinicas
                  content={null}
                  value='Passiva'
                />

                <InformacoesClinicas
                  content={null}
                  value='Perplexa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Quelerante'
                />

                <InformacoesClinicas
                  content={null}
                  value='Reivindicativo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sedutora'
                />

                <InformacoesClinicas
                  content={null}
                  value='Simuladora'
                />

                <InformacoesClinicas
                  content={null}
                  value='Submissa'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-diagram-3-fill fs-2x me-5'
            title='Consciência'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Coma'
                />
                <InformacoesClinicas
                  content={null}
                  value='Confusão'
                />
                <InformacoesClinicas
                  content={null}
                  value='Consciente'
                />
                <InformacoesClinicas
                  content={null}
                  value='Delirium'
                />
                <InformacoesClinicas
                  content={null}
                  value='Dissociação'
                />
                <InformacoesClinicas
                  content={null}
                  value='Estado Crepuscular'
                />
                <InformacoesClinicas
                  content={null}
                  value='Estado de obnubilação'
                />
                <InformacoesClinicas
                  content={null}
                  value='Estupor'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-chat-left-dots-fill fs-2x me-5'
            title='Conteúdo do pensamento'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Ansioso'
                />

                <InformacoesClinicas
                  content={null}
                  value='Associação por rimas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Circunstancialidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Concretismo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio bizarro'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio de Capgras'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio de Cotard'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio de ciúme'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio de referência'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio de ser controlado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio do tipo inserção do pensamento'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio do tipo irradiação do pensamento'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio erotomaníaco'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio grandioso'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio niilista'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio persecutório'
                />

                <InformacoesClinicas
                  content={null}
                  value='Delírio somático'
                />

                <InformacoesClinicas
                  content={null}
                  value='Depressivo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Fuga de ideias'
                />

                <InformacoesClinicas
                  content={null}
                  value='Fóbico'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ideação homicida'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ideação paranoide'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ideação suicida'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ideias supervalorizadas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Minuciosidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Mágico'
                />

                <InformacoesClinicas
                  content={null}
                  value='Obsessivo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Perseveração'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pobreza no pensamento'
                />

                <InformacoesClinicas
                  content={null}
                  value='Prolixo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Tangencialidade'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-arrow-right-circle-fill fs-2x me-5'
            title='Curso do pensamento'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Aceleração'
                />
                <InformacoesClinicas
                  content={null}
                  value='Normal'
                />
                <InformacoesClinicas
                  content={null}
                  value='Bloqueio'
                />
                <InformacoesClinicas
                  content={null}
                  value='Lentificação'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-arrows-move fs-2x me-5'
            title='Forma do pensamento'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Agregado e lógico'
                />
                <InformacoesClinicas
                  content={null}
                  value='Desagregado'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-balloon-heart fs-2x me-5'
            title='Humor'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Anedonia'
                />
                <InformacoesClinicas
                  content={null}
                  value='Ansioso'
                />
                <InformacoesClinicas
                  content={null}
                  value='Deprimido'
                />
                <InformacoesClinicas
                  content={null}
                  value='Disfórico'
                />
                <InformacoesClinicas
                  content={null}
                  value='Euforia'
                />
                <InformacoesClinicas
                  content={null}
                  value='Eutímico'
                />
                <InformacoesClinicas
                  content={null}
                  value='Hipertímico'
                />
                <InformacoesClinicas
                  content={null}
                  value='Hipotímico'
                />
                <InformacoesClinicas
                  content={null}
                  value='Irritável'
                />
                <InformacoesClinicas
                  content={null}
                  value='Mania'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-half fs-2x me-5'
            title='Inteligência'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Deficiência intelectual'
                />
                <InformacoesClinicas
                  content={null}
                  value='Inteligência preservada'
                />
                <InformacoesClinicas
                  content={null}
                  value='Dificuldade de abstração'
                />
                <InformacoesClinicas
                  content={null}
                  value='Inteligência limítrofe'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-stoplights-fill fs-2x me-5'
            title='Juízo crítico'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Parcial'
                />
                <InformacoesClinicas
                  content={null}
                  value='Prejudicado'
                />
                <InformacoesClinicas
                  content={null}
                  value='Preservado'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-chat-text-fill fs-2x me-5'
            title='Linguagem'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Alterações na mímica facial e tiques'
                />

                <InformacoesClinicas
                  content={null}
                  value='Bradilalia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Coprolalia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Disartria'
                />

                <InformacoesClinicas
                  content={null}
                  value='Disfemia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ecolalia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Linguagem quantitativamente diminuída'
                />

                <InformacoesClinicas
                  content={null}
                  value='Logorreia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Mutismo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Neologismo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Normolalia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Taquilalia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Vulgaridade'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-circle-square fs-2x me-5'
            title='Memória'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Amnésia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia anterógrada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia imediata'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia lacunar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia orgânica'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia psicogênica'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia remota'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia retroanterógrada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Amnésia retrógrada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipermnésia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Memória preservada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Paramnésia'
                />
              </div>
            }
          />

          <CreateAccordionElement
            icon='bi bi-chevron-bar-expand fs-2x me-5'
            title='Orientação'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Desorientado alopsiquicamente'
                />
                <InformacoesClinicas
                  content={null}
                  value='Orientado autopsiquicamente'
                />
                <InformacoesClinicas
                  content={null}
                  value='Desorientado autopsiquicamente'
                />
                <InformacoesClinicas
                  content={null}
                  value='Orientado alopsiquicamente'
                />
              </div>
            }
          />

          <CreateAccordionElement
            icon='bi bi-link-45deg fs-2x me-5'
            title='Padrões de apego'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Apego inseguro'
                />
                <InformacoesClinicas
                  content={null}
                  value='Apego seguro'
                />
              </div>
            }
          />

          <CreateAccordionElement
            icon='bi bi-bullseye fs-2x me-5'
            title='Sensopercepção'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Alucinação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação - congruente com o humor'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação - incongruente com o humor'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação auditiva'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação auditiva: eco do pensamento'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação auditiva: sonorização do pensamento'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação auditiva: vozes de comando'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação auditiva: vozes que comandam a ação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação de presença'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação gustativa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação olfativa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação tátil'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação vestibular'
                />

                <InformacoesClinicas
                  content={null}
                  value='Alucinação visual'
                />

                <InformacoesClinicas
                  content={null}
                  value='Analgesia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Anestesia tátil'
                />

                <InformacoesClinicas
                  content={null}
                  value='Despersonalização'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desrealização'
                />

                <InformacoesClinicas
                  content={null}
                  value='Disestesia tátil'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hiperestesia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipoestesia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ilusão'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parestesia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pseudoalucinação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sem alterações na senso-percepção'
                />
              </div>
            }
          />

          <CreateAccordionElement
            icon='bi bi-puzzle-fill fs-2x me-5'
            title='Tipos de brincar'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Brincar com regras'
                />
                <InformacoesClinicas
                  content={null}
                  value='Brincar simbólico'
                />
                <InformacoesClinicas
                  content={null}
                  value='Brincar funcional'
                />
                <InformacoesClinicas
                  content={null}
                  value='Brincar paralelo'
                />
              </div>
            }
          />

        </div>
        <div className='mt-10 text-black'>
          <label className="form-check-label align-middle mb-5 text-gray-800">Metodologia:</label>
          <CKEditor
            editor={ClassicEditor}
            data={descricaoSelecionada}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFieldValue('descricaoDaDemanda', data);
            }}
          />
        </div>
      </div>

    </div>

  )
}
export { Passo6 }