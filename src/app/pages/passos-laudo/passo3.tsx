import { FC, useContext } from 'react';
/*
import { KTIcon } from '../../../_metronic/helpers';
*/
import { ErrorMessage, Field, useFormikContext, FormikValues, FieldArray, FormikProps } from 'formik';
/* import { Telefones } from './LaudoWizardHelper'; */
import { ProgressBarra } from '../CadastroPacienteWizard';

import { usePacienteContext, PacienteContext }  from './PacienteContext';

const Passo3: FC = () => {
  const paciente = useContext(PacienteContext);
  const { values, handleChange, setFieldValue } = useFormikContext<FormikValues>();  
  const tituloMain = 'Telefone'; 

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.currentTarget.value;
    const isChecked = event.currentTarget.checked;    

    if (isChecked) {
      // Atualiza o estado da checkbox para "checked"
      event.currentTarget.setAttribute('checked', 'checked');    
      setFieldValue(event.currentTarget.value, true);     
      handleChange(selectedValue);  
      console.log(selectedValue);
    } else {
      // Remove o atributo "checked" caso a checkbox não esteja marcada
      event.currentTarget.removeAttribute('checked');
      setFieldValue(event.currentTarget.value, false);  
    }      
  } 
  
  return (
    <div className='container-fluid'>
      <div className='row align-items-start'>
        <div className='mt-5 col-12 mb-5'>
          <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
            <i className='bi bi-clipboard-check-fill ms-2 fs-4x me-4 text-color-primary'
              data-bs-toggle='tooltip'
              title='Cadastrar novo Paciente'
            ></i>
            Descrição da demanda
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
            progress='12%'
          />
        </div>

        <div className='container'>
          <div className='row align-items-start'>             
          <div className='p-5'>
            <h2 className='text-gray-400'>A</h2>
            <div className='separator'></div>
          </div>         
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="agitacao" id="agitacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="agitacao">
                    Agitação
                  </label>                  
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="agressividade-fisica" id="agressividade-fisica" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="agressividade-fisica">
                    Agressividade física
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="agressividade-verbal" id="agressividade-verbal" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="agressividade-verbal">
                    Agressividade verbal
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="alteracao-humor" id="alteracao-humor" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="alteracao-humor">
                    Alteração de humor
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="alteracoes-fonoarticulatorias" id="alteracoes-fonoarticulatorias" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="alteracoes-fonoarticulatorias">
                    Alterações fonoarticulatórias
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="alucinacao" id="alucinacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="alucinacao">
                    Alucinação
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="ansiedade" id="ansiedade" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="ansiedade">
                    Ansiedade
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="apatia" id="apatia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="apatia">
                    Apatia
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="atraso-desenvolvimento-linguagem" id="atraso-desenvolvimento-linguagem" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="atraso-desenvolvimento-linguagem">
                    Atraso no desenvolvimento da linguagem
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="atraso-desenvolvimento-motor" id="atraso-desenvolvimento-motor" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="atraso-desenvolvimento-motor">
                    Atraso no desenvolvimento motor
                  </label>
                </div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="atraso-marcos-desenvolvimento" id="atraso-marcos-desenvolvimento" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="atraso-marcos-desenvolvimento">
                    Atraso nos marcos do desenvolvimento
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="aumento-sensibilidade-estimulos" id="aumento-sensibilidade-estimulos" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="aumento-sensibilidade-estimulos">
                    Aumento da sensibilidade a estímulos
                  </label>
                </div>
              </div>
              
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="autor-bullying" id="autor-bullying" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="autor-bullying">
                    Autor de bullying
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>B</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="baixa-tolerancia-frustracao" id="baixa-tolerancia-frustracao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="baixa-tolerancia-frustracao">
                    Baixa tolerância à frustração
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="baixo-desempenho-escolar" id="baixo-desempenho-escolar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="baixo-desempenho-escolar">
                    Baixo desempenho escolar
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>C</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-acumulacao" id="comportamento-acumulacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-acumulacao">
                    Comportamento de acumulação
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-anorexia" id="comportamento-anorexia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-anorexia">
                    Comportamento de anorexia
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-bulimia" id="comportamento-bulimia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-bulimia">
                    Comportamento de bulimia
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-roubo" id="comportamento-roubo" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-roubo">
                    Comportamento de roubo
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-delinquente" id="comportamento-delinquente" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-delinquente">
                    Comportamento delinquente
                  </label>
                </div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-desafiador" id="comportamento-desafiador" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-desafiador">
                    Comportamento desafiador
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-disruptivo" id="comportamento-disruptivo" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-disruptivo">
                    Comportamento disruptivo
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-infantilizado" id="comportamento-infantilizado" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-infantilizado">
                    Comportamento infantilizado
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-opositor" id="comportamento-opositor" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-opositor">
                    Comportamento opositor
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-repetitivo" id="comportamento-repetitivo" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-repetitivo">
                    Comportamento repetitivo
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="comportamento-sedutor" id="comportamento-sedutor" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="comportamento-sedutor">
                    Comportamento sedutor
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="compras-excessivas" id="compras-excessivas" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="compras-excessivas">
                    Compras excessivas
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="compulsao-alimentar" id="compulsao-alimentar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="compulsao-alimentar">
                    Compulsão alimentar
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="crises-panico" id="crises-panico" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="crises-panico">
                    Crises de pânico
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="culpabilizacao" id="culpabilizacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="culpabilizacao">
                    Culpabilização
                  </label>
                </div>
              </div>

              <div className='p-5'>
                <h2 className='text-gray-400'>D</h2>
                <div className='separator'></div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="delirios" id="delirios" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="delirios">
                    Delírios
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dependencia" id="dependencia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dependencia">
                    Dependência
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dependencia-relacao-emocional" id="dependencia-relacao-emocional" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dependencia-relacao-emocional">
                    Dependência na relação emocional
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="depressao" id="depressao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="depressao">
                    Depressão
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="desatencao" id="desatencao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="desatencao">
                    Desatenção
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="desinteresse-escolar" id="desinteresse-escolar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="desinteresse-escolar">
                    Desinteresse escolar
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="desobediencia" id="desobediencia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="desobediencia">
                    Desobediência
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="desorganizacao" id="desorganizacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="desorganizacao">
                    Desorganização
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-adaptacao" id="dificuldade-adaptacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-adaptacao">
                    Dificuldade de adaptação
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-compreensao-texto" id="dificuldade-compreensao-texto" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-compreensao-texto">
                    Dificuldade de compreensão de texto
                  </label>
                </div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-controle-inibitorio" id="dificuldade-controle-inibitorio" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-controle-inibitorio">
                    Dificuldade de controle inibitório
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-interacao-social" id="dificuldade-interacao-social" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-interacao-social">
                    Dificuldade de interação social
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-alfabetizacao" id="dificuldade-alfabetizacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-alfabetizacao">
                    Dificuldade na alfabetização
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-seguir-regras" id="dificuldade-seguir-regras" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-seguir-regras">
                    Dificuldade para seguir regras
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldade-tomada-decisao" id="dificuldade-tomada-decisao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldade-tomada-decisao">
                    Dificuldade para tomada de decisão
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldades-motoras" id="dificuldades-motoras" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldades-motoras">
                    Dificuldades motoras
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldades-acordar" id="dificuldades-acordar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldades-acordar">
                    Dificuldades para acordar
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="dificuldades-adormecer" id="dificuldades-adormecer" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="dificuldades-adormecer">
                    Dificuldades para adormecer
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="diminuida-sensibilidade-estimulos" id="diminuida-sensibilidade-estimulos" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="diminuida-sensibilidade-estimulos">
                    Diminuída sensibilidade a estímulos
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="disautonomia" id="disautonomia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="disautonomia">
                    Disautonomia
                  </label>
                </div>
              </div>

              <div className='p-5'>
                <h2 className='text-gray-400'>E</h2>
                <div className='separator'></div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="ecolalia" id="ecolalia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="ecolalia">
                    Ecolalia
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="enurese-diurna" id="enurese-diurna" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="enurese-diurna">
                    Enurese diurna
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="enurese-noturna" id="enurese-noturna" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="enurese-noturna">
                    Enurese noturna
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="estereotipias" id="estereotipias" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="estereotipias">
                    Estereotipias
                  </label>
                </div>
              </div>

              <div className='p-5'>
                <h2 className='text-gray-400'>F</h2>
                <div className='separator'></div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="fala-infantilizada" id="fala-infantilizada" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="fala-infantilizada">
                    Fala infantilizada
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="fala-sozinho" id="fala-sozinho" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="fala-sozinho">
                    Fala sozinho
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="falta-planejamento" id="falta-planejamento" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="falta-planejamento">
                    Falta de planejamento
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="flapping" id="flapping" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="flapping">
                    Flapping
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>H</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="hiperfoco" id="hiperfoco" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="hiperfoco">
                    Hiperfoco
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>I</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="impulsividade" id="impulsividade" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="impulsividade">
                    Impulsividade
                  </label>
                </div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="indisciplina" id="indisciplina" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="indisciplina">
                    Indisciplina
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="inquietacao" id="inquietacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="inquietacao">
                    Inquietação
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="insatisfacao-imagem-corporal" id="insatisfacao-imagem-corporal" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="insatisfacao-imagem-corporal">
                    Insatisfação com a imagem corporal
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="intercorrencias-sono" id="intercorrencias-sono" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="intercorrencias-sono">
                    Intercorrências no sono
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>J</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="juizo-critico-comprometido" id="juizo-critico-comprometido" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="juizo-critico-comprometido">
                    Juízo crítico comprometido
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>L</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="limitacoes-motoras" id="limitacoes-motoras" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="limitacoes-motoras">
                    Limitações motoras
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="luto" id="luto" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="luto">
                    Luto
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>M</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="mania-limpeza" id="mania-limpeza" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="mania-limpeza">
                    Mania de limpeza
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="mania-organizacao" id="mania-organizacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="mania-organizacao">
                    Mania de organização
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="mutismo" id="mutismo" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="mutismo">
                    Mutismo
                  </label>
                </div>
              </div>

              <div className='p-5'>
                <h2 className='text-gray-400'>N</h2>
                <div className='separator'></div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="nao-sabe-brincar" id="nao-sabe-brincar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="nao-sabe-brincar">
                    Não sabe brincar
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>P</h2>
                <div className='separator '></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="pensamento-acelerado" id="pensamento-acelerado" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="pensamento-acelerado">
                    Pensamento acelerado
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="perda-capacidade-visual" id="perda-capacidade-visual" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="perda-capacidade-visual">
                    Perda capacidade visual
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="perda-capacidade-auditiva" id="perda-capacidade-auditiva" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="perda-capacidade-auditiva">
                    Perda da capacidade auditiva
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="problemas-aprendizagem-escrita" id="problemas-aprendizagem-escrita" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="problemas-aprendizagem-escrita">
                    Problemas de aprendizagem de escrita
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="problemas-aprendizagem-leitura" id="problemas-aprendizagem-leitura" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="problemas-aprendizagem-leitura">
                    Problemas de aprendizagem de leitura
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="problemas-aprendizagem-matematica" id="problemas-aprendizagem-matematica" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="problemas-aprendizagem-matematica">
                    Problemas de aprendizagem de matemática
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="problemas-memoria" id="problemas-memoria" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="problemas-memoria">
                    Problemas de memória
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="problemas-raciocinio" id="problemas-raciocinio" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="problemas-raciocinio">
                    Problemas de raciocínio
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="problemas-compreensao-leitura" id="problemas-compreensao-leitura" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="problemas-compreensao-leitura">
                    Problemas na compreensão da leitura
                  </label>
                </div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="procrastinacao" id="procrastinacao" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="procrastinacao">
                    Procrastinação
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>R</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="recusa-alimentar" id="recusa-alimentar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="recusa-alimentar">
                    Recusa alimentar
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="repetencia-escolar" id="repetencia-escolar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="repetencia-escolar">
                    Repetência escolar
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="rigidez-comportamento" id="rigidez-comportamento" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="rigidez-comportamento">
                    Rigidez de comportamento
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="rigidez-pensamento" id="rigidez-pensamento" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="rigidez-pensamento">
                    Rigidez de pensamento
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>S</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="seletividade-alimentar" id="seletividade-alimentar" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="seletividade-alimentar">
                    Seletividade alimentar
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="sono-improdutivo" id="sono-improdutivo" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="sono-improdutivo">
                    Sono improdutivo
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>T</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="teimosia" id="teimosia" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="teimosia">
                    Teimosia
                  </label>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-gray-400'>U</h2>
                <div className='separator'></div>
              </div>
              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="uso-abusivo-drogas" id="uso-abusivo-drogas" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="uso-abusivo-drogas">
                    Uso abusivo de drogas
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="uso-abusivo-alcool" id="uso-abusivo-alcool" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="uso-abusivo-alcool">
                    Uso abusivo de álcool
                  </label>
                </div>
              </div>

              <div className='p-5'>
                <h2 className='text-gray-400'>V</h2>
                <div className='separator'></div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="vitima-abuso-sexual" id="vitima-abuso-sexual" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="vitima-abuso-sexual">
                    Vítima de abuso sexual
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="vitima-abuso-verbal" id="vitima-abuso-verbal" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="vitima-abuso-verbal">
                    Vítima de abuso verbal
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="vitima-alienacao-parental" id="vitima-alienacao-parental" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="vitima-alienacao-parental">
                    Vítima de alienação parental
                  </label>
                </div>
              </div>

              <div className="checkboxindividual mb-2 col-lg-3 min-h-40px px-5">
                <div className="form-check form-check-custom form-check-solid form-check-lg">
                  <Field className="form-check-input align-middle" type="checkbox"  onChange={handleCheckboxChange} checked={values.checkboxValue} value="vitima-bullying" id="vitima-bullying" />
                  <label className="form-check-label align-middle text-gray-800" htmlFor="vitima-bullying">
                    Vítima de bullying
                  </label>
                </div>
              </div>              
            </div>            
          </div>
        </div>
      </div> 
         
  )
}

export { Passo3 }
