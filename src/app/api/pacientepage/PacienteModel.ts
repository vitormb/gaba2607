export interface Paciente {
  id: number;
  nomeCompleto: string;
  data_nascimento: string;
  genero: string;
  escolaridade: string;
  segmento: string;
  profissao: string;
  ocupacao: string;
  lateralidade: string;
  organizacao: string;
  email: string;
  cidade_nascimento: string;
  estado_nascimento: string;
  pais_nascimento: string;
  telefones: Telefone[];
  enderecos: Endereco[];
  responsaveis: Responsavel[];
}

interface Telefone {
  id: number;
  telefone: string;
  is_whatsapp: boolean;
  paciente_id: number;
}

interface Endereco {
  id: number;
  cep: string;
  cidade: string;
  estado: string;
  endereco: string;
  bairro: string;
  complemento: string;
  paciente_id: number;
}

interface Responsavel {
  id: number;
  nome: string;
  genero: string;
  telefone: string;
  is_whatsapp: boolean;
  observacao: string;
  paciente_id: number;
}