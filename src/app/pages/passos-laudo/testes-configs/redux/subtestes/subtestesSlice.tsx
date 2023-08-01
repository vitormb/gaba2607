import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Subteste {
  id: string;
  nome: string;
  resultado: number;
  testeId: string; // Adicione esta linha
}

interface SubtestesState {
  subtestes: Subteste[];
}

const initialState: SubtestesState = {
  subtestes: [],
};

const subtestesSlice = createSlice({
  name: 'subtestes',
  initialState,
  reducers: {
    addSubteste: (state, action: PayloadAction<Subteste>) => {
      state.subtestes.push(action.payload);
    },
  },
});

export const { addSubteste } = subtestesSlice.actions;

export default subtestesSlice.reducer;