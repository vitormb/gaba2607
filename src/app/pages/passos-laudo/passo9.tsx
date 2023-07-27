/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { ErrorMessage, Field } from 'formik'
import { ProgressBarra } from '../CadastroPacienteWizard'
import { Link } from 'react-router-dom'

const Passo9: FC = () => {
  return (
    <div className='container-fluid'>        
        <div className='mt-5 col-12 mb-5'>          
          <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-pencil-fill ms-2 fs-4x me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Dados do Paciente'
            ></i>
            Resultados
          </h2>
          <div className='text-gray-400 fw-bold fs-6'>
            Você precisa <Link to="/formularios/cadastrar-paciente">cadastrar o paciente</Link> antes de vincular um laudo em seu nome.<span className='required'> </span>
          </div>
        </div>
        <div className='progresso col-12'>
          <ProgressBarra
            className='card-xl-stretch mb-2'
            color='primary'
            title='Progresso'
            description='Progresso do cadastro'
            progress='48%'
          />
          
        </div>

        <div className='fv-row'>
          <div className='row'>
            <div className='col-lg-12 mt-10'>
              <label className='form-label required'>Digite o nome do paciente:</label>
              <Field
                placeholder='Nome completo'
                className='form-control form-control-lg form-control-solid required'
                name='nomeCompleto'
              />
              <ErrorMessage name='nomeCompleto' component="div" className="text-danger"  />
            </div>  
            <span className='col-lg-12 mt-5'>O conteúdo abaixo é atualizado automaticamente. Fique a vontade para editar se for necessário.</span>
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Data de nascimento:</label>
              <Field
                type='date'
                className='form-control form-control-lg form-control-solid'
                name='dataDeNascimento'
              />
              
            </div>                
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Idade:</label>
              <Field
                placeholder='Idade'
                className='form-control form-control-lg form-control-solid required'
                name='dataDeNascimento'
              />
             
            </div>       
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Meses:</label>
              <Field
                placeholder='Idade'
                className='form-control form-control-lg form-control-solid required'
                name='dataDeNascimento'
              />
              
            </div>
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Dias:</label>
              <Field
                placeholder='Idade'
                className='form-control form-control-lg form-control-solid required'
                name='dataDeNascimento'
              />
              
            </div>
          </div>
        </div>
      </div>
  )
}

export { Passo9 }