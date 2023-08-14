import React, {useState, useCallback} from 'react'
import {Field, ErrorMessage} from 'formik'
import Chart from 'react-apexcharts'

export interface Props {
  dados: {
    nomeDoSubTeste: string[]
    friendlyTitle: string[]
    descricao: string[]
    faixaEtariaRecomendada: string[]
    pontuacao: number[]
    pontuacaoBase: number[]
    normas: string[]
    interpretacao: string[]
    indices: string[]
  }
}

interface TestePropValues {
  pontuacao: number
  nome: string
  descricao: string
  friendlyname: string
  indices: string
}
interface TestePropGraficoValues {
  nomes: string[]
  pontuacao: number[]
  pontuacaoBase: number[]
  indices: string[]
}

export function TesteBase({dados}: Props) {
  const [pontuacao, setPontuacao] = useState(dados.pontuacao) // Adicione um estado para a pontuação

  const [showPonderado, setShowPonderado] = useState(false)
  const [showInterpretacao, setShowInterpretacao] = useState(false)
  const [showScoreZ, setShowScoreZ] = useState(false)
  const [showPontuacaoBruta, setShowPontuacaoBruta] = useState(false)
  var idSubteste = 1

  const toggleColumn = useCallback((column: string) => {
    switch (column) {
      case 'ponderado':
        setShowPonderado((prevState) => !prevState)
        break
      case 'interpretacao':
        setShowInterpretacao((prevState) => !prevState)
        break
      case 'scoreZ':
        setShowScoreZ((prevState) => !prevState)
        break
      case 'pontuacaoBruta':
        setShowPontuacaoBruta((prevState) => !prevState)
        break
      default:
        break
    }
  }, [])
  const GraficoSegmentos: React.FC<TestePropGraficoValues> = React.memo(
    ({nomes, pontuacaoBase, indices}) => {
      const options = {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: nomes,
        },
        annotations: {
          points: dados.pontuacao.map((pontuacao: any, index: any) => ({
            x: nomes[index],
            y: pontuacao,
            marker: {
              size: 0,
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },
            },
          })),
        },
      }

      const series = [
        {
          name: 'Pontuação',
          data: dados.pontuacao,
        },
        {
          name: 'Pontuação Base',
          data: pontuacaoBase,
        },
      ]

      return (
        <div className='table-responsive vr-100'>
          <div className='col-10'>
            <h2>Gráfico de Pontuações</h2>
            <Chart options={options} series={series} type='line' width='768' />
          </div>
        </div>
      )
    }
  )
  const TestePropTR: React.FC<TestePropValues> = React.memo(
    ({nome, descricao, indices, friendlyname, pontuacao: pontuacaoInicial}) => {
      const [pontuacao, setPontuacao] = useState(pontuacaoInicial) // Adicione um estado para a pontuação
      const handlePercentilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const percentilValue = Number(event.target.value) // Converta o valor para um número
        setPontuacao(percentilValue) // Atualize a pontuação
      }
      return (
        <tr className='align-middle'>
          <td className='col-small'>{idSubteste++}</td>
          <td className='col-2'>{nome}</td>          
          <td className='col-3'>{descricao}</td>
          <td className='col bg-primary'>
            <div className='form-floating'>
              <input
                name={friendlyname + '-percentil'}
                type='number'
                value={pontuacao}
                className='form-control border-0'
                placeholder='Percentil'
                inputMode='numeric'
                onChange={handlePercentilChange} // Adicione a função handlePercentilChange aqui
              />
              <label className='text-gray-600' htmlFor={friendlyname + '-percentil'}>
                Percentil
              </label>
            </div>
          </td>
          {showPonderado && (
            <td className='col-1'>
              <div className='form-floating'>
                <Field
                  name={friendlyname + '-ponderado'}
                  type='input'
                  className='form-control border-0'
                  placeholder='Ponderado'
                  inputMode='numeric'
                />
                <label className='text-gray-600' htmlFor={friendlyname + '-ponderado'}>
                  Ponderado
                </label>
              </div>
            </td>
          )}
          {showInterpretacao && (
            <td className='col'>
              <div className='form-floating'>
                <Field
                  as='select'
                  name={friendlyname + '-qualitativa'}
                  className='form-control border-0'
                  placeholder='Int. Qualitativa'
                >
                  <option value=''>Selecione</option>
                  <option value='Confiança Social Alta'>Confiança Social Alta</option>
                  <option value='Confiança Social Moderada'>Confiança Social Moderada</option>
                  <option value='Confiança Social Baixa'>Confiança Social Baixa</option>
                  <option value='Confiança Social Prejudicada'>Confiança Social Prejudicada</option>
                </Field>
                <label className='text-gray-600' htmlFor={friendlyname + '-qualitativa'}>
                  Qualitativa
                </label>
              </div>
            </td>
          )}
          {showScoreZ && (
            <td className='col-1'>
              <div className='form-floating'>
                <Field
                  name={friendlyname + '-scoreZ'}
                  type='number'
                  className='form-control border-0'
                  placeholder='Score-Z'
                  inputMode='numeric'
                />
                <label className='text-gray-600' htmlFor={friendlyname + '-scoreZ'}>
                  Score-Z
                </label>
              </div>
            </td>
          )}
          {showPontuacaoBruta && (
            <td className='col-1'>
              <div className='form-floating'>
                <Field
                  name={friendlyname + '-ptbruta'}
                  type='number'
                  className='form-control border-0'
                  placeholder='Pontuação Bruta'
                  inputMode='numeric'
                />
                <label className='text-gray-600' htmlFor={friendlyname + '-ptbruta'}>
                  Pt. Bruta
                </label>
              </div>
            </td>
          )}
        </tr>
      )
    }
  )

  return (
    <div className='table-responsive w-100'>
      <div className='py-5'>
        <button
          type='button'
          className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${
            showPonderado
              ? 'btn-light-danger btn-outline-danger'
              : 'btn-outline-primary btn-active-light-primary'
          }`}
          onClick={() => toggleColumn('ponderado')}
        >
          {showPonderado ? 'Remover média ponderada' : 'Adicionar média ponderada'}
        </button>
        <button
          type='button'
          className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${
            showInterpretacao
              ? 'btn-light-danger btn-outline-danger'
              : 'btn-outline-primary btn-active-light-primary'
          }`}
          onClick={() => toggleColumn('interpretacao')}
        >
          {showInterpretacao
            ? 'Remover interpretação qualitativa'
            : 'Adicionar interpretação qualitativa'}
        </button>
        <button
          type='button'
          className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${
            showScoreZ
              ? 'btn-light-danger btn-outline-danger'
              : 'btn-outline-primary btn-active-light-primary'
          }`}
          onClick={() => toggleColumn('scoreZ')}
        >
          {showScoreZ ? 'Remover Score-Z' : 'Adicionar Score-Z'}
        </button>
        <button
          type='button'
          className={`btn btn-sm btn-outline btn-outline-dashed me-3 p-2 ${
            showPontuacaoBruta
              ? 'btn-light-danger btn-outline-danger'
              : 'btn-outline-primary btn-active-light-primary'
          }`}
          onClick={() => toggleColumn('pontuacaoBruta')}
        >
          {showPontuacaoBruta ? 'Remover pontuação Bruta' : 'Adicionar pontuação Bruta'}
        </button>
      </div>
      <table className='table table-striped table-bordered rounded-1 gx-5'>
        <thead>
          <tr className='align-middle bg-primary'>
            <th className='col-1'>ID</th>
            <th className='col-2'>Nome do processo</th>            
            <th className='col-3'>Descrição</th>
            <th className='col-1'>Percentil</th>
            {showPonderado && <th className='col'>Ponderado</th>}
            {showInterpretacao && <th className='col'>Interpretação qualitativa</th>}
            {showScoreZ && <th className='col'>Score-Z</th>}
            {showPontuacaoBruta && <th className='col'>Pontuação Bruta</th>}
          </tr>
        </thead>
        <tbody>
          {dados.nomeDoSubTeste.map((nome, index) => (
            <TestePropTR
              key={index}
              pontuacao={dados.pontuacao[index]}
              nome={nome}
              indices={dados.indices[index]}
              descricao={dados.descricao[index]}
              friendlyname={dados.friendlyTitle[index]}
            />
          ))}
        </tbody>
      </table>

      <GraficoSegmentos
        nomes={dados.nomeDoSubTeste}
        pontuacao={dados.pontuacao}
        pontuacaoBase={dados.pontuacaoBase}
        indices={dados.indices}
      />
    </div>
  )
}
