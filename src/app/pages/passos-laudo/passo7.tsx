import React, {FC, useState} from 'react'
import {ProgressBarra} from '../CadastroPacienteWizard'
import {CreateAccordionElement} from './testes-configs/teste-base/CreateAccordionElement'

import {TestesSelecionados} from './testes-configs/teste-base/TestesSelecionados'
import {SubTestesContent} from './testes-configs/teste-base/SubTestesContent'

const Passo7: FC = () => {
  return (
    <div className='container-flex'>
      <div className='mt-5 col-12 mb-5'>
        <h2 className='fw-bolder fs-1 d-flex align-items-center text-dark'>
          <i
            className='bi bi-puzzle-fill ms-2 fs-4x me-4 text-color-primary'
            data-bs-toggle='tooltip'
            title='Dados do Paciente'
          ></i>
          Testes
        </h2>
        <div className='text-gray-400 fw-bold fs-6'>
          Selecione a categoria do teste realizado, em seguida, selecione as variações (se
          aplicável). Depois, basta configurar os testes escolhidos.
        </div>
      </div>
      <div className='progresso col-12'>
        <ProgressBarra
          className='card-xl-stretch mb-2'
          color='primary'
          title='Progresso'
          description='Progresso do cadastro'
          progress='36%'
        />
      </div>
      <div className='row justify-content-start'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Personalidade'
            friendlytitle='Personalidade'
            cogarea='Personalidade'
            content={
              <div>
                <SubTestesContent
                  idTeste='Bateria Fatorial de Personalidade'
                  valor='Bateria Fatorial de Personalidade'
                />
                <SubTestesContent
                  idTeste='CAT- A - Teste de Apercepção Infantil'
                  valor='CAT- A - Teste de Apercepção Infantil'
                />
                <SubTestesContent idTeste='Escalas Beck' valor='Escalas Beck' />
                <SubTestesContent idTeste='HTP' valor='HTP' />
                <SubTestesContent
                  idTeste='Inventário de habilidades sociais'
                  valor='Inventário de habilidades sociais'
                />
                <SubTestesContent idTeste='Palográfico' valor='Palográfico' />
                <SubTestesContent
                  idTeste='Pirâmides coloridas de Pfister'
                  valor='Pirâmides coloridas de Pfister'
                />
                <SubTestesContent idTeste='Zulliger' valor='Zulliger' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Atenção'
            friendlytitle='atencao'
            cogarea='Atenção'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent idTeste='Coleção AD e AS' valor='Coleção AD e AS' />
                <SubTestesContent idTeste='FDT' valor='FDT' />
                <SubTestesContent idTeste='Neupsilin' valor='Neupsilin' />
                <SubTestesContent
                  idTeste='Teste AC de Atenção Concentrada'
                  valor='Teste AC de Atenção Concentrada'
                />
                <SubTestesContent idTeste='D2R' valor='D2R' />
                <SubTestesContent idTeste='BPA' valor='BPA' />
                <SubTestesContent
                  idTeste='Teste de cancelamento de sinos'
                  valor='Teste de cancelamento de sinos'
                />
                <SubTestesContent idTeste='TAVIS' valor='TAVIS' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Linguagem'
            friendlytitle='linguagem'
            cogarea='Linguagem'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent idTeste='Confias' valor='Confias' />
                <SubTestesContent
                  idTeste='Manual da Escala de Tdah - versão para professores'
                  valor='Manual da Escala de Tdah - versão para professores'
                />
                <SubTestesContent
                  idTeste='Teste de Compreensão Leitora de Textos Descritivos'
                  valor='Teste de Compreensão Leitora de Textos Descritivos'
                />
                <SubTestesContent
                  idTeste='Teste de Habilidades e Conhecimento Pré-Alfabetização'
                  valor='Teste de Habilidades e Conhecimento Pré-Alfabetização'
                />
                <SubTestesContent idTeste='TENA' valor='TENA' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Habilidades acadêmicas'
            friendlytitle='habilidadeacademica'
            cogarea='Habilidades acadêmicas'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent idTeste='CORUJA PRO-MAT' valor='CORUJA PRO-MAT' />
                <SubTestesContent
                  idTeste='Teste de Desempenho Escolar'
                  valor='Teste de Desempenho Escolar'
                />
                <SubTestesContent idTeste='CORUJA ESPECIALISTA' valor='CORUJA ESPECIALISTA' />
                <SubTestesContent idTeste='TDE 2' valor='TDE 2' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Quociente Intelectual'
            friendlytitle='quocienteIntelectual'
            cogarea='Quociente Intelectual'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent
                  idTeste='Desenho da Figura Humana'
                  valor='Desenho da Figura Humana'
                />
                <SubTestesContent
                  idTeste='Escala de Maturidade Mental - COLUMBIA'
                  valor='Escala de Maturidade Mental - COLUMBIA'
                />
                <SubTestesContent
                  idTeste='Escala de Traços de Personalidade para Crianças'
                  valor='Escala de Traços de Personalidade para Crianças'
                />
                <SubTestesContent
                  idTeste='Figuras Complexas de Rey'
                  valor='Figuras Complexas de Rey'
                />
                <SubTestesContent
                  idTeste='R-2 - Raven para crianças'
                  valor='R-2 - Raven para crianças'
                />
                <SubTestesContent idTeste='SON R' valor='SON R' />
                <SubTestesContent
                  idTeste='Teste de Memória de Reconhecimento - TEM-R'
                  valor='Teste de Memória de Reconhecimento - TEM-R'
                />
                <SubTestesContent
                  idTeste='Teste não verbal de Inteligência Geral - BETA III'
                  valor='Teste não verbal de Inteligência Geral - BETA III'
                />
                <SubTestesContent idTeste='WAIS' valor='WAIS' />
                <SubTestesContent idTeste='WASI' valor='WASI' />
                <SubTestesContent idTeste='WISC 4' valor='WISC 4' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Psicopatologia'
            friendlytitle='psicopatologia'
            cogarea='Psicopatologia'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent
                  idTeste='Manual do Inventário de Sintomas de Stress para Adultos de Lipp - ISSL'
                  valor='Manual do Inventário de Sintomas de Stress para Adultos de Lipp - ISSL'
                />
                <SubTestesContent idTeste='PERFIL SENSORIAL' valor='PERFIL SENSORIAL' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Percepção Visual e memória'
            friendlytitle='percepcaoVisualeMemoria'
            cogarea='Percepção Visual e memória'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent
                  idTeste='Figuras Complexas de Rey'
                  valor='Figuras Complexas de Rey'
                />
                <SubTestesContent idTeste='Neupsilin' valor='Neupsilin' />
                <SubTestesContent
                  idTeste='Teste Gestaltico Visomotor de Bender'
                  valor='Teste Gestaltico Visomotor de Bender'
                />
                <SubTestesContent idTeste='RAVLT' valor='RAVLT' />
              </div>
            }
          />
          <CreateAccordionElement
            icon='bi bi-book-fill fs-2'
            title='Habilidades sociais'
            friendlytitle='habilidadesSociais'
            cogarea='Habilidades sociais'
            content={
              <div className='card shadow-sm parent-hover'>
                <SubTestesContent
                  idTeste='Inventário de habilidades sociais'
                  valor='Inventário de habilidades sociais'
                />
                <SubTestesContent
                  idTeste='Sistema Multimídia de habilidades sociais de crianças'
                  valor='Sistema Multimídia de habilidades sociais de crianças'
                />
                <SubTestesContent
                  idTeste='SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças'
                  valor='SSRS - Inventário de Habilidades Sociais, Problemas de Comportamento e Competência Acadêmica para Crianças'
                />
              </div>
            }
          />
        </div>
      </div>
      <div className='separator my-10'></div>
      <TestesSelecionados selectedItems={[]} valor='asdx' handleConfigureTest={SubTestesContent}/>
    </div>
  )
}
export {Passo7}
