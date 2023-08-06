import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import {Teste} from '../testes/testesSlice'
import Modal from 'react-bootstrap/Modal'

export const SelectedTestsList = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentTest, setCurrentTest] = useState<Teste | null>(null)
  const selectedTests = useSelector((state: RootState) => state.selectedTests)
  const subtestes = useSelector((state: RootState) => state.subtestes)

  const handleOpenModal = (test: any) => {
    setCurrentTest(test)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setCurrentTest(null)
    setShowModal(false)
  }

  return (
    <>
      <ul>
        {selectedTests.map((test: Teste) => (
          <li key={test.id}>
            {test.nome}
            <button className='btn btn-primary' type='button' onClick={() => handleOpenModal(test)}>
              Configurar
            </button>
          </li>
        ))}
      </ul>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Subtestes de {currentTest?.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentTest?.subtestes.map((subtesteId: any) => {
            const subteste = subtestes.find((subteste) => subteste.id === subtesteId)
            return (
            <p key={subtesteId}>{subteste?.nome}</p>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={handleCloseModal}>
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SelectedTestsList
