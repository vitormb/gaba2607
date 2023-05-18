import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';

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
    nomeCompleto: Yup.string().required().label('Nome completo'),
    dataNascimento: Yup.date().required().label('Data de nascimento'),
    genero: Yup.string().required().label('Gênero'),
    escolaridade: Yup.string().required().label('Escolaridade'),
    segmento: Yup.string().required().label('Segmento'),
    lateralidade: Yup.string().required().label('Lateralidade'),    
  }),  
  Yup.object().shape({    
    enderecos: Yup.array().of(
      Yup.object().shape({
        cep: Yup.string().required('O CEP é obrigatório'),
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
        telefone: Yup.string().required('O telefone é obrigatório'),
        isWhatsapp: Yup.string().required('É whatsapp?'),
      })
    ),
  }),   
  Yup.object().shape({        
    responsaveis: Yup.array().of(
      Yup.object().shape({
        nome: Yup.string().required('O nome do responsável é obrigatório'),
        genero: Yup.string().oneOf(["masculino", "feminino", "outro"], "selecione o gênero do responsável")
        .required("escolha uma das opções acima"),
        telefone: Yup.string().required('O telefone do responsável é obrigatório'),
        observacao: Yup.string(),
      })
    ),
  }),   
  Yup.object().shape({})
]

const inits: ICreatePaciente = {
  id: '',
  nomeCompleto: 'Vitor Mantovani',
  dataNascimento: '1989-11-11',
  genero: 'masculino',
  escolaridade: 'medio',
  segmento: 'seg',
  profissao: 'prof',
  ocupacao: 'ocu',
  lateralidade: 'later',
  organizacao: 'orga',
  email: 'vitor@vitor.com.br',
  cidadeNascimento: 'cidadeNascimento',
  estadoNascimento: 'EstadoNasci',
  paisNascimento: 'Pais Nasc',
  enderecos: [
    {
      cidade: '',
      cep: '35170111',
      estado: '',
      endereco: '',
      bairro: '',
      complemento: ''
    }
  ],
  telefones: [
    {
      telefone: '31986544321',
      isWhatsapp: false,
    }
  ],
  responsaveis: [
    {
      id: '1',
      nome: 'Katia',
      genero: 'Feminino',
      isWhatsapp: false,
      telefone: '319865512',
      observacao: 'obs'
    }
  ]
};


export { createPacienteSchemas, inits }
