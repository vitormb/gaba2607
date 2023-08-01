import React from 'react';
import { Subteste as SubtesteType } from './subtestesSlice';

const Subteste: React.FC<{ subteste: SubtesteType }> = ({ subteste }) => {
  return <div>{subteste.nome}</div>;
};

export default Subteste;
