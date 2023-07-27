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

const Passo5: FC = () => {


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
  
  const InformacoesClinicas: FC<InformacoesClinicasProps> = ({
    
    value,
    content,
  }) => {
     /* Ajustes checkboxes */
  const checkClicado = () => {
    console.log(valorIC);
  }
    const idInformacoesClinicas: number = countIDinfoClinicas;
    const ICtag: string = `infoClinica${countIDinfoClinicas}`;
    const valorIC = value;
    countIDinfoClinicas++;
    return (
      <div className="mb-4 col-3">
        <div className="form-check form-check-custom form-check-solid form-check-lg">
          <input 
          onClick={checkClicado}
          className="form-check-input border border-primary border-opacity-50"
          type="checkbox"
          value=""
          id={ICtag} />
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
          <i className='bi bi-person-lines-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Cadastrar novo Paciente'
          ></i>
          Anamnese
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Informações relevantes coletadas durante anamnese.
        </div>

      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-xl-8 '
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='24%'
        />
      </div>
      <div className='row justify-content-start'>

        <div className='accordion' id='kt_accordion_selecoes'>
          <CreateAccordionElement
            icon='bi bi-cup-hot-fill fs-2x me-5'
            title='Comportamento alimentar'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Amamentação materna exclusiva'
                />
                <InformacoesClinicas
                  content={null}
                  value='Belisca muito'
                />
                <InformacoesClinicas
                  content={null}
                  value='Dependência para se alimentar'
                />
                <InformacoesClinicas
                  content={null}
                  value='Guloso'
                />
                <InformacoesClinicas
                  content={null}
                  value='Inapetente'
                />
                <InformacoesClinicas
                  content={null}
                  value='Independente para se alimentar'
                />
                <InformacoesClinicas
                  content={null}
                  value='Introdução alimentar satisfatória'
                />
                <InformacoesClinicas
                  content={null}
                  value='Preferência por alimentos doces'
                />
                <InformacoesClinicas
                  content={null}
                  value='Preferência por alimentos salgados'
                />
                <InformacoesClinicas
                  content={null}
                  value='Recusa alimentar'
                />
                <InformacoesClinicas
                  content={null}
                  value='Refeições em local inadequado'
                />
                <InformacoesClinicas
                  content={null}
                  value='Refeições fora de hora'
                />
                <InformacoesClinicas
                  content={null}
                  value='Seletividade alimentar'
                />
                <InformacoesClinicas
                  content={null}
                  value='Suja-se muito na hora da alimentação'
                />
                <InformacoesClinicas
                  content={null}
                  value='Uso de mamadeira e fórmula'
                />
                <InformacoesClinicas
                  content={null}
                  value='Ânsia de vômito'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-lightbulb fs-2x me-5'
            title='Desenvolvimento neuropsicomotor'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Alterações fono-articulatórias'
                />

                <InformacoesClinicas
                  content={null}
                  value='Atraso motor'
                />

                <InformacoesClinicas
                  content={null}
                  value='Atraso na aquisição da linguagem'
                />

                <InformacoesClinicas
                  content={null}
                  value='Cai com frequência'
                />

                <InformacoesClinicas
                  content={null}
                  value='Comunicação global satisfatória'
                />

                <InformacoesClinicas
                  content={null}
                  value='Cospe muito quando fala'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desenvolvimento neuropsicomotor sem intercorrências'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gagueira'
                />

                <InformacoesClinicas
                  content={null}
                  value='Motoramente calmo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Motoramente excessivamente ativo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Mutismo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Não atende pelo nome'
                />

              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book fs-2x me-5'
            title='Escolarização'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='1º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='2º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='3º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='4º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='5º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='6º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='7º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='8º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='9º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='10º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='11º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='12º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='13º semestre'
                />

                <InformacoesClinicas
                  content={null}
                  value='Abandono de faculdade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Adaptação escolar insatisfatória'
                />

                <InformacoesClinicas
                  content={null}
                  value='Adaptação escolar satisfatória'
                />

                <InformacoesClinicas
                  content={null}
                  value='Agitação em sala de aula'
                />

                <InformacoesClinicas
                  content={null}
                  value='Agressividade com os colegas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ausência de hábitos de estudo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Curso de pós-graduação completo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Curso de pós-graduação incompleto'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desrespeito à professora'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dificuldade na matemática'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dificuldade para aprender a escrever'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dificuldades para aprender a ler'
                />

                <InformacoesClinicas
                  content={null}
                  value='Distração em sala de aula'
                />

                <InformacoesClinicas
                  content={null}
                  value='Entrada na escola no ensino fundamental'
                />

                <InformacoesClinicas
                  content={null}
                  value='Entrada na escola no ensino infantil'
                />

                <InformacoesClinicas
                  content={null}
                  value='Escola privada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Escola pública'
                />

                <InformacoesClinicas
                  content={null}
                  value='Evasão escolar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de administração'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de agronomia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de arquitetura'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de artes'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de biologia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de biomedicina'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de ciências políticas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de cinema'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de comércio exterior'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de contabilidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de direito'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de economia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de enfermagem'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de estilismo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de farmácia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de filosofia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de física'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de fisioterapia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de fonoaudiologia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de geografia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de história'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de letras'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de matemática'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de medicina'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de nutrição'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de odontologia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de pedagogia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de psicologia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de química'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de relações internacionais'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de serviço social'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de sociologia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de tecnologia da informação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Faculdade de terapia ocupacional'
                />

                <InformacoesClinicas
                  content={null}
                  value='Frequentou o EJA'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gosta de estudar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ingresso no ensino superior particular com dificuldade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ingresso no ensino superior particular com facilidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ingresso no ensino superior público com dificuldade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ingresso no ensino superior público com facilidade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Material escolar bem cuidado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Material escolar pouco cuidado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Mudança de escola'
                />

                <InformacoesClinicas
                  content={null}
                  value='Não faz as tarefas de casa'
                />

                <InformacoesClinicas
                  content={null}
                  value='Não gosta de estudar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Não tem professor particular'
                />

                <InformacoesClinicas
                  content={null}
                  value='Passividade na interação social'
                />

                <InformacoesClinicas
                  content={null}
                  value='Presença de hábitos de estudo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Problemas de comportamento por causa da inquietação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Queixas de inadequada interação social'
                />
                <InformacoesClinicas
                  content={null}
                  value='Recebe professor particular'
                />
                <InformacoesClinicas
                  content={null}
                  value='Recuperação de notas'
                />
                <InformacoesClinicas
                  content={null}
                  value='Repetência de disciplina da faculdade'
                />

                <InformacoesClinicas
                  content={null}
                  value='Repetência escolar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Trancamento de faculdade'
                />


              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-clipboard2-heart-fill fs-2x me-5'
            title='Gestação'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Baixo peso'
                />

                <InformacoesClinicas
                  content={null}
                  value='COVID na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Chikungunya na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Descolamento de placenta'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desvio do crescimento fetal intrauterino'
                />

                <InformacoesClinicas
                  content={null}
                  value='Diabetes gestacional'
                />

                <InformacoesClinicas
                  content={null}
                  value='Diminuição da quantidade de líquido amniótico'
                />

                <InformacoesClinicas
                  content={null}
                  value='Fertilização in vitro'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ganho de peso acentuado na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gestação com hábitos saudáveis'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gestação gemelar patológica'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gestação gemelar saudável'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gestação sem intercorrências clínicas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gravidez não planejada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Gravidez planejada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hemorragias na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Hipotireoidismo materno'
                />

                <InformacoesClinicas
                  content={null}
                  value='Icterícia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ingestão de mecônio'
                />

                <InformacoesClinicas
                  content={null}
                  value='Internação na UTI neonatal'
                />

                <InformacoesClinicas
                  content={null}
                  value='Mãe em uso de medicações na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Notas de Apgar insatisfatórias'
                />

                <InformacoesClinicas
                  content={null}
                  value='Notas de Apgar satisfatória'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parada cardíaca ao nascer'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto a termo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto cesariano com intercorrências'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto cesariano sem intercorrência'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto normal com intercorrências'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto normal sem intercorrências'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto prematuro'
                />

                <InformacoesClinicas
                  content={null}
                  value='Parto tardio'
                />

                <InformacoesClinicas
                  content={null}
                  value='Perímetro cefálico alterado ao nascer'
                />

                <InformacoesClinicas
                  content={null}
                  value='Peso e tamanho adequados'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pressão alta na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Problemas emocionais na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pré-eclâmpsia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pré-natal não realizado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pré-natal realizado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Toxoplasmose na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Uso de cigarro na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Uso de drogas na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Uso de álcool na gestação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Zika vírus na gestação'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-clipboard2-pulse-fill fs-2x me-5'
            title='Histórico de saúde na família'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Alergias'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doença genética'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças dermatológicas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças gastrointestinais'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças metabólicas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças neurodegenerativas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças neurológicas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças oftalmológicas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças oncológicas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças psiquiátricas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças respiratórias'
                />

                <InformacoesClinicas
                  content={null}
                  value='Doenças ósseas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Transtornos do neurodesenvolvimento'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-file-bar-graph-fill fs-2x me-5'
            title='Histórico de trabalho'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Autônomo'
                />
                <InformacoesClinicas
                  content={null}
                  value='Concurso público'
                />
                <InformacoesClinicas
                  content={null}
                  value='Desempregado'
                />
                <InformacoesClinicas
                  content={null}
                  value='Emprego estável'
                />
                <InformacoesClinicas
                  content={null}
                  value='Empresário'
                />
                <InformacoesClinicas
                  content={null}
                  value='Estágio'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-clipboard2-pulse-fill fs-2x me-5'
            title='Histórico Médico'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Acelerado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Acne'
                />

                <InformacoesClinicas
                  content={null}
                  value='Aparelho auditivo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Aparelho ortodôntico'
                />

                <InformacoesClinicas
                  content={null}
                  value='Apatia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Arrotos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Asma'
                />

                <InformacoesClinicas
                  content={null}
                  value='Batimento cardíaco'
                />

                <InformacoesClinicas
                  content={null}
                  value='Bronquite'
                />

                <InformacoesClinicas
                  content={null}
                  value='Cirurgia de urgência'
                />

                <InformacoesClinicas
                  content={null}
                  value='Coceira genital'
                />

                <InformacoesClinicas
                  content={null}
                  value='Coceira nos olhos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Comer compulsivo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Congestão no peito'
                />

                <InformacoesClinicas
                  content={null}
                  value='Constipação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Coordenação física pobre'
                />

                <InformacoesClinicas
                  content={null}
                  value='Desmaio'
                />

                <InformacoesClinicas
                  content={null}
                  value='Diarreia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dificuldade de respirar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor de cabeça'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor de garganta'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor de ouvido'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor estomacal'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor intestinal'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor nas articulações'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dor no peito'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dores nos músculos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Fadiga'
                />

                <InformacoesClinicas
                  content={null}
                  value='Falta de ar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ganho de peso'
                />

                <InformacoesClinicas
                  content={null}
                  value='Inchaço'
                />

                <InformacoesClinicas
                  content={null}
                  value='Infecção de ouvido'
                />

                <InformacoesClinicas
                  content={null}
                  value='Inquietação'
                />

                <InformacoesClinicas
                  content={null}
                  value='Internação psiquiátrica'
                />

                <InformacoesClinicas
                  content={null}
                  value='Lacrimejos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Limitação nos movimentos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Micção urgente'
                />

                <InformacoesClinicas
                  content={null}
                  value='Nariz entupido'
                />

                <InformacoesClinicas
                  content={null}
                  value='Náusea ou vômito'
                />

                <InformacoesClinicas
                  content={null}
                  value='Perda de peso'
                />

                <InformacoesClinicas
                  content={null}
                  value='Perda de voz'
                />

                <InformacoesClinicas
                  content={null}
                  value='Queda de cabelos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Retenção de líquidos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Rouquidão'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sensação de fraqueza'
                />

                <InformacoesClinicas
                  content={null}
                  value='Suor excessivo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Tonturas'
                />

                <InformacoesClinicas
                  content={null}
                  value='Tosse crônica'
                />

                <InformacoesClinicas
                  content={null}
                  value='Usa óculos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Vermelhidão'
                />

                <InformacoesClinicas
                  content={null}
                  value='Visita à emergência'
                />

                <InformacoesClinicas
                  content={null}
                  value='Visão borrada'
                />

                <InformacoesClinicas
                  content={null}
                  value='Zumbido'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-alarm-fill fs-2x me-5'
            title='Padrões de sono'
            content={
              <div className='row'>

                <InformacoesClinicas
                  content={null}
                  value='Apnéia do sono'
                />

                <InformacoesClinicas
                  content={null}
                  value='Baba'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dificuldade para acordar'
                />

                <InformacoesClinicas
                  content={null}
                  value='Dificuldade para adormecer'
                />

                <InformacoesClinicas
                  content={null}
                  value='Fala durante o sono'
                />

                <InformacoesClinicas
                  content={null}
                  value='Insônia'
                />

                <InformacoesClinicas
                  content={null}
                  value='Pesadelos frequentes'
                />

                <InformacoesClinicas
                  content={null}
                  value='Range os dentes'
                />

                <InformacoesClinicas
                  content={null}
                  value='Range os dentes'
                />

                <InformacoesClinicas
                  content={null}
                  value='Ronco'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sem intercorrências no sono'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sonambulismo'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sono agitado'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sono leve'
                />

                <InformacoesClinicas
                  content={null}
                  value='Sua muito a noite'
                />

                <InformacoesClinicas
                  content={null}
                  value='Terror noturno'
                />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-capsule fs-2x me-5'
            title='Uso de Medicações'
            content={
              <div className='row'>
                <InformacoesClinicas
                  content={null}
                  value='Analgésicos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Antialérgicos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Antibióticos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Anticoncepcionais'
                />

                <InformacoesClinicas
                  content={null}
                  value='Antinflamatórios'
                />

                <InformacoesClinicas
                  content={null}
                  value='Fitoterápicos'
                />

                <InformacoesClinicas
                  content={null}
                  value='Recusa medicamentos'
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
export { Passo5 }