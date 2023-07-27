import React, { FC, useState, useEffect, useRef } from 'react';
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers';
import ModalComWizardForm from '../testes-wizard/wizard-base'

export interface TestesProps {    
    nomeDoTeste: string,
    friendlytitle: string,
    descricao: string,
    faixaEtariaRecomendada: string,    
    pontuacao: string,
    normas: string,
    interpretacao: string,
    idModal: number,
    referencias: string,
    administracao: string,
    tempoDeAplicacao: string,
    versoesAtualizacoes: string;
  }
  
export const ModalBase: React.FC<TestesProps> = ({
    nomeDoTeste,    
    friendlytitle,
    descricao,
    faixaEtariaRecomendada,
    pontuacao,
    normas,
    interpretacao,
    idModal,
    referencias,
    administracao,
    tempoDeAplicacao,
    versoesAtualizacoes
  }) => {    
    const [informacoes, setInformacoes] = useState('');
    const baseModalTitle = 'Modal';
    var baseModalID = friendlytitle;    
    const baseModalContent = 'contentmodal';

    const handleDadosModal = (dados: TestesProps) => {
        // Faça o processamento dos dados recebidos aqui
        console.log(dados);      
      } 

    return (         
        <div className='modalholder'>
            {/*
            <div className="card-footer">            
             <button type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={'#'+baseModalID}
                onClick={() => handleDadosModal({
                    nomeDoTeste,
                    friendlytitle,
                    descricao,
                    faixaEtariaRecomendada,
                    pontuacao,
                    normas,
                    interpretacao,
                    idModal,
                    referencias,
                    administracao,
                    tempoDeAplicacao,
                    versoesAtualizacoes
                    })}
                >
                Configurar
            </button>               
            </div>
             */}
            <div className="modal bg-white fade" tabIndex={-1} id={baseModalID}>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content shadow-none">
                        <div className="modal-header">
                            <h5 className="modal-title">{nomeDoTeste}</h5>
                            <div
                                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <KTSVG
                                    path="/media/icons/duotune/arrows/arr061.svg"
                                    className="svg-icon svg-icon-2x"
                                />
                            </div>
                        </div>
                        <div className="modal-body">
                            {descricao}
                            <ModalComWizardForm/>
                        </div>
                        <div className="modal-footer">                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default ModalBase;