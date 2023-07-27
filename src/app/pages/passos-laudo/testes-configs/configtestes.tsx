import React, { useState } from 'react';

interface TestesGeralProps {
    testes: any[];
  }

const TestesGeral: React.FC<TestesGeralProps> = ({ testes }) => {

  const [estadoTestes, setEstadoTestes] = useState({
    nomeDoTeste: '',
    idModal: '',
    friendlytitle: '',
    descricao: '',
    faixaEtariaRecomendada: '',
    pontuacao: '',
    normas: '',
    interpretacao: '',
    referencias: '',
    administracao: '',
    tempoDeAplicacao: '',
    versoesAtualizacoes: ''
  });
  

  return (
    <div>
      <h2>Lista de Testes</h2>
      <ul>
        <li>Nome do Teste: {estadoTestes.nomeDoTeste}</li>
        <li>ID Modal: {estadoTestes.idModal}</li>
        <li>Friendly Title: {estadoTestes.friendlytitle}</li>
        <li>Descrição: {estadoTestes.descricao}</li>
        <li>Faixa Etária Recomendada: {estadoTestes.faixaEtariaRecomendada}</li>
        <li>Pontuação: {estadoTestes.pontuacao}</li>
        <li>Normas: {estadoTestes.normas}</li>
        <li>Interpretação: {estadoTestes.interpretacao}</li>
        <li>Referências: {estadoTestes.referencias}</li>
        <li>Administração: {estadoTestes.administracao}</li>
        <li>Tempo de Aplicação: {estadoTestes.tempoDeAplicacao}</li>
        <li>Versões e Atualizações: {estadoTestes.versoesAtualizacoes}</li>
      </ul>
    </div>
    
  );
}

export default TestesGeral;
