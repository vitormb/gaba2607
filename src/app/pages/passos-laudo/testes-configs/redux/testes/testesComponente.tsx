import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import {Teste} from '../testes/testesSlice'
import {Subteste} from '../subtestes/subtestesSlice'
import Modal from 'react-bootstrap/Modal'
import {TesteBase} from './baseTestes'
import {initialData} from '../data/initialData'

let dadosExemplo = {
  nomeDoSubTeste: ['SubTeste1', 'SubTeste2'],
  friendlyTitle: ['Titulo1', 'Titulo2'],
  descricao: ['Descricao1', 'Descricao2'],
  faixaEtariaRecomendada: ['18-25', '26-35'],
  pontuacao: [90, 85],
  pontuacaoBase: [100, 95],
  normas: ['Norma1', 'Norma2'],
  interpretacao: ['Interpretacao1', 'Interpretacao2'],
  indices: ['Indice1', 'Indice2'],
}

function prepareDataForTesteBase(testeId: string): typeof dadosExemplo {
  const teste = initialData.testes.find((t: Teste) => t.id === testeId)
  if (!teste) {
    // Handle the case where teste is not found, e.g., return or throw an error
    throw new Error('Teste não encontrado')
  }

  const subtestes: Subteste[] = initialData.subtestes.filter(
    (st: Subteste) => st.testeId === testeId
  )

  // Mapeie os subtestes para a estrutura esperada pelo componente TesteBase
  const dados = {
    nomeDoSubTeste: subtestes.map((subteste) => subteste.nome),
    friendlyTitle: subtestes.map((subteste) => subteste.nome), 
    descricao: subtestes.map((subteste) => subteste.descricao),
    faixaEtariaRecomendada: subtestes.map(() => '18-25'), 
    pontuacao: subtestes.map((subteste) => subteste.resultado),
    pontuacaoBase: subtestes.map(() => 10), 
    normas: subtestes.map(() => 'Norma1'), 
    interpretacao: subtestes.map(() => 'Interpretacao1'),
    indices: subtestes.map((subteste) => subteste.id),
  }

  return dados
}

export const SelectedTestsList = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentTest, setCurrentTest] = useState<Teste | null>(null)
  const selectedTests = useSelector((state: RootState) => state.selectedTests)
  const subtestes = useSelector((state: RootState) => state.subtestes)
  console.log('currentTest', currentTest);
  
  const handleOpenModal = (test: any) => {
    setCurrentTest(test)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setCurrentTest(null)
    setShowModal(false)
  }

  return (
    <div>
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
              {selectedTests.map((test: Teste) => (
                <tr key={test.id}>
                  <td className='align-middle'>{test.nome}</td>
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
                      className='btn btn-primary'
                      type='button'
                      onClick={() => handleOpenModal(test)}
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

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size='xl'
      >
        <Modal.Header closeButton>
          <Modal.Title>Subtestes de {currentTest?.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          {currentTest && <TesteBase dados={prepareDataForTesteBase(currentTest.id)} />}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={handleCloseModal}>
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SelectedTestsList
