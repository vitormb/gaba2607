import React, {FC, useState} from 'react'
import { TesteBase } from './baseTestes' 

interface ModalTestesSelecionadosProps {
  selectedItems: any[]
  handleConfigureTest: (item: any) => void
  valor: any // adicione valor como prop
}

export const ModalTestesSelecionados: React.FC<ModalTestesSelecionadosProps> = ({
  selectedItems,
  handleConfigureTest,
  valor,
}) => {
  return (
    <div>
      {selectedItems.map((item: any, index: any) => (
        <ul key={index}>
          <TesteBase dados={item}/>          
        </ul>
      ))}
    </div>
  )
}
