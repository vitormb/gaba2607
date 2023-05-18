import { useForm } from 'react-hook-form';

export function CadastroDeLaudo() {
  const {
    register,
    handleSubmit
  } = useForm();

  return (

    <div className="card shadow-sm">
      <div className="card-header bg-primary">
        <h3 className="card-title text-white fs-2x bg-primary"><i className="bi bi-person-fill-add text-white fs-2x me-2"></i>Novo laudo</h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-light">
            Retornar
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className=''>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            
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
            <div className="row">
              <div className="form-group col-md-12">
                <label className='my-3 required' htmlFor="procedures">Marque os procedimentos que você executou</label>
                <div className="mb-10 d-flex">
                  <div className="form-check form-check-custom form-check-solid me-10">
                    <input className="form-check-input h-30px w-30px" type="checkbox" value="" id="flexCheckbox30" />
                    <label className="form-check-label">
                      40px
                    </label>
                  </div>
                </div>
                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                  <button className='btn btn-primary' type="submit">Cadastrar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>

  );
}