import React, { FC, useEffect, useRef, useState } from 'react'
import { StepperComponent } from '../../../_metronic/assets/ts/components'

export function Gerais() {  
  const [skin, setSkin] = useState('loading');  
  const definirskin =
    skin === 'loading'
      ? 'bg-primary text-white'
      : skin === 'error'
      ? 'bg-danger text-white'
      : skin === 'sucesso'
      ? 'bg-success text-white'
      : 'Skin inválido';
  const definiralerta =
    skin === 'loading'
      ? 'Alerta'
      : skin === 'error'
      ? 'Erro'
      : skin === 'sucesso'
      ? 'Sucesso!'
      : 'Erro desconhecido';

  return {
    skin,
    setSkin,        
    definirskin,
    definiralerta,
  };
}
