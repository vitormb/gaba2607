/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, useEffect } from 'react';
import { TesteBase } from '../testes/baseTestes';


const Passo8: FC = () => {
  const dados = {
    nomeDoTeste: ['Teste A', 'Teste B'],
    idModal: [1, 2],
    friendlyTitle: ['Título A', 'Título B'],
    descricao: ['Descrição A', 'Descrição B'],
    faixaEtariaRecomendada: ['10-12', '13-15'],
    pontuacao: [8, 9],
    normas: ['Norma A', 'Norma B'],
    interpretacao: ['Interpretação A', 'Interpretação B'],
    referencias: ['Referência A', 'Referência B'],
    administracao: ['Administração A', 'Administração B'],
    tempoDeAplicacao: ['30 minutos', '45 minutos'],
    versoesAtualizacoes: ['Versão 1.0', 'Versão 2.0'],
  };

  return( 
    <div className='container-flex w-100'>
      <TesteBase dados={dados} />
    </div>
  )
}

export { Passo8 }