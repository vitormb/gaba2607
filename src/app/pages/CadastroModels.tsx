export interface FormBase {
    nomeCompleto: string;
    dataNascimento: string;
    genero: string;
    escolaridade: string;
    segmento: string;
    profissao: string;
    ocupacao: string;
    lateralidade: string;
    organizacao: string;
    email: string;
    cidadeNascimento: string;
    estadoNascimento: string;
    paisNascimento: string;
    enderecos: Enderecos[];
    telefones: Telefone[];
    responsaveis: Responsavel[];
}
export interface Enderecos{
    cep: string;
    cidade: string;
    estado: string;
    endereco: string;
    bairro: string;
    complemento: string;
}    
export interface Telefone{
    telefone: string;
    isWhatsapp: boolean;    
}
export interface Responsavel{
    nome: string;
    genero: string;
    telefone: string;
    observacao: string;
}   