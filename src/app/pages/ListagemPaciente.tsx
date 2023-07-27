import { useState, useEffect } from 'react';
import { buscarPacientes } from '../api/pacienteslist/BuscaPacientes';
import { Paciente } from '../api/pacienteslist/PacientesModel';
import moment from 'moment';
import { KTSVG, toAbsoluteUrl } from '../../_metronic/helpers';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export function ListagemPacientes() {
    /* Define a pesquisa */
    const [search, setSearch] = useState('');
    const [carregando, setCarregando] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(25);
    /* Puxa os dados dos pacientes do PacientesModel */
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [pacientesmodal, setPacientesmodal] = useState<Paciente[]>([]);
    /* Adicione o estado para rastrear a página atual */
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        async function fetchPacientes() {
            setCarregando('Carregando...');
            const pacientes = await buscarPacientes();
            setPacientes(pacientes);
            setCarregando('');
        }
        fetchPacientes();
    }, []);


    /* Defina o número de itens a serem exibidos por página */

    const pageCount = Math.ceil(pacientes.length / itemsPerPage);


    /* Delete pacientes */
    const DeleteForm: React.FC<{ id: string }> = ({ id }) => {
        const getidmodal = id;
        const handleSubmit = async () => {
            try {
                await axios.delete(`http://127.0.0.1:3333/pacientes/${id}`);
                // Aqui você pode lidar com o sucesso da solicitação DELETE
                console.log('Paciente excluído com sucesso!');
                window.location.reload();
            } catch (error) {
                // Aqui você pode lidar com o erro da solicitação DELETE
                console.error('Erro ao excluir paciente:', error);
            }
        };

        return (
            <Formik initialValues={{ pacientes }} onSubmit={handleSubmit}>
                <Form>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className='btn btn-lg btn-danger me-3'>
                        <i className="bi bi-x-square-fill"></i>Excluir</button>
                </Form>
            </Formik>
        );
    };

    /* Defina a lógica de renderização para exibir apenas os pacientes na página atual */
    const renderPacientes = () => {
        pacientes.sort((a, b) => b.id - a.id);
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        return pacientes
          .slice(start, end)
          .filter((paciente) => {
            return search.toLowerCase() === '' ? paciente : paciente.nome_completo.toLowerCase().includes(search);
          })
          .map((paciente) => (
                // renderizar os pacientes aqui
                <tr key={paciente.id}>
                    <td className='px-2 py-1'>
                        <div className="symbol ribbon mt-2">
                            <div className="position-absolute text-white top-50 start-100 translate-middle badge rounded-pill bg-primary">{paciente.id}</div>
                            <div className="symbol-label rounded-circle" style={{ backgroundImage: `url('${toAbsoluteUrl("/media/avatars/blank.png")}')` }}></div>
                        </div>
                    </td>
                    <td className='px-2 py-1'>{paciente.nome_completo}</td>
                    <td className='px-2 py-1'>{moment().diff(paciente.data_nascimento, 'years')}</td>
                    <td className='px-2 py-1'>{paciente.enderecos[0]?.cidade}</td>
                    <td className='px-2 py-1'>{paciente.organizacao}</td>
                    <td className='px-2 py-1'>{paciente.profissao}</td>
                    <td className='px-2 py-1'>
                        <div><span className="badge badge-success">Concluído</span></div>
                    </td>
                    <td className='px-2 py-1'>
                        <div className="d-flex justify-content-end flex-shrink-0">
                            <a href={`/pagina-paciente/${paciente.id}`} className="btn btn-light-primary btn-sm align-middle mx-2"><i className="bi bi-search"></i>Visualizar</a>
                            <a href={`/paciente-editar/${paciente.id}`} className="btn btn-light-warning btn-sm align-middle mx-2"><i className="bi bi-pencil-square"></i>Editar</a>
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target={`#kt_modal_${paciente.id}`}
                                className="btn btn-light-danger btn-sm align-middle mx-2"
                            >
                                <i className="bi bi-x-octagon-fill fs-4 me-2"></i>{' '}
                                Excluir
                            </button>

                        </div>
                    </td>
                    <div
                        className="modal fade"
                        tabIndex={-1}
                        id={`kt_modal_${paciente.id}`}>
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
                                            <h5 className="fw-bolder fs-1 mb-5">Tem certeza que deseja apagar o paciente: <b>{paciente.nome_completo}</b>?</h5>
                                            <div className="separator separator-dashed border-danger opacity-25 mb-5"></div>
                                            <div className="mb-9">
                                                Ao apagar este elemento, os dados contidos nele <strong>serão deletados.</strong><br />
                                            </div>
                                            <div className="d-flex flex-center flex-wrap">
                                                <button data-bs-dismiss="modal" aria-label="Cancelar" className="btn btn-outline btn-outline-primary btn-active-danger m-2">Cancelar</button>

                                                <DeleteForm id={paciente.id.toString()} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
            ))
    };

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-primary">
                <h3 className="card-title text-white fs-2x bg-primary"><i className="bi bi-people-fill text-white fs-2x me-2"></i>Listar pacientes</h3>
                <div className="card-toolbar">
                    <Link
                        to='/'
                        className='btn btn-sm btn-light fs-6 fs-lg-4 mb-1'>
                        Retornar
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className='text-center'>
                    <div className='row align-items-start'>
                        <div className='col-4 '>
                            <Form className='' >
                                <InputGroup className='my-3'>
                                    <KTSVG
                                        path='/media/icons/duotune/general/gen004.svg'
                                        className='svg-icon svg-icon-3x me-5' />
                                    <Form.Control
                                        autoCapitalize="none"
                                        className='text-lowercase form-control-solid'
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder='Buscar por paciente...'
                                    />
                                </InputGroup>
                            </Form>
                        </div>
                        <div className='col order-last'>
                            <div className="d-flex justify-content-end flex-shrink-0">
                                <Link
                                    to='/formularios/cadastrar-paciente'
                                    className='btn btn-primary btn-sm align-middle mt-4'>
                                    <i className="bi bi-pencil-square"></i>
                                    Novo paciente
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-8">
                    <table className="table table-hover table-striped table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold bg-active-primary fs-6 text-primary">
                                <th className="px-2">ID</th>
                                <th className="min-w-120px px-2">Nome</th>
                                <th className="px-2">Idade</th>
                                <th className="min-w-80px-2">Cidade</th>
                                <th className="px-2">Organização</th>
                                <th className="min-w-100px px-2">Profissão</th>
                                <th className="px-2">Progresso do laudo</th>
                                <th className="px-2 text-end">Ações</th>
                            </tr>
                        </thead>
                        {/* ... */}
                        <tbody>
                            {/* Altere para renderizar apenas os pacientes na página atual */}
                            {carregando}
                            {renderPacientes()}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Adicione o componente react-paginate */}
            <div className='card-body'>
                <div className=''>
                    <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Próximo'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={({ selected }) => setCurrentPage(selected)}
                        containerClassName={'d-flex justify-content-end pagination col order-last my-8'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        </div>
    )
}