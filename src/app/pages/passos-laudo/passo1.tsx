import React, { FC, useState, useEffect } from 'react';
import { ErrorMessage, Field, useFormik } from 'formik';
import { ProgressBarra } from '../CadastroPacienteWizard';
import { Link } from 'react-router-dom';
import ListagemDePacientes from './PacienteList';
import { usePacienteContext } from './PacienteContext';

interface Passos1Props {
  paciente: Paciente;
}
 
type Paciente = {
  id: number;
  nome: string;
  idade: number;
  genero: string;
  nomeCompleto: string; // adicionar propriedade
  dataNascimento: string; // adicionar propriedade
};

function idade(ano_aniversario: number, mes_aniversario: number, dia_aniversario: number): { anos: number, meses: number } {
  var d = new Date();
  var ano_atual = d.getFullYear();
  var mes_atual = d.getMonth() + 1;
  var dia_atual = d.getDate();
  var quantos_anos = ano_atual - ano_aniversario;
  var quantos_meses = mes_atual - mes_aniversario;

  if (mes_atual < mes_aniversario || (mes_atual === mes_aniversario && dia_atual < dia_aniversario)) {
    quantos_anos--;
    quantos_meses += 12; // Adiciona 12 meses para compensar
  }

  return { anos: quantos_anos, meses: quantos_meses };
}

