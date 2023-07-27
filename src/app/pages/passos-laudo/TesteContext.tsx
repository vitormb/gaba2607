import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Create the context
interface SelectedTestesContextType {
  selectedTestes: string[];
  setSelectedTestes: Dispatch<SetStateAction<string[]>>;
}

const SelectedTestesContext = createContext<SelectedTestesContextType | undefined>(undefined);

// Create the provider for the context
interface SelectedTestesProviderProps {
  children: ReactNode;
}

const SelectedTestesProvider = ({ children }: SelectedTestesProviderProps) => {
  const [selectedTestes, setSelectedTestes] = useState<string[]>([]);

  const contextValue: SelectedTestesContextType = {
    selectedTestes,
    setSelectedTestes,
  };

  return (
    <SelectedTestesContext.Provider value={contextValue}>
      {children}
    </SelectedTestesContext.Provider>
  );
};

export { SelectedTestesContext, SelectedTestesProvider };