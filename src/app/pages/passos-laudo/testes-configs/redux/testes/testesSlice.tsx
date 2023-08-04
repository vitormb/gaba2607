import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Subteste {
  id: string;
  nome: string;
  descricao: string;
  resultado: number;
}

export interface Teste {
  id: string;
  nome: string;
  subtestes: Subteste[];
}

export interface TestesState {
  testes: Teste[];
  selectedTesteId: string | null;
}

const initialState: TestesState = {
  testes: [],
  selectedTesteId: null,
};

const testesSlice = createSlice({
  name: 'testes',
  initialState,
  reducers: {
    initializeTestes(state, action: PayloadAction<Teste[]>) {
      state.testes = action.payload;
    },
    selectTeste(state, action: PayloadAction<string | null>) {
      state.selectedTesteId = action.payload;
    },
    addTeste(state, action: PayloadAction<Teste>) {
      state.testes.push(action.payload);
    },
    updateTeste(state, action: PayloadAction<{ id: string; changes: Partial<Teste> }>) {
      const { id, changes } = action.payload;
      const teste = state.testes.find((teste) => teste.id === id);
      if (teste) {
        Object.assign(teste, changes);
      }
    },
  },
});

export const { initializeTestes, addTeste, updateTeste, selectTeste } = testesSlice.actions;
export default testesSlice.reducer;
