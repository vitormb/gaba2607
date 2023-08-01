import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Subteste as SubtesteType } from './subtestesSlice';
import { updateSubteste } from './subtestesSlice';

interface SubtesteProps {
  subteste: SubtesteType;
}

const Subteste: React.FC<SubtesteProps> = ({ subteste }) => {
  const dispatch = useDispatch();
  const [resultado, setResultado] = useState(subteste.resultado.toString());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResultado(event.target.value);
  };

  const handleBlur = () => {
    dispatch(updateSubteste({ id: subteste.id, changes: { resultado: Number(resultado) } }));
  };

  return (
    <div>
      <div>Nome: {subteste.nome}</div>
      <div>
        Resultado: {resultado}
        <input type="number" value={resultado} onChange={handleInputChange} onBlur={handleBlur} />
      </div>
    </div>
  );
};
export default Subteste;
