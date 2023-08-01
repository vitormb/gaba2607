import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Teste {
  id: string;
  nome: string;
  subtestes: string[]; // IDs dos subtestes
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
  },
});

export const { addTeste } = testesSlice.actions;

export default testesSlice.reducer;
