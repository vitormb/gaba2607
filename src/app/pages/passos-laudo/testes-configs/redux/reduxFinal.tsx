import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CategoriasList from './categorias/CategoriasList'
import TestesList from './testes/testesList'
import {SubtestesModal} from './subtestes/subtestesModal'
import {initializeCategorias} from './categorias/categoriasSlice'
import {initializeTestes, selectTeste} from './testes/testesSlice'
import {initializeSubtestes, updateSubteste} from './subtestes/subtestesSlice'
import {RootState} from './store'
import {initialData} from './data/initialData'

function TestesScreen() {
  const dispatch = useDispatch()

  const selectedTesteId = useSelector((state: RootState) => state.testes.selectedTesteId)
  const testes = useSelector((state: RootState) => state.testes.testes)

  useEffect(() => {
    dispatch(initializeCategorias(initialData.categorias));
    dispatch(initializeTestes(initialData.testes));
    initialData.subtestes.forEach((subteste) => {
      dispatch(initializeSubtestes(subteste));
    });
  }, [dispatch]);

  const handleModalClose = () => {
    dispatch(selectTeste(null))
  }

  const handleSubtesteUpdate = (subtesteId: string, newScore: number) => {
    dispatch(updateSubteste({id: subtesteId, changes: {resultado: newScore}}))
  }

  return (
    <div>
      <h1>Categorias</h1>
      <CategoriasList />
      {selectedTesteId && (
        <SubtestesModal
          testeId={selectedTesteId}
          onClose={handleModalClose}
          onSubtesteUpdate={handleSubtesteUpdate}
        />
      )}
    </div>
  )
}

export default TestesScreen
