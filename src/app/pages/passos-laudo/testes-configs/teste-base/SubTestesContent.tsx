import React, {FC, useState} from 'react'
let indexteste = 1
interface SubTestesProps {
  valor: any
  idTeste: string
}
export const SubTestesContent: FC<SubTestesProps> = ({valor, idTeste}) => {
  const [isChecked, setIsChecked] = useState(false) // defina isChecked como estado
  const [selectedItems, setSelectedItems] = useState<any[]>([])
  const handleCheckboxChange = (valor: any) => {
    setIsChecked(!isChecked);
    if (selectedItems.includes(valor)) {      
      setSelectedItems(selectedItems.filter((item) => item !== valor))
      console.log('Estes foram os selecionados: ', [...selectedItems, valor])
    } else {
      setSelectedItems([...selectedItems, valor])
    }
  }
  return (
    <div
      className='col border-gray-200 border-bottom'
      data-bs-toggle='tooltip'
      data-bs-html='true'
      title='xxx'
    >
      <label
        className='d-flex flex-stack py-6 px-10 cursor-pointer bg-hover-light-secondary'
        htmlFor={valor}
      >
        <span className='d-flex align-items-center me-2'>
          <span className='symbol symbol-50px me-6'>
            <span className='symbol-label bg-light-primary'>
              <i className='bi bi-clipboard2-fill fs-1 text-primary'></i>
            </span>
          </span>
          <span className='d-flex flex-column'>
            <span className='fw-bold fs-6'>{valor}</span>
            <span className='fs-7 text-muted'></span>
          </span>
        </span>
        <span className='form-check form-check-custom form-check-solid'>
          <input
            type='checkbox'
            id={valor}
            checked={isChecked}
            onChange={() => handleCheckboxChange(valor)}
          />
        </span>
      </label>
    </div>
  )
  //console.log('Prop final:', ProPFinal);
}