import React, {FC, useState} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {Teste} from './testesSlice' // Importe a interface Teste do slice

interface TesteItemProps {
  teste: Teste
  subtesteId: string
}

const TesteItem: React.FC<TesteItemProps> = ({teste, subtesteId}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedSubtests, setSelectedSubtests] = useState([])

  const subtestes = useSelector((state: RootState) => state.subtestes.subtestes);
  const subteste = subtestes.find(subteste => subteste.id === subtesteId);

  const handleCheckboxChange = (teste: Teste) => {
    // Implemente a lógica do checkbox aqui
  }
  if (!subteste) return null; // Se o subteste não for encontrado, não renderize nada
  
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
