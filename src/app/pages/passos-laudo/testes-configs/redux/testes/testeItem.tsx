import React, {FC, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import {Subteste} from '../subtestes/subtestesSlice'
import {Teste} from './testesSlice'
import {useDispatch} from 'react-redux'
import {addTest, removeTest} from './selectedTestsSlice'

interface TesteItemProps {
  teste: Teste
  subtesteId: string
}

const TesteItem: FC<TesteItemProps> = ({teste, subtesteId}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedSubtests, setSelectedSubtests] = useState([])
  const dispatch = useDispatch()
  const subtestes = useSelector((state: RootState) => state.subtestes)
  const subteste = subtestes.find((subteste: Subteste) => subteste.id === subtesteId)

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked) {
      dispatch(addTest(teste))
    } else {
      dispatch(removeTest(teste))
    }
    setIsChecked(!isChecked)
  }

  if (!subteste) return null
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
            <span className='fs-7 text-muted'>{teste.descricao}</span>
          </span>
        </span>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id={teste.nome}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      </label>
    </div>
  )
}

export default TesteItem