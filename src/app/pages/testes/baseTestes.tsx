import React, { useState, useCallback } from 'react';
import { Field, ErrorMessage } from 'formik';

interface Props {
    dados: {
        nomeDoTeste: string[];
        idModal: number[];
        friendlyTitle: string[];
        descricao: string[];
        faixaEtariaRecomendada: string[];
        pontuacao: number[];
        normas: string[];
        interpretacao: string[];
        referencias: string[];
        administracao: string[];
        tempoDeAplicacao: string[];
        versoesAtualizacoes: string[];
    };
}

export function TesteBase({ dados }: Props) {
    const [showPonderado, setShowPonderado] = useState(false);
    const [showInterpretacao, setShowInterpretacao] = useState(false);
    const [showScoreZ, setShowScoreZ] = useState(false);
    const [showPontuacaoBruta, setShowPontuacaoBruta] = useState(false);

    var idSubteste = 1;

    interface TestePropValues {
        nome: string;
        descricao: string;
        friendlyname: string;
    }

    const toggleColumn = useCallback((column: string) => {
        switch (column) {
            case 'ponderado':
                setShowPonderado((prevState) => !prevState);
                break;
            case 'interpretacao':
                setShowInterpretacao((prevState) => !prevState);
                break;
            case 'scoreZ':
                setShowScoreZ((prevState) => !prevState);
                break;
            case 'pontuacaoBruta':
                setShowPontuacaoBruta((prevState) => !prevState);
                break;
            default:
                break;
        }
    }, []);

    const TestePropTR: React.FC<TestePropValues> = React.memo(({ nome, descricao, friendlyname }) => {
        return (
            <tr className="align-middle">
                <td className='col-small'>{idSubteste++}</td>
                <td className="col-2">{nome}</td>
                <td className="col-3">{descricao}</td>
                <td className="col">
                    <div className="form-floating">
                        <Field name={friendlyname + '-percentil'} type="number" className="form-control border-0" placeholder="Percentil" inputMode="numeric" />
                        <label className='text-gray-600' htmlFor={friendlyname + '-percentil'}>Percentil</label>
                    </div>
                </td>
                {showPonderado && (
                    <td className="col-1">
                        <div className="form-floating">
                            <Field
                                name={friendlyname + '-ponderado'}
                                type="input"
                                className="form-control border-0"
                                placeholder="Ponderado"
                                inputMode="numeric"
                            />
                            <label className='text-gray-600' htmlFor={friendlyname + '-ponderado'}>Ponderado</label>
                        </div>
                    </td>
                )}
                {showInterpretacao && (
                    <td className="col">
                        <div className="form-floating">
                            <Field
                                as="select"
                                name={friendlyname + '-qualitativa'}
                                className="form-control border-0"
                                placeholder="Int. Qualitativa">
                                <option value="">Selecione</option>
                                <option value="Confiança Social Alta">Confiança Social Alta</option>
                                <option value="Confiança Social Moderada">Confiança Social Moderada</option>
                                <option value="Confiança Social Baixa">Confiança Social Baixa</option>
                                <option value="Confiança Social Prejudicada">Confiança Social Prejudicada</option>
                            </Field>
                            <label className='text-gray-600' htmlFor={friendlyname + '-qualitativa'}>Qualitativa</label>
                        </div>
                    </td>
                )}
                {showScoreZ && (
                    <td className="col-1">
                        <div className="form-floating">
                            <Field name={friendlyname + '-scoreZ'} type="number" className="form-control border-0" placeholder="Score-Z" inputMode="numeric" />
                            <label className='text-gray-600' htmlFor={friendlyname + '-scoreZ'}>Score-Z</label>
                        </div>
                    </td>
                )}
                {showPontuacaoBruta && (
                    <td className="col-1">
                        <div className="form-floating">
                            <Field
                                name={friendlyname + '-ptbruta'}
                                type="number"
                                className="form-control border-0"
                                placeholder="Pontuação Bruta"
                                inputMode="numeric"
                            />
                            <label className='text-gray-600' htmlFor={friendlyname + '-ptbruta'}>Pt. Bruta</label>
                        </div>
                    </td>
                )}
            </tr>
        )
    });

    return (
        <div className="table-responsive w-100">

            <div className='py-5'>
                <button type='button' className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${showPonderado ? 'btn-light-danger btn-outline-danger' : 'btn-outline-primary btn-active-light-primary'}`} onClick={() => toggleColumn('ponderado')}>
                    {showPonderado ? 'Remover média ponderada' : 'Adicionar média ponderada'}
                </button>
                <button type='button' className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${showInterpretacao ? 'btn-light-danger btn-outline-danger' : 'btn-outline-primary btn-active-light-primary'}`} onClick={() => toggleColumn('interpretacao')}>
                    {showInterpretacao
                        ? 'Remover interpretação qualitativa'
                        : 'Adicionar interpretação qualitativa'}
                </button>
                <button type='button' className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${showScoreZ ? 'btn-light-danger btn-outline-danger' : 'btn-outline-primary btn-active-light-primary'}`} onClick={() => toggleColumn('scoreZ')}>
                    {showScoreZ ? 'Remover Score-Z' : 'Adicionar Score-Z'}
                </button>
                <button type='button' className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${showPontuacaoBruta ? 'btn-light-danger btn-outline-danger' : 'btn-outline-primary btn-active-light-primary'}`} onClick={() => toggleColumn('pontuacaoBruta')}>
                    {showPontuacaoBruta ? 'Remover pontuação Bruta' : 'Adicionar pontuação Bruta'}
                </button>
            </div>
            <table className="table table-striped table-bordered rounded-1 gx-5">
                <thead>
                    <tr className="align-middle bg-primary">
                        <th className="col-1">ID</th>
                        <th className="col-3">Nome do processo</th>
                        <th className="col-4">Descrição</th>
                        <th className="col-1">Percentil</th>
                        {showPonderado && <th className="col">Ponderado</th>}
                        {showInterpretacao && <th className="col">Interpretação qualitativa</th>}
                        {showScoreZ && <th className="col">Score-Z</th>}
                        {showPontuacaoBruta && <th className="col">Pontuação Bruta</th>}
                    </tr>
                </thead>
                <tbody>
                    {dados.nomeDoTeste.map((nome, index) => (
                        <TestePropTR
                            key={index}
                            nome={nome}
                            descricao={dados.descricao[index]}
                            friendlyname={dados.friendlyTitle[index]}
                        />
                    ))}
                    <TestePropTR
                        nome='Processos alfabéticos'
                        descricao='Pontuação da fase fonêmica no CONFIAS'
                        friendlyname='processosAlfabeticos'
                    />
                    <TestePropTR
                        nome='Processos pré-silábicos'
                        descricao='Pontuação fase fonêmica'
                        friendlyname='processosPreSilabicos'
                    />
                    <TestePropTR
                        nome='Processos silábicos-alfabéticos'
                        descricao='Pontuação fase fonêmica do CONFIAS'
                        friendlyname='processosSilabicosAlfabeticos'
                    />
                    <TestePropTR
                        nome='Processos silábicos'
                        descricao='Pontuação fase fonêmica no CONFIAS'
                        friendlyname='processosSilabicos'
                    />
                    <TestePropTR
                        nome='Processos pré-silábicos'
                        descricao='Pontuação fase silábica'
                        friendlyname='pontuacaoFonemicaConfias'
                    />
                    <TestePropTR
                        nome='Processos silábicos'
                        descricao='Pontuação fase silábica CONFIAS'
                        friendlyname='pontuacaoFaseSilabicaConfias'
                    />
                    <TestePropTR
                        nome='Processos alfabéticos'
                        descricao='Pontuação fase silábica do CONFIAS'
                        friendlyname='pontuacaoSilabica'
                    />
                    <TestePropTR
                        nome='Processos silábicos-alfabéticos'
                        descricao='Pontuação fase silábica no CONFIAS'
                        friendlyname='pontuacaoFaseSilabicaNoConfias'
                    />
                    <TestePropTR
                        nome='Processos silábicos'
                        descricao='Pontuação total - CONFIAS'
                        friendlyname='pontuacaoTotalConfias'
                    />
                    <TestePropTR
                        nome='Processos silábicos-alfabéticos'
                        descricao='Pontuação total no CONFIAS'
                        friendlyname='pontuacaoTotalConfias2'
                    />
                    <TestePropTR
                        nome='Processos alfabéticos'
                        descricao='Pontuação total para o CONFIAS'
                        friendlyname='pontuacaoTotalConfias3'
                    />
                </tbody>
            </table>
        </div>
    );
}
