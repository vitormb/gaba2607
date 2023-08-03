import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import TesteItem from './testeItem'

interface TestesListProps {
  categoriaId: string
}

const TestesList: React.FC<TestesListProps> = ({categoriaId}) => {
  const testes = useSelector((state: RootState) =>
    state.testes.testes.filter((teste) => teste.categoriaId === categoriaId)
  )

  return (    
    <>
      {testes.map((teste) =>
        teste.subtestes.map((subtesteId) => (
          <TesteItem key={subtesteId} teste={teste} subtesteId={subtesteId} />
        ))
      )}    
    </>
  )
}

export default TestesList
