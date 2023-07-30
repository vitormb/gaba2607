import React, {FC, useState} from 'react'
import { TesteBase } from './baseTestes' 

interface ModalTestesSelecionadosProps {
  selectedItems: any[]
}

export const ModalTestesSelecionados: React.FC<ModalTestesSelecionadosProps> = ({
  selectedItems,
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
