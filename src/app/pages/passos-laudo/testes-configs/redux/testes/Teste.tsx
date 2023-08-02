import React from 'react';
import { useDispatch } from 'react-redux';
import { selectTeste } from './testesSlice'; // importe a ação selectTeste
import { Teste as TesteType } from './testesSlice';

interface TesteProps {
  teste: TesteType;
}

const Teste: React.FC<TesteProps> = ({ teste }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(selectTeste(teste.id)); // despache a ação selectTeste quando o checkbox é selecionado
  };

  return (
    <div>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <h3>{teste.nome}</h3>
      // ...
    </div>
  );
};