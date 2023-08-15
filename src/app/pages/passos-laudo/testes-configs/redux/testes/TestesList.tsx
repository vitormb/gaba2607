import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import TesteItem from './testeItem'
import {Teste} from './testesSlice'
import {Subteste} from '../subtestes/subtestesSlice'

interface TestesListProps {
  categoriaId: string
  onTesteSelect?: (teste: Teste) => void
}

const TestesList: React.FC<TestesListProps> = ({categoriaId, onTesteSelect}) => {
  const testes = useSelector((state: RootState) =>
    state.testes.testes.filter((teste) => teste.categoriaId === categoriaId)
  )
  const subtestes = useSelector((state: RootState) => state.subtestes)
  return (
    <>
      {testes.map((teste) => {
        const firstSubteste = subtestes.find((subteste: Subteste) => subteste.testeId === teste.id)
        return <TesteItem key={teste.id} teste={teste} subtesteId={firstSubteste?.id || 0} />
      })}
    </>
  )
}

export default TestesList
