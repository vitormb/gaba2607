import {FC} from 'react'
import { useForm } from 'react-hook-form';

const Passo2: FC = () => {  
  const {
    register,
  } = useForm();
  return (
    <div className='row'>
      <div className='w-100'>
        <div className='pb-10 pb-lg-15'>
          <h2 className='fw-bolder text-dark'>Account Info</h2>

          <div className='text-gray-400 fw-bold fs-6'>
            If you need more info, please check out
            <a href='/dashboard' className='link-primary fw-bolder'>
              {' '}
              Help Page
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-10 col-4">
          <label className='my-3 required' htmlFor="evaluationPurpose">Finalidade da avaliação</label>
          <input type="text" className="form-control form-control-solid" id="evaluationPurpose" {...register('evaluationPurpose')} />
        </div>
        <div className="mb-10 col-4">
          <label className='my-3 required' htmlFor="introText">Texto de introdução</label>
          <input type="text" className="form-control form-control-solid" id="introText" {...register('introText')} />
        </div>
        <div className="mb-10 col-4">
          <label className='my-3 required' htmlFor="evaluationJustification">Justificativa desta avaliação neuropsicológica</label>
          <input type="text" className="form-control form-control-solid" id="evaluationJustification" {...register('evaluationJustification')} />
        </div>
      </div>
      <div className="row">
        <div className="mb-10 col-4">
          <label className='my-3 required' htmlFor="numSessions">Sessões realizadas</label>
          <input className="form-control form-control-solid" type="number" id="numSessions" min="0" {...register('numSessions')} />
        </div>
        <div className="mb-10 col-4">
          <label className='my-3 required' htmlFor="sessionTypes">Tipos de sessões</label>
          <input type="text" className="form-control form-control-solid" id="sessionTypes" {...register('sessionTypes')} />
        </div>
        <div className="mb-10 col-4">
          <label className='my-3 required' htmlFor="sessionDuration">Duração das Sessões (minutos)</label>
          <input className="form-control form-control-solid" type="number" id="sessionDuration" min="0" {...register('sessionDuration')} />
        </div>
      </div>
    </div>
  )
}

export { Passo2 }
