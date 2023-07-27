import * as Yup from 'yup'

export interface CreateTesteProperties {
  nomeDoTeste: string,
  descricao: string,
  faixaEtariaRecomendada: string,
  subtestesItens: string,
  pontuacao: string,
  normas: string,
  interpretacao: string,
  limitacoesNotasCautela: string,
  referencias: string,
  administracao: string,
  tempoDeAplicacao: string,
  versoesAtualizacoes: string
  toggle: false,
  checked: [],
}

const wizModalcreateTesteSchemas = [
  Yup.object({
    
  }),
  Yup.object({
    
  }),
  Yup.object({
    
  })  
]

const inits: CreateTesteProperties = {
  nomeDoTeste: 'string',
  descricao: 'string',
  faixaEtariaRecomendada: 'string',
  subtestesItens: 'string',
  pontuacao: 'string',
  normas: 'string',
  interpretacao: 'string',
  limitacoesNotasCautela: 'string',
  referencias: 'string',
  administracao: 'string',
  tempoDeAplicacao: 'string',
  versoesAtualizacoes: 'string',
  toggle: false,
  checked: [],
}

export {wizModalcreateTesteSchemas, inits}