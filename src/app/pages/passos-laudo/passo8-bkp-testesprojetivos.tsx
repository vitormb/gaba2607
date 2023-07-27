/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { ErrorMessage, Field } from 'formik'
import { ProgressBarra } from '../CadastroPacienteWizard'
import { Link } from 'react-router-dom'

const Passo8: FC = () => {
  const [getmodalID, setModalID] = useState('');
  var alt = 0;
  var index = 1;
  index++;

  interface AccordionElementProps {
    title: string,
    icon: string,
    code: any,
    modalcode: any,
    modalid: string,
    index: number,
  }
  const CardCustom: React.FC<AccordionElementProps> = ({
    title,
    icon,
    code,
    modalid,
    modalcode,
    index
  }) => {
    const titulo = title;
    const icone = icon;
    const codigo = code;
    const modalidtag = modalid;
    const modal = modalcode;
    setModalID(modalidtag);
    const i = index;
    return (
      <div className='holder'>
        <div className="col">
          <div className="card border border-black bg-black bg-opacity-15">
            <div className="card-header border-0 pt-5">
              <div className="card-title m-0 text-center mx-auto d-block">
                <div className="symbol symbol-60px w-60px  ">
                  <i className={icone}></i>
                </div>
              </div>
            </div>
            <div className="card-body py-3 px-7">
              <div className="px-10 fs-3 fw-bold text-dark text-center ">{titulo}</div>
              <p className="text-gray-600 fw-semibold text-center fs-5 mt-2">Selecione as técnicas aplicadas: {i}</p>
              <div className='separator my-10'></div>
              <div className="text-left d-flex align-items-center mb-5 rounded-3 m-auto">{codigo}</div>
              <p className='text-gray-900 text-align-center'>Técnicas selecionadas: x, y , z</p>

              <button type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={'#' + modalidtag}
              >
                Configurar <i className='bi fs-2 bi-check-circle-fill'></i>
              </button>
            </div>
          </div>
        </div>

        <div className="modal fade bg-blur" id={modalidtag}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-2">{titulo}</h5>
                <div
                  className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                </div>
              </div>
              <div className="modal-body">
                {modal}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="button" className="btn btn-primary">
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  return (
    <div className='container'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-lightbulb-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Testes projetivos
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Preencha os resultados dos testes projetivos abaixo.
        </div>
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-2'
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='42%'
        />
      </div>
      <div className='fv-row'>
        <div className='row row-cols-3 justify-content-md-start mt-10'>
          {/** Loop do objeto */}
          <CardCustom
            title='As pirâmides coloridas de Pfister'
            icon='customtriangle bi bi-triangle-fill fs-4x'
            index={1}
            modalid='kt_modal_1'
            code={
              <div className='container'>
                <div className="d-flex flex-column">
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="v1" />
                    <label className="form-check-label" htmlFor="v1">Aspecto formal</label>
                  </div>
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="v2" />
                    <label className="form-check-label" htmlFor="v2">Fórmula Cromática</label>
                  </div>
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="v3" />
                    <label className="form-check-label" htmlFor="v3">Modo de colocação</label>
                  </div>
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="v4" />
                    <label className="form-check-label" htmlFor="v4">Processo de execução</label>
                  </div>
                </div>
              </div>
            }
            modalcode={
              <div className='row row-col-2'>
                <div className='col-6 bg-black bg-opacity-10 p-5'>
                  <h5 className='mb-10 border-bottom border-primary py-3'>Aspecto formal:</h5>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Estrutura assimétrica dinâmica <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      <span className="text-muted"></span> Estrutura em escada <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Estrutura em manto <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Estrutura em mosaico <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Estrutura simétrica <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Formação alternada <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Formação em camadas {index} <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Formação simétrica <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Tapete com início de ordem <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Tapete desequilibrado <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Tapete puro <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Tapetes furados ou rasgados <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                </div>
                <div className='col-6 bg-black bg-opacity-10 p-5'>
                  <h5 className='mb-10 border-bottom border-primary py-3'>Fórmula Cromática:</h5>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula ampla e estável <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula ampla e flexível <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula ampla e instável <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula moderada e estável <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula moderada e flexível <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula moderada e instável <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula restrita e estável <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula restrita e flexível <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Fórmula restrita e instável <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                </div>
                <div className='col bg-black bg-opacity-10 p-5'>
                  <h5 className='mb-10 border-bottom border-primary py-3'>Modo de colocação:</h5>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Ascendente direto <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Ascendente inverso <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Descendente direto <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Descendente inverso <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Diagonal <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Simétrica <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Zigue-zague <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                </div>
                <div className='col-6 bg-black bg-opacity-10 p-5'>
                  <h5 className='mb-10 border-bottom border-primary py-3'>Modo de colocação:</h5>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Execução desordenada <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Execução metódica/sistemática <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Execução ordenada <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Execução relaxada <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                </div>
              </div>
            }
          />
          {/* fim do container */}
          {/** Loop do objeto */}
          <CardCustom
            title='Teste de Personalidade HTP'
            icon='fas fa-tree fs-4x text-success'
            modalid='kt_modal_2'
            index={2}
            code={
              <div className='container'>
                <div className="d-flex flex-column">
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchDefault">Arvore</label>
                  </div>
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchDefault">Casa</label>
                  </div>
                  <div className="align-self-start form-check form-switch form-check-custom form-check-solid mb-4 px-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchDefault">Pessoa</label>
                  </div>
                </div>
              </div>
            }
            modalcode={
              <div>
                <div className='col bg-black bg-opacity-10'>
                  <h5 className='mb-10 border-bottom border-primary py-3'>Aspecto formal:</h5>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      Estrutura assimétrica dinâmica <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                  <div className="mb-5 form-check">
                    <input className="form-check-input" type="checkbox" value="" id={`card-${index}-${alt}`} />
                    <label className="form-check-label text-white" htmlFor={`card-${index}-${alt}`}>
                      <span className="text-muted"></span> Estrutura em escada <span className="text-muted"><br />ID: [{alt++}]</span>
                    </label>
                  </div>
                </div>
              </div>

            }
          />
          {/* fim do container */}
        </div>
      </div>
    </div>

  )
}

export { Passo8 }