import { FC } from 'react';
import { FormikProps } from 'formik';
import { ICreatePaciente, Endereco, Telefones, Responsaveis } from './CadastrarPacienteWizardHelper';
import { ProgressBarra } from './../CadastroPacienteWizard'

interface Passo5Props extends FormikProps<ICreatePaciente> { }

const Passo5: FC<Passo5Props> = ({ values }) => {
  return (
    <div className='container'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i className='bi bi-clipboard2-check-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Cadastrar novo Paciente'
          ></i>
          Conclusão
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Confira os dados cadastrados e finalize clique em enviar.
        </div>
        
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-xl-8 '
          color='success'
          title='Progresso'
          description='Progresso do cadastro'
          progress='100%'
        />
      </div>

      <div className='row'>
        <div className="col-lg-4">
          <div className="card card-stretch mb-5 bg-light shadow mb-5">
            <div className="card-header bg-primary ribbon ribbon-top ribbon-vertical">
              <div className="ribbon-label bg-success">
                <i className="bi bi-person-circle fs-2 text-white"></i>
              </div>
              <h3 className="card-title">Dados do paciente:</h3>
            </div>
            <div className="card-body row">
              <div className='col-12'>
                <ul key={values.id} className='list-group text-xl-start'>
                  <li className='list-group-item bg-light border-0'>
                    <b>Nome Completo:</b><br />
                    {values.nomeCompleto}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Data de Nascimento:</b><br />
                    {values.dataNascimento}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Gênero:</b><br />
                    {values.genero}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Escolaridade:</b><br />
                    {values.escolaridade}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Segmento:</b><br />
                    {values.segmento}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Profissão:</b><br />
                    {values.profissao}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Ocupação:</b><br />
                    {values.ocupacao}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Lateralidade:</b><br />
                    {values.lateralidade}
                  </li>                
                  <li className='list-group-item bg-light border-0'>
                    <b>Organização:</b><br />
                    {values.organizacao}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Email:</b><br />
                    {values.email}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Cidade de Nascimento:</b><br />
                    {values.cidadeNascimento}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Estado de Nascimento:</b><br />
                    {values.estadoNascimento}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>País de Nascimento:</b><br />
                    {values.paisNascimento}
                  </li>
                  <li className='list-group-item bg-light border-0'>
                    <b>Email:</b><br />
                    {values.email}
                  </li>
                  {values.telefones.map((telefone: Telefones, index: number) => (
                    <div key={index}>
                      <li className='list-group-item bg-light border-0'>
                        <b>Telefone: {index + 1} </b><br />
                        {telefone.telefone}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <div className='badge badge-success'>{telefone.isWhatsapp !== false ? 'Whatsapp' : ''}</div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card card-stretch-50 card-bordered mb-5 bg-light shadow mb-5">
            <div className="card-header bg-primary ribbon ribbon-top ribbon-vertical">
              <div className="ribbon-label bg-success">
                <i className="bi bi-geo-alt-fill fs-2 text-white"></i>
              </div>
              <h3 className="card-title">Endereços do paciente:</h3>
            </div>
            <div className='col-12 text-xl-end'>
              <div className="card-body row">
                {values.enderecos.map((endereco: Endereco, index: number) => (
                  <div key={index} className={index === 0 ? 'col-6' : 'col-6 (' + index + ')'}>
                    <ul className='list-group text-xl-start'>
                      <li className='list-group-item bg-light border-0'>
                        <b>{index === 0 ? 'Endereço Principal' : 'Endereço adicional: (' + index + ')'}</b>
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>CEP:</b><br />
                        {endereco.cep}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>Cidade:</b><br />
                        {endereco.cidade}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>Estado:</b><br />
                        {endereco.estado}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>Bairro:</b><br />
                        {endereco.bairro}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>Cidade:</b><br />
                        {endereco.cidade}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>Endereço:</b><br />
                        {endereco.endereco}
                      </li>
                      <li className='list-group-item bg-light border-0'>
                        <b>Complemento:</b><br />
                        {endereco.complemento}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className="card card-stretch-50 card-bordered mb-5 bg-light shadow mb-5">
            <div className="card-header bg-primary ribbon ribbon-top ribbon-vertical">
              <div className="ribbon-label bg-success">
                <i className="bi bi-heart-fill fs-2 text-white"></i>
              </div>
              <h3 className="card-title">Responsáveis legais</h3>
            </div>
            <div className="card-body">
              <div className='col-12 text-xl-end'>                
                  {values.responsaveis.map((responsaveis: Responsaveis, index: number) => (                    
                      <ul key={index} className='list-group text-xl-start'>
                        <li className='list-group-item bg-light border-0'>
                          <b>Responsável:</b><br/> {responsaveis.nome}
                        </li>
                        <li className='list-group-item bg-light border-0'>
                        <b>Nome:</b><br/> {responsaveis.nome}
                        </li>
                        <li className='list-group-item bg-light border-0'>
                        <b>Gênero:</b> <br/> {responsaveis.genero}
                        </li>
                        <li className='list-group-item bg-light border-0'>
                        <b>Telefone:</b> <br/> {responsaveis.telefone}
                        </li>
                        <div className='badge badge-success'>{responsaveis.isWhatsapp !== false ? 'Whatsapp' : ''}</div>
                        <li className='list-group-item bg-light border-0'>
                        <b>Observação:</b> <br/> {responsaveis.observacao}
                        </li>
                      </ul>                    
                  ))}
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>    
  )
}
export { Passo5 }