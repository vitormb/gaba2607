import React, {FC, useState} from 'react';
import {TestesWizard} from '../teste-base/TestesWizard';

interface TestesSelecionadosProps {
    selectedItems: any[];
    handleConfigureTest: (item: any) => void;
    // ... outras props necessárias ...
  }
  export const TestesSelecionados: React.FC<TestesSelecionadosProps> = ({selectedItems, handleConfigureTest, /* ... outras props ... */}) => {
    
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
                      type='button'
                      className='btn btn-primary'
                      onClick={() =>
                        handleConfigureTest({
                          nomeDoTeste: item,
                          idTeste: 'ID',
                          friendlytitle: '',
                          descricao: '',
                          faixaEtariaRecomendada: '',
                          pontuacao: '',
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
        <div>
          <div
            className='col border-gray-200 border-bottom'
            data-bs-toggle='tooltip'
            data-bs-html='true'
            title='xxx'
          >
            <label
              className='d-flex flex-stack py-6 px-10 cursor-pointer bg-hover-light-secondary'
              htmlFor={valor}
            >
              <span className='d-flex align-items-center me-2'>
                <span className='symbol symbol-50px me-6'>
                  <span className='symbol-label bg-light-primary'>
                    <i className='bi bi-clipboard2-fill fs-1 text-primary'></i>
                  </span>
                </span>
                <span className='d-flex flex-column'>
                  <span className='fw-bold fs-6'>{valor}</span>
                  <span className='fs-7 text-muted'></span>
                </span>
              </span>
              <span className='form-check form-check-custom form-check-solid'>
                <input
                  type='checkbox'
                  id={valor}
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(valor)}
                />
              </span>
            </label>
          </div>
        </div>
      </div>
    )
  }