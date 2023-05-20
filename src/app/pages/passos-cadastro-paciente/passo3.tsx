import { FC } from 'react';
/*
import { KTIcon } from '../../../_metronic/helpers';
*/
import { ErrorMessage, Field, FieldArray, FormikProps } from 'formik';
import { Telefones } from './CadastrarPacienteWizardHelper';
import { ProgressBarra } from './../CadastroPacienteWizard';



interface Passo3Props extends FormikProps<any> { }
const Passo3: FC<Passo3Props> = ({ values }) => {
  const tituloMain = 'Telefone';
  
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='mt-5 col-12 mb-5'>
          <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
            <i className='bi bi-telephone-plus-fill ms-2 fs-4x me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Cadastrar novo Paciente'
            ></i>
            Contato
          </h2>
          <div className='text-gray-400 fw-bold fs-6'>
            Preencha as informações de contato do paciente. 
          </div>
        </div>
        <div className='progresso col-12'>
          <ProgressBarra
            className='card-xl-stretch mb-xl-8'
            color='primary'
            title='Progresso'
            description='Progresso do cadastro'
            progress='45%'
          />
        </div>

        <div className='container'>
        <div className='row align-items-start'>
          <div className="col-lg-6 mt-10">
            <label className="form-label required">E-mail do paciente:</label>
            <Field
              placeholder='email@email.com.br'
              className='form-control form-control-lg form-control-solid'
              name='email'
            />
            <ErrorMessage name='email' component='div' className='text-danger' />
          </div>
            <FieldArray name="telefones">
              {({ insert, remove, push }) => (
                <div className='col-lg-6 mt-10'>
                  {values.telefones.length > 0 &&
                    values.telefones.map((telefones: Telefones, index: number) => (
                      <div key={index}>
                        {index !== 0 && (
                          <div className='col-12'><div className="separator separator-content my-15">{tituloMain} Adicional: {(index)}</div></div>
                        )}
                        <label className="form-label required">
                          {index === 0
                            ? tituloMain + ' principal:'
                            : tituloMain + ' adicional: (' + index + ')'
                          }
                        </label>
                        <Field
                          placeholder="(xx)xxxxx-xxxx"
                          maxLength={12}
                          className="form-control col-12 form-control-lg form-control-solid required"
                          name={`telefones.${index}.telefone`}
                        />
                        <ErrorMessage name={`telefones.${index}.telefone`} component="div" className="text-danger" />
                        <div className="mt-5 form-check form-switch form-check-custom form-check-solid justify-content-between">
                          <label className="form-check-label">
                            Este telefone é whatsapp?<br /> {telefones.isWhatsapp === false ? "Não" : "Sim"}
                          </label>
                          <Field
                            placeholder="É whatsapp?"
                            type="checkbox"
                            className="form-check-input"
                            name={`telefones.${index}.isWhatsapp`}
                          />
                          <ErrorMessage name={`telefones.${index}.isWhatsapp`} component="div" className="text-danger" />
                        </div>
                        {index !== 0 && (
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target={`#kt_modal_${index}`}
                            className="btn btn-danger btn-sm mt-5 mb-5"
                          >
                            <i className="bi bi-x-octagon-fill fs-4 me-2"></i> Excluir {index === 0
                              ? tituloMain + ' principal:'
                              : tituloMain + ' adicional: (' + index + ')'
                            }
                          </button>
                        )}
                        {/* Modal exclusão */}
                        <div className="modal fade" tabIndex={-1} id={`kt_modal_${index}`}>
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body">
                                <div className="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
                                  <i className="ki-duotone ki-question fs-5x text-danger">
                                    <i className="path1"></i>
                                    <i className="path2"></i>
                                    <i className="path3"></i>
                                  </i>
                                  <div className="text-center">
                                    <h5 className="fw-bolder fs-1 mb-5">Tem certeza que deseja apagar o
                                      {index === 0
                                        ? ' ' + tituloMain + ' principal:'
                                        : ' ' + tituloMain + ' adicional: (' + index + ')'
                                      }?</h5>
                                    <div className="separator separator-dashed border-danger opacity-25 mb-5"></div>
                                    <div className="mb-9">
                                      Ao apagar este elemento, os dados contidos nele <strong>serão deletados.</strong><br />
                                    </div>
                                    <div className="d-flex flex-center flex-wrap">
                                      <button data-bs-dismiss="modal" aria-label="Cancelar" className="btn btn-outline btn-outline-danger btn-active-danger m-2">Cancelar</button>
                                      <button onClick={() => remove(index)} data-bs-dismiss="modal" aria-label="Apagar" className="btn btn-danger m-2">Ok, apagar</button>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Fim do Modal exclusão */}
                      </div>
                    ))}
                  <button
                    type="button"
                    className="btn btn-success btn-sm mt-5"
                    onClick={() => push({
                      telefone: '',
                      isWhatsapp: false
                    })}
                  >
                    <i className='bi bi-telephone-plus-fill ms-2 fs-4 me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Cadastrar novo Paciente'
            ></i>Adicionar novo {tituloMain}
                  </button>
                </div>
              )}
            </FieldArray>
          </div>
        </div>
      </div>
    </div>    
  )
}

export { Passo3 }
