import React, {FC, useState} from 'react'
import {TestesSelecionados} from '../teste-base/TestesSelecionados'
import {SubTestesContent} from '../teste-base/SubTestesContent'

export const TestesWizard: React.FC = (PropFinal) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([])
  const valorIC = valor  
  const isChecked = selectedItems.includes(valor)  
  const handleConfigureTest = (item: any) => {
    //console.log(item);
  }  
  const ProPFinal = {
    nomeDoTeste: valorIC,
  }
  const handleCheckboxChange = (valor: any) => {
    if (selectedItems.includes(valor)) {
      setSelectedItems(selectedItems.filter((item) => item !== valor))
      console.log('Estes foram os selecionados: ', selectedItems)
    } else {
      setSelectedItems([...selectedItems, valor])
    }
  }
  return (
    <div>
      <TestesSelecionados />
      <SubTestesContent valor='aa' idTeste='bbb' />
    </div>
  )
}
