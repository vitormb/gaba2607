/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, useEffect } from 'react';
import { TesteBase } from '../testes/baseTestes';


const Passo8: FC = () => {
  const dados = {
    nomeDoSubTeste: ['Semelhanças', 'Vocabulário', 'Compreensão', 'Informação', 'Raciocínio com Palavras', 'Cubos', 'Conceitos Figurativos', 'Raciocínio Matricial', 'Completar Figuras', 'Dígitos', 'Sequência de Números e Letras', 'Aritmética', 'Código', 'Procurar Símbolos', 'Cancelamento'],
    friendlyTitle: ['semelhancas', 'vocabulario', 'compreensao', 'informacao', 'raciocinio_palavras', 'cubos', 'conceitos_figurativos', 'raciocinio_matricial', 'completar_figuras', 'digitos', 'sequencia_numeros_letras', 'aritmetica', 'codigo', 'procurar_simbolos', 'cancelamento'],
    descricao: ['Avalia o raciocínio verbal e a formação de conceitos', 'Avalia a expressão verbal, conhecimento de palavras e formação de conceitos', 'Avalia a compreensão dos princípios sociais', 'Avalia a memória de longo prazo e a capacidade de recuperação da informação', 'Avalia o raciocínio verbal e a formação de conceitos', 'Avalia o raciocínio visoespacial e a coordenação motora fina', 'Avalia a habilidade de categorização e raciocínio indutivo não verbal', 'Avalia o raciocínio não verbal e a capacidade de formar conceitos', 'Avalia o raciocínio visual e a percepção', 'Avalia a memória de trabalho e a atenção', 'Avalia a memória de trabalho e a atenção', 'Avalia a memória de trabalho e a habilidade matemática', 'Avalia a velocidade de processamento e a coordenação visomotora', 'Avalia a velocidade de processamento e a atenção visual', 'Avalia a velocidade de processamento, atenção seletiva e resistência à distração'],
    faixaEtariaRecomendada: ['6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16', '6-16'],
    pontuacao: [15, 18, 22, 27, 5, 13, 4, 16, 10, 11, 1, 11, 16, 19, 20],
    pontuacaoBase: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    normas: ['Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado'],
    interpretacao: ['Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado', 'Ponderado'],
    indices: ['Índice de Compreensão Verbal (ICV)', 'Índice de Compreensão Verbal (ICV)', 'Índice de Compreensão Verbal (ICV)', 'Índice de Compreensão Verbal (ICV)', 'Índice de Compreensão Verbal (ICV)', 'Índice de Organização Perceptual (IOP)', 'Índice de Organização Perceptual (IOP)', 'Índice de Organização Perceptual (IOP)', 'Índice de Organização Perceptual (IOP)', 'Índice de Memória Operacional (IMO)', 'Índice de Memória Operacional (IMO)', 'Índice de Memória Operacional (IMO)', 'Índice de Velocidade de Processamento (IVP)', 'Índice de Velocidade de Processamento (IVP)', 'Índice de Velocidade de Processamento (IVP)'],
};

  return( 
    <div className='container-flex w-100'>
      <TesteBase dados={dados} />
    </div>
  )
}

export { Passo8 }