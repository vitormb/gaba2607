import React, {FC, useState} from 'react'

interface TestesSelecionadosProps {
  selectedItems: any[]
  handleConfigureTest: (item: any) => void
  valor: any // adicione valor como prop
}

export const TestesSelecionados: React.FC<TestesSelecionadosProps> = ({
  selectedItems,
  handleConfigureTest,
  valor,
}) => {  
  return (
    <div>
      <h2 className='text-primary px-4'>Testes selecionados:</h2>
      <div className='table-responsive'>
        <table className='table table-striped gy-4 gs-4'>
          <thead>
            <tr className='fw-semibold fs-6 text-gray-700 border-bottom border-gray-200'>
              <th style={{width: '50%'}}>Nome do Teste</th>
              <th style={{width: '40%'}}>Progresso</th>
              <th style={{width: '10%'}}>Configurar</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item: any, index: any) => (
              <tr key={index}>
                <td className='align-middle'>{item}</td>
                <td className='align-middle'>
                  <div className='progress w-100px w-xl-150px w-xxl-300px h-20px bg-light-success'>
                    <div
                      className='progress-bar rounded bg-success fs-7 fw-bold'
                      role='progressbar'
                      style={{width: '0%'}}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      0%
                    </div>
                  </div>
                </td>
                <td className='align-middle text-center d-flex'>
                <button
                  data-bs-toggle="modal"
                  data-bs-target={'modal-'+valor.friendlytitle}
                  type='button'
                  className='btn btn-primary'
                  onClick={() =>
                    handleConfigureTest({
                      nomeDoTeste: item,
                      idTeste: 'ID',
                      friendlytitle: '',
                      descricao: '',
                      faixaEtariaRecomendada: '',
                      pontuacao: '10',
                      normas: '',
                      interpretacao: '',
                      referencias: '',
                      administracao: '',
                      tempoDeAplicacao: '',
                      versoesAtualizacoes: '',
                    })
                  }
                >
                    Configurar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
