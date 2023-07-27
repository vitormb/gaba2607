import React, {FC, useState, useEffect, useContext, useRef} from 'react'
import {Formik, Field, ErrorMessage, useFormikContext, FormikValues} from 'formik'
import {ProgressBarra} from '../CadastroPacienteWizard'
import {CheckBoxPasso4, getPasso4EditorContent} from './passo4props/checkboxes'
import {Editorpasso4} from './passo4props/editorpasso4'
import {Selecoes} from './passo4props/content'

const Passo4: FC = () => {
  const [descricaoSelecionada, setDescricaoSelecionada] = useState('')
  const editorRef = useRef<any>(null)
  const {values, handleChange, setFieldValue} = useFormikContext<FormikValues>()  
  const [editorContent, setEditorContent] = useState<{ type: string; children: { text: string; }[]; }[]>([]);

  useEffect(() => {
    // Atualiza o conteúdo do Slate com a nova seleção
    if (editorRef.current) {
      editorRef.current.setData(`<p>${descricaoSelecionada}</p>`)
    }
  }, [descricaoSelecionada])

  return (
    <div className='container-fluid'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i
            className='bi bi-list-check ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Cadastrar novo Paciente'
          ></i>
          Procedimentos
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
          progress='18%'
        />
      </div>
      <div className='row'>
        <div className='col-lg-3 mt-10'>
          <label className='form-label required'>Quantidade de sessões realizadas:</label>
          <Field 
            type='number'
            placeholder='Quantidade de sessões'
            className='form-control form-control-lg form-control-solid'
            name='quantidadeDeSessoes'
            maxLength={4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const quantidadeDeSessoes = parseInt(event.currentTarget.value, 10)
              const tempoMedioSessao = parseInt(values.tempoMedioSessao || '0', 10)
              const duracaoTotalDasSessoes = quantidadeDeSessoes
                ? quantidadeDeSessoes * tempoMedioSessao
                : 0
              setFieldValue(
                'duracaoTotalDasSessoes',
                duracaoTotalDasSessoes.toString() + ' minutos'
              )
              setFieldValue('quantidadeDeSessoes', event.currentTarget.value) // Atualiza o valor digitado no campo quantidadeDeSessoes
            }}
          />
          <ErrorMessage name='quantidadeDeSessoes' component='div' className='text-danger' />
        </div>
        <div className='col-lg-3 mt-10'>
          <label className='form-label required'>Tempo médio de cada sessão:</label>
          <Field
            type='number'
            placeholder='Em minutos'
            className='form-control form-control-lg form-control-solid'
            name='tempoMedioSessao'
            maxLength={4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const quantidadeDeSessoes = parseInt(values.quantidadeDeSessoes || '0', 10)
              const tempoMedioSessao = parseInt(event.currentTarget.value, 10)
              const duracaoTotalDasSessoes = quantidadeDeSessoes
                ? quantidadeDeSessoes * tempoMedioSessao
                : 0
              setFieldValue(
                'duracaoTotalDasSessoes',
                duracaoTotalDasSessoes.toString() + ' minutos'
              )
              setFieldValue('tempoMedioSessao', event.currentTarget.value) // Atualiza o valor digitado no campo tempoMedioSessao
            }}
          />
          <ErrorMessage name='tempoMedioSessao' component='div' className='text-danger' />
        </div>
        <div className='col-lg-3 mt-10'>
          <label className='form-label required'>Total das sessões:</label>
          <Field
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='duracaoTotalDasSessoes'
            readOnly
          />
          <ErrorMessage name='duracaoTotalDasSessoes' component='div' className='text-danger' />
        </div>
        <div className='col-lg-3 mt-10'>
          <label className='form-label required'>Tipo de sessões:</label>
          <Field
            name='tipoDeSessoes'
            as='select'
            className='form-select form-select-lg form-select-solid required'
          >
            <option>Selecione</option>
            <option value='sessoesPresenciais'>Presenciais</option>
            <option value='sessoesVirtuais'>Virtuais</option>
            <option value='ambasSessoes'>Ambas</option>
          </Field>
          <ErrorMessage name='tipoDeSessoes' component='div' className='text-danger' />
        </div>
        
        <div>

            <CheckBoxPasso4 />
            <ErrorMessage name='descricaoDaDemanda' component='div' className='text-danger' />
        </div>

        </div>
        <div className='mt-10 text-black'>
          <label className='form-check-label align-middle mb-5 text-gray-800'>Metodologia:</label>
          <Editorpasso4 />
        </div>      
    </div>
  )
}

export {Passo4}