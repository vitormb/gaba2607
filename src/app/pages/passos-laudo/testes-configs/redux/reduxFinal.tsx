import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CategoriasList from './categorias/CategoriasList'
import {SelectedTestsList} from './testes/testesComponente'
import {SubtestesModal} from './subtestes/subtestesModal'
import {initializeCategorias} from './categorias/categoriasSlice'
import {initializeTestes, Teste,  selectTeste} from './testes/testesSlice'
import {initializeSubtestes, updateSubteste} from './subtestes/subtestesSlice'
import {RootState} from './store'
import {initialData} from './data/initialData'

function TestesScreen() {
  const dispatch = useDispatch()

  const [selectedTeste, setSelectedTeste] = useState<Teste | null>(null)
  const testes = useSelector((state: RootState) => state.testes.testes)

  useEffect(() => {
    dispatch(initializeCategorias(initialData.categorias))
    dispatch(initializeTestes(initialData.testes))
    dispatch(initializeSubtestes(initialData.subtestes))
  }, [dispatch])

  const handleModalClose = () => {
    setSelectedTeste(null)
  }

  const handleSubtesteUpdate = (subtesteId: string, newScore: number) => {
    dispatch(updateSubteste({id: subtesteId, changes: {resultado: newScore}}))
  }

  return (
    <div>
      <h1>Categorias</h1>
      <CategoriasList onTesteSelect={setSelectedTeste} />
      <SelectedTestsList />
      {selectedTeste && (
        <SubtestesModal
           testeId={selectedTeste.id}
          onClose={handleModalClose}
          onSubtesteUpdate={handleSubtesteUpdate}
        />
      )}
    </div>
  )
}

export default TestesScreen
