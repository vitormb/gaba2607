import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { isError } from 'react-query';
import { KTIcon, toAbsoluteUrl } from "../../_metronic/helpers";
import {Link} from 'react-router-dom'
import axios from "axios";
import moment from 'moment';


const queryClient = new QueryClient();

function Example({ id }: { id: number }) {

  const { isLoading, error, data, isFetching } = useQuery(["repoData", id], () =>
    axios.get(`http://127.0.0.1:3333/pacientes/${id}`).then((res) => res.data)
  );


  const formatarTelefone = (telefone: string): string => {
    // Aplicar a máscara ao telefone aqui
    // Por exemplo:
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
        
        {/*}
      <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
        <i className="ki-duotone ki-information-5 fs-2tx text-warning me-4"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>
        <div className="d-flex flex-stack flex-grow-1">
          <div className="fw-bold">
            <h4 className="text-gray-800 fw-bolder">We need your attention!</h4>
            <div className="fs-6 text-gray-600">Your payment was declined. To start using tools, please<a className="fw-bolder" href="/metronic8/react/demo1/crafted/account/settings"> Add Payment Method</a>.</div>
          </div>
        </div>
      </div>
      {*/}
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
                    <h1>{data.nome_completo}</h1>
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
                    Endereço: {data.enderecos[0].cidade}, {data.enderecos[0].bairro}, {data.enderecos[0].estado}
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

              <div className='d-flex my-4'>
                <a
                  href='#'
                  className='btn btn-sm btn-light-primary me-3'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_offer_a_deal'
                >
                  <KTIcon iconName='printer' className='fs-3 me-2' /> Imprimir
                </a>                
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

              <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Laudo em andamento</span>
                  <span className='fw-bolder fs-6'>50%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{ width: '50%' }}
                  ></div>
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
          <a className="btn btn-primary align-self-center" href="#">Editar informações</a>
        </div>
        <div className="card-body row align-items-start p-8">
          <div className="col-sm">
            <div className="row mb-7">
              <label className="fw-bold text-muted">Nome completo:</label>
              <div className=""><span className="fw-bolder fs-6 text-capitalize">{data.nome_completo}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Idade</label>
              <div className="col-lg-8 fv-row"><span className="fw-bold fs-6">{moment().diff(data.data_nascimento, 'years')}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Data de nascimento</label>
              <div className="col-lg-8 fv-row"><span className="fw-bold fs-6">{moment(data.data_nascimento).format('DD/MM/YYYY')}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Gênero</label>
              <div className="col-lg-8"><span className="fw-bolder fs-6 text-capitalize">{data.genero}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Lateralidade: </label>
              <div className="col-lg-8"><span className="fw-bold fs-6 text-capitalize">{data.lateralidade}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Escolaridade</label>
              <div className="col-lg-8"><span className="fw-bolder fs-6 text-capitalize">{data.escolaridade}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Segmento: </label>
              <div className="col-lg-8"><span className="fw-bold fs-6 text-capitalize">{data.segmento}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Profissão: </label>
              <div className="col-lg-8"><span className="fw-bold fs-6 text-capitalize">{data.profissao}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Ocupação: </label>
              <div className="col-lg-8"><span className="fw-bold fs-6 text-capitalize">{data.ocupacao}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Organização: </label>
              <div className="col-lg-8"><span className="fw-bold fs-6">{data.organizacao}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Segmento: </label>
              <div className="col-lg-8"><span className="fw-bold fs-6 text-capitalize">{data.segmento}</span></div>
            </div>

          </div>
          <div className="col-sm text-lg-start">
            <div className="row mb-7">
              <label className="fw-bold text-muted">Registro no sistema (ID):</label>
              <div className=""><a href="#" className="fw-bold fs-6 text-dark text-hover-primary">{data.id}</a></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">Telefone de contato <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Número do telefone"></i></label>
              {data.telefones.length > 0 && (
                <div className="d-flex align-items-center mt-5">
                <span className="fw-bolder fs-6 me-2">
                {formatarTelefone(data.telefones[0].telefone)}</span>
                {data.telefones[0].is_whatsapp && <div className="badge badge-success">
                    <a className="text-white" href={`https://api.whatsapp.com/send?phone=${data.telefones[0].telefone}&text=Ol%C3%A1,%20tudo%20bem?`}>Whatsapp</a>
                    </div>}
                </div>
                )}
                {data.telefones.length > 1 && (
                  <div className="d-flex align-items-center mt-5">
                    <span className="fw-bolder fs-6 me-2">{formatarTelefone(data.telefones[1].telefone)}</span>
                    {data.telefones[1].is_whatsapp && <div className="badge badge-success">
                    <a className="text-white" href={`https://api.whatsapp.com/send?phone=${data.telefones[1].telefone}&text=Ol%C3%A1,%20tudo%20bem?`}>Whatsapp</a>
                    </div>}
                  </div>
                )}
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted">E-mail</label>
              <div className=""><a href={`mailto:${data.email}`} className="fw-bold fs-6 text-dark text-hover-primary">{data.email}</a></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted text-capitalize">Endereço Primário<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination"></i></label>
              <div className=""><span className="fw-bolder fs-6 text-dark">{data.enderecos[0].endereco}, {data.enderecos[0].bairro}, {data.enderecos[0].cidade}, {data.enderecos[0].estado}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted text-capitalize">CEP</label>
              <div className=""><span className="fw-bolder fs-6 text-dark">{data.enderecos[0].cep}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted text-capitalize">Cidade de Nascimento: </label>
              <div className=""><span className="fw-bold fs-6">{data.cidade_nascimento}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted text-capitalize">Estado de Nascimento:  </label>
              <div className=""><span className="fw-bold fs-6">{data.estado_nascimento}</span></div>
            </div>
            <div className="row mb-7">
              <label className="fw-bold text-muted text-capitalize">País de Nascimento:</label>
              <div className=""><span className="fw-bold fs-6">{data.pais_nascimento}</span></div>
            </div>
          </div>
          {/*}
          <div className='col-sm'>
            <div className="accordion accordion-icon-toggle p-2 mb-10 cursor-pointer" id="kt_accordion_2">
              <div className="">
                <div className="accordion-button py-5 d-flex5 border-bottom" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_1">
                  <span className="accordion-icon">
                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                  </span>
                  <h3 className="fs-4 fw-semibold mb-0 ms-4">Primeiro responsável legal</h3>
                </div>
                <div id="kt_accordion_2_item_1" className="fs-6 collapse show ps-10" data-bs-parent="#kt_accordion_2">
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Nome Completo:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2 text-capitalize">{data.responsaveis[0].nome}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Gênero:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2 text-capitalize">{data.responsaveis[0].genero}</span></div>
                  </div>
                  <div className="row my-6 ">
                    <label className="fw-bold text-muted">Telefone:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2">{data.responsaveis[0].telefone}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Observação:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2">{data.responsaveis[0].observacao}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Registro no sistema (ID):</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2">{data.responsaveis[0].id}</span></div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="accordion-button  border-bottom py-5 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_2">
                  <span className="accordion-icon">
                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path2"></span></i>
                  </span>
                  <h3 className="fs-4 fw-semibold mb-0 ms-4">Segundo responsável legal</h3>
                </div>
                <div id="kt_accordion_2_item_2" className="collapse fs-6 ps-10" data-bs-parent="#kt_accordion_2">
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Nome Completo:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2 text-capitalize">{data.responsaveis[1].nome}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Gênero:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2 text-capitalize">{data.responsaveis[1].genero}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Telefone:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2">{data.responsaveis[1].telefone}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Observação:</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2">{data.responsaveis[1].observacao}</span></div>
                  </div>
                  <div className="row my-6">
                    <label className="fw-bold text-muted">Registro no sistema (ID):</label>
                    <div className=" d-flex align-items-center"><span className="fw-bolder fs-6 me-2">{data.responsaveis[1].id}</span></div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="accordion-button border-bottom py-5 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_3">
                  <span className="accordion-icon">
                    <i className="ki-duotone ki-arrow-right fs-4"><span className="path1"></span><span className="path3"></span></i>
                  </span>
                  <h3 className="fs-4 fw-semibold mb-0 ms-4">Endereço Secundário</h3>
                </div>
                <div id="kt_accordion_2_item_3" className="collapse fs-6 ps-10" data-bs-parent="#kt_accordion_2">
                  <div className="row my-6">
                    <div className="">
                      <p><label className="fw-bold text-muted">CEP:</label><br />{data.enderecos[1].cep}</p>
                      <p><label className="fw-bold text-muted">Endereço:</label><br />{data.enderecos[1].endereco}</p>
                      <p><label className="fw-bold text-muted">Bairro:</label><br />{data.enderecos[1].bairro}</p>
                      <p><label className="fw-bold text-muted">Cidade:</label><br />{data.enderecos[1].cidade}</p>
                      <p><label className="fw-bold text-muted">Estado:</label><br />{data.enderecos[1].estado}</p></div>
                  </div>
                </div>
              </div>                
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export function PacienteIndividual({ id }: { id: number }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Example id={id} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}