import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Teste {
  id: string;
  nome: string;
  subtestes: Subteste[];
}

interface Subteste {
  id: string;
  nome: string;
  resultado: number;
}

const initialState: Teste[] = [
  // inicialize com qualquer estado inicial necessário
];

const testesSlice = createSlice({
  name: 'testes',
  initialState,
  reducers: {
    // defina quaisquer reducers necessários aqui
  },
});

export const { /* exporte quaisquer ações necessárias aqui */ } = testesSlice.actions;

export default testesSlice.reducer;