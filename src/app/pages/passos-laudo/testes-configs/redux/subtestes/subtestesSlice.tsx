import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Subteste {
  id: string;
  nome: string;
  resultado: number;
}

const initialState: Subteste[] = [
  // inicialize com qualquer estado inicial necessário
];

const subtestesSlice = createSlice({
  name: 'subtestes',
  initialState,
  reducers: {
    // defina quaisquer reducers necessários aqui
  },
});

export const { /* exporte quaisquer ações necessárias aqui */ } = subtestesSlice.actions;

export default subtestesSlice.reducer;
