import React from 'react';
import { useSelector } from 'react-redux';
import { Subteste as SubtesteType } from './subtestesSlice';
import Subteste from './Subteste';

interface SubtestesListProps {
  subtestesIds: string[];
}

const SubtestesList: React.FC<SubtestesListProps> = ({ subtestesIds }) => {
  const subtestes = useSelector((state: any) => state.subtestes.subtestes);

  return (
    <div>
      {subtestesIds.map((id) => {
        const subteste = subtestes.find((subteste: SubtesteType) => subteste.id === id);
        return subteste ? <Subteste key={subteste.id} subteste={subteste} /> : null;
      })}
    </div>
  );
};

export default SubtestesList;
