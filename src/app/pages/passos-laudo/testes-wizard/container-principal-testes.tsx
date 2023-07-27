import React, { useState } from 'react';

interface ContainerPrincipalTestesProps {
    initialValue: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode; // Adicione essa linha
}

const ContainerPrincipalTestes: React.FC<ContainerPrincipalTestesProps> = ({ initialValue, onValueChange, children }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue);
  };

  return (
    <div>      
      <input type="text" value={value} onChange={handleChange} />
      {children}
    </div>
  );
};

export default ContainerPrincipalTestes;