import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Teste {
  id: string;
  nome: string;
  subtestes: string[]; // IDs dos subtestes
  categoriaId: string;
}

interface TestesState {
  testes: Teste[];
}

const initialState: TestesState = {
  testes: [],
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
  },
});

export const { addTeste, updateTeste } = testesSlice.actions;

export default testesSlice.reducer;