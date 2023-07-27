/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { ProgressBarra } from '../CadastroPacienteWizard'
import { Link } from 'react-router-dom'
import CKEditorField from './ckeditor';

const Passo12: FC = () => {
  const handleEditorChange = () => {
    // Função de manipulação de alteração vazia
  };
  return (
    <div className='container-fluid'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-arrow-right-circle-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Encaminhamentos
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
        Marque os encaminhamentos para este paciente:
        </div>
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-2'
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='78%'
        />

      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-12 mt-10'>
            <Field className='text-gray-800' name="conclusaoNeuro">
              {(fieldProps: FieldProps<string>) => (
                <>
                  <CKEditorField
                    label='Encaminhamentos:'
                    name={fieldProps.field.name}
                    onEditorChange={handleEditorChange}
                  />
                </>
              )}
            </Field>
            <ErrorMessage name='conclusaoNeuro' component="div" className="text-danger" />
          </div>

        </div>
      </div>
    </div>
  )
}

export { Passo12 }