import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Teste {
  id: string;
  nome: string;
  subtestes: string[]; // IDs dos subtestes
  categoriaId: string;
}

interface TestesState {
  testes: Teste[];
  selectedTestes: string[]; // IDs dos testes selecionados
}

const initialState: TestesState = {
  testes: [],
  selectedTestes: [], // inicialize selectedTestes como um array vazio
};

const testesSlice = createSlice({
  name: 'testes',
  initialState,
  reducers: {
    addTeste: (state, action: PayloadAction<Teste>) => {
      state.testes.push(action.payload);
    },
    updateTeste: (state, action: PayloadAction<{ id: string; changes: Partial<Teste> }>) => {
      const { id, changes } = action.payload;
      const teste = state.testes.find(teste => teste.id === id);
      if (teste) {
        Object.assign(teste, changes);
      }
    },
    selectTeste: (state, action: PayloadAction<string>) => {
      state.selectedTestes.push(action.payload);
    },
  },
});

export const { addTeste, updateTeste, selectTeste } = testesSlice.actions;

export default testesSlice.reducer;