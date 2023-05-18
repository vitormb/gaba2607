import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormBase, Enderecos } from "./CadastroModels";
import { Link } from "react-router-dom";

interface FormEnderecoProps {
    index: number;
    endereco: Enderecos;
    onRemove: (index: number) => void;
    onChange: (index: number, endereco: Enderecos) => void;
}

function FormEndereco({ index, endereco, onRemove, onChange }: FormEnderecoProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        onChange(index, { ...endereco, [name]: value });
    };
    return (
        
        <div className="row mb-3">
            <div className="col-12">
                <h5 className="mb-3">Endereço {index + 1}</h5>
            </div>
            <div className="col-4">
                <label className="my-3">CEP</label>
                <input
                    className="form-control form-control-solid"
                    type="text"
                    placeholder="CEP"
                    name={`enderecos.${index}.cep`}
                    value={endereco.cep}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-4">
                <label className="my-3">Endereço</label>
                <input
                    className="form-control form-control-solid"
                    type="text"
                    placeholder="Endereço"
                    name={`enderecos.${index}.endereco`}
                    value={endereco.endereco}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-4">
                <button className="btn btn-danger mt-4" type="button" onClick={() => onRemove(index)}>
                    Remover
                </button>
            </div>
        </div>
    );
}

export default function FormCadastroPaciente() {
    const [enderecos, setEnderecos] = useState<Enderecos[]>([]);
    const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm<FormBase>();

    const handleAddEndereco = () => {
        setEnderecos([...enderecos, { cep: "", cidade: "", estado: "", endereco: "", bairro: "", complemento: "" }]);
    };

    const handleRemoveEndereco = (index: number) => {
        setEnderecos(enderecos.filter((_, i) => i !== index));
    };
    const handleChangeEndereco = (index: number, endereco: Enderecos) => {
        setEnderecos([
            ...enderecos.slice(0, index),
            endereco,
            ...enderecos.slice(index + 1)
        ]);
    };


    const onSubmit = async (data: FormBase) => {
        console.log(data);
        const response = await fetch('http://127.0.0.1:3333/pacientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log('Resposta do servidor:', response);
    };


    return (
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10 col-4">
                <label className="my-3 required">Nome completo:</label>
                <input
                    className="form-control form-control-solid"
                    type="text"
                    required
                    placeholder="Nome completo"
                    {...register('nomeCompleto', { required: true, maxLength: 80 })}
                />
            </div>

            <div className="mb-10 col-2">
                <label className="my-3 required">Data de Nascimento:</label>
                <input
                    className="form-control form-control-solid"
                    type="date"
                    required
                    placeholder="Data de nascimento"
                    {...register("dataNascimento", { required: true })}
                />
            </div>
            <div className="mb-10 col-2">
                <label className="my-3 required">Gênero:</label>
                <select required placeholder='Selecione' className="form-select form-select-solid" {...register("genero", { required: true })}>
                    <option value="">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>
            </div>
            <div className="mb-10 col-2">
                <label className="my-3 required">Lateralidade</label>
                <select required className="form-select form-select-solid" {...register("lateralidade", { required: true })}>
                    <option value="">Selecione</option>
                    <option value="Destro">Destro</option>
                    <option value="Canhoto">Canhoto</option>
                </select>
            </div>
            <div className="mb-10 col-2">
                <label className="my-3 required">Escolaridade:</label>
                <input
                    className="form-control form-control-solid"
                    type="text"
                    required
                    placeholder="Escolaridade"
                    {...register("escolaridade", {})}
                />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3 required">Escola / Instituição:</label>
                <input
                    className="form-control form-control-solid"
                    type="text"
                    required
                    placeholder="Organização"
                    {...register("organizacao", { maxLength: 80 })}
                />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Segmento:</label>
                <select className="form-select form-select-solid" {...register("segmento")}>
                    <option value="">Selecione</option>
                    <option value="Público">Público</option>
                    <option value="Privado">Privado</option>
                </select>
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Profissão</label>
                <input className="form-control form-control-solid" type="text" placeholder="Profissão" {...register("profissao", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Ocupação</label>
                <input className="form-control form-control-solid" type="text" placeholder="Ocupação" {...register("ocupacao", {})} />
            </div>

            <div className="separator my-10"></div>

            {/* endereco  */}

            <h2 className='col-12'>Endereço e contato:</h2>
            {enderecos.map((_, i) => (
                
                    <FormEndereco
                    key={i}
                    index={i}
                    endereco={enderecos[i]}
                    onRemove={handleRemoveEndereco}
                    onChange={handleChangeEndereco}
                    />
            ))}
                <div className="col-12">
                    
                    <button type="button" className="btn btn-sm btn-primary my-2" onClick={() => handleAddEndereco()}>Adicionar Endereço</button>                    
                </div>

            <div className="mb-10 col-3">
                <label className="my-3 required">CEP:</label>
                <input className="form-control form-control-solid" type="text" placeholder="Endereço" {...register(`enderecos`, {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Cidade</label>
                <input className="form-control form-control-solid" type="text" placeholder="Endereço" {...register("enderecos", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Bairro</label>
                <input className="form-control form-control-solid" type="text" placeholder="Bairro" {...register("enderecos", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Estado</label>
                <input className="form-control form-control-solid" type="text" placeholder="Estado" {...register("enderecos", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Endereço</label>
                <input className="form-control form-control-solid" type="text" placeholder="Endereço" {...register("enderecos", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Complemento</label>
                <input className="form-control form-control-solid" type="text" placeholder="Complemento" {...register("enderecos", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">E-mail</label>
                <input className="form-control form-control-solid" type="text" placeholder="E-mail" {...register("enderecos", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Telefone</label>
                <input className="form-control form-control-solid" type="text" placeholder="Telefone" {...register("enderecos", {})} />
            </div>

            {/* Cidade nascimento  */}
            <div className="mb-10 col-3">
                <label className="my-3">Cidade de nascimento</label>
                <input className="form-control form-control-solid" type="text" placeholder="Cidade de nascimento" {...register("telefones", {})} />
            </div>

            <div className="mb-10 col-3">
                <label className="my-3">Estado de nascimento</label>
                <input className="form-control form-control-solid" type="text" placeholder="Estado de nascimento" {...register("estadoNascimento", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">País de nascimento</label>
                <input className="form-control form-control-solid" type="text" placeholder="País de nascimento" {...register("paisNascimento", {})} />
            </div>

            {/* Responsáveis legais  */}
            <div className="separator my-10"></div>
            <h2 className='col-12'>Dados dos responsáveis legais:</h2>
            <div className="mb-10 col-3">
                <label className="my-3">Nome 1º responsável legal</label>
                <input className="form-control form-control-solid" type="text" placeholder="Nome 1º responsável legal" {...register("responsaveis", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Gênero 1º responsável legal</label>
                <input className="form-control form-control-solid" type="text" placeholder="Gênero 1º responsável legal" {...register("responsaveis", {})} />
            </div>
            <div className="mb-10 col-6">
                <label className="my-3">Observação 1º responsável legal</label>
                <input className="form-control form-control-solid" type="text" placeholder="Observação 1º responsável legal" {...register("responsaveis", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Nome 2º responsável legal</label>
                <input className="form-control form-control-solid" type="text" placeholder="Nome 2º responsável legal" {...register("responsaveis", {})} />
            </div>
            <div className="mb-10 col-3">
                <label className="my-3">Gênero 2º responsável legal</label>
                <input className="form-control form-control-solid" type="text" placeholder="Gênero 2º responsável legal" {...register("responsaveis", {})} />
            </div>
            <div className="mb-10 col-6">
                <label className="my-3">Observação 2º responsável legal</label>
                <input className="form-control form-control-solid" type="text" placeholder="Observação 2º responsável legal" {...register("responsaveis", {})} />
            </div>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <button className='btn btn-primary' type="submit">Cadastrar</button>
            </div>
        </form>
    );
}

export function CadastroPaciente() {
    return (
        <div className="card shadow-sm">
            <div className="card-header bg-primary">
                <h3 className="card-title text-white fs-2x bg-primary"><i className="bi bi-person-fill-add text-white fs-2x me-2"></i>Adicionar paciente</h3>
                <div className="card-toolbar">
                    <Link
                        to='/'
                        className='btn btn-sm btn-light'>
                        Retornar
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className=''>
                    <FormCadastroPaciente />
                </div>
            </div>

        </div>
    )
}