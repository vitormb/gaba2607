/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useForm } from 'react-hook-form';
const Passo1: FC = () => {
  const {
    register,
  } = useForm();

  return (

    <div className=''>
      <div className="card shadow-sm">
        <div className="card-header bg-primary">
          <h3 className="card-title text-white fs-2x bg-primary"><i className="bi bi-person-fill-add text-white fs-2x me-2"></i>Novo laudo</h3>
          <div className="card-toolbar">
            <button type="button" className="btn btn-sm btn-light">
              Retornar
            </button>
          </div>
        </div>
      </div>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          as
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="patient">Selecione o paciente</label>
            <select className='form-control form-control-solid' id="patient" {...register('patient')}>
              <option>oi oi oi</option>
            </select>
          </div>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="patientAbbreviation">Abreviatura do nome do paciente</label>
            <input type="text" className="form-control form-control-solid" id="patientAbbreviation" {...register('patientAbbreviation')} />
          </div>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="ageYears">Anos</label>
            <input className="form-control form-control-solid" type="number" id="ageYears" min="0" {...register('ageYears')} />
          </div>
        </div>
        <div className="row">
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="ageMonths">Meses</label>
            <input className="form-control form-control-solid" type="number" id="ageMonths" min="0" max="11" {...register('ageMonths')} />
          </div>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="ageDays">Dias</label>
            <input className="form-control form-control-solid" type="number" id="ageDays" min="0" max="30" {...register('ageDays')} />
          </div>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="reportDate">Data do laudo</label>
            <input className="form-control form-control-solid" type="date" id="reportDate" {...register('reportDate')} />
          </div>
        </div>
        <div className="row">
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="requesterType">Solicitante da avaliação</label>
            <select className='form-control form-control-solid' id="requesterType" {...register('requesterType')}>
              <option value="person">Pessoa física</option>
              <option value="institution">Instituição</option>
            </select>
          </div>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="requesterName">Nome do solicitante da avaliação</label>
            <input type="text" className="form-control form-control-solid" id="requesterName" {...register('requesterName')} />
          </div>
          <div className="mb-10 col-4">
            <label className='my-3 required' htmlFor="requesterRegistry">Registro do profissional/instituição</label>
            <input type="text" className="form-control form-control-solid" id="requesterRegistry" {...register('requesterRegistry')} />
          </div>
        </div>

        <div className='text-danger mt-2'>
          asd
        </div>
      </div>
    </div>
  )
}

export { Passo1 }
