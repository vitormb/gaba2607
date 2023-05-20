import { FC } from 'react';
/*
import { KTIcon, KTSVG } from '../../../_metronic/helpers'; 
*/
import { ErrorMessage, Field, FieldArray, FormikProps } from 'formik';
import { Responsaveis } from './CadastrarPacienteWizardHelper';
import {ProgressBarra} from './../CadastroPacienteWizard'

interface Passo4Props extends FormikProps<any> { }
const tituloMain = 'Responsável'; 
const Passo4: FC<Passo4Props> = ({ values, errors, touched, isSubmitting, setFieldValue }) => {  
  return (
    <div className='container'>        
        <div className='mt-5 col-12 mb-5'>          
          <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-chat-left-heart-fill ms-2 fs-4x me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Cadastrar novo Paciente'
            ></i>
            Responsáveis legais       
          </h2>
          <div className='text-gray-400 fw-bold fs-6'>
            Preencha os dados do responsável legal. Esta sessão não é obrigatória.
          </div>
        </div>
        <div className='progresso col-12'>
        <ProgressBarra
              className='card-xl-stretch mb-xl-8 '
              color='primary'
              title='Progresso'
              description='Progresso do cadastro'
              progress='75%'
            />
        </div>

        <div className='fv-row'>
        <FieldArray name="responsaveis">
          {({ insert, remove, push }) => (
            <div className='col-lg-12 mt-10'>
              {values.responsaveis.length > 0 &&
                values.responsaveis.map((responsaveis: Responsaveis, index: number) => (
                  <div className='row' key={index}>
                    {index !== 0 && (
                      <div className='col-12'><div className="separator separator-content my-15">Adicionar {tituloMain}: {index}</div></div>
                    )}
                    <div className="col-lg-6 mt-10">
                      <label className="form-label">
                      {index === 0
                          ? 'Nome do ' + tituloMain + ' principal:'
                          : 'Nome do ' + tituloMain + ' adicional: (' + index + ')'}
                      </label>
                      <Field
                        placeholder="Responsável principal"
                        className="form-control mt-2 col-12 form-control-lg form-control-solid"
                        name={`responsaveis.${index}.nome`}
                      />                      
                    </div>
                    <div className="col-lg-6 mt-10">                      
                      <label className="form-label">
                      {index === 0
                          ? 'Gênero do ' + tituloMain + ' principal:'
                          : 'Gênero do ' + tituloMain + ' adicional: (' + index + ')'}
                      </label>                       
                      <Field
                        placeholder="Gênero do responsável legal"
                        as="select"
                        className="form-select mt-2 col-12 form-select-lg form-select-solid"
                        name={`responsaveis.${index}.genero`}
                      >
                        <option>Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                      </Field>
                      {/* msg error
                      <ErrorMessage
                        className="text-danger"
                        name={`responsaveis.${index}.genero`}
                        component="div"
                        render={(msg) => (
                          <div className="text-danger">
                            {`Por favor, ${msg}`}
                          </div>
                        )}                        
                      />
                       */}
                    </div>

                    <div className="col-lg-6 mt-10">
                      <label className="form-label">
                      {index === 0
                          ? 'Telefone do ' + tituloMain + ' principal:'
                          : 'Telefone do ' + tituloMain + ' adicional: (' + index + ')'
                      }
                      </label>
                      <Field
                        placeholder="(99)99999-9999"
                        maxLength="13"
                        className="form-control mt-2 col-12 form-control-lg form-control-solid"
                        name={`responsaveis.${index}.telefone`}
                      />

                      {/* msg error<ErrorMessage name={`responsaveis.${index}.telefone`} component="div" className="text-danger" /> */}

                      <div className="mt-5 form-check form-switch form-check-custom form-check-solid justify-content-between">
                        <label className="form-check-label">
                          Este telefone é whatsapp?<br /> {responsaveis.isWhatsapp === false ? "Não" : "Sim"}
                        </label>
                        <Field
                          placeholder="É whatsapp?"
                          type="checkbox"
                          className="form-check-input"
                          name={`responsaveis.${index}.isWhatsapp`}
                        />
                        <ErrorMessage name={`responsaveis.${index}.isWhatsapp`} component="div" className="text-danger" />
                      </div>
                    </div>

                    <div className="col-lg-6  mt-10">
                      <label className="form-label">
                      {index === 0
                          ? 'Observação do ' + tituloMain + ' principal:'
                          : 'Observação do ' + tituloMain + ' adicional: (' + index + ')'
                      }
                        </label>
                      <Field
                        placeholder="Digite sua observação aqui..."
                        component="textarea"
                        maxLength="245"
                        data-kt-autosize="true"
                        className="form-control mt-2 col-12 form-control-lg form-control-solid"
                        name={`responsaveis.${index}.observacao`}
                      />
                      <ErrorMessage name={`responsaveis.${index}.observacao`} component="div" className="text-danger" />
                    </div>
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
                                  ? ' '+tituloMain + ' principal:'
                                  : ' '+tituloMain + ' adicional: (' + index + ')'
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
                    {index !== 0 && (
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={`#kt_modal_${index}`}
                        className="btn btn-danger btn-sm mt-5 mb-5"
                      >
                        <i className="bi bi-x-octagon-fill fs-4 me-2"></i>{' '}
                        {index === 0
                          ? 'Excluir ' + tituloMain + ' principal:'
                          : 'Excluir ' + tituloMain + ' adicional: (' + index + ')'
                        }
                      </button>
                    )}
                    

                  </div>
                ))}
              <button
                type="button"
                className="btn btn-success btn-sm mt-5"
                onClick={() => push({
                  nome: '',
                  genero: '',
                  telefone: '',
                  isWhatsapp: '',
                  observacao: ''
                })}
              >
                <i className="bi bi-house-add-fill fs-4 me-2"></i>Adicionar novo {tituloMain}
              </button>
            </div>
          )}
        </FieldArray>
      </div>

    </div>
  )
}

export { Passo4 }
