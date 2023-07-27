/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { ErrorMessage, Field, FieldProps } from 'formik'
import { Link } from 'react-router-dom'

const Passo3: FC = () => {
  return (
    <div className='container'>            

            <div className='mt-5 col-12 mb-5'>
                <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
                    <i className='bi bi-arrow-right-circle-fill ms-2 fs-4x me-4 text-color-primary'
                        data-bs-toggle='tooltip'
                        title='Dados do Paciente'
                    ></i>
                    Encaminhamentos Passo3
                </h2>
                <div className='text-gray-400 fw-bold fs-6'>
                    Marque os encaminhamentos para este paciente:
                </div>
            </div>
            <div className='progresso col-12'>
            aff
            </div>

            <div className='fv-row'>
                <div className='row'>
                    <div className='col-lg-12 mt-10'>                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export { Passo3 }