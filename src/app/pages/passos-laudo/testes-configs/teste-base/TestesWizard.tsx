import React, {FC, useState} from 'react'
import {TestesSelecionados} from '../teste-base/TestesSelecionados'
import {SubTestesContent} from '../teste-base/SubTestesContent'

export const TestesWizard: React.FC = (PropFinal) => {    
    const valor = PropFinal;
  return (
    <div>      
      <SubTestesContent valor='aa' idTeste='bbb' />
      <TestesSelecionados/>
    </div>
  )
}
