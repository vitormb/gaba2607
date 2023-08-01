import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Subteste as SubtesteType } from './subtestesSlice';
import Subteste from './Subteste';
import { updateSubteste } from './subtestesSlice';

interface SubtestesListProps {
  subtestesIds: string[];
}

const SubtestesList: React.FC<SubtestesListProps> = ({ subtestesIds }) => {
  const subtestes = useSelector((state: any) => state.subtestes.subtestes);
  const dispatch = useDispatch();

  // Estado local para armazenar os valores do formulário
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  // Manipulador de mudança para atualizar o estado local quando o valor do input é alterado
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Manipulador para atualizar o resultado do subteste na store Redux quando o formulário é enviado
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Object.entries(formValues).forEach(([subtesteId, resultado]) => {
      dispatch(updateSubteste({ id: subtesteId, changes: { resultado: Number(resultado) } }));
    });
  };
  console.log("SubTestes: ", SubtestesList); // Adicione esta linha
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {subtestesIds.map((id) => {
          const subteste = subtestes.find((subteste: SubtesteType) => subteste.id === id);
          if (!subteste) return null;

          return (
            <div key={subteste.id}>
              <Subteste subteste={subteste} />
              <input
                type="number"
                name={subteste.id}
                value={formValues[subteste.id] || ''}
                onChange={handleInputChange}
              />
            </div>
          );
        })}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default SubtestesList;