const Passo1: FC = () => { 
  const { selectedData } = usePacienteContext();
  const [dataDeNascimento, setDataDeNascimento] = useState('');
  const [exportedData, setExportedData] = useState<Paciente | null>(null);
  
  const formik = useFormik({
    initialValues: {
      nomeCompleto: '',
      nome_completo:'',
      dataDeNascimento: '0000-00-00',
      idadeTotalDoPaciente: '',
      mesesDeVida: '',
      diasDeVida: ''
    },
    onSubmit: values => {
      // Trate o envio do formulário aqui, se necessário
      console.log(values);
    }
  });

  function calcularDiasDeVida(ano: number, mes: number, dia: number): number {
    const dataNascimento = new Date(ano, mes - 1, dia); // Mês começa em 0 (janeiro = 0)
    const hoje = new Date();
    const diferencaEmMilissegundos = hoje.getTime() - dataNascimento.getTime();
    // Obter a data atual (sem horas e minutos)
    const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    // Verificar se o aniversário já ocorreu este ano
    const aniversarioEsteAno = new Date(hoje.getFullYear(), mes - 1, dia);
    const aniversarioOcorreu = aniversarioEsteAno <= dataAtual;
    // Calcular a diferença em dias
    let diasDeVida = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    // Subtrair os dias do mês atual se o aniversário já ocorreu
    if (aniversarioOcorreu) {
      diasDeVida -= dataAtual.getDate() - dia;
    }
    return diasDeVida;
  }

  const handleDataDeNascimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    setDataDeNascimento(data);
    const [anoStr, mesStr, diaStr] = data.split('-');
    const dia = parseInt(diaStr, 10);
    const mes = parseInt(mesStr, 10);
    const ano = parseInt(anoStr, 10);
    const { anos, meses } = idade(ano, mes, dia);
    const idadeTotalDoPaciente = anos;
    const mesesDeVida = meses;
    formik.setFieldValue('idadeTotalDoPaciente', idadeTotalDoPaciente.toString());
    formik.setFieldValue('mesesDeVida', mesesDeVida.toString());
    const diasDeVida = calcularDiasDeVida(ano, mes, dia);
    formik.setFieldValue('diasDeVida', diasDeVida.toString());
  };

  useEffect(() => {
    if (selectedData && selectedData.dataNascimento) {
      const [anoStr, mesStr, diaStr] = selectedData.dataNascimento.split('-');
      const dia = parseInt(diaStr, 10);
      const mes = parseInt(mesStr, 10);
      const ano = parseInt(anoStr, 10);
      const { anos, meses } = idade(ano, mes, dia);
      const idadeTotalDoPaciente = anos;
      const mesesDeVida = meses;
      formik.setFieldValue('idadeTotalDoPaciente', idadeTotalDoPaciente.toString());
      formik.setFieldValue('mesesDeVida', mesesDeVida.toString());
      const diasDeVida = calcularDiasDeVida(ano, mes, dia);
      formik.setFieldValue('diasDeVida', diasDeVida.toString());
      formik.setFieldValue('nomeCompleto', selectedData.nomeCompleto.toString());
    }
  }, [selectedData]);

  return (
    <div className='container-fluid'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i
            className='bi bi-file-person-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Dados do Paciente
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Você precisa <Link to='/formularios/cadastrar-paciente'>cadastrar o paciente</Link> antes de vincular um laudo em seu nome.<span className='required'> </span>
        </div>
        <div className='progresso col-12'>
          <ProgressBarra
            className='mb-2'
            color='primary'
            title='Progresso'
            description='Progresso do cadastro'
            progress='0%'
          />
        </div>

        <div className='fv-row'>
          <div className='row'>
            <div className='col-lg-12 mt-10'>
              <div className='modal-paciente'>
                <div className="modal fade" tabIndex={-1} id="kt_modal_paciente">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header px-10">
                        <h5 className="modal-title fs-2x">Selecione um paciente</h5>
                        <div
                          className="btn btn-icon btn-sm btn-danger ms-2"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >X
                        </div>
                      </div>
                      <div className="modal-body px-10">
                        <ListagemDePacientes />
                      </div>
                      {/*}
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                    </div>
                    {*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
              <div className='row justify-content-md-center align-items-center pacientecard bg-black rounded bg-opacity-25 p-10'>
                <div className="col-md-auto">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body cleartfix">
                        <div className="media align-items-stretch">
                          <div className="align-self-center">
                            <i className="icon-speech warning font-large-2 mr-2"></i>
                          </div>
                          <div className="media-body">
                            <h4>Nome do paciente:</h4>                            
                          </div>
                          <div className="align-self-center">
                            {selectedData ? <h5>{selectedData.nomeCompleto}</h5> :
                            <a data-bs-toggle="modal" data-bs-target="#kt_modal_paciente">Selecione um paciente</a>}                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-auto">
                  <a
                    href="#"
                    className="btn btn-flex btn-primary px-6 btnpulse justify-content-end"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_paciente"
                  >
                    <span className="bi bi-person-fill-check fs-2x pe-3"></span>
                    <span className="d-flex flex-column align-items-start ms-2">
                      <span className="fs-3 fw-bolder">Selecione</span>
                      <span className="fs-7">Um paciente</span>
                    </span>
                  </a>
                </div>
              </div>
              </div>

            </div>
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Data de nascimento:</label>
              <Field
              type='date'
              className='form-control form-control-lg form-control-solid'
              name='dataDeNascimento'
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                handleDataDeNascimentoChange(event)
              }
              value={selectedData ? selectedData.dataNascimento : ''}
            />
            </div>
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Idade:</label>
              <Field
                placeholder='Idade'
                className='form-control form-control-lg form-control-solid required'
                name='idadeTotalDoPaciente'
                value={formik.values.idadeTotalDoPaciente} // Definir o valor do campo
                onChange={formik.handleChange} // Atualizar o valor do campo no Formik
              />
            </div>
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Meses:</label>
              <Field
                placeholder='Meses'
                className='form-control form-control-lg form-control-solid required'
                name='mesesDeVida'
                value={formik.values.mesesDeVida} // Definir o valor do campo
                onChange={formik.handleChange} // Atualizar o valor do campo no Formik
              />
            </div>
            <div className='col-lg-3 mt-10'>
              <label className='form-label required'>Dias:</label>
              <Field
                placeholder='Dias'
                className='form-control form-control-lg form-control-solid required'
                name='diasDeVida'
                value={formik.values.diasDeVida} // Definir o valor do campo
                onChange={formik.handleChange} // Atualizar o valor do campo no Formik
              />
            </div>
          </div>
        </div>
      </div>
      <div className='holdinfohidden'>
        <Field
          placeholder='Dias'
          className='form-control form-control-lg form-control-solid required hidden d-none'
          name='nomeCompleto'
          value={formik.values.nomeCompleto} // Definir o valor do campo
          onChange={formik.handleChange} // Atualizar o valor do campo no Formik
        />
      </div>
    </div>
  );
}

export { Passo1 };
