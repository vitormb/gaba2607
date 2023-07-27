import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ICreatePaciente, inits, Telefones } from './passos-cadastro-paciente/CadastrarPacienteWizardHelper'
import { isError } from 'react-query';
import { KTIcon, toAbsoluteUrl } from "../../_metronic/helpers";
import { Link } from 'react-router-dom'
import axios, { AxiosError } from 'axios';
import { Form, Formik, Field, FieldArray, ErrorMessage, FormikValues } from 'formik'
import React, { FC, useEffect, useState } from 'react';

const queryClient = new QueryClient();

function Pacientedata({ id }: { id: number }) {
  
  const [telefones, setTelefones] = useState([]);
  const [EditNomeCompleto, setEditNomeCompleto] = useState([]);
  
  const [initValues] = useState<ICreatePaciente>(inits)  
  const [cadastroCallback, setCadastroCallback] = useState('Aguardando...');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skin, setSkin] = useState('loading');
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const [telefoneEdit, setTelefoneEdit] = useState<Telefones>();
  const [telefoneData, setTelefoneData] = useState<Telefones>();

  const definirskin =
  skin === 'loading'
    ? 'bg-primary text-white'
    : skin === 'error'
    ? 'bg-danger text-white'
    : skin === 'sucesso'
    ? 'bg-success text-white'
    : 'Skin inválido';

    const definiralerta =
  skin === 'loading'
    ? 'Alerta'
    : skin === 'error'
    ? 'Erro'
    : skin === 'sucesso'
    ? 'Sucesso!'
    : 'Erro desconhecido';

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer OA.4v9WiIl_t_T1HMADKzbnvzlqz8UfiRiyZY3JnS6mg48VxW7cDnoKuNbYf_4z',
      '_token': 'OA.4v9WiIl_t_T1HMADKzbnvzlqz8UfiRiyZY3JnS6mg48VxW7cDnoKuNbYf_4z'
    }
  };

  const { isLoading, error, data, isFetching } = useQuery(["repoData", id], () =>
  axios
    .get(`http://127.0.0.1:3333/pacientes/${id}`, config)
    .then((res) => {
      const responseData = res.data;
      // Renomear o campo 'nome_completo' para 'nomeCompleto'
      const transformedData = {
        ...responseData,
        nomeCompleto: responseData.nome_completo,
        cidadeNascimento: responseData.cidade_nascimento,
        paisNascimento: responseData.pais_nascimento,
        estadoNascimento: responseData.estado_nascimento,
      };

      console.log(transformedData); // Exemplo de console.log com os dados transformados
      console.log(transformedData.nomeCompleto); // Exemplo de console.log com os dados transformados

      setTelefoneData(responseData.telefones);
      setTelefones(responseData.telefones);

      return transformedData;
    })
);
  const postData = async (data: ICreatePaciente) => {

    try {
      setCadastroCallback('Validando edição...');
      setSkin('loading');
      setIsSubmitting(true);
      const dataToSend = {
        ...data,
        nome_completo: EditNomeCompleto
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer OA.4v9WiIl_t_T1HMADKzbnvzlqz8UfiRiyZY3JnS6mg48VxW7cDnoKuNbYf_4z',
          '_token': 'OA.4v9WiIl_t_T1HMADKzbnvzlqz8UfiRiyZY3JnS6mg48VxW7cDnoKuNbYf_4z'
        }        
      };
      const response = await axios.put(`http://127.0.0.1:3333/pacientes/${id}`, data, config);
      setEditNomeCompleto(response.data.nome_completo);
      console.log(response.data); // Handle the successful response as needed 
      console.log(response.data.nome_completo);      
      console.log(telefoneData);  
      console.log(JSON.stringify(response.data))
      setCadastroCallback('Alteração realizada com sucesso! Recarregando...');
      setSkin('sucesso');
      setTimeout(() => {
        setCadastroCallback('Redirecionando...');        
        window.location.reload();
      }, 2000);      
      // Update the state or perform any other action
      // ...

    } catch (error) {
      if ((error as AxiosError).response) {
        // The request was made and the server responded with a status code
        setIsModalOpen(true);
        setIsSubmitting(false);
        const axiosError = error as AxiosError;
        setCadastroCallback(`<h4>Erro ao editar paciente:</h4><span class="text-danger">${axiosError.response?.data.errors[0].message}</span>`);
        setSkin('error');
        console.error('Error in postData:', axiosError.response?.data);
        console.error('Status code:', axiosError.response?.status);
        console.error('Response headers:', axiosError.response?.headers);

      } else if ((error as AxiosError).request) {
        // The request was made but no response was received
        console.error('Houve um problema em sua conexão com o servidor.', (error as AxiosError).request);
        setSkin('error');
        setCadastroCallback('Houve um problema em sua conexão com o servidor. Caso o erro persista, entre em contato com nosso suporte.');
      } else {
        // Something happened in setting up the request that triggered an error
        const genericError = error as Error;
        setSkin('error');
        console.error('Error during request setup:', genericError.message);
      }
      throw error;
    }
  }

  const formatarTelefone = (telefone: string): string => {
    return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7)}`;
  };

  if (isLoading) return <div>Carregando...</div>;
  if (isError(error)) return <div>Um erro ocorreu: {error.message}</div>;

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className="card-header bg-primary">
        <h3 className="card-title text-white fs-2x bg-primary">Informações do paciente</h3>
        <div className="card-toolbar">
          <Link
            to='/Listagem-Pacientes'
            className='btn btn-sm btn-light fs-6 fs-lg-4 mb-1'>
            Retornar
          </Link>
        </div>
      </div>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-lg-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='Metronic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2 col-sm'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    <h1>{data.nomeCompleto}</h1>
                  </a>
                  <div className="bi fs-1 bi-gender-male background-color-active"></div>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    ID: {data.id}
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='geolocation' className='fs-4 me-1' />
                    Endereço: {data.enderecos[0]?.cidade}, {data.enderecos[0]?.bairro}, {data.enderecos[0]?.estado}
                  </a>
                  <a
                    href={`mailto:${data.email}`}
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1' />
                    E-mail: {data.email}
                  </a>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>

                  <div className='border border-gray-300 border bg-opacity-70 rounded py-3 px-6 me-6 mb-3 text-inverse-dark bg-dark'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='note-2' className='fs-1 me-2' />
                      <div className='fs-2 fw-bolder'>1</div>
                    </div>
                    <div className='fw-bold fs-6'>Laudos prontos</div>
                  </div>

                  <div className='border border-gray-300 border bg-opacity-70 rounded py-3 px-6 me-6 mb-3 text-inverse-dark bg-dark'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='note-2' className='fs-1 me-2' />
                      <div className='fs-2 fw-bolder'>1</div>
                    </div>
                    <div className='fw-bold fs-6'>Laudo pendente</div>
                  </div>

                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header col-sm">
          <div className="card-title m-0">
            <KTIcon iconName='profile-circle' className='fs-1 text-primary me-2 ' /><h3 className="fw-bolder m-0">Dados do paciente</h3>
          </div>          
        </div>
        <div className="card-body row align-items-start p-8">
          <Formik
            initialValues={data}
            onSubmit={postData}
          >
            {({ values, handleBlur, errors, touched, handleChange }) => (                            
              <Form>
                <div className="col-12 row">
                  <div className="modal fade" id="kt_modal_sucesso" tabIndex={-1} aria-labelledby="kt_modal_sucesso" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className={`modal-header ${definirskin}`}>
                            <h5 className="modal-title" id="kt_modal_sucesso">{definiralerta}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          <div dangerouslySetInnerHTML={{__html: cadastroCallback}}></div>
                          </div>
                          <div className="modal-footer">              
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className={`btn text-white ${definirskin}`}>Ok</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-6 mb-7">
                    {
                    /* Debug
                    JSON.stringify(values)
                    */}                    
                    <label className="fw-bold required">Nome completo:</label>
                    <Field
                      type="text"
                      name="nomeCompleto"
                      placeholder={values.nomeCompleto}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.nomeCompleto && values.nomeCompleto !== '' ? 'is-valid form-control form-control-lg form-control-solid required' : 'is-invalid form-control form-control-lg form-control-solid required'}
                    />                                  
                    <ErrorMessage name="nomeCompleto" />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold required">E-mail:</label>
                    <Field
                      type="text"
                      placeholder={data.email}
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                      className={touched.email && errors.email !== '' ? 'is-valid form-control form-control-lg form-control-solid required' : 'is-invalid form-control form-control-lg form-control-solid required'}
                      required
                    />
                  </div>
                  
                  <div className="col-6 mb-7">
                    <label className="fw-bold required">Data de nascimento:</label>
                    <Field
                      name='data_nascimento'
                      type='date'
                      placeholder='dd/mm/aaaa'
                      className='form-control form-control-lg form-control-solid'
                      required
                    />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold required">Gênero</label>
                    <Field name="genero" as="select" className="form-select form-select-lg form-select-solid required">
                      <option>Cadastrado como: {data.genero}</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                      required
                    </Field>

                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold required">Lateralidade: </label>
                    <Field 
                    name="lateralidade" 
                    as='select'
                    id="lateralidade"
                    className="form-select form-select-lg form-select-solid required">
                      <option value=''>{data.lateralidade}</option>
                      <option value="ambidestro">Ambidestro</option>
                      <option value="canhoto">Canhoto</option>
                      <option value="destro">Destro</option>
                    </Field>
                    <ErrorMessage name='lateralidade' component="div" className="text-danger" />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Escolaridade</label>
                    <Field
                      type="text"
                      placeholder={data.escolaridade}
                      name="escolaridade"
                      className="form-control form-control-lg form-control-solid required"
                    />                    
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Segmento:</label>
                    <Field
                      type="text"
                      placeholder={data.segmento}
                      name="segmento"
                      className="form-control form-control-lg form-control-solid required"
                    />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Profissão: </label>
                    <Field
                      type="text"
                      placeholder={data.profissao}
                      name="profissao"
                      className="form-control form-control-lg form-control-solid required"
                    />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Ocupação: </label>
                    <Field
                      type="text"
                      placeholder={data.ocupacao}
                      name="ocupacao"
                      className="form-control form-control-lg form-control-solid required"
                    />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Organização: </label>
                    <Field
                      placeholder='Escola / Instituição'
                      className='form-control form-control-lg form-control-solid'
                      name='organizacao'
                    />
                  </div>
                  
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Cidade de Nascimento:</label>
                    <Field
                      type="text"
                      placeholder={data.cidadeNascimento}
                      name="cidadeNascimento"
                      className="form-control form-control-lg form-control-solid required"
                    />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">Estado de Nascimento:</label>
                    <Field
                      type="text"
                      placeholder={data.estadoNascimento}
                      name="estadoNascimento"
                      className="form-control form-control-lg form-control-solid required"
                    />
                  </div>
                  <div className="col-6 mb-7">
                    <label className="fw-bold">País De Nascimento:</label>
                    <Field
                      type="text"
                      placeholder={data.paisNascimento}
                      name="paisNascimento"
                      className="form-control form-control-lg form-control-solid required"
                    />
                  </div>
                </div>
                {/** Começo do FieldArray de CONTATO */}
                <div className="separator my-10"></div>
                <div className="row col-12">
                  <h2 className="mb-10">Telefone para contato:</h2>
                  <FieldArray
                    name="telefones"
                    render={swap => (
                      <div className="row">
                        {values.telefones && values.telefones.length > 0 ? (
                          values.telefones.map((telefone, index) => (
                            <div className="col-12 row" key={index}>
                              <div className="col-10">
                              <label className="fw-bold text-muted">Telefone: </label>
                                <Field
                                  name={`telefones[${index}].telefone`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite o telefone'
                                />
                              </div>
                              {/* Rever a função de checked do input */}
                              <div className="col-2 align-middle">
                                <div className="form-check form-switch form-check-custom form-check-solid justify-content-between">
                                  <label htmlFor={`iswpp-${index}`} className="form-check-label">
                                    Este telefone é whatsapp?<br />                                    
                                  </label>
                                  <Field
                                    id={`iswpp-${index}`}
                                    placeholder="É whatsapp?"
                                    type="checkbox"
                                    className="form-check-input"
                                    name={`telefones.${index}.isWhatsapp`}
                                    onChange={handleChange}                            
                                  />
                                </div>
                              </div>
                              <div className="d-grid gap-2 d-md-block">
                                <button className="my-5 btn btn-danger btn-sm" type="button" onClick={() => swap.remove(index)}>
                                    Remover telefone
                                  </button>
                              </div>
                            </div>)))
                          : (
                            <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="my-5 btn btn-success btn-sm"
                              onClick={() => swap.push({ telefone: '', isWhatsapp: '' })}
                            > Adicionar telefone principal </button>
                            </div>
                          )}
                        <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="my-5 btn btn-success btn-sm"
                          onClick={() => swap.push({ telefone: '', isWhatsapp: '' })}
                        > Adicionar novo número </button>
                        </div>
                      </div>
                    )}
                  />
                  </div>                  
                  {/** Fim do FieldArray CONTATO */}

                {/** Começo do FieldArray de ENDEREÇOS */}
                <div className="separator my-10"></div>
                <div className="row col-12">
                  <h2 className="mb-10">Endereços:</h2>
                  <FieldArray
                    name="enderecos"
                    render={swap => (
                      <div className="row">
                        {values.enderecos && values.enderecos.length > 0 ? (
                          values.enderecos.map((endereco, index) => (
                            <div className="col-12 row" key={index}>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">CEP: </label>
                                <Field
                                  name={`enderecos[${index}].cep`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite o CEP'
                                  required
                                />
                                <ErrorMessage name={`enderecos[${index}].cep`}/>
                              </div>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Endereço: </label>
                                <Field
                                  name={`enderecos[${index}].endereco`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite o endereço'
                                  required
                                />
                                <ErrorMessage name={`enderecos[${index}].endereco`}/>
                              </div>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Complemento: </label>
                                <Field
                                  name={`enderecos[${index}].complemento`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite a complemento'
                                />
                              </div>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Bairro: </label>
                                <Field
                                  name={`enderecos[${index}].bairro`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite o bairro'
                                />
                              </div>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Cidade: </label>
                                <Field
                                  name={`enderecos[${index}].cidade`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite a cidade'
                                />
                              </div>                                                            
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Estado: </label>
                                <Field
                                  name={`enderecos[${index}].estado`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite o estado'
                                />
                              </div>
                              
                              <div className="d-grid gap-2 d-md-block">
                                <button className="my-5 btn btn-danger btn-sm" type="button" onClick={() => swap.remove(index)}>
                                    Remover endereço
                                  </button>
                              </div>
                            </div>)))
                          : (
                            <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="my-5 btn btn-success btn-sm"
                              onClick={() => swap.push({ cep:'', cidade:'', estado:'', endereco:'', bairro:'', complemento:'' })}
                            > Adicionar endereço </button>
                            </div>
                          )}
                        <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="my-5 btn btn-success btn-sm"
                          onClick={() => swap.push({ cep:'', cidade:'', estado:'', endereco:'', bairro:'', complemento:'' })}
                        > Adicionar novo endereço </button>
                        </div>
                        <ErrorMessage name='enderecos' component="div" className="text-danger" />
                      </div>
                    )}
                  />
                  </div>
                  {/** Fim do FieldArray ENDERECOS */}

                  {/** Começo do FieldArray de RESPONSÁVEIS */}
                <div className="separator my-10"></div>
                <div className="row col-12">
                  <h2 className="mb-10">Responsável legal:</h2>
                  <FieldArray
                    name="responsaveis"
                    render={swap => (
                      <div className="row">
                        {values.responsaveis && values.responsaveis.length > 0 ? (
                          values.responsaveis.map((responsavel, index) => (
                            <div className="col-12 row" key={index}>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Nome do responsável legal:</label>
                                <Field
                                  name={`responsaveis[${index}].nome`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Nome do responsável legal'
                                />
                              </div>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Gênero: </label>
                                <Field
                                  name={`responsaveis[${index}].genero`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Gênero'
                                />
                              </div>
                              <div className="col-10 mb-7">
                              <label className="fw-bold text-muted">Telefone: </label>
                                <Field
                                  name={`responsaveis[${index}].telefone`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Digite o telefone do responsável'
                                />
                              </div>                              
                              <div className="col-2 align-middle">
                                <div className="form-check form-switch form-check-custom form-check-solid justify-content-between">
                                  <label htmlFor={`iswppresp-${index}`} className="form-check-label">
                                    Este telefone é whatsapp?                                    
                                  </label>
                                  <Field
                                    id={`iswppresp-${index}`}
                                    placeholder="É whatsapp?"
                                    type="checkbox"
                                    className="form-check-input"
                                    name={`responsaveis[${index}].is_whatsapp`}     
                                  />
                                </div>
                              </div>
                              <div className="col-6 mb-7">
                              <label className="fw-bold text-muted">Observação: </label>
                                <Field
                                  name={`responsaveis[${index}].observacao`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className='form-control form-control-lg form-control-solid'
                                  placeholder='Observação'
                                />
                              </div>

                              <div className="d-grid gap-2 d-md-block">
                                <button className="my-5 btn btn-danger btn-sm" type="button" onClick={() => swap.remove(index)}>
                                    Remover responsável legal
                                  </button>
                              </div>
                            </div>)))
                          : (
                            <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="my-5 btn btn-success btn-sm"
                              onClick={() => swap.push({ cep:'', cidade:'', estado:'', endereco:'', bairro:'', complemento:'' })}
                            > Adicionar responsável principal </button>
                            </div>
                          )}
                        <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="my-5 btn btn-success btn-sm"
                          onClick={() => swap.push({ cep:'', cidade:'', estado:'', endereco:'', bairro:'', complemento:'' })}
                        > Adicionar responsável legal </button>
                        </div>
                      </div>
                    )}
                  />
                  </div>
                  <div className="separator my-10"></div>
                  {/** Fim do FieldArray RESPONSAVEIS */}
                  <button
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_sucesso"
                  className="btn btn-primary" 
                  type="submit">Salvar atualização
                  </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export function EditarPaciente({ id }: { id: number }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Pacientedata id={id} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}