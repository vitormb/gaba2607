import React, { createContext, useContext, useState } from 'react';

type Paciente = {
  id: number;
  nome: string;
  idade: number;
  genero: string;
  nomeCompleto: string; // adicionar propriedade
  dataNascimento: string; // adicionar propriedade
};

type PacienteContextType = {
  selectedData: Paciente | null;
  setSelectedData: (data: Paciente | null) => void;
};

export const PacienteContext = createContext<PacienteContextType | undefined>(undefined);

export const usePacienteContext = (): PacienteContextType => {
  const context = useContext(PacienteContext);
  if (!context) {
    throw new Error('usePacienteContext must be used within a PacienteContextProvider');
  }
  return context;
};

export const PacienteContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedData, setSelectedData] = useState<Paciente | null>(null);

  return (
    <PacienteContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </PacienteContext.Provider>
  );
};