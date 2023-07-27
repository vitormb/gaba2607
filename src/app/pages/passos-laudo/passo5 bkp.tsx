import { FC } from 'react';
import { ErrorMessage, Field, Form, FieldArray, FieldProps, FormikProps } from 'formik';
import { ICreateLaudos } from './LaudoWizardHelper';
import { ProgressBarra } from '../CadastroPacienteWizard'
import CKEditorField from './ckeditor'

const Passo5: FC = () => {
  const handleEditorChange = () => {
    // Função de manipulação de alteração vazia
  };
  return (
    <div className='container'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-clipboard2-check-fill ms-2 fs-4x me-4 text-color-primary'
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
          color='success'
          title='Progresso'
          description='Progresso do cadastro'
          progress='100%'
        />
      </div>
      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6 mt-10'>
            <label className='form-label required'>Selecione:</label>
            <Field name="tipoDeLaudo" as="select" className="form-select form-select-lg form-select-solid required">
              <option>Selecione</option>
              <option value="Avaliação Neuropsicologica">Avaliação Neuropsicológica</option>
              <option value="Avaliação Pericial">Avaliação Pericial</option>
              <option value="Avaliação Psicológica">Avaliação Psicológica</option>
              <option value="Exame Neuropsicológico">Exame Neuropsicológico</option>
              <option value="Psicodiagnóstico">Psicodiagnóstico</option>
            </Field>
            <ErrorMessage name='tipoDeLaudo' component="div" className="text-danger" />
          </div>
          <div className='col-lg-6 mt-10'>
            <label className='form-label required'>Tipo de Laudo:</label>
            <Field name="tipoDeLaudo" as="select" className="form-select form-select-lg form-select-solid required">
              <option>Selecione</option>
              <option value="Avaliação Neuropsicologica">Avaliação Neuropsicológica</option>
              <option value="Avaliação Pericial">Avaliação Pericial</option>
              <option value="Avaliação Psicológica">Avaliação Psicológica</option>
              <option value="Exame Neuropsicológico">Exame Neuropsicológico</option>
              <option value="Psicodiagnóstico">Psicodiagnóstico</option>
            </Field>
            <ErrorMessage name='tipoDeLaudo' component="div" className="text-danger" />
          </div>
        </div>


      </div>
    </div>

  )
}
export { Passo5 }