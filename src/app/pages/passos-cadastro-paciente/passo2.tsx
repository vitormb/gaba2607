import React, { FC, useState } from 'react';
/*
import { KTIcon } from '../../../_metronic/helpers';
*/
import { ErrorMessage, Field, FieldArray, FormikProps } from 'formik';
import { Endereco } from './CadastrarPacienteWizardHelper';
import {ProgressBarra} from './../CadastroPacienteWizard'
import axios from 'axios';

interface Passo2Props extends FormikProps<any> { }

const Passo2: FC<Passo2Props> = ({ values, setFieldValue }) => {
  const [loading, setLoading] = useState(false); // estado para indicar quando a requisição está em andamento  
  if (loading) {}
  const [endereco, setEndereco] = useState({}); // estado para armazenar as informações do endereço retornado pelo webservice
  const buscarEndereco = async (cep: string, index: number, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setEndereco(response.data);
      setFieldValue(`enderecos.${index}.cidade`, response.data.localidade);
      setFieldValue(`enderecos.${index}.bairro`, response.data.bairro);
      setFieldValue(`enderecos.${index}.estado`, response.data.uf);
      setFieldValue(`enderecos.${index}.endereco`, response.data.logradouro);
      
    } catch (error) {
      console.error(error); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>        
        <div className='mt-5 col-12 mb-5'>          
          <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-house-add-fill ms-2 fs-4x me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Cadastrar novo Paciente'
            ></i>
            Endereço       
          </h2>

          <div className='text-gray-400 fw-bold fs-6'>
            Basta preencher o <b>CEP</b> para atualizar todos os dados (exceto o complemento).
          </div>
        </div>
        <div className='progresso col-12'>
          <ProgressBarra
            className='card-xl-stretch mb-2'
            color='primary'
            title='Progresso'
            description='Progresso do cadastro'
            progress='25%'
          />
        </div>

        <div className='fv-row'>
        <div className='row'>          
          <div>
            <FieldArray name="enderecos">
              {({ insert, remove, push }) => (
                <div>                  
                  {values.enderecos.length > 0 &&
                    values.enderecos.map((enderecos: Endereco, index: number) => (
                      <div key={index}>
                        <div className="row">
                        {index !== 0 && (
                            <div className='col-12'><div className="separator separator-content my-15">Adicionar endereço: {(index)}</div></div>
                          )}
                          <div className="col-lg-6 mt-10">
                            <label className="form-label required">{index === 0 ? 'CEP' : 'CEP adicional: (' + (index) + ')'}</label>
                            <Field
                              placeholder="CEP"
                              maxLength={8}
                              className="form-control form-control-lg form-control-solid required"
                              name={`enderecos.${index}.cep`}
                              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                const cep = e.target.value.replace(/\D/g, '');
                                buscarEndereco(cep, index, setFieldValue);
                              }}
                              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                const input = e.currentTarget;
                                if (input.value.length === 8) {
                                  const nextInput = input.parentElement?.nextElementSibling?.querySelector('input');
                                  if (nextInput) {
                                    nextInput.focus();
                                  }
                                }
                              }}
                            />
                            <ErrorMessage name={`enderecos.${index}.cep`} component="div" className="text-danger" />
                          </div>
                          <div className="col-lg-6 mt-10">
                            <label className="form-label required">{index === 0 ? 'Cidade principal' : 'Cidade adicional: (' + (index) + ')'}</label>
                            <Field
                              disabled
                              placeholder="Cidade"
                              className="form-control form-control-lg form-control-solid required"
                              name={`enderecos.${index}.cidade`}
                              value={endereco && enderecos.cidade} // adiciona o valor da cidade do estado "endereco" no campo de cidade
                            />
                            <ErrorMessage name={`enderecos.${index}.cidade`} component="div" className="text-danger" />
                          </div>
                          <div className="col-lg-6 mt-10">
                            <label className="form-label required">{index === 0 ? 'Estado principal' : 'Estado adicional: (' + (index) + ')'}</label>
                            <Field
                              disabled
                              className="form-control form-control-lg form-control-solid required muted"
                              name={`enderecos.${index}.estado`}
                              value={endereco && enderecos.estado} // adiciona o valor da cidade do estado "endereco" no campo de cidade
                              component="select">
                              <option value="">Selecione um estado</option>
                              <option value="AC">Acre</option>
                              <option value="AL">Alagoas</option>
                              <option value="AP">Amapá</option>
                              <option value="AM">Amazonas</option>
                              <option value="BA">Bahia</option>
                              <option value="CE">Ceará</option>
                              <option value="DF">Distrito Federal</option>
                              <option value="ES">Espírito Santo</option>
                              <option value="GO">Goiás</option>
                              <option value="MA">Maranhão</option>
                              <option value="MT">Mato Grosso</option>
                              <option value="MS">Mato Grosso do Sul</option>
                              <option value="MG">Minas Gerais</option>
                              <option value="PA">Pará</option>
                              <option value="PB">Paraíba</option>
                              <option value="PR">Paraná</option>
                              <option value="PE">Pernambuco</option>
                              <option value="PI">Piauí</option>
                              <option value="RJ">Rio de Janeiro</option>
                              <option value="RN">Rio Grande do Norte</option>
                              <option value="RS">Rio Grande do Sul</option>
                              <option value="RO">Rondônia</option>
                              <option value="RR">Roraima</option>
                              <option value="SC">Santa Catarina</option>
                              <option value="SP">São Paulo</option>
                              <option value="SE">Sergipe</option>
                              <option value="TO">Tocantins</option>
                            </Field>
                            <ErrorMessage name={`enderecos.${index}.estado`} component="div" className="text-danger" />
                          </div>
                          <div className="col-lg-6 mt-10">
                            <label className="form-label required">{index === 0 ? 'Endereço principal' : 'Endereço adicional: (' + (index) + ')'}</label>
                            <Field
                              disabled
                              placeholder="Endereço"
                              className="form-control form-control-lg form-control-solid required"
                              name={`enderecos.${index}.endereco`}
                            />
                            <ErrorMessage name={`enderecos.${index}.endereco`} component="div" className="text-danger" />
                          </div>
                          <div className="col-lg-6 mt-10">
                            <label className="form-label required">{index === 0 ? 'Bairro principal' : 'Bairro adicional: (' + (index) + ')'}</label>
                            <Field
                              disabled
                              placeholder="Bairro"
                              className="form-control form-control-lg form-control-solid required"
                              name={`enderecos.${index}.bairro`}
                            />
                            <ErrorMessage name={`enderecos.${index}.bairro`} component="div" className="text-danger" />
                          </div>
                          <div className="col-lg-6 mt-10">
                            <label className="form-label required">{index === 0 ? 'Complemento principal' : 'Complemento adicional: (' + (index) + ')'}</label>
                            <Field
                              placeholder="Complemento"
                              className="form-control form-control-lg form-control-solid required"
                              name={`enderecos.${index}.complemento`}                              
                            />
                            <ErrorMessage name={`enderecos.${index}.complemento`} component="div" className="text-danger" />
                          </div>
                        </div>

                        {index !== 0 && (
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={`#kt_modal_${index}`}
                        className="btn btn-danger btn-sm mt-5 mb-5"
                      >
                        <i className="bi bi-x-octagon-fill fs-4 me-2"></i> Excluir{' '}
                        {index === 0 ? 'Endereço Principal' : 'Endereço: (' + index + ')'}
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
                                    <h5 className="fw-bolder fs-1 mb-5">Tem certeza que deseja apagar o {index === 0 ? 'Endereço Principal' : 'Endereço: (' + (index) + ')'}?</h5>
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
                    onClick={() => push({ cep: '', cidade: '', estado: '', endereco: '', bairro: '', complemento: '' })}
                  >
                    <i className="bi bi-house-add-fill fs-4 me-2"></i>Adicionar novo endereço 
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

export { Passo2 }