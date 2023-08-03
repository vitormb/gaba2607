// TesteItem.tsx
import React, {FC, useState} from 'react'
import {Teste} from './testesSlice' // Importe a interface Teste do slice
import { Subteste } from '../subtestes/subtestesSlice';

interface TesteCheckbox {
  teste: Teste;
  subteste: Subteste;
}
interface TesteItemProps {
  teste: Teste
}

const TesteItem: React.FC<TesteCheckbox> = ({teste: teste, subteste: subteste}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedSubtests, setSelectedSubtests] = useState([])

  const handleCheckboxChange = (teste: TesteCheckbox) => {
   
  }

  return (
    <div
      className='col border-gray-200 border-bottom'
      data-bs-toggle='tooltip'
      data-bs-html='true'
      title={teste.nome}
    >
      <label
        className='d-flex flex-stack py-6 px-10 cursor-pointer bg-hover-light-secondary'
        htmlFor={teste.nome}
      >
        <span className='d-flex align-items-center me-2'>
          <span className='symbol symbol-50px me-6'>
            <span className='symbol-label bg-light-primary'>
              <i className='bi bi-clipboard2-fill fs-1 text-primary'></i>
            </span>
          </span>
          <span className='d-flex flex-column'>
            <span className='fw-bold fs-6'>{teste.nome}</span>            
            <span className='fs-7 text-muted'>{subteste.descricao}</span>
          </span>
        </span>
        <span className='form-check form-check-custom form-check-solid'>
          <input
            type='checkbox'
            id={teste.nome} 
            checked={isChecked}
            onChange={() => handleCheckboxChange}
          />
        </span>
      </label>
    </div>
  )
}

export default TesteItem
