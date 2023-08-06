import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import TesteItem from './testeItem'
import { Teste } from './testesSlice'

interface TestesListProps {
  categoriaId: string;
  onTesteSelect?: (teste: Teste) => void;
}

const TestesList: React.FC<TestesListProps> = ({ categoriaId, onTesteSelect }) => {
  const testes = useSelector((state: RootState) =>
    state.testes.testes.filter((teste) => teste.categoriaId === categoriaId)
  )
  return (    
    <>
      {testes.map((teste) => (
        <TesteItem key={teste.id} teste={teste} subtesteId={teste.subtestes[0]} />
      ))}    
    </>
  )
}

export default TestesList
