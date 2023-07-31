import React, {FC, useState} from 'react'
let indexteste = 1

type ValorType = {
  nomeDoSubTeste: string
  friendlyTitle: string
  descricao: string
  faixaEtariaRecomendada: string
  pontuacao: number
  pontuacaoBase: number
  normas: string
  interpretacao: string
  indices: string
}

interface SubTestesProps {
  valor: ValorType // Use o tipo ValorType aqui
  idTeste: string
  selectedItems: ValorType[] // Use o tipo ValorType aqui
  setSelectedItems: (items: ValorType[]) => void // Use o tipo ValorType aqui
  handleConfigureTest: (item: ValorType) => void // Use o tipo ValorType aqui
}

export const SubTestesContent: FC<SubTestesProps> = ({
  valor,
  idTeste,
  selectedItems,
  setSelectedItems,
  handleConfigureTest,
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedSubtests, setSelectedSubtests] = useState([])
  const handleCheckboxChange = (valor: ValorType) => {
    // Use o tipo ValorType aqui
    setIsChecked(!isChecked)
    if (selectedItems.includes(valor)) {
      setSelectedItems(selectedItems.filter((item) => item !== valor))
    } else {
      setSelectedItems([...selectedItems, valor])
    }
  }
  return (
    <div
      className='col border-gray-200 border-bottom'
      data-bs-toggle='tooltip'
      data-bs-html='true'
      title={valor.nomeDoSubTeste} // Use uma propriedade específica do objeto valor
    >
      <label
        className='d-flex flex-stack py-6 px-10 cursor-pointer bg-hover-light-secondary'
        htmlFor={valor.friendlyTitle} // Use uma propriedade específica do objeto valor
      >
        <span className='d-flex align-items-center me-2'>
          <span className='symbol symbol-50px me-6'>
            <span className='symbol-label bg-light-primary'>
              <i className='bi bi-clipboard2-fill fs-1 text-primary'></i>
            </span>
          </span>
          <span className='d-flex flex-column'>
            <span className='fw-bold fs-6'>{valor.nomeDoSubTeste}</span> // Use uma propriedade
            específica do objeto valor
            <span className='fs-7 text-muted'></span>
          </span>
        </span>
        <span className='form-check form-check-custom form-check-solid'>
          <input
            type='checkbox'
            id={valor.friendlyTitle} // Use uma propriedade específica do objeto valor
            checked={isChecked}
            onChange={() => handleCheckboxChange(valor)}
          />
        </span>
      </label>
    </div>
  )
  //console.log('Prop final:', ProPFinal);
}
