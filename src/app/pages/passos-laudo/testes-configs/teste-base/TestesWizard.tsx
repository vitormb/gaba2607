import React, {FC, useState} from 'react'
import {TestesSelecionados} from '../teste-base/TestesSelecionados'
import {SubTestesContent} from '../teste-base/SubTestesContent'

export const TestesWizard: React.FC = (PropFinal) => {
    const [selectedItems, setSelectedItems] = useState<any[]>([])
  const handleConfigureTest = (item: any) => {
    //console.log(item);
  }
  let valor = ''
  const valorIC = valor
  return (
    <div>
      <TestesSelecionados
        selectedItems={selectedItems}
        handleConfigureTest={handleConfigureTest}
        valor='teste'
      />
    </div>
  )
}
