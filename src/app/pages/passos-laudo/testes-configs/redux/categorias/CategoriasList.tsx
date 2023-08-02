// CategoriasList.tsx
import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import TestesList from '../testes/testesList'
import {CategoriaAccordionElement} from '../categorias/CategoriaAccordionElement'

const CategoriasList: React.FC = () => {
  const categorias = useSelector((state: RootState) => state.categorias.categorias)

  return (
    <div className='row justify-content-start'>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {categorias.map((categoria) => (
          <CategoriaAccordionElement
            key={categoria.id}
            friendlytitle={categoria.nome}
            icon=''
            title={categoria.nome}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoriasList
