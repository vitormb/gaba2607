/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
/*
import { KTIcon } from '../../../_metronic/helpers'
*/
import { ErrorMessage, Field } from 'formik'
import { ProgressBarra } from './../CadastroPacienteWizard'

const Passo1: FC = () => {
  return (
    <div className='container'>        
        <div className='mt-5 col-12 mb-5'>          
          <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-person-fill-add ms-2 fs-4x me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Cadastrar novo Paciente'
            ></i>
            Cadastrar novo Paciente
          </h2>

          <div className='text-gray-400 fw-bold fs-6'>
            Os campos marcados com <span className='required'> </span> são obrigatórios.
          </div>
        </div>
        <div className='progresso col-12'>
          <ProgressBarra
            className='card-xl-stretch mb-2'
            color='primary'
            title='Progresso'
            description='Progresso do cadastro'
            progress='0%'
          />
        </div>

        <div className='fv-row'>
          <div className='row'>
            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Nome completo:</label>
              <Field
                placeholder='Nome completo'
                className='form-control form-control-lg form-control-solid required'
                name='nomeCompleto'
              />
            </div>

            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Data de nascimento:</label>
              <Field
                name='dataNascimento'
                type='date'
                placeholder='dd/mm/aaaa'
                className='form-control form-control-lg form-control-solid'
              />
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Gênero</label>
              <Field name="genero" as="select" className="form-select form-select-lg form-select-solid required">
                <option>Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </Field>
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label'>Organização:</label>
              <Field
                placeholder='Escola / Instituição'
                className='form-control form-control-lg form-control-solid'
                name='organizacao'
              />
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Segmento:</label>
              <Field name="segmento" as="select" className="form-select form-select-lg form-select-solid required">
                <option value=''>Selecione</option>
                <option value="Ambidestro">Público</option>
                <option value="Canhoto">Privado</option>
              </Field>
            </div>

            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Escolaridade:</label>
              <Field
                placeholder='Escolaridade'
                className='form-control form-control-lg form-control-solid required'
                name='escolaridade'
              />
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label required'>Lateralidade:</label>
              <Field name="lateralidade" as="select" className="form-select form-select-lg form-select-solid required">
                <option>Selecione</option>
                <option value="ambidestro">Ambidestro</option>
                <option value="canhoto">Canhoto</option>
                <option value="destro">Destro</option>
              </Field>
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label'>Profissão:</label>
              <Field
                placeholder='Profissão'
                className='form-control form-control-lg form-control-solid'
                name='profissao'
              />
            </div>
            <div className='col-lg-6 mt-10'>
              <label className='form-label'>Ocupação:</label>
              <Field
                placeholder='Ocupação'
                className='form-control form-control-lg form-control-solid'
                name='ocupacao'
              />
            </div>

          </div>
          <div className='text-danger mt-10'>
            <ErrorMessage name='nomeCompleto' className='alert alert-danger d-flex align-items-center p-5 mb-10' component="p" />
            <ErrorMessage name='dataNascimento' className='alert alert-danger d-flex align-items-center p-5 mb-10' component="p" />
            <ErrorMessage name='genero' className='alert alert-danger d-flex align-items-center p-5 mb-10' component="p" />
            <ErrorMessage name='segmento' className='alert alert-danger d-flex align-items-center p-5 mb-10' component="p" />
            <ErrorMessage name='lateralidade' className='alert alert-danger d-flex align-items-center p-5 mb-10' component="p" />
          </div>
        </div>
      </div>    
  )
}

export { Passo1 }