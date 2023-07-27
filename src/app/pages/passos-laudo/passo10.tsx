/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { ErrorMessage, Field } from 'formik'
import { ProgressBarra } from '../CadastroPacienteWizard'
import { Link } from 'react-router-dom'

const Passo10: FC = () => {
  return (
    <div className='container-fluid'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-table ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Tabela Geral
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Você precisa <Link to="/formularios/cadastrar-paciente">cadastrar o paciente</Link> antes de vincular um laudo em seu nome.<span className='required'> </span>
        </div>
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-2'
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='58%'
        />

      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-12 mt-10'>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr className="fw-bold fs-6 text-white bg-primary">
                    <th className="text-left" colSpan={2}>TABELA GERAL DA COGNIÇÃO</th>
                    <th className="text-center" colSpan={8}>PERCENTIL</th>
                  </tr>
                  <tr className="fw-bold fs-6 text-dark">
                    <th>Teste</th>
                    <th>Habilidade</th>
                    <th className='bg-danger'>{'< 2'}</th>
                    <th className='bg-danger bg-opacity-75'>{'3 - 9'}</th>
                    <th className='bg-warning bg-opacity-75'>{'10 - 24'}</th>
                    <th className='bg-success bg-opacity-25'>{'25 - 74'}</th>
                    <th className='bg-success bg-opacity-50'>{'74 - 90'}</th>
                    <th className='bg-success bg-opacity-75'>{'91 - 97'}</th>
                    <th className='bg-success'>{'> 98'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-black bg-opacity-10'>
                    <td>Nome do teste</td>
                    <td>Habilidade</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                  </tr>
                  <tr>
                    <td>Nome do teste</td>
                    <td>Habilidade</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                  </tr>
                  <tr className='bg-black bg-opacity-10'>
                    <td>Nome do teste</td>
                    <td>Habilidade</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Passo10 }