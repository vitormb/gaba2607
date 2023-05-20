import * as Yup from 'yup';


export interface ICreatePaciente {  
  id: string
  nomeCompleto: string
  dataNascimento: string
  genero: string
  escolaridade: string
  segmento: string
  profissao: string
  ocupacao: string
  lateralidade: string
  organizacao: string
  email: string
  cidadeNascimento: string
  estadoNascimento: string
  paisNascimento: string
  enderecos: Endereco[]
  telefones: Telefones[]
  responsaveis: Responsaveis[]
}
export interface Endereco {
  cidade: string;
  cep: string;
  estado: string;
  endereco: string;
  bairro: string;
  complemento: string;
}
export interface Telefones {
  telefone: string;
  isWhatsapp: boolean;
}
export interface Responsaveis {
  id: string;
  nome: string;
  genero: string;
  telefone: string;
  observacao: string;
  isWhatsapp: boolean;
}

export interface EnderecoCEP {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const createPacienteSchemas = [
  Yup.object({      
    nomeCompleto: Yup.string().required('Nome completo é um campo obrigatório'),
    dataNascimento: Yup.date().required('Data de nascimento é um campo obrigatório').label('Data de nascimento'),
    genero: Yup.string().required('Gênero é um campo obrigatório').label('Gênero'),
    escolaridade: Yup.string().required('Escolaridade é um campo obrigatório').label('Escolaridade'),
    segmento: Yup.string().required('Segmento é um campo obrigatório').label('Segmento'),
    lateralidade: Yup.string().required('Lateralidade é um campo obrigatório').label('Lateralidade'),    
  }),  
  Yup.object().shape({    
    enderecos: Yup.array().of(
      Yup.object().shape({
        cep: Yup.number().required('O CEP é obrigatório'),
        cidade: Yup.string().required('A cidade é obrigatória'),
        estado: Yup.string().required('O estado é obrigatório'),
        endereco: Yup.string().required('O endereço é obrigatório'),
        bairro: Yup.string().required('O bairro é obrigatório'),
        complemento: Yup.string().required('O complemento é obrigatório'),
      })
    ),
  }), 
  Yup.object().shape({    
    email: Yup.string().required().label('Email'),
    telefones: Yup.array().of(
      Yup.object().shape({
        telefone: Yup.number().required('Campo obrigatório'),
        isWhatsapp: Yup.string().required('É whatsapp?'),
      })
    ),
  }),   
  Yup.object().shape({    
    responsaveis: Yup.array().of(
      Yup.object().shape({
        nome: Yup.string().notRequired(),
        genero: Yup.string().notRequired(),
        telefone: Yup.string().notRequired(),
        observacao: Yup.string().notRequired()
      })
    )
  }),   
  Yup.object().shape({})
]

const inits: ICreatePaciente = {
  id: '',
  nomeCompleto: '',
  dataNascimento: '',
  genero: '',
  escolaridade: '',
  segmento: '',
  profissao: '',
  ocupacao: '',
  lateralidade: '',
  organizacao: '',
  email: '',
  cidadeNascimento: '',
  estadoNascimento: '',
  paisNascimento: '',
  enderecos: [
    {
      cidade: '',
      cep: '',
      estado: '',
      endereco: '',
      bairro: '',
      complemento: ''
    }
  ],
  telefones: [
    {
      telefone: '',
      isWhatsapp: false,
    }
  ],
  responsaveis: [
    {
      id: '',
      nome: '',
      genero: '',
      isWhatsapp: false,
      telefone: '',
      observacao: ''
    }
  ]
};


export { createPacienteSchemas, inits }
