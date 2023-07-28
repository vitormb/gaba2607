import React, { FC, useCallback, useContext, useMemo, useEffect, useState } from 'react';
import { ErrorMessage, Field, FormikValues, useFormikContext } from 'formik';
import { ProgressBarra } from '../CadastroPacienteWizard';
import { usePacienteContext }  from './PacienteContext';
import { KitchenSinkEditor} from '../SlateJS/editorPasso2'; 

type PacienteData = {
  id: number;
  nome: string;
  idade: number;
  genero: string;
  nomeCompleto: string; // adicionar propriedade
  dataNascimento: string; // adicionar propriedade
};

// Função para calcular idade
export function calcularIdade(dataNascimento: string): number {
  const hoje = new Date();
  const dataNasc = new Date(dataNascimento);
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const m = hoje.getMonth() - dataNasc.getMonth();
  
  if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }
  return idade;
}

function pacienteDataToObject(data: PacienteData): PacienteData[] {
  // Sua lógica para transformar pacienteData em um array de objetos
  if (!data) {
    return [];
  }

  const processedData: PacienteData[] = [
    data
  ];
  
  return processedData;
}

const getKitchenSinkEditorContent = (pacienteData: PacienteData) => [  
  { type: "h1", textAlign: "center", fontSize: '36', backgroundColor:'#0993E3', children: [{ text: 'INTRODUÇÃO:' }] },
  { type: "divider", children: [{ text: "\\n\\n" }], size: 1 },
  { type: "paragraph", children: [{ text: 'Segundo o Código de Ética Profissional do Psicólogo, artigo 1 "g" e "h" é um dever do Psicólogo: “Informar, a quem de direito, os resultados decorrentes da prestação de serviços psicológicos, transmitindo somente o que for necessário para a tomada de decisões que afetem o usuário ou beneficiário”;  e, “orientar a quem de direito sobre os encaminhamentos apropriados, a partir da prestação de serviços psicológicos, e fornecer, sempre que solicitado, os documentos pertinentes ao bom termo do trabalho”.\\n\\n' }] },
  ...pacienteDataToObject(pacienteData) // adiciona os dados do paciente
];
    
const Passo2: FC = () => {    
const { selectedData } = usePacienteContext();
const { values } = useFormikContext<FormikValues>();
const [processedPacienteData, setProcessedPacienteData] = useState<PacienteData[] | null>(null);

  const pacienteData: PacienteData = useMemo(() => {
    if (!selectedData) {
      return {
        id: 0,
        nome: '',
        idade: 0,
        genero: '',
        nomeCompleto: '',
        dataNascimento: '',
        ...values, // incluindo as propriedades do objeto 'values'
      };
    }

    return {
      id: selectedData.id,
      nome: selectedData.nomeCompleto,
      idade: calcularIdade(selectedData.dataNascimento),
      genero: selectedData.genero,
      nomeCompleto: selectedData.nomeCompleto,
      dataNascimento: selectedData.dataNascimento,
      ...values, // incluindo as propriedades do objeto 'values'
    };
  }, [selectedData, values]);

  const pacienteDataContent = useMemo(() => {
    return getKitchenSinkEditorContent(pacienteData);
  }, [pacienteData]);
  
  const [editorContent, setEditorContent] = useState(pacienteDataContent || []);

  const handleAddText = (newElement: any) => { // substitua 'any' pelo tipo correto
    setEditorContent(prevContent => [...prevContent, newElement]);
  };
  console.log('pacienteDataContent', pacienteDataContent);

  useEffect(() => {
    // Se selectedData é válido (não é null), e processedPacienteData ainda não foi calculado, calculamos agora
    if (selectedData && !processedPacienteData) {
      const data = pacienteDataToObject(selectedData);
      setProcessedPacienteData(data);
    }
  }, [selectedData, processedPacienteData]); 

  return (
    <div className='container-fluid'>

      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-journal-bookmark-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Cadastrar novo Paciente'
          ></i>
          Introdução
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          subtitulo
        </div>
        <div className='progresso col-12'>
          <ProgressBarra
            className='card-xl-stretch mb-2'
            color='primary'
            title='Progresso'
            description='Progresso do cadastro'
            progress='6%'
          />
        </div>

        <div className='fv-row'>
          <div className='row'>
            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Tipo de Laudo:</label>
              <Field as="select" name="tipoDeLaudo" className="form-select form-select-lg form-select-solid required">
                <option value="">Selecione</option>
                <option value="Avaliação Neuropsicologica">Avaliação Neuropsicológica</option>
                <option value="Avaliação Pericial">Avaliação Pericial</option>
                <option value="Avaliação Psicológica">Avaliação Psicológica</option>
                <option value="Exame Neuropsicológico">Exame Neuropsicológico</option>
                <option value="Psicodiagnóstico">Psicodiagnóstico</option>
              </Field>
              <ErrorMessage name='tipoDeLaudo' component="div" className="text-danger" />
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Cidade onde a avaliação foi realizada:</label>
              <Field
                type="text"
                placeholder='Nome da cidade'
                className='form-control form-control-lg form-control-solid'
                name='cidadeDaAvaliacao'
              />
            </div>
            <>
            <div>
              <ul>
                {Object.entries(pacienteData).map(([chave, valor]) => (
                  <li key={chave}>
                    <strong>{chave}:</strong> {valor}
                  </li>
                ))}
              </ul>
            </div>
            </>
            <div className='col-lg-12 mt-10'>
              <div className='separator mb-10'></div>

              {editorContent && <KitchenSinkEditor pacienteData={pacienteData} content={editorContent} setFieldValue={() => {}} pacienteDataContent={pacienteDataContent} />}
             
             <ErrorMessage name='introducao' component="div" className="text-danger" />              
            </div>
            <pre>{JSON.stringify(pacienteData, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Passo2 